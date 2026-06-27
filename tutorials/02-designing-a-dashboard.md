# Tutorial 2: Designing a Dashboard

A step-by-step guide to using Visual Literacy proactively when creating a new design.

---

## Scenario

You are designing a dashboard that displays key metrics, charts, and recent activity. The user needs to see status at a glance and drill into details when needed.

## Step 1: Define the Information Structure

Before designing, map the information:

| Level | Content | Priority |
|-------|---------|----------|
| Primary | Status indicator (green/yellow/red) | Must be seen first |
| Secondary | Key metric numbers (revenue, users, uptime) | Must be seen within 3 seconds |
| Tertiary | Charts showing trends over time | Must be scannable |
| Quaternary | Recent activity feed | On-demand detail |

**Reading pattern:** This is a reference page, not a narrative. The F-pattern applies for scanning, but the primary status indicator should break the pattern through pre-attentive processing (color).

## Step 2: Apply Perceptual Principles

### Pre-Attentive Processing
The status indicator must be perceivable in under 250ms. Use color (green/yellow/red) and position (top-left, primary optical area). The brain detects color before conscious thought.

### Working Memory
The user should see no more than 4-5 key metrics at once. Group related metrics. Use cards or containers to create chunk boundaries.

### Gestalt — Proximity
Group metrics by category. Revenue and growth rate go together. User count and retention go together. Uptime and response time go together.

### Signal-to-Noise
Remove everything that does not serve the at-a-glance view. Navigation chrome, help text, and secondary actions should recede. The metrics must dominate.

## Step 3: Apply Heuristics

### Hierarchy
- The status indicator is the largest, most contrast-rich element
- Key metrics are the second most prominent (large numbers, bold)
- Charts are third (medium size, muted colors)
- Activity feed is fourth (smaller text, less contrast)

### Grouping
- Three metric cards side by side (revenue, users, uptime)
- Each card contains related data points
- Clear visual boundaries between cards

### Rhythm
- Consistent card sizes (equal width, equal height)
- Consistent internal padding (16px all sides)
- Consistent spacing between cards (16px)
- Consistent spacing between card row and charts below (32px)

### Emphasis
- Status indicator: full color, largest element
- Key metric numbers: large, bold, high contrast
- Chart labels: small, muted
- Everything else: minimal treatment

### Flow
- Top-left: Status indicator (primary optical area)
- Top-right: Date range selector (terminal area for Z-pattern)
- Middle: Three metric cards (horizontal scan)
- Bottom: Charts (F-pattern scan)

### Restraint
- No decorative icons unless they serve comprehension
- No gradients unless they encode data
- Minimal color palette: status colors + one neutral
- No animation unless it communicates change

## Step 4: Score the Design (Self-Evaluation)

Before finalizing, score your own design:

| Dimension | Score | Notes |
|-----------|-------|-------|
| Hierarchy | 4 | Status indicator dominates. Metrics are clear. Charts recede. |
| Grouping | 4 | Three clear cards. Internal grouping is logical. |
| Rhythm | 4 | Consistent card sizes, padding, and spacing. |
| Emphasis | 4 | Status indicator pops. Metrics are prominent. Everything else recedes. |
| Flow | 3 | Top-left to bottom-right flow. Chart section could be tighter. |
| Balance | 3 | Good horizontal balance. Vertical balance is slightly top-heavy. |
| Completion | 4 | Each card feels complete. Page feels resolved. |
| Restraint | 4 | Minimal decoration. Every element earns its space. |

**Total: 30/40 — Good. Production-ready with polish.**

### Areas to improve:
- Flow: Consider adding scan anchors (section labels) above the chart row
- Balance: The bottom half feels lighter than the top. Consider adding a summary footer.

## Step 5: Verify the Litmus Test

> "Can I explain every spacing decision, every type choice, every grouping, and every emphasis in terms of how a human will perceive and process this information?"

- Status indicator at top-left: Pre-attentive processing. The user sees status before anything else.
- Three cards in a row: Gestalt proximity. Related metrics are grouped.
- 16px padding in cards: Consistent rhythm. The reader can predict the layout.
- Large bold numbers: Hierarchy. The most important data is the most prominent.
- Muted chart labels: Signal-to-noise. Labels are available but not distracting.

Every decision is reasoned.
