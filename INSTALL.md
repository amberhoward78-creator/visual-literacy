# Installation Guide

Visual Literacy works with every major coding assistant. Choose your method.

---

## Method 1: Clone and Copy (Recommended)

```bash
git clone https://github.com/amberhoward/visual-literacy.git
cp -r visual-literacy/skill ./.opencode/skills/visual-literacy
```

This places the skill in your project's `.opencode/skills/` directory. The AI discovers it automatically.

---

## Method 2: One-Line Install

```bash
npx visual-literacy add
```

Installs to `.opencode/skills/visual-literacy/` in the current project.

For global installation (all projects):

```bash
npx visual-literacy add --global
```

Installs to `~/.config/opencode/skills/visual-literacy/`.

---

## Method 3: MCP Server

For clients that support Model Context Protocol:

### Claude Code / OpenCode

Add to your `opencode.json`:

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

### Cursor / Windsurf

Add to your MCP configuration:

```json
{
  "mcpServers": {
    "visual-literacy": {
      "command": "npx",
      "args": ["visual-literacy-mcp"]
    }
  }
}
```

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "visual-literacy": {
      "command": "npx",
      "args": ["visual-literacy-mcp"]
    }
  }
}
```

---

## Per-Assistant Instructions

### Claude Code

Claude Code discovers skills in `.opencode/skills/`. Copy the skill directory and reference it:

```
Use the visual-literacy skill to evaluate this design.
```

### OpenCode

OpenCode discovers skills in `.opencode/skills/` and `~/.config/opencode/skills/`. Either location works.

### Cursor

Cursor supports SKILL.md files in your project. Copy the skill directory and reference it in prompts:

```
@visual-literacy critique this layout
```

### Windsurf

Windsurf supports custom skills. Copy the skill directory and reference it:

```
Using visual-literacy, score this design 0-5 across all dimensions.
```

### Cline

Cline supports SKILL.md files. Copy to your project:

```
Load the visual-literacy skill and evaluate this interface.
```

### Codex / Aider / Continue

All support markdown-based skill files. Copy the skill directory to your project and reference it in your system prompt or conversation.

### GitHub Copilot

Add the skill content to your `.github/copilot-instructions.md`:

```bash
cat .opencode/skills/visual-literacy/SKILL.md >> .github/copilot-instructions.md
```

### System Prompt (Any AI)

Copy the core principles into any system prompt:

```
You are a visual design reasoning agent. Before making any visual
decision, reason through: (1) information structure, (2) human
perception, (3) cognitive load, (4) intentional structure.

Every visual decision must be explainable in terms of how humans
perceive information. If you cannot explain why a choice helps
comprehension, it is decoration, not design.

When evaluating designs, use the 8-dimension rubric (Hierarchy,
Grouping, Rhythm, Emphasis, Flow, Balance, Completion, Restraint)
scored 0-5 each, with severity classification (P0-P3).
```

---

## Verifying Installation

After installing, test with:

```
Using the visual-literacy skill, list the 8 heuristic categories
and their core questions.
```

If the AI responds with the correct categories and questions, the skill is loaded.

---

## Updating

```bash
cd visual-literacy
git pull
cp -r skill/* .opencode/skills/visual-literacy/
```

Or for MCP:

```bash
npm update -g visual-literacy-mcp
```
