# Visual Literacy

> AI doesn't just need instructions. It needs teachable models of human expertise.

**Visual Literacy** is a reasoning framework that teaches AI to make visual design decisions by modelling human perceptual psychology and expert design heuristics, rather than relying on formatting instructions alone.

## The Problem

AI can generate a layout. It cannot tell you if the layout *works*. It does not notice:

- Flat hierarchy (everything looks equally important)
- Broken rhythm (spacing is arbitrary)
- Competing emphasis (multiple things scream for attention)
- Cognitive overload (too much, too dense, no rest)
- Visual noise (decoration that fights comprehension)

Existing solutions give AI checklists to follow. Visual Literacy gives AI *perception* — the ability to reason about *why* a visual structure works or fails.

## The Solution

A six-layer reasoning architecture:

```
Mental Model          → How experts perceive this domain
    ↓
Perceptual Principles → The cognitive science that explains why
    ↓
Heuristics            → Practical rules of thumb
    ↓
Conflict Resolution   → What to do when rules contradict
    ↓
Evaluation Rubric     → Structured scoring for quality
    ↓
Translation Layer     → Convert naive instructions to expert reasoning
```

This architecture is domain-agnostic. Visual literacy is the first application. The same six layers could teach AI expert cognition in architecture, medicine, education, leadership, or any field where tacit expertise resists articulation.

## Quick Start

### Install

```bash
# One-liner for any project
npx visual-literacy add
```

Or manually:

```bash
git clone https://github.com/amberhoward/visual-literacy.git
cp -r visual-literacy/skill ./your-project/.opencode/skills/visual-literacy
```

### Use

```
Using the visual-literacy skill, critique this design.
Score each dimension 0-5 and provide specific fix recommendations.
```

### See the difference

**Before (formatting):**
> "Add more white space."

**After (perceptual reasoning):**
> "The visual distance between content does not reflect the conceptual relationship between ideas. Increase inter-section spacing to 2-3x intra-section spacing to signal meaningful transitions."

## What's Inside

| Component | Purpose |
|-----------|---------|
| **SKILL.md** | The core framework — three modes, reasoning process, output requirements |
| **Perceptual Principles** | Cognitive science foundation — Gestalt, working memory, pre-attentive processing |
| **Design Heuristics** | 24 heuristics across 8 categories with priority ordering |
| **Evaluation Rubric** | Score any design 0-5 across 8 dimensions (/40 total) |
| **Heuristic Conflicts** | Resolution framework when rules contradict |
| **Formatting to Perception** | Translation dictionary — "make it bigger" → perceptual intent |
| **Tutorials** | Step-by-step guides for common design tasks |
| **MCP Server** | Expose tools via Model Context Protocol for any AI client |

## Three Modes

| Mode | Use When | What It Does |
|------|----------|-------------|
| **Design** | Creating something new | Reasons through visual decisions *before* producing output |
| **Critique** | Reviewing existing work | Diagnoses problems in terms of violated perceptual principles |
| **Translate** | Given formatting feedback | Converts "make it bigger" into the perceptual goal |

## Installation for Every Coding Assistant

### Claude Code / OpenCode / Cursor / Windsurf / Cline / Codex / Aider / Continue

All of these support `SKILL.md` files. Copy the skill directory to your project:

```bash
# Option 1: Clone and copy
git clone https://github.com/amberhoward/visual-literacy.git
cp -r visual-literacy/skill ./.opencode/skills/visual-literacy

# Option 2: One-liner
npx visual-literacy add
```

The AI will discover the skill automatically when you reference it in prompts.

### As an MCP Server

For clients that support Model Context Protocol:

```json
{
  "mcp": {
    "visual-literacy": {
      "type": "local",
      "command": ["npx", "visual-literacy-mcp"],
      "enabled": true
    }
  }
}
```

This exposes tools like `evaluate_design`, `translate_instruction`, and `score_heuristics` that any MCP-compatible client can call.

### As a System Prompt

Copy the core principles into your system prompt:

```
You are a visual design reasoning agent. Before making any visual
decision, reason through: (1) information structure, (2) human
perception, (3) cognitive load, (4) intentional structure. Every
visual decision must be explainable in terms of how humans perceive
information. If you cannot explain why a choice helps comprehension,
it is decoration, not design.
```

## Evaluation Example

```
Input: A project report with dense text, no headings, uniform spacing.

Evaluation:
  Hierarchy:    1/5 — No visual hierarchy. All text appears equally important.
  Grouping:     1/5 — Related sections are not visually connected.
  Rhythm:       0/5 — No consistent spacing scale. Arbitrary values.
  Emphasis:     0/5 — Nothing stands out. Reader must scan everything.
  Flow:         1/5 — No clear path. Reader must search for sections.
  Balance:      2/5 — Text is evenly distributed but visually monotonous.
  Completion:   2/5 — Page feels complete but not resolved.
  Restraint:    2/5 — No decoration, but also no intentional design.
  
  Total: 9/40 — Critical. Major redesign needed.

  P0: No hierarchy — reader cannot identify most important information.
  P1: No grouping — related content appears disconnected.
  P1: No scan anchors — reader must read every word to find content.
```

## The Litmus Test

> "Can I explain every spacing decision, every type choice, every grouping, and every emphasis in terms of how a human will perceive and process this information?"

If yes, the design is reasoned.
If no, it is decoration.

## Philosophy

This project began with a simple question: *How do you explain white space to AI?*

The answer turned out to be not about white space at all. It was about perception — how humans experience information before they consciously begin reading.

The same approach could be applied to any domain where experts operate on tacit knowledge:

- How architects perceive buildings
- How physicians perceive patients
- How teachers perceive learning
- How leaders perceive teams

The challenge is the same in each case: **making expert intuition teachable.**

Visual Literacy is the first chapter.

## Contributing

Contributions welcome. The six-layer architecture is domain-agnostic — if you apply it to a new domain, we want to feature it.

## License

MIT

## Credits

Created by Amber Howard. Developed in collaboration with OpenCode and ChatGPT.
