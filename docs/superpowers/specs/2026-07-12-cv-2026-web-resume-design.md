# CV 2026 Web Resume Design

## Goal

Build a clean, light-themed web resume site from `/Users/dylan/Documents/Projects/doc-repo/40 - Archive/Personal/CV/CV - 2026.md`.
The site source will live in `/Users/dylan/Documents/Projects/cv-2026` and be deployable to GitHub Pages.

## Content Scope

- Use only `CV - 2026.md` as the content source.
- Publicly show the contact information exactly as written in the resume.
- Do not use `项目总结 - 2026.md` or older resume files.
- Keep the site concise rather than expanding it into a portfolio.
- Do not modify `/Users/dylan/Documents/Projects/doc-repo`.

## Recommended Approach

Use a Vite + React + TypeScript single-page static app.

Reasons:
- GitHub Pages deployment is straightforward.
- The resume can be split into small, maintainable components.
- Print/PDF styles can be controlled with CSS media queries.
- Future edits stay simple if the resume content changes.

## User Experience

Desktop:
- Light gray page background.
- A centered A4-like resume sheet with a subtle border and shadow.
- Compact top action bar with a print/export PDF command.
- Content density similar to a resume, not a landing page.

Mobile:
- Single-column layout.
- Remove fixed A4 width.
- Keep typography readable and sections easy to scan.

Print/PDF:
- Hide the action bar and page background.
- Print only the resume sheet.
- Use A4 page sizing and print-specific spacing.
- Avoid awkward page breaks inside major resume sections where possible.

## Information Architecture

Main sections:
- Header: name, summary metadata, target role, contact, location/languages.
- Personal summary.
- Skills grouped by frontend, backend, engineering, AI.
- Work experience: Shopee and Baidu.
- Education.
- Other links and self-media note.

## Implementation Shape

Project files:
- `package.json`, `pnpm-lock.yaml`, `vite.config.ts`, `tsconfig*.json`.
- `src/main.tsx`, `src/App.tsx`.
- `src/resumeData.ts` for structured resume content.
- `src/styles.css` for screen, responsive, and print styles.
- `.github/workflows/deploy.yml` for GitHub Pages deployment.
- `README.md` with local development, PDF export, and Pages deployment notes.

## Deployment

- Build command: `pnpm build`.
- Output directory: `dist`.
- GitHub Pages workflow uses `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages`.
- Vite `base` should default to `/cv-2026/` for project pages deployment.

## Validation

- Run `pnpm install` if dependencies are missing.
- Run `pnpm build`.
- Start a local dev server and inspect desktop/mobile layouts.
- Use browser print preview for PDF export behavior.

## Out of Scope

- Editing the source resume Markdown.
- Creating a complex portfolio, blog, analytics, CMS, or multilingual site.
- Adding content from nearby project summary files.
- Creating git commits unless explicitly requested.
