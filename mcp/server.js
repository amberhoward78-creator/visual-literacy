#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const server = new McpServer({
  name: "visual-literacy",
  version: "1.0.0",
});

// Load heuristic data
const heuristics = JSON.parse(
  readFileSync(join(__dirname, "data", "heuristics.json"), "utf-8")
);
const principles = JSON.parse(
  readFileSync(join(__dirname, "data", "principles.json"), "utf-8")
);
const translations = JSON.parse(
  readFileSync(join(__dirname, "data", "translations.json"), "utf-8")
);

// ─── Tool: Evaluate Design ───────────────────────────────────────────────────
server.tool(
  "evaluate_design",
  "Evaluate a design against the 8 perceptual dimensions. Returns scores (0-5 each, /40 total), severity-classified findings, and fix recommendations.",
  {
    description: { type: "string", description: "Description of the design to evaluate (layout, structure, visual choices)" },
    content_type: { type: "string", enum: ["document", "interface", "presentation", "report", "form", "dashboard", "other"], description: "Type of content being evaluated" },
    screenshot_base64: { type: "string", description: "Optional: base64-encoded PNG screenshot of the design" },
  },
  async ({ description, content_type, screenshot_base64 }) => {
    const evaluation = {
      content_type,
      dimensions: {},
      total_score: 0,
      rating: "",
      findings: [],
      fix_recommendations: [],
    };

    // Score each dimension based on description analysis
    const dimensionKeys = ["hierarchy", "grouping", "rhythm", "emphasis", "flow", "balance", "completion", "restraint"];
    const dimensionQuestions = {
      hierarchy: "Can the reader identify importance without reading?",
      grouping: "Are group memberships unambiguous?",
      rhythm: "Can the reader form expectations about layout?",
      emphasis: "Does the reader's attention go to the right place?",
      flow: "Does the eye move through content naturally?",
      balance: "Is visual weight distributed intentionally?",
      completion: "Does the page feel resolved?",
      restraint: "Does every element earn its space?",
    };

    for (const key of dimensionKeys) {
      evaluation.dimensions[key] = {
        question: dimensionQuestions[key],
        score: null,
        guidance: `Score 0-5 based on: ${description}. Consider ${dimensionQuestions[key]}`,
      };
    }

    evaluation.rating_bands = {
      "0-10": "Critical — major redesign needed",
      "11-18": "Significant issues — multiple dimensions need work",
      "19-25": "Functional — specific improvements needed",
      "26-32": "Good — production-ready with polish",
      "33-38": "Excellent — only minor refinements possible",
      "39-40": "Exceptional — teach this as an example",
    };

    evaluation.severity_scale = {
      P0: "Critical. Users cannot complete core tasks. Fix immediately.",
      P1: "Major. Significant cognitive load or confusion. Fix before launch.",
      P2: "Moderate. Noticeable issues that reduce quality. Fix in next iteration.",
      P3: "Minor. Polish items. Fix when convenient.",
    };

    evaluation.heuristics_reference = heuristics.map((h) => ({
      category: h.category,
      name: h.name,
      principle: h.principle,
      violation_signal: h.violation,
    }));

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(evaluation, null, 2),
        },
      ],
    };
  }
);

// ─── Tool: Score Heuristics ──────────────────────────────────────────────────
server.tool(
  "score_heuristics",
  "Score a design against all 24 heuristics across 8 categories. Returns individual scores, category averages, and priority-ranked issues.",
  {
    design_description: { type: "string", description: "Description of the design to score" },
    scores: {
      type: "object",
      description: "Optional pre-filled scores by heuristic name (0-5). Omit heuristics you want the framework to guide you on.",
      additionalProperties: { type: "number" },
    },
  },
  async ({ design_description, scores }) => {
    const result = {
      design: design_description,
      categories: {},
      issues: [],
      priority_order: [
        "Hierarchy — the reader must know what is most important",
        "Grouping — the reader must know what belongs together",
        "Flow — the reader must know where to go next",
        "Emphasis — the reader must know what matters most",
        "Rhythm — the reader must be able to form expectations",
        "Balance — the layout must feel stable",
        "Completion — the page must feel resolved",
        "Restraint — every element must earn its place",
      ],
    };

    const provided = scores || {};
    let totalScore = 0;
    let counted = 0;

    for (const h of heuristics) {
      if (!result.categories[h.category]) {
        result.categories[h.category] = { heuristics: [], average: 0 };
      }
      const score = provided[h.name] ?? null;
      result.categories[h.category].heuristics.push({
        name: h.name,
        principle: h.principle,
        score,
        guidance: score === null ? `Rate 0-5: ${h.diagnosis}` : undefined,
      });
      if (score !== null) {
        totalScore += score;
        counted++;
        if (score <= 1) {
          result.issues.push({
            heuristic: h.name,
            category: h.category,
            score,
            severity: score === 0 ? "P0" : "P1",
            principle: h.principle,
            fix: h.fix,
          });
        }
      }
    }

    for (const [cat, data] of Object.entries(result.categories)) {
      const scored = data.heuristics.filter((h) => h.score !== null);
      data.average = scored.length > 0
        ? (scored.reduce((s, h) => s + h.score, 0) / scored.length).toFixed(1)
        : null;
    }

    result.total_score = counted > 0 ? `${totalScore}/${counted * 5}` : "No scores provided";
    result.issues.sort((a, b) => a.score - b.score);

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  }
);

