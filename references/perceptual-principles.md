# Perceptual Principles

The cognitive science foundation for visual design decisions.

These are not design rules. They are facts about how human brains process visual information. Every design heuristic derives from one or more of these principles.

---

## 1. Gestalt Principles

The brain does not see individual elements. It organizes them into groups and wholes automatically, before conscious thought.

### Proximity
Objects that are close together are perceived as a group.

**Design implication:** Place related items near each other. Use spacing to signal whether things belong together or are separate.

**Anti-pattern:** Equal spacing between all elements, regardless of relationship. This forces the reader to figure out which items belong together — an unnecessary cognitive burden.

### Similarity
Objects that look alike (same color, shape, size, orientation) are perceived as related.

**Design implication:** Use consistent visual treatments for items of the same type. Headings should always look like headings. Links should always look like links.

**Anti-pattern:** Styling the same type of content differently across a document. This breaks the reader's ability to form expectations.

### Closure
The brain fills in missing information to perceive complete shapes.

**Design implication:** You do not need to draw every border, line, or boundary. Partial cues are sufficient. This is why card layouts work with subtle shadows rather than hard borders.

### Continuity
The eye follows smooth paths rather than abrupt changes in direction.

**Design implication:** Align elements along clear axes. Use consistent margins and grid lines. The eye should travel smoothly down a page, not zigzag.

### Figure-Ground
The brain separates what is important (figure) from what is background (ground).

**Design implication:** Primary content must be visually distinct from secondary content, navigation, chrome, and whitespace. If everything is equally prominent, nothing is prominent.

### Common Region
Objects within a shared boundary are perceived as a group.

**Design implication:** Cards, containers, and bounded sections group related content. Use them to reduce the reader's effort in determining what belongs together.

---

## 2. Working Memory Limits

Humans can hold approximately 4±1 chunks of information in working memory at any time. This is the most important constraint in document design.

### Miller's Law
The average person can hold 7±2 chunks in short-term memory.

**Design implication:** Break information into groups of 4-6 items. Beyond that, provide structure (numbering, headings, visual grouping) to help the reader manage complexity.

### Cognitive Chunking
People naturally group information into chunks to manage complexity.

**Design implication:** Design for chunks. Every heading, every grouping, every visual boundary is a chunk boundary that helps the reader store and retrieve information.

### Intrinsic Load
The inherent complexity of the material. This cannot be reduced, only managed.

**Design implication:** You cannot simplify complex content, but you can present it in a way that manages the cognitive load. Progressive disclosure, clear hierarchy, and chunking reduce the *apparent* complexity even when the actual complexity remains.

### Extraneous Load
Cognitive effort wasted on figuring out the interface, layout, or presentation.

**Design implication:** This is the load you can eliminate. Confusing layouts, inconsistent formatting, unclear hierarchy, and decorative elements all add extraneous load. Every design decision should minimize it.

---

## 3. Pre-Attentive Processing

The brain processes certain visual properties in under 250 milliseconds, before conscious attention engages.

### What Is Pre-Attentitive
- Color (a red item pops out instantly)
- Size (a large element dominates)
- Orientation (a tilted element breaks the pattern)
- Spatial position (top-left draws attention first in LTR cultures)
- Contrast (a bright element against a dark background)

### What Is Not Pre-Attentitive
- Text content (requires reading)
- Meaning (requires interpretation)
- Relationships (require comparison)

**Design implication:** Use pre-attentitive properties to guide attention to the most important information. If you need the reader to notice something instantly, make it visually distinct in size, color, or position.

**Anti-pattern:** Making everything equally prominent. When everything is emphasized, nothing is, and the brain must resort to serial scanning.

---

## 4. Reading Patterns

Eye-tracking studies reveal predictable patterns in how people scan pages.

### F-Pattern (Text-Heavy Pages)
Readers scan the top, then move down the left side, occasionally darting right. The result looks like an F.

**Design implication:** Put the most important information at the top. Use strong left-side headings. Avoid burying key information in the middle or right of dense text.

### Z-Pattern (Sparse or Visual Pages)
When there is little text, the eye moves top-left → top-right → bottom-left → bottom-right.

**Design implication:** Place key information along the Z-axis: logo/brand top-left, primary action top-right, supporting info bottom-left, secondary action bottom-right.

### Gutenberg Diagram
The page divides into four quadrants. The primary optical area is top-left. The terminal area is bottom-right. Readers naturally scan from primary to terminal.

**Design implication:** Place the most important content in the primary optical area (top-left) and the call-to-action in the terminal area (bottom-right).

### Horizontal Scanning
People scan in short bursts, not continuous lines. Average fixation duration is 200-250ms.

**Design implication:** Keep lines short (50-75 characters for body text). Use headings as scan anchors. Do not force readers to read long lines.

---

## 5. Signal-to-Noise Ratio

Every element on a page is either signal (essential information) or noise (everything else).

### The Principle
The more noise, the harder it is to extract signal. The brain must filter noise before it can process signal, which costs cognitive effort.

### Application
- Remove decorative elements that do not serve comprehension
- Eliminate redundant text, repeated information, and filler
- Use whitespace to separate signal from noise
- Every element must earn its place by contributing to understanding

### The Paradox of Choice
More options do not create freedom. They create decision fatigue.

**Design implication:** Fewer choices, presented clearly, lead to better outcomes than many choices presented equally.

---

## 6. Progressive Disclosure

Show only what is needed at each stage. Reveal complexity gradually.

### The Principle
The brain cannot process all information simultaneously. It builds understanding in layers. Design for those layers.

### Application
- Lead with the most important information
- Provide detail on demand, not upfront
- Use expandable sections, summaries, and drill-downs
- Structure content so readers can stop at any depth and still have a complete understanding

### In Documents
- Executive summary → section summaries → full detail
- Headings that tell the story even if you never read the body text
- Key findings first, methodology after

---

## 7. Consistency and Expectation

The brain builds predictive models. When those models are violated, the reader must stop and re-orient.

### The Principle
Consistency reduces cognitive load because the reader can predict what comes next. Violations of consistency create surprise, which costs attention.

### Application
- Same type of content always looks the same
- Same type of action always appears in the same position
- Consistent spacing, sizing, and alignment throughout
- Rules established early must be followed throughout

### The Cost of Inconsistency
When a heading is 16px in one section and 18px in another, the reader does not consciously notice. But their brain registers that something is different, and that registration costs a microsecond of attention. Multiply that by every inconsistency, and the cognitive toll becomes significant.

---

## 8. Affordance and Legibility

Elements should look like what they are. A button should look clickable. A heading should look like a heading. A link should look like a link.

### The Principle
When visual form matches function, the reader does not have to think about how to use the interface. This is the foundation of intuitive design.

### Application
- Interactive elements must look interactive (underlines, color, hover states)
- Static elements must not look interactive (no underlined text that is not a link)
- Hierarchy must be immediately visible (size, weight, color, spacing)
- The visual grammar must be self-documenting

---

## Summary

These eight perceptual principles form the foundation of every design heuristic:

1. **Gestalt** → how the brain groups information
2. **Working memory** → how much the brain can handle at once
3. **Pre-attentive processing** → what the brain sees before thinking
4. **Reading patterns** → how the eye moves across a page
5. **Signal-to-noise** → what the brain must filter out
6. **Progressive disclosure** → how the brain builds understanding in layers
7. **Consistency** → how the brain forms and uses predictions
8. **Affordance** → how visual form communicates function

Every design decision either supports or violates these principles. A designer's job is to align visual structure with cognitive architecture.
