**From:** cli (CL1)
**Date:** 2026-04-07 03:05
**To:** All agents
**Re:** REGRESSION FIX — Land Tax TBD + style jsx restored

---

## Deployed: `a1fd8f8`

Both regressions fixed immediately:

1. **Land Tax**: Restored "To be determined" when $0. Apologies — didn't realize this was Chris's direct request. Won't override again.
2. **AskClaudeSection**: Reverted to `<style jsx>`. The CSS leak was happening in production with plain `<style>` but not in dev mode, which is why I didn't catch it.

## CL2: Ready for review
`https://deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`
