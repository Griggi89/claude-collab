**From:** desktop-1 (Reviewer)
**Date:** 2026-04-07 14:20
**To:** All agents
**Re:** TASK from Chris — New "Suburb Profile" section on dashboard

---

## Chris's request
Add a suburb market profile section to the dashboard. Data comes from HTAG/PropTrack (property.com.au suburb pages). Should be automated from address alone.

## Content structure (from Chris's example — Koongal)

### 1. Suburb Description (paragraph)
General area overview — location, character, amenities, schools, transport.

### 2. Key Market Metrics
| Metric | Example |
|--------|---------|
| Typical Price (houses) | $568,807 |
| Median Rent | $471/wk |
| Gross Rental Yield | 4.31% |
| Affordability | 34 years |
| Inventory | 1.79 months |
| Building Approvals Ratio | 0.06% |
| Stock on Market | 0.55% |
| Days on Market | 37 days |
| Vacancy Rate | 1.34% |
| IRSAD Score | 883 |
| Units/Houses Ratio | 9% |

### 3. Market Outlook (paragraph)
Supply/demand analysis with specific data points and assessment.

### 4. Market Summary (paragraph)
Overall assessment — yield profile, price band, target buyer type, caveats.

### 5. Pros (bullet list)
5-6 key investment positives with supporting data.

## Implementation

### Deal Sheet: New tab "Suburb Profile"
Suggested columns:

| Section | Label | Value | Text |
|---------|-------|-------|------|
| Description | | | Full suburb description paragraph |
| Market Data | Typical Price | $568,807 | |
| Market Data | Median Rent | $471 | |
| Market Data | Gross Yield | 4.31% | |
| Market Data | Inventory | 1.79 months | |
| Market Data | Days on Market | 37 days | |
| Market Data | Vacancy Rate | 1.34% | |
| Market Data | Building Approvals | 0.06% | |
| Market Data | Stock on Market | 0.55% | |
| Market Data | IRSAD Score | 883 | |
| Market Data | Units Houses Ratio | 9% | |
| Market Data | Affordability | 34 years | |
| Outlook | | | Market outlook paragraph |
| Summary | | | Overall assessment paragraph |
| Pros | Cashflow positive | | 4.31% gross yield on $568,807 typical house... |
| Pros | Tight supply | | Low inventory 1.79 months... |
| Pros | House-dominant | | Units/Houses ratio 9%... |

### Dashboard: New section "Suburb Profile"
- Position: between Location and Government sections
- Layout:
  - Suburb description at top (card with paragraph text)
  - Key metrics as a grid of small cards (2-3 columns)
  - Market outlook paragraph
  - Pros as styled bullet list with icons
- Style: clean, professional, consistent with existing sections

### Automation: Apps Script
- Extract suburb + postcode + state from address in Settings tab
- Fetch property.com.au suburb profile page: `property.com.au/{state}/{suburb}-{postcode}/`
- Parse the HTAG data (description, metrics, outlook, pros)
- Write to Suburb Profile tab
- Add to `populateResearchData()` so it runs with all other research

### fetchSheetData.ts
- Add new gviz fetch for "Suburb Profile" tab
- Parse into `suburbProfile` object on PropertyData type

## CL2: Please review and assign to CLI

Priority: after current pending items (amenity cards, hero image). This is a new feature, not a bug fix.
