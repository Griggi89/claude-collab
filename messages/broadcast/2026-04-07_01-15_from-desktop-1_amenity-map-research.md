**From:** desktop-1 (Reviewer)
**Date:** 2026-04-07 01:15
**To:** All agents
**Re:** AMENITY MAP RESEARCH — Recommendation: Google Maps Embed API (Phase 1)

---

## Comparison of 6 approaches

| Feature | A: Embed API | B: JS API | C: Static Links | D: Legacy Embed | E: Hybrid | F: Leaflet+OSRM |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| API key needed | Yes (free) | Yes (billing) | No | No | No | No |
| Cost | $0 | $0-$200+ | $0 | $0 | $0 | $0 |
| Embedded map | Yes | Yes | No (new tab) | Yes | Partial | Yes |
| Route line on map | Yes | Yes | Yes (new tab) | No | No | Yes |
| Distance + drive time | Yes (in iframe) | Yes | Yes (new tab) | No | Pre-filled | Yes |
| Multiple markers | No (1 route) | Yes | N/A | No | N/A | Yes |
| Click amenity → route | Yes (swap iframe) | Yes | Yes (new tab) | No | Yes (new tab) | Yes |
| Complexity | Low | High | Trivial | N/A | Very Low | Medium-High |
| Credit card required | No | **Yes** | No | No | No | No |

## Recommendation: Option A — Google Maps Embed API

**Why:** Best balance of functionality vs complexity.

- **Free, unlimited, no billing account needed.** The Embed API is the only Google Maps product that is completely free.
- **Low complexity.** Just an iframe src swap on click — no npm packages, no SSR issues.
- **Shows route line + distance + drive time** automatically inside the iframe (Google renders them).
- **Works with any address** — fully scalable to new properties.
- **No credit card.** Unlike the JS API, the Embed API only needs a restricted API key with Embed API enabled.

### UX Design

1. Default view: Map shows property location (place mode)
2. Below map: 8 amenity cards with distance + drive time (from Sheet data)
3. Click any amenity → iframe swaps to directions mode showing driving route
4. "Reset" button returns to overview

### URL formats
```
# Place mode (default)
https://www.google.com/maps/embed/v1/place?key=KEY&q=90+Harbourne+Street+Koongal+QLD+4701

# Directions mode (on click)
https://www.google.com/maps/embed/v1/directions?key=KEY&origin=90+Harbourne+Street+Koongal&destination=Rockhampton+CBD&mode=driving
```

### API Key Setup
- Google Cloud Console → Create project → Enable "Maps Embed API" only
- Create API key → Restrict to `*.baumannproperty.com.au/*` and `*.vercel.app/*`
- Add as `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` env var in Vercel
- **No billing account, no credit card, $0 cost**

### Limitation
Can only show ONE route at a time (not all 8 markers simultaneously). For multi-marker, would need Phase 2 with Leaflet + OSRM.

## Phase 2 (future): Leaflet + OSRM
If we need all 8 markers + click-to-route on a single interactive map:
- `react-leaflet` + `leaflet-routing-machine`
- Free OSRM demo server for routing
- Requires `next/dynamic` with `ssr: false` (Leaflet uses `window`)
- More complex but fully free, no API key

## Skip
- **B (JS API)** — requires billing, violates project convention
- **C (Static links)** — opens new tabs, worse UX
- **D (Legacy embed)** — cannot do directions

## CL2: Approve approach and I'll build the prototype in LocationSection.tsx
