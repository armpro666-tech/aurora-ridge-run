# Aurora Ridge Run — dossier

## Entry

- **Game:** Aurora Ridge Run
- **Bounty:** Make the best flight game — `best-flight-game-20261126-0057`
- **Prize:** $500 USDC, 50 paid places (1st $100 … 50th $3)
- **Final deadline:** 2026-11-28 09:57 JST (2026-11-28 00:57 UTC)
- **First blind-judging cutoff:** 2026-11-26 21:57 JST
- **Author account:** @armpro666-tech (GitHub armpro666-tech)
- **License:** MIT (see LICENSE)

## What the player does

Fly the Ridge Runner, a small prop plane, down a mountain valley at
sunset. Thread 12 glowing rings in order, manage throttle, fuel and the
180-second clock, stay inside the valley, and don't touch the ground
away from the runway. Wind gusts strengthen after ring 6. Clear all 12
rings to complete the course; the final score adds time and fuel bonuses.

## Controls

- Arrow keys / WASD — pitch and roll (bank to turn)
- Shift — throttle up; Ctrl / S — throttle down
- Space — boost (extra speed, extra fuel burn)
- Mouse — steer (position banks / pitches the plane); touch drag on mobile
- P — pause; R — restart; M — mute; Enter / click — start

## Scoring

- Ring: +100 pts, +25 per combo step, +25 while boosting; +5 s and +8% fuel
- Missed ring: combo resets
- Course complete: +5 pts per second left, +2 pts per % fuel left
- Crash: valley floor away from the runway, or mountain wall below 320 ft
- Out of fuel: engine idles, glide or go down

## HUD (lit instruments)

Top bar: altitude (FT), speed (KT), heading (compass tape, N/E/S/W),
score, rings x/12, countdown, throttle and fuel gauges.
Bottom-left: artificial horizon. Bottom-right: valley minimap (course,
rings, plane position). Centre messages announce rings, combos and misses.

## Rendering / tech

- Single self-contained page: `game/index.html` (Canvas 2D, inline CSS/JS).
- Chase view behind the aircraft; procedurally generated sunset sky,
  aurora bands, sun, drifting clouds, birds, three parallax mountain
  ridges with snow caps, valley floor, winding river, forest, runway
  with centre-line and edge lights, and glowing projected target rings.
- The aircraft is drawn in code: fuselage, swept wings, tail, lit
  cockpit glass, spinning propeller, blinking nav lights, exhaust.
- Particles (ring bursts, crash debris, exhaust), speed lines, screen
  shake, floating score text.
- Sound: synthesised WebAudio only — engine hum (pitch follows throttle
  and speed), wind noise, ring chimes, crash and win stingers. No audio
  files. Starts on first user gesture; M mutes.
- Offline: no CDN, no external fonts/images, no network requests at all.
  Verified by `node main.ts` (no-external-requests check) and by the
  headless-browser test in `scripts/shots.mjs` (0 failed requests,
  0 console errors).

## How to run

1. Open `game/index.html` in a desktop browser (Chrome recommended).
   No server, no install, no network.
2. Or build: `node main.ts` → `out/index.html` (same page, validated).

## Originality

Original name, aircraft, valley, course, art, sounds and code. Nothing
is copied from a commercial game. The only third-party material is the
MIT license text and the (not yet copied) vendor file from the official
make.fun kit, which must be included unchanged at submit time.

## Screenshots (real renders of this game's own code, 1280×720)

1. `screenshots/1-start.png` — title screen with controls
2. `screenshots/2-play.png` — in-flight chase view, ring ahead, HUD lit
3. `screenshots/3-runway.png` — low pass over the runway
4. `screenshots/4-end.png` — course-complete / score screen

## Known gaps before submission

- `vendor/makefun-game.ts` is a placeholder: the kit manifest lists it
  (56,282 bytes) but the kit's direct `/kit/<file>` routes returned 404
  at build time. Replace it with the unchanged kit file before submitting.
- No GitHub repo has been created and nothing has been submitted from
  this build. Submission needs the owner's wallet signature and the
  `.makefun/owner.json` payout address, plus agent transcripts.
