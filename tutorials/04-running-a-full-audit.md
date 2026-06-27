# Tutorial 4: Running a Full Audit

A step-by-step guide to using the complete Visual Literacy audit workflow.

---

## Scenario

You are reviewing a complete application interface or document suite and need a comprehensive assessment.

## Step 1: Describe the Design

Provide a thorough description. Include:
- Content type (document, interface, presentation, etc.)
- Layout structure (columns, sections, flow)
- Visual treatments (colors, fonts, spacing)
- Content hierarchy (what is most important)
- User goals (what the reader needs to accomplish)

```
This is a SaaS pricing page with three tiers displayed as cards
side by side. Each card has a tier name, price, feature list, and
CTA button. There is a comparison table below the cards. The design
uses a blue accent color, 16px body text, and 24px headings. The
page background is white.
```

## Step 2: Phase 1 — Structure Analysis

Before evaluating visuals, understand the information:

| Question | Answer |
|----------|--------|
| What is the primary content? | Pricing tiers and their features |
| What is the hierarchy of importance? | 1) Price, 2) Features, 3) CTA, 4) Tier name |
| What groups together logically? | Each tier's complete information |
| What must be read sequentially? | Feature comparison (left to right) |
| What can be scanned? | Price and CTA for quick decision |

## Step 3: Phase 2 — Perception Analysis

Evaluate how a human will experience this:

| Question | Assessment |
|----------|-----------|
| Where does the eye go first? | Should go to the middle card (most popular tier). Does it? |
| Can the reader scan in 5 seconds? | Only if the hierarchy is clear. Can they see prices instantly? |
| Are related concepts connected? | Are features visually tied to their tier? |
| Is there a clear path? | Left to right comparison, then down to CTA |

## Step 4: Phase 3 — Cognitive Load Assessment

| Factor | Level | Reasoning |
|--------|-------|-----------|
| Intrinsic load | Moderate | Pricing decisions involve comparison |
| Extraneous load | Check for | Inconsistent card sizes, unclear feature grouping, competing CTAs |
| Total load | Target: Low | The design should make comparison effortless |

## Step 5: Phase 4 — Intention Verification

| Question | Assessment |
|----------|-----------|
| Does every element earn its space? | Are there decorative elements that do not serve comparison? |
| Does spacing communicate relationship? | Are features within a tier closer than features across tiers? |
| Do patterns repeat? | Are all three cards styled consistently? |
| Does the page feel complete? | Is there a clear ending after the comparison table? |

## Step 6: Score All 24 Heuristics

Score each heuristic 0-5 based on the analysis:

### Hierarchy (Category Average: ?/5)
| Heuristic | Score | Finding |
|-----------|-------|---------|
| Attention Follows Visual Weight | ? | Does the most important tier dominate? |
| One Primary Focus Per View | ? | Is there one clear "best choice"? |
| Hierarchy Visible Without Reading | ? | Can you tell the tier structure from layout? |

### Grouping (Category Average: ?/5)
| Heuristic | Score | Finding |
|-----------|-------|---------|
| Proximity Signals Relationship | ? | Are features visually tied to their tier? |
| Similarity Signals Type | ? | Do all three cards look the same structure? |
| Boundaries Clarify Groups | ? | Do card borders separate tiers clearly? |

### Rhythm (Category Average: ?/5)
| Heuristic | Score | Finding |
|-----------|-------|---------|
| Spacing Follows a Scale | ? | Is padding/margin consistent across cards? |
| Vertical Rhythm Creates Flow | ? | Does the flow from cards to table feel smooth? |
| Repetition Builds Trust | ? | Do repeated patterns create familiarity? |

*(Continue for all 8 categories)*

## Step 7: Identify Conflicts

Common conflicts in pricing pages:

**Hierarchy vs. Restraint:**
The "most popular" tier needs emphasis (hierarchy), but over-styling it creates visual noise (restraint).

*Resolution:* Use one emphasis treatment — a subtle background color or border accent — not multiple treatments (size + color + shadow + animation).

**Completeness vs. Simplicity:**
The feature comparison needs to be complete (all features listed), but too many features create cognitive overload (simplicity).

*Resolution:* Use progressive disclosure. Show 5-7 key features by default. Expand for full comparison.

## Step 8: Generate Prioritized Action Plan

| Priority | Finding | Dimension | Fix | Effort |
|----------|---------|-----------|-----|--------|
| P0 | ... | Hierarchy | ... | Quick |
| P1 | ... | Grouping | ... | Moderate |
| P2 | ... | Rhythm | ... | Quick |
| P3 | ... | Restraint | ... | Significant |

## Step 9: Final Score

Aggregate all 24 heuristic scores:

| Category | Average |
|----------|---------|
| Hierarchy | ?/5 |
| Grouping | ?/5 |
| Rhythm | ?/5 |
| Emphasis | ?/5 |
| Balance | ?/5 |
| Completion | ?/5 |
| Flow | ?/5 |
| Restraint | ?/5 |
| **Total** | **?/40** |

## Step 10: Litmus Test

> "Can I explain every spacing decision, every type choice, every grouping, and every emphasis in terms of how a human will perceive and process this information?"

If any decision cannot be explained in perceptual terms, it needs revisiting.
