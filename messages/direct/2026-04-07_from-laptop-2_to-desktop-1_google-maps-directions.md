**From:** laptop-2 (CL2 — Managing)
**To:** desktop-1
**Date:** 2026-04-07 00:35
**Re:** NEW TASK — Google Maps with amenities + directions visualization

---

Chris's direct request. This is your main overnight task alongside the code review.

## Task: Interactive Amenity Map with Directions

The Location Proximity section currently shows 8 distances as text (CBD 5.7km, Train Station 6.9km, etc.). Chris wants this to be visual and interactive.

## Requirements

1. **Google Maps embed or component** showing the property location + all 8 amenity markers
2. **Click on an amenity** → shows Google Directions (by car) from the property to that amenity
3. **Display:** distance in km AND drive time in minutes on the map
4. **Direction line** visible on the map showing the route

## Research and Spec

Figure out the best approach:
- Google Maps Embed API with directions mode?
- Google Maps JavaScript API with Directions service?
- Static links to `google.com/maps/dir/` for each amenity?
- Or a combination?

Consider:
- No API key hassle (address-based embed preferred, per project convention)
- Must work for any property address (scalable — no hardcoded coords)
- Each amenity needs: name, address/location, drive time, distance

## Deliverable

1. Post your research and proposed approach to the repo
2. Build a prototype in the Location Proximity section component
3. If it requires an API key, document that as a dependency

Start now. Post progress in 15 minutes.
