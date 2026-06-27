# Tutorial 1: Evaluating a Document

A step-by-step guide to using Visual Literacy to critique an existing document.

---

## Scenario

You have a project report that feels "off" but you cannot name why. The text is dense, there are no clear headings, and everything seems to run together.

## Step 1: Describe the Design

Before scoring, describe what you see. Be specific.

```
The report is 4 pages of dense text with no headings. There are
bullet points in some sections but not others. The font is uniform
throughout. Spacing between paragraphs varies. There is no clear
visual hierarchy. All text appears to be the same size and weight.
```

## Step 2: Run the Perceptual Reasoning Process

Ask yourself (or the AI):

**1. What is the information structure?**
- The report has an introduction, methodology, findings, and conclusion
- The findings are the most important section
- Supporting data should be scannable

**2. How will a human perceive this?**
- The eye has no anchor — no heading stands out
- The reader must read every word to find information
- There is no clear path through the content

**3. What cognitive load am I placing on the reader?**
- High extraneous load — the reader must parse the entire document
- No chunking — paragraphs are long and unstructured
- Working memory is overloaded by the density

**4. Does the visual structure communicate intention?**
- No — all content appears equal
- Spacing does not signal relationships
- The page does not feel intentionally designed

## Step 3: Score Each Dimension

Using the evaluation rubric:

| Dimension | Score | Reasoning |
|-----------|-------|-----------|
| Hierarchy | 1 | No visual hierarchy. All text appears equally important. |
| Grouping | 1 | Some bullet points exist but sections are not clearly grouped. |
| Rhythm | 0 | No consistent spacing scale. Arbitrary values. |
| Emphasis | 0 | Nothing stands out. Reader must scan everything. |
| Flow | 1 | No clear path. Reader must search for sections. |
| Balance | 2 | Text is evenly distributed but visually monotonous. |
| Completion | 2 | The report has all sections but they are not clearly delineated. |
| Restraint | 3 | No decoration, but also no intentional design. |

**Total: 10/40 — Critical. Major redesign needed.**

## Step 4: Identify Severity

| Finding | Severity | Issue |
|---------|----------|-------|
| No hierarchy | P0 | Reader cannot identify most important information |
| No scan anchors | P1 | Reader must read every word to find content |
| No grouping | P1 | Related content appears disconnected |
| Inconsistent spacing | P2 | Reader cannot form expectations |

## Step 5: Generate Fix Recommendations

**P0: Add visual hierarchy**
- Make the title 24px bold
- Make section headings 18px bold
- Make sub-headings 14px bold
- Keep body text at 12px regular
- Rationale: The reader must identify importance without reading

**P1: Add scan anchors**
- Add a heading at each section boundary (Introduction, Methodology, Findings, Conclusion)
- Add sub-headings within the Findings section
- Bold key terms in body text
- Rationale: The reader needs landmarks for scanning

**P1: Group related content**
- Increase spacing between sections to 32px
- Decrease spacing between items within a section to 8px
- Use visual boundaries (cards or background color) for the data sections
- Rationale: Proximity signals relationship

**P2: Establish rhythm**
- Use a consistent spacing scale: 8px, 16px, 24px, 32px, 48px
- Apply inter-section spacing consistently at 32px
- Apply intra-section spacing consistently at 8px
- Rhythm: The reader must be able to form expectations

---

## Before and After

### Before
```
[4 pages of dense, uniform text with no headings]
```

### After
```
PROJECT REPORT
──────────────

INTRODUCTION                    (18px bold)
This report examines...         (12px regular, 8px below heading)

METHODOLOGY                     (18px bold)
We conducted...                 (12px regular)

FINDINGS                        (18px bold, primary section)

  Key Result 1                  (14px bold)
  Supporting data...            (12px regular)

  Key Result 2                  (14px bold)
  Supporting data...            (12px regular)

CONCLUSION                      (18px bold)
Based on these findings...      (12px regular)
```

The hierarchy is now visible without reading. The reader can scan headings to find sections. Related content is grouped. The page feels intentional.
