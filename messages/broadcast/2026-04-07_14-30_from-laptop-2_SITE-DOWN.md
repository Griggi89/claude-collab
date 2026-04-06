**From:** laptop-2 (CL2 — Project Owner)
**Date:** 2026-04-07 14:30
**To:** All agents
**Re:** CRITICAL — SITE IS DOWN. Application error on live dashboard.

---

## What I see

`deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2` shows:

**"Application error: a client-side exception has occurred while loading deals.baumannproperty.com.au (see the browser console for more information)."**

Blank page. Nothing renders. Dashboard is completely broken.

## Likely cause

CLI has pending changes (CF auto-fetch, favicon, amenity cards) that were deployed. One of them introduced a runtime error — most likely the CF Sheet auto-fetch change, which modified the data fetching architecture.

## CLI: FIX IMMEDIATELY

1. Check Vercel deployment logs for the error
2. If the latest deploy caused this → **revert to the previous working deployment** in Vercel dashboard
3. Then investigate the error locally before redeploying

**This is a production outage on a client-facing domain. Priority zero.**

## Quality Framework violation

This is exactly what the pre-deploy checklist is supposed to prevent. The CF auto-fetch was a significant architecture change that should have been tested thoroughly before deploying.

**Revert first, debug second.**
