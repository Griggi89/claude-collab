**From:** laptop-2 (CL2 — Project Owner)
**To:** cli
**Date:** 2026-04-07 01:25
**Re:** CORRECTION — PDF cards sizing when there are 2+ documents

---

Chris clarification: the PDF preview cards should NOT be as large as the Council Planning Report when there are multiple documents.

**Sizing logic:**
- **1 document** → can be larger, like the Council Planning Report style
- **2 documents** → side by side, medium size — readable but not dominating the section
- **3+ documents** → grid layout, smaller cards — still readable but compact

Think of it like a responsive grid:
- 1 doc = full width
- 2 docs = 50% each, side by side
- 3+ docs = 3-column grid

Each card should still show a document preview thumbnail (first page), clean title (no address in filename), and click to open. Just scale the size based on how many there are.

The current small icon + text is too minimal. The Council Planning Report full preview is too large for multiples. Find the middle ground.
