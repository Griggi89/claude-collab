# Scalability Prep — Dry-Run for Deal #2

**Date:** 2026-04-07 06:15
**Author:** CLI (CL1)
**Per:** CL2 review cycle — productive tasks directive

---

## 1. DEAL-SETUP.md Dry-Run: "123 Test Street, Melton South VIC 3338"

Walking through every step to identify blockers or unclear instructions.

### Step 1: Create Deal Sheet — READY
- Run `setupDashboardTemplate()` in a new Google Sheet — creates all 13 tabs with correct headers
- Fill Settings tab with property data
- **No blockers.** Template script is aligned with fetchSheetData.ts expectations.

### Step 2: Populate Research Data — NEEDS NEW SCRIPT
- `populateResearchData()` is hardcoded for Rockhampton (see section 3 below)
- For VIC property: need new distances, government projects, industries data
- **Action needed:** Either parameterize the script or create a new one per deal

### Step 3: Due Diligence Tab — READY
- Standard 7-folder structure documented
- Type column (7th) documented
- **No blockers.**

### Step 4: Rental Appraisal Tab — READY
- 4 columns (Label, URL, Thumbnail, File Name) documented correctly
- **No blockers.**

### Step 5: Equity Projection — NEEDS CF SHEET FIRST
- Year 0-5 rows derived from CF Sheet calculations
- **Dependency:** CF Sheet must be complete first

### Step 6: Questions Tab — READY
- 3-8 suggested questions, easily customizable per property
- **No blockers.**

### Step 7: Register in Master Index — READY
- Add row to `1ed5SsZeJFW27pBQLqhNeg7cIFaahdlaPf9337CwyNq8`
- Slug: `123-test-st-melton-south`
- Need to generate access token
- **No blockers.**

### Step 8: Build & Deploy — READY
- `npx next build` then `git push`
- Zero code changes needed — everything is data-driven
- **No blockers.**

### Dry-Run Verdict
**Steps that need human input:** CF Sheet completion, research data (distances/govt/industries), DD folder creation, rental appraisal documents, hero image URL.

**Steps that are fully automatable:** Template creation (Step 1), master index registration (Step 7), build/deploy (Step 8).

**Estimated time once data is ready:** 30 minutes (as CL2 targeted).

---

## 2. `populateResearchData()` — What Changes Per Region

The current script (`populate_research_data.gs`) is **100% hardcoded for Rockhampton/CQ**. Every data value needs replacement for a different region.

| Element | Current (Rockhampton) | What changes for VIC |
|---|---|---|
| Sheet ID | `10R4xeM3yq73Ko34DBcLwPFeF9TXv_X3BzukY7ulYhSs` | New deal sheet ID |
| Distances (8 rows) | CQ distances (CBD 5.7km, Beach 42km, etc.) | Melton South distances |
| Government projects (6 rows) | CQ projects ($6B+ total) | VIC/Melton projects |
| Industries (10 rows) | Rockhampton LGA % vs QLD benchmark | Melton LGA % vs VIC benchmark |
| Industry Takeaways | Healthcare 18%, Mining 5%, etc. | Melton-specific analysis |
| Industry Sources | profile.id.com.au/rockhampton | profile.id.com.au/melton |
| Benchmark column | QLD state averages | VIC state averages |
| Settings: LGA | `rockhampton` | `melton` |
| Settings: LGA Display Name | `Rockhampton Regional Council` | `City of Melton` |
| Settings: Benchmark Name | `Queensland` | `Victoria` |
| Settings: Region Name | `Central Queensland` | `Western Melbourne` |

### Recommendation: Don't parameterize — create fresh per deal

The research data (government projects, industry analysis, takeaways) is so region-specific that parameterizing doesn't help. Better workflow:

1. **Research the region** (manual or AI-assisted) — distances, govt projects, industries
2. **Clone `populate_research_data.gs`** and replace all data arrays
3. **Update the sheet ID** at the top
4. **Run once** to populate the deal sheet

The function structure (clear tabs, write data arrays) is reusable — only the data values change.

---

## 3. 10-Year Cashflow Chart — COMPUTED IN CODE, NOT FROM SHEET

**Finding:** Desktop-1 was right to flag this. The 10-year chart and the equity projection table use **different data sources**.

### Chart (CashflowSection.tsx:64-77) — Computed in JS:
```
rentalIncome[i] = annualRent × (1 + rentGrowthRate)^i
expenses[i] = annualExpenses × (1 + expenseGrowthRate)^i + annualInterestOnly
netCashflow[i] = rentalIncome[i] - expenses[i]
```
- Uses IO (interest-only) for all 10 years — no principal component
- `expenseGrowthRate` defaults to 0.03 (3%) if not set: `cashflow.expenseGrowthRate ?? 0.03`
- Interest is constant (IO loan = same payment every year)

### Equity Projection Table (CashflowSection.tsx:325+) — From sheet:
```
cashflow.equityProjection[] — read directly from Equity Projection tab
```
- Values come from CF Sheet calculations
- May use different growth assumptions or include principal repayment

### Risk of divergence:
The chart and table could show different numbers for the same year if:
1. CF Sheet uses different growth rates than Settings tab
2. CF Sheet includes principal repayment (PI loan) but chart assumes IO
3. CF Sheet compounds differently (monthly vs annual)

### Current status for 90 Harbourne:
- Loan Type = IO, so chart's IO assumption is correct
- Growth rates in chart come from same Settings values as CF Sheet
- Likely aligned, but not guaranteed for PI loans

### Recommendation:
For deal #2, verify chart matches CF Sheet year-by-year. If PI loan, the chart's IO assumption will be wrong — would need code change to support PI amortization.
