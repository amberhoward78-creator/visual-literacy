# Tutorial 3: Translating Formatting Feedback

A step-by-step guide to converting formatting instructions into perceptual reasoning.

---

## Scenario

A stakeholder reviews your document and says:

> "It looks okay, but can you make it feel more polished? The headings should be bigger, add some more white space, and make the key findings stand out more."

## Step 1: Parse the Instructions

The stakeholder gave three instructions:
1. "Make the headings bigger"
2. "Add some more white space"
3. "Make the key findings stand out more"

## Step 2: Translate Each Instruction

### Instruction 1: "Make the headings bigger"

**Perceptual intent:** The visual hierarchy is insufficient. The reader cannot scan and identify the information structure. Headings do not stand out enough from body text.

**Not just bigger — clearer hierarchy.** The goal is not a specific font size. The goal is that the reader can look at the page and immediately understand the information structure without reading.

**Execution:**
- Evaluate current heading-body contrast
- If headings are 14px and body is 12px, the contrast is too low
- Increase to 18px headings / 12px body, or add weight (bold), or add spacing above/below
- The method matters less than the result: hierarchy must be visible without reading

### Instruction 2: "Add some more white space"

**Perceptual intent:** The visual distance between content does not reflect the conceptual relationship between ideas. Related items may be too far apart. Unrelated items may be too close. The spacing does not communicate structure.

**Not just more space — intentional space.** The goal is not to fill the page with empty space. The goal is to make spacing proportional to conceptual distance.

**Execution:**
- Evaluate the conceptual relationships in the content
- Related items (within a section): 8-16px spacing
- Unrelated items (between sections): 32-48px spacing
- Major transitions (between chapters or major topics): 64px+ spacing
- The spacing scale should be consistent and intentional

### Instruction 3: "Make the key findings stand out more"

**Perceptual intent:** The key findings have insufficient emphasis relative to their importance. The reader's attention is not being directed to the most critical information.

**Not just highlight — strategic emphasis.** The goal is not to make everything bright and bold. The goal is to create a clear visual distinction between primary findings and supporting content.

**Execution:**
- Identify the 2-3 most important findings
- Apply emphasis treatment: larger text, bolder weight, accent color, or isolation through whitespace
- Ensure that the emphasis treatments are consistent (all key findings look the same)
- De-emphasize supporting content to make the emphasis meaningful (restraint enables emphasis)

## Step 3: Execute the Perceptual Goals

Now apply the three perceptual goals together:

### Before (following literal instructions)
```
- Headings: 16px (was 14px) ✓ bigger
- Spacing: added 8px everywhere ✓ more white space
- Key findings: yellow highlight ✓ stand out more
```

This is technically correct but perceptually wrong. The headings are bigger but not hierarchical. The spacing is more but not intentional. The findings stand out but the highlight is garish.

### After (following perceptual goals)
```
INTRODUCTION                      (18px, bold, 24px above, 8px below)
──────────────────────────────────
This section provides context...  (12px, regular, 8px between paragraphs)

KEY FINDING: Revenue grew 23%     (16px, bold, accent color, 16px above, 
                                   8px below, isolated with whitespace)
──────────────────────────────────
Supporting data shows...          (12px, regular, muted color)
```

The headings are bigger AND hierarchical. The spacing is more AND intentional. The findings stand out AND the emphasis is meaningful.

## Step 4: Verify the Translation

Ask yourself:

1. **Did I execute the perceptual goal, not the literal instruction?**
   - Headings: Yes — hierarchy is visible without reading
   - Spacing: Yes — spacing reflects conceptual relationships
   - Findings: Yes — the most important information draws attention first

2. **Can I explain every decision in terms of human perception?**
   - 18px bold headings: Pre-attentive processing — the eye detects size and weight before reading
   - 24px above / 8px below headings: Proximity — the heading is close to its content, separate from the previous section
   - Accent color on findings: Pre-attentive processing — color pops out instantly
   - Muted supporting text: Signal-to-noise — secondary content recedes

3. **Does the result serve the reader, not the instruction?**
   - The reader can scan and find the key findings in under 5 seconds
   - The hierarchy is clear without reading every word
   - The spacing communicates structure, not accident

---

## The Translation Pattern

```
Hear the instruction
    ↓
Identify the perceptual intent
    ↓
Evaluate the perceptual problem
    ↓
Choose the right solution
    ↓
Execute the perceptual goal
```

The instruction tells you WHAT to produce.
The intent tells you WHY.
The perceptual principle tells you HOW.