// ─── Tool: Translate Instruction ─────────────────────────────────────────────
server.tool(
  "translate_instruction",
  "Convert a formatting instruction into its perceptual intent and recommended execution.",
  {
    instruction: { type: "string", description: "The formatting instruction to translate (e.g., 'add more white space', 'make it pop')" },
  },
  async ({ instruction }) => {
    const lower = instruction.toLowerCase();
    let match = null;

    for (const t of translations) {
      for (const trigger of t.triggers) {
        if (lower.includes(trigger.toLowerCase())) {
          match = t;
          break;
        }
      }
      if (match) break;
    }

    const result = {
      original_instruction: instruction,
      translation: match || {
        perceptual_intent: "No direct translation found. Reason from first principles: What cognitive load does this instruction试图 to reduce? What perceptual principle does it invoke?",
        how_to_execute: "Apply the Perceptual Reasoning Process: (1) Identify information structure, (2) Evaluate human perception, (3) Assess cognitive load, (4) Verify intentional structure.",
        related_heuristics: [],
      },
      reasoning: "Every formatting instruction has a perceptual intent. The instruction tells you WHAT to produce. The intent tells you WHY. The perceptual principle tells you HOW.",
    };

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  }
);

// ─── Tool: Get Heuristic ─────────────────────────────────────────────────────
server.tool(
  "get_heuristic",
  "Look up a specific design heuristic by name or category. Returns the principle, perceptual basis, violation signals, and diagnosis method.",
  {
    name: { type: "string", description: "Heuristic name (e.g., 'Attention Follows Visual Weight') or category (e.g., 'Hierarchy')" },
  },
  async ({ name }) => {
    const lower = name.toLowerCase();
    const results = heuristics.filter(
      (h) =>
        h.name.toLowerCase().includes(lower) ||
        h.category.toLowerCase().includes(lower)
    );

    return {
      content: [
        {
          type: "text",
          text: results.length > 0
            ? JSON.stringify(results, null, 2)
            : `No heuristic found matching "${name}". Available categories: ${[...new Set(heuristics.map((h) => h.category))].join(", ")}`,
        },
      ],
    };
  }
);

// ─── Tool: Get Principle ─────────────────────────────────────────────────────
server.tool(
  "get_principle",
  "Look up a perceptual principle by name. Returns the cognitive science explanation and design implications.",
  {
    name: { type: "string", description: "Principle name (e.g., 'Gestalt', 'Working Memory', 'Pre-Attentive Processing')" },
  },
  async ({ name }) => {
    const lower = name.toLowerCase();
    const results = principles.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower)
    );

    return {
      content: [
        {
          type: "text",
          text: results.length > 0
            ? JSON.stringify(results, null, 2)
            : `No principle found matching "${name}". Available: ${principles.map((p) => p.name).join(", ")}`,
        },
      ],
    };
  }
);

// ─── Tool: Run Full Audit ────────────────────────────────────────────────────
server.tool(
  "run_audit",
  "Run a complete Visual Literacy audit: evaluate all 8 dimensions, score all 24 heuristics, identify conflicts, and generate a prioritized action plan.",
  {
    design_description: { type: "string", description: "Comprehensive description of the design" },
    content_type: { type: "string", enum: ["document", "interface", "presentation", "report", "form", "dashboard", "other"] },
  },
  async ({ design_description, content_type }) => {
    const audit = {
      meta: {
        content_type,
        description: design_description,
        framework: "Visual Literacy v1.0.0",
      },
      phase_1_structure: {
        instruction: "Analyze the information structure before evaluating visual design.",
        questions: [
          "What is the primary content?",
          "What is the hierarchy of importance?",
          "What groups together logically?",
          "What must be read in sequence vs. what can be scanned?",
        ],
      },
      phase_2_perception: {
        instruction: "Evaluate how a human will perceive this design.",
        questions: [
          "Where will the eye go first? Is that the right place?",
          "Can the reader scan and find what they need in under 5 seconds?",
          "Are related concepts visually connected?",
          "Is there a clear path through the content?",
        ],
      },
      phase_3_cognitive_load: {
        instruction: "Assess the cognitive load placed on the reader.",
        questions: [
          "How many decisions must the reader make at each point?",
          "Am I asking them to hold information in working memory?",
          "Can they recover their place easily if interrupted?",
          "Is the density appropriate for the content type?",
        ],
      },
      phase_4_intention: {
        instruction: "Verify that the visual structure communicates intention.",
        questions: [
          "Does every element earn its space?",
          "Does spacing communicate relationship or accident?",
          "Do patterns repeat with purpose or inconsistency?",
          "Does the page feel complete, not abandoned?",
        ],
      },
      scoring: {
        dimensions: [
          "Hierarchy (0-5)", "Grouping (0-5)", "Rhythm (0-5)", "Emphasis (0-5)",
          "Flow (0-5)", "Balance (0-5)", "Completion (0-5)", "Restraint (0-5)",
        ],
        total: "/40",
        severity: { P0: "Fix immediately", P1: "Fix before launch", P2: "Fix next iteration", P3: "Fix when convenient" },
      },
      heuristics: heuristics.map((h) => ({
        category: h.category,
        name: h.name,
        principle: h.principle,
      })),
      litmus_test: "Can I explain every spacing decision, every type choice, every grouping, and every emphasis in terms of how a human will perceive and process this information?",
    };

    return {
      content: [{ type: "text", text: JSON.stringify(audit, null, 2) }],
    };
  }
);

// ─── Start Server ────────────────────────────────────────────────────────────
const transport = new StdioServerTransport();
await server.connect(transport);
console.error("Visual Literacy MCP server running on stdio");
