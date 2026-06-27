---
name: visual-literacy
description: "Visual Literacy is a reasoning framework that teaches AI to make visual design decisions by modelling human perceptual psychology and expert design heuristics, rather than relying on formatting instructions alone. Use when designing documents, interfaces, presentations, reports, or any visual communication where the goal is comprehension, not just display."
version: 1.0.0
author: Amber Howard
license: MIT
category: design
homepage: https://github.com/amberhoward/visual-literacy
triggers:
  - "visual literacy"
  - "design heuristics"
  - "perceptual design"
  - "visual hierarchy"
  - "cognitive design"
  - "document design"
  - "layout reasoning"
  - "why does this look wrong"
  - "make this feel right"
  - "design critique"
  - "visual communication"
  - "information architecture"
  - "cognitive load"
  - "reading flow"
  - "visual grammar"
  - "evaluate this design"
  - "design review"
  - "layout feedback"
---

# Visual Literacy: Teaching AI to See Like a Designer

> AI doesn't just need instructions. It needs teachable models of human expertise.

## What This Is

Visual Literacy is a reasoning framework — not a prompt template, not a formatting guide, not a CSS utility. It teaches AI to make visual design decisions by modelling how humans perceive information.

The problem it solves: AI can generate a layout. It cannot tell you if the layout *works*. It does not notice flat hierarchy, broken rhythm, competing emphasis, or cognitive overload. This framework gives it those perceptions as explicit reasoning principles.

## The Premise

AI does not possess visual intuition. It cannot instantly recognize when a page feels balanced, crowded, unfinished, confusing, or elegant. This intuition must be translated into explicit reasoning principles.

Teaching AI visual literacy means teaching it not simply how to format information, but how humans perceive information.

The shift is from formatting to perception.

## The Core Principle

**Every visual decision should be explainable in terms of how a human will perceive and process the information.**

If you cannot explain *why* a visual choice helps a human understand, it is decoration. If you can explain it in terms of cognition, it is design.

---

## Quick Start

### 1. Copy the skill to your project

```bash
# Clone the repository
git clone https://github.com/amberhoward/visual-literacy.git

# Copy to your project's skill directory
cp -r visual-literacy/.opencode/skills/visual-literacy ./your-project/.opencode/skills/
```

### 2. Tell your AI to use it

In your prompt or system message:

```
Use the visual-literacy skill to evaluate and reason about the design of this document.
```

### 3. See the difference

**Before (formatting instruction):**
> "Make the headings bigger and add more white space."

**After (perceptual reasoning):**
> "The visual hierarchy is insufficient — the reader cannot scan and identify the information structure. The spacing between unrelated sections does not differentiate them from spacing within sections. Increase heading-body contrast. Use inter-section spacing at 2-3x intra-section spacing to signal conceptual distance."

---

## When to Use This Skill

Use this skill when:
- Creating any document, report, or presentation
- Designing interfaces or layouts
- Evaluating or critiquing existing designs
- Making decisions about spacing, hierarchy, grouping, or emphasis
- Translating a formatting instruction into a perceptual decision
- Debugging why something "feels wrong" but you cannot name why
- Running a design review or UX audit

---

## The Three Modes

### Mode 1: Design (Proactive)

When creating something new, reason through visual decisions using the heuristics before producing output. Do not wait to be asked why you chose a particular layout.

**How to use:** Ask the AI to walk through its visual reasoning *before* generating the design:

```
Before designing this page, walk through your perceptual reasoning:
1. What is the information structure?
2. How will a human perceive this?
3. What cognitive load am I placing on the reader?
4. Does the visual structure communicate intention?
Then generate the design based on that reasoning.
```

### Mode 2: Critique (Evaluative)

When reviewing existing work, diagnose problems using the perceptual framework. Name what is wrong, why it is wrong, and what cognitive principle is being violated.

**How to use:** Provide a screenshot, code, or description and ask for a structured critique:

```
Using the visual-literacy evaluation rubric, critique this design.
Score each dimension 0-5, identify severity levels, and provide
specific fix recommendations with perceptual rationale.
```

### Mode 3: Translate (Instructional)

When given a formatting instruction, translate it into the perceptual intent behind it. Then execute the perceptual goal, not the literal instruction.

**How to use:** Give a formatting instruction and ask for the translation:

```
I want to "add more white space to this page." Using the
formatting-to-perception translation guide, explain the perceptual
intent behind this instruction and then execute it correctly.
```

---

## Perceptual Reasoning Process

Before making any visual decision, run through this sequence:

### 1. What is the information structure?
- What is the primary content?
- What is the hierarchy of importance?
- What groups together logically?
- What must be read in sequence vs. what can be scanned?

### 2. How will a human perceive this?
- Where will the eye go first? Is that the right place?
- Can the reader scan and find what they need in under 5 seconds?
- Are related concepts visually connected?
- Is there a clear path through the content?

### 3. What cognitive load am I placing on the reader?
- How many decisions must the reader make at each point?
- Am I asking them to hold information in working memory?
- Can they recover their place easily if interrupted?
- Is the density appropriate for the content type?

### 4. Does the visual structure communicate intention?
- Does every element earn its space?
- Does spacing communicate relationship or accident?
- Do patterns repeat with purpose or inconsistency?
- Does the page feel complete, not abandoned?

---

## The Heuristic Framework

Eight categories, 24 heuristics, one priority system.

