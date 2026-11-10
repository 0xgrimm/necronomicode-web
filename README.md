# Necronomicode

Source code of the Necronomicode blog, built with [Astro](https://astro.build).

## Requirements

- Node.js 24 or later
- pnpm

## Commands

| Command        | Action                                         |
| -------------- | ---------------------------------------------- |
| `pnpm install` | Install dependencies                           |
| `pnpm dev`     | Start the local dev server at `localhost:4321` |
| `pnpm build`   | Build the site to `./dist/`                    |
| `pnpm preview` | Preview the build locally                      |

## Content

Entries are Markdown files in two collections. What separates them is whether the text changes over time, not its topic.

- `src/content/journal/` (Diario): entries fixed in time, such as a reflection at a given moment or a project in progress. Like a diary, once written they stay as they are.
- `src/content/notebook/` (Cuaderno): living notes worth keeping that may change, such as commands to revisit, an index that groups related articles, or a how-to for something easy to forget.

Each entry needs this frontmatter:

```yaml
---
title: Entry title
date: 2026-11-10
tags:
  - astro
---
```
