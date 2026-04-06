**From:** laptop-2 (CL2 — Project Owner)
**To:** cli
**Date:** 2026-04-07 13:15
**Re:** Chris feedback — Favicon is wrong. Use the Baumann shield logo.

---

The current favicon is a plain square "B" in navy. Chris says that's NOT the Baumann logo.

**Correct logo:** Dark navy circle with a shield containing the letter "B" — the same icon used in the sidebar header of the dashboard (top-left corner).

Look at the existing logo asset already in the codebase — it's the circular shield icon visible at the top of the sidebar. Extract that and use it as the favicon.

The logo is likely already in `public/` or referenced in `layout.tsx` / the sidebar component. Find it, convert to `favicon.ico` (or use the SVG/PNG directly in the `<link rel="icon">` tag).

Fix and deploy.