| Category | Count | Core Question |
|----------|-------|---------------|
| **Hierarchy** | 3 | Does the eye know where to look first? |
| **Grouping** | 3 | Are related items visually connected? |
| **Rhythm** | 3 | Can the reader form expectations? |
| **Emphasis** | 3 | Does important information stand out? |
| **Balance** | 2 | Is visual weight distributed intentionally? |
| **Completion** | 3 | Does the page feel resolved? |
| **Flow** | 3 | Is there a clear path through the content? |
| **Restraint** | 3 | Does every element earn its space? |

Consult [references/design-heuristics.md](references/design-heuristics.md) for the full catalog with perceptual rationale, violations, and diagnosis methods.

**Priority order when heuristics conflict:**
1. Hierarchy — the reader must know what is most important
2. Grouping — the reader must know what belongs together
3. Flow — the reader must know where to go next
4. Emphasis — the reader must know what matters most
5. Rhythm — the reader must be able to form expectations
6. Balance — the layout must feel stable
7. Completion — the page must feel resolved
8. Restraint — every element must earn its place

---

## Perceptual Principles

The cognitive science foundation. Not design rules — facts about how human brains process visual information.

| Principle | What It Explains |
|-----------|-----------------|
| **Gestalt** (Proximity, Similarity, Closure, Continuity, Figure-Ground, Common Region) | How the brain groups information automatically |
| **Working Memory** (Miller's 7±2, Cognitive Chunking) | How much the brain can handle at once |
| **Pre-Attentive Processing** | What the brain sees before conscious thought |
| **Reading Patterns** (F-Pattern, Z-Pattern, Gutenberg Diagram) | How the eye moves across a page |
| **Signal-to-Noise** | What the brain must filter out |
| **Progressive Disclosure** | How the brain builds understanding in layers |
| **Consistency** | How the brain forms and uses predictions |
| **Affordance** | How visual form communicates function |

Consult [references/perceptual-principles.md](references/perceptual-principles.md) for the full foundation.

---

## Evaluation Rubric

Score any design 0-5 across 8 dimensions. Total: /40.

| Dimension | What It Measures |
|-----------|-----------------|
| Hierarchy (0-5) | Can the reader identify importance without reading? |
| Grouping (0-5) | Are group memberships unambiguous? |
| Rhythm (0-5) | Can the reader form expectations about layout? |
| Emphasis (0-5) | Does the reader's attention go to the right place? |
| Flow (0-5) | Does the eye move through content naturally? |
| Balance (0-5) | Is visual weight distributed intentionally? |
| Completion (0-5) | Does the page feel resolved? |
| Restraint (0-5) | Does every element earn its space? |

| Total Score | Rating |
|-------------|--------|
| 0-10 | Critical — major redesign needed |
| 11-18 | Significant issues — multiple dimensions need work |
| 19-25 | Functional — specific improvements needed |
| 26-32 | Good — production-ready with polish |
| 33-38 | Excellent — only minor refinements possible |
| 39-40 | Exceptional — teach this as an example |

Consult [references/evaluation-rubric.md](references/evaluation-rubric.md) for scoring guidance, severity classification (P0-P3), and fix recommendations.

---

## Resolving Conflicts

When heuristics pull in opposite directions:

| Conflict | Resolution |
|----------|-----------|
| Hierarchy vs. Minimalism | Minimalism means few treatments, not no treatments. Create max hierarchy with min means. |
| Completeness vs. Whitespace | Completeness comes from structure, not density. 60% content / 40% whitespace can feel complete. |
| Consistency vs. Emphasis | Consistency is the default. Emphasis is the exception. Break it deliberately, sparingly, significantly. |
| Density vs. Rest | Alternate dense and sparse sections. Provide scan anchors for pausing. |
| Convention vs. Differentiation | Follow conventions for structure. Differentiate through content and subtle treatment. |

Consult [references/heuristic-conflicts.md](references/heuristic-conflicts.md) for the full resolution framework.

---

## Translating Formatting to Perception

| Instruction | Perceptual Intent |
|-------------|------------------|
| "Add more white space" | The visual distance does not reflect conceptual relationships. |
| "Make the headings bigger" | The hierarchy is insufficient for scanning. |
| "Break up the paragraph" | The visual chunk exceeds working memory limits. |
| "Make it pop" | The element needs more emphasis relative to its importance. |
| "Simplify this" | The cognitive load is too high for the content type. |
| "Make it more professional" | The visual signals do not match the content's authority level. |

Consult [references/formatting-to-perception.md](references/formatting-to-perception.md) for the full translation dictionary.

---

## The Architecture

This skill follows a six-layer reasoning architecture:

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

---

## Output Requirements

When using this skill, always:

1. **Name the perceptual principle** behind every visual decision
2. **Explain the cognitive effect** of layout choices
3. **Diagnose problems** in terms of violated principles, not aesthetic preferences
4. **Score designs** using the evaluation rubric when critiquing
5. **Translate instructions** from formatting to perception when asked to implement feedback

## Anti-Patterns

Never:

- Choose a layout because it "looks professional" without explaining why
- Add decorative elements that do not serve comprehension
- Treat spacing, typography, or color as arbitrary aesthetic choices
- Skip the reasoning step because "it just feels right"
- Apply heuristics mechanically without considering the specific content

## The Litmus Test

After producing any visual design, ask:

> "Can I explain every spacing decision, every type choice, every grouping, and every emphasis in terms of how a human will perceive and process this information?"

If yes, the design is reasoned.
If no, it is decoration.
