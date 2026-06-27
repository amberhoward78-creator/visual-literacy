# Design Heuristics Catalog

Practical rules of thumb for visual design decisions, grounded in perceptual principles.

Each heuristic includes:
- The principle stated simply
- The perceptual reason it works
- What violates it
- How to diagnose violations

---

## Hierarchy

The eye should always know where to look first, second, and third. Hierarchy is the visual order of importance.

### H1: Attention Follows Visual Weight
The largest, boldest, most contrast-rich element attracts the eye first.

**Perceptual basis:** Pre-attentive processing. The brain detects size and contrast before conscious thought.

**Violation:** All elements same size, weight, or color. Reader must decide importance on their own.

**Diagnosis:** Squint at the design. What do you see first? Is that what *should* be seen first?

### H2: One Primary Focus Per View
Every screen, page, or section should have one dominant focal point.

**Perceptual basis:** Figure-ground. The brain needs a clear figure to organize around.

**Violation:** Multiple elements competing for equal attention. The eye bounces without landing.

**Diagnosis:** Count the elements that could be "the main thing." If more than one, hierarchy is broken.

### H3: Hierarchy Must Be Visible Without Reading
A reader should understand the information structure from layout alone, before reading a word.

**Perceptual basis:** Pre-attentive processing + Gestalt. Layout communicates structure faster than content.

**Violation:** Structure only visible through reading text. All text blocks look the same.

**Diagnosis:** Convert the design to grayscale and blur it. Can you still tell the hierarchy? If not, it depends on content, not design.

---

## Grouping

Related information should be visually connected. Unrelated information should be visually separated.

### G1: Proximity Signals Relationship
Items close together are perceived as related. Items far apart are perceived as separate.

**Perceptual basis:** Gestalt proximity.

**Violation:** Equal spacing between all items regardless of relationship. Reader must figure out groupings.

**Diagnosis:** Draw circles around groups. If the groups are not obvious without the circles, grouping is insufficient.

### G2: Similarity Signals Type
Items of the same type should share visual treatment (color, size, style).

**Perceptual basis:** Gestalt similarity.

**Violation:** Same content type styled differently across the document. Headings alternate between styles. Links look different in different sections.

**Diagnosis:** List all elements of the same type. Do they look the same? If not, consistency is broken.

### G3: Boundaries Clarify Groups
When proximity alone is insufficient, use visual boundaries (cards, borders, background color, whitespace).

**Perceptual basis:** Gestalt common region + figure-ground.

**Violation:** Dense content with no visual separation between sections. Reader must parse paragraphs to find group boundaries.

**Diagnosis:** Remove all whitespace. If the content becomes an undifferentiated wall, boundaries are needed.

---

## Rhythm

Predictable patterns reduce cognitive effort. The reader should be able to form expectations about what comes next.

### R1: Spacing Should Follow a Scale
Use a consistent spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px). Never use arbitrary values.

**Perceptual basis:** Consistency and expectation. Predictable spacing reduces decision-making.

**Violation:** Random spacing values (13px, 17px, 22px, 31px). Reader cannot form expectations.

**Diagnosis:** Measure spacing between similar elements. If values vary without reason, rhythm is broken.

### R2: Vertical Rhythm Creates Flow
Consistent vertical spacing between sections creates a reading cadence.

**Perceptual basis:** Continuity. The eye follows predictable vertical paths.

**Violation:** Spacing varies dramatically between sections. Some sections feel cramped, others feel empty.

**Diagnosis:** Measure the vertical space between consecutive sections. If it varies by more than 25%, rhythm is inconsistent.

### R3: Repetition Builds Trust
Repeated visual patterns (card layouts, callout styles, icon treatments) create familiarity.

**Perceptual basis:** Similarity + consistency. Repeated patterns reduce the cost of learning the layout.

**Violation:** Every section introduces a new visual style. Reader must re-learn the layout for each section.

**Diagnosis:** List the visual patterns used. If every section looks different, there is no repetition.

---

## Emphasis

Important information should be visually prominent. Secondary information should recede.

### E1: Contrast Creates Emphasis
The greater the visual contrast, the greater the emphasis.

**Perceptual basis:** Pre-attentive processing. High-contrast elements pop out instantly.

**Violation:** Everything is equally prominent. No element stands out.

**Diagnosis:** Squint. What pops out? Is it the most important thing? If nothing pops out, emphasis is absent.

### E2: Emphasis Requires Restraint
If everything is emphasized, nothing is. Emphasis only works when other elements are deliberately de-emphasized.

**Perceptual basis:** Figure-ground. Emphasis requires a ground to stand against.

**Violation:** Bold headers, bright colors, large text, and icons on every element simultaneously.

**Diagnosis:** Count the elements with emphasis treatments. If more than 20% of elements are emphasized, emphasis is meaningless.

### E3: Strategic Use of Whitespace
Whitespace around an element increases its prominence by isolating it.

**Perceptual basis:** Figure-ground + proximity. Isolation signals importance.

**Violation:** Cramming content into every available space. Key information surrounded by noise.

**Diagnosis:** Add whitespace around the most important element. Does it become more prominent? If yes, the element was previously lost in noise.

---

## Balance

Visual weight should be distributed intentionally. Unbalanced layouts feel unstable.

