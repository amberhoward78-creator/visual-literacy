# Evaluation Rubric

A structured method for scoring design quality across perceptual dimensions.

---

## Scoring Method

Rate each dimension 0-5:

| Score | Meaning |
|-------|---------|
| 0 | Absent or actively harmful |
| 1 | Present but flawed. Major issues. |
| 2 | Functional but inconsistent. Noticeable problems. |
| 3 | Solid. Minor issues only. |
| 4 | Excellent. Rarely seen in practice. |
| 5 | Exceptional. Could be taught as an example. |

Most real interfaces score 15-28 out of 40. A score of 30+ is genuinely good.

---

## Dimensions

### 1. Hierarchy (0-5)

**Score 0:** No visual hierarchy. All elements appear equally important. Reader cannot tell what matters most.

**Score 1:** Some hierarchy attempted but inconsistent. Heading sizes vary without reason. Emphasis is unclear.

**Score 2:** Basic hierarchy exists. Main heading is larger. But secondary hierarchy (sub-sections, supporting info) is weak.

**Score 3:** Clear primary and secondary hierarchy. Reader can scan and identify importance. Minor inconsistencies.

**Score 4:** Multi-level hierarchy that is immediately visible. Every element has a clear rank. Reader can navigate without reading.

**Score 5:** Hierarchy is so clear that even without reading, the structure is obvious. A blurred version would still communicate the information architecture.

**Questions to ask:**
- Where does the eye go first? Is that the right place?
- Can I identify the hierarchy without reading the text?
- Are there elements that compete for attention when they should not?

### 2. Grouping (0-5)

**Score 0:** No visual grouping. All content appears as a single mass. Relationships between items are unclear.

**Score 1:** Some grouping attempted but inconsistent. Some items are grouped, others float.

**Score 2:** Basic grouping exists. Related items are somewhat close. But boundaries are weak and group membership is ambiguous.

**Score 3:** Clear groupings. Related items are visually connected. Unrelated items are separated. Minor inconsistencies.

**Score 4:** Strong grouping with consistent proximity and similarity signals. Group membership is unambiguous.

**Score 5:** Grouping is so clear that the structure is self-evident. A reader can identify all groups without reading content.

**Questions to ask:**
- Can I circle the groups and have them be obvious?
- Do related items share visual treatment?
- Is spacing proportional to relationship strength?

### 3. Rhythm (0-5)

**Score 0:** No consistent rhythm. Spacing is arbitrary. Layout feels chaotic.

**Score 1:** Some attempts at consistency. But spacing values vary without reason.

**Score 2:** Basic rhythm exists. Major spacing is somewhat consistent. Minor spacing is arbitrary.

**Score 3:** Consistent spacing scale used throughout. Vertical rhythm is mostly maintained. Minor breaks.

**Score 4:** Strong rhythm. Consistent scale, predictable patterns, clear cadence. Reader can form expectations.

**Score 5:** Rhythm is so consistent that the reader can predict the next element's position without looking.

**Questions to ask:**
- Does the spacing follow a consistent scale?
- Can I predict where the next section starts?
- Does the vertical flow feel smooth or jerky?

### 4. Emphasis (0-5)

**Score 0:** No emphasis. Everything is equally prominent. Reader must scan everything.

**Score 1:** Some emphasis attempted. But multiple things are emphasized, diluting the effect.

**Score 2:** One element is clearly primary. But secondary emphasis is unclear or overused.

**Score 3:** Clear primary emphasis. Secondary elements are appropriately de-emphasized. Good signal-to-noise.

**Score 4:** Emphasis is precise and effective. The reader's attention goes exactly where it should, in the right order.

**Score 5:** Emphasis is so effective that the reader absorbs the key message in under 2 seconds.

**Questions to ask:**
- What is the single most important element? Is it visually dominant?
- How many elements have emphasis treatments? If more than 20%, emphasis is diluted.
- Does whitespace support or undermine emphasis?

### 5. Flow (0-5)

**Score 0:** No clear path. Reader must search for where to go next. Dead ends and confusion.

**Score 1:** Basic flow exists. But transitions between sections are unclear. Reader sometimes loses their place.

**Score 2:** Mostly clear flow. Reader can generally follow the path. Some awkward transitions.

**Score 3:** Clear flow with smooth transitions. Reader never wonders where to look next. Good scanability.

**Score 4:** Flow is natural and effortless. The reader is guided without feeling manipulated.

**Score 5:** Flow is invisible. The reader does not notice the layout because the information is so easy to follow.

**Questions to ask:**
- Can I trace the path the eye would follow?
- Are there dead ends or places where the reader must search?
- Does the flow match the content's intended reading order?

### 6. Balance (0-5)

**Score 0:** Visually unbalanced. Layout feels tilted or weighted to one side.

**Score 1:** Somewhat balanced. But heavy elements are clustered in one area.

**Score 2:** Mostly balanced. Some asymmetry, but not distracting.

**Score 3:** Well-balanced. Visual weight is distributed intentionally. Layout feels stable.

**Score 4:** Excellent balance. Asymmetry is used dynamically. Layout feels energetic but stable.

**Score 5:** Balance is so natural that it goes unnoticed. The layout feels effortlessly stable.

**Questions to ask:**
- Does the layout feel stable or tilted?
- Is visual weight distributed across the page?
- Does white space balance content mass?

### 7. Completion (0-5)

**Score 0:** Page feels unfinished. Elements trail off. No clear ending.

**Score 1:** Mostly complete. But some sections feel incomplete or abandoned.

**Score 2:** Generally complete. Minor issues with section endings or transitions.

**Score 3:** Complete. All sections have clear beginning and end. Page feels resolved.

**Score 4:** Thoroughly complete. Every section is polished. Page feels intentionally finished.

**Score 5:** Complete in a way that feels inevitable. The page could not end anywhere else.

**Questions to ask:**
- Does the bottom of the page feel finished?
- Do all sections have clear boundaries?
- Can I stop reading at any point and have a coherent experience?

### 8. Restraint (0-5)

**Score 0:** Excessive decoration. Filler content. Visual noise overwhelms signal.

**Score 1:** Some restraint. But unnecessary elements are present. Could be simplified.

**Score 2:** Mostly restrained. A few unnecessary elements. Content is clear but not clean.

**Score 3:** Well-restrained. Every element serves a purpose. Clean and focused.

**Score 4:** Excellent restraint. Maximum clarity with minimum elements. Nothing wasted.

**Score 5:** Radical restraint. The design uses the absolute minimum and achieves maximum impact.

**Questions to ask:**
- Can I remove any element without losing comprehension?
- Is every element earning its space?
- Is the design as simple as it can be without losing meaning?

---

## Aggregate Scoring

| Total Score | Rating |
|-------------|--------|
| 0-10 | Critical. Major redesign needed. |
| 11-18 | Significant issues. Multiple dimensions need work. |
| 19-25 | Functional. Most dimensions are adequate with specific improvements needed. |
| 26-32 | Good. Minor issues across dimensions. Production-ready with polish. |
| 33-38 | Excellent. Rarely achieved. Only minor refinements possible. |
| 39-40 | Exceptional. Teach this as an example. |

---

## Severity Classification

For each finding, assign severity:

| Severity | Definition | Action |
|----------|-----------|--------|
| P0 | Critical. Users cannot complete core tasks. | Fix immediately. |
| P1 | Major. Significant cognitive load or confusion. | Fix before launch. |
| P2 | Moderate. Noticeable issues that reduce quality. | Fix in next iteration. |
| P3 | Minor. Polish items. | Fix when convenient. |