### B1: Balance Does Not Mean Symmetry
Asymmetrical balance is often more dynamic and engaging than perfect symmetry.

**Perceptual basis:** Figure-ground. The brain seeks equilibrium in visual weight, not identical mirroring.

**Violation:** Layout feels like it is tilting to one side. Heavy elements clustered in one area.

**Diagnosis:** Divide the page into quadrants. If one quadrant has significantly more visual weight than others, balance is off.

### B2: White Space Is Not Empty Space
White space is an active design element, not a void to be filled.

**Perceptual basis:** Signal-to-noise. White space separates signal from noise and provides cognitive rest.

**Violation:** Filling every pixel with content. Viewing white space as wasted space.

**Diagnosis:** If the page feels "full" rather than "complete," white space is insufficient.

---

## Completion

Every page should feel resolved, not abandoned.

### C1: The Closure Principle
The brain seeks completeness. Incomplete patterns create discomfort.

**Perceptual basis:** Gestalt closure. The brain fills in missing information to complete patterns.

**Violation:** Elements that feel like they are missing something. Incomplete sections. Content that trails off without resolution.

**Diagnosis:** Look at the bottom of the page. Does it feel finished? Or does it feel like something is missing?

### C2: Every Section Needs a Clear Beginning and End
Transitions between sections should be intentional, not accidental.

**Perceptual basis:** Continuity. The brain needs clear boundaries to separate one thought from the next.

**Violation:** Sections that blend into each other without clear separation. Content that flows without clear section breaks.

**Diagnosis:** Can you point to exactly where one section ends and the next begins? If not, boundaries are insufficient.

### C3: The Page Should Feel Complete at Any Stopping Point
If a reader stops halfway, they should still have a coherent experience, not a sense of incompletion.

**Perceptual basis:** Progressive disclosure. Each layer of depth should feel complete on its own.

**Violation:** Content that only makes sense if read in full. Critical information buried at the end.

**Diagnosis:** Read only the first half of the page. Do you have a coherent understanding, even if incomplete? If not, the structure is flawed.

---

## Flow

The eye should move through the content in a clear, intentional path.

### F1: The Path Should Be Obvious
A reader should never wonder "where do I look next?"

**Perceptual basis:** Continuity + reading patterns. The eye follows predictable paths.

**Violation:** Dead ends, unclear transitions, and layouts that force the reader to search for the next element.

**Diagnosis:** Trace the path the eye would follow. Is it a smooth path or a scavenger hunt?

### F2: Vertical Flow for Sequential Content
Content that should be read in order needs strong vertical flow.

**Perceptual basis:** Continuity + reading patterns. The natural reading direction in LTR cultures is top-to-bottom, left-to-right.

**Violation:** Content arranged in a way that breaks the natural reading sequence. Two-column layouts that force zigzag reading for sequential content.

**Diagnosis:** Would a reader naturally read this top-to-bottom? Or does the layout force unnatural eye movement?

### F3: Scannable Structure for Reference Content
Content that will be scanned needs clear scan anchors (headings, labels, visual markers).

**Perceptual basis:** F-pattern. Readers scan, not read, for reference material.

**Violation:** Dense text with no headings, labels, or visual landmarks. Reader must read every word to find what they need.

**Diagnosis:** Can a reader find the information they need in under 5 seconds? If not, scanability is insufficient.

---

## Restraint

Less is more. Every element must earn its place.

### S1: Remove Before Adding
Before adding any element, ask: does this serve comprehension? If not, remove it.

**Perceptual basis:** Signal-to-noise. Every non-essential element is noise that degrades signal.

**Violation:** Adding decorative elements, redundant text, or filler content. Treating white space as wasted space.

**Diagnosis:** Remove one element at a time. Does comprehension improve? If yes, the element was noise.

### S2: Simplicity Is Not Simplistic
Reducing complexity is not the same as reducing depth. You can present complex information simply without dumbing it down.

**Perceptual basis:** Progressive disclosure + chunking. Complexity can be managed through structure without sacrificing substance.

**Violation:** Either overwhelming the reader with raw complexity or oversimplifying until meaning is lost.

**Diagnosis:** Is the content as simple as it can be without losing meaning? If yes, it is simple. If no, it is simplistic.

### S3: Restraint in Color, Typography, and Treatment
Use the minimum number of colors, fonts, and visual treatments needed to communicate the hierarchy.

**Perceptual basis:** Consistency + signal-to-noise. Fewer variables mean fewer decisions for the reader.

**Violation:** Using 5 colors, 3 fonts, and 4 decoration styles when 2 colors, 1 font, and 2 treatments would suffice.

**Diagnosis:** List every visual variable in use. Can you reduce any without losing clarity? If yes, reduce.

---

## Heuristic Priority

When multiple heuristics conflict (which they will), use this priority:

1. **Hierarchy** — The reader must know what is most important
2. **Grouping** — The reader must know what belongs together
3. **Flow** — The reader must know where to go next
4. **Emphasis** — The reader must know what matters most
5. **Rhythm** — The reader must be able to form expectations
6. **Balance** — The layout must feel stable
7. **Completion** — The page must feel resolved
8. **Restraint** — Every element must earn its place

Hierarchy trumps restraint because an un-emphasized important item is worse than an extra element. Grouping trumps rhythm because misplaced items are worse than irregular spacing. But these are guidelines, not laws. Judgment is required.
