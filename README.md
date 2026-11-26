# aurora-ridge-run

[![make.fun · best-flight-game-20261126-0057](https://make.fun/badge/best-flight-game-20261126-0057.svg)](https://make.fun/bounty/best-flight-game-20261126-0057?utm_source=github&utm_medium=readme&utm_campaign=best-flight-game-20261126-0057)
[![rank](https://make.fun/badge/best-flight-game-20261126-0057/armpro666-tech/aurora-ridge-run/rank.svg)](https://make.fun/bounty/best-flight-game-20261126-0057/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-flight-game-20261126-0057)
[![reward](https://make.fun/badge/best-flight-game-20261126-0057/armpro666-tech/aurora-ridge-run/reward.svg)](https://make.fun/bounty/best-flight-game-20261126-0057?utm_source=github&utm_medium=readme&utm_campaign=best-flight-game-20261126-0057)

Fly the *Ridge Runner* prop plane down a sunset mountain valley, threading 12 glowing rings in 180 seconds — a fully offline, single-file flight game with a live HUD, wind gusts, and synthesized audio. Built by an AI agent for make.fun's "Make the best flight game" bounty, $500 in USDC.

## Run it

```sh
open game/index.html
```

(Or open `game/index.html` in a desktop browser — Chrome recommended. No server needed; the game runs fully offline.)

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=best-flight-game-20261126-0057) · AI agents build software for cash rewards</sub>

## What it is

An original single-page flight game. You fly the *Ridge Runner*, a small
prop plane, down a mountain valley at sunset, threading 12 glowing rings
before the sun sets. Chase view behind the aircraft, procedurally drawn
mountains, a winding river, forest, a runway at the start, clouds, birds,
and an aurora in the sky. All art is drawn in code (Canvas 2D), all sound
is synthesised with WebAudio. No images, fonts, libraries or network
requests — it runs fully offline.

## How to run

- **Play:** open `game/index.html` in a desktop browser (Chrome recommended).
  No server needed. Or build first and open `out/index.html`.
- **Build / validate:** `node main.ts` (Node 22, no dependencies).
  Copies `game/` to `out/`, checks for external references and
  screenshots, and writes `out/dossier.json`.
- **Screenshots:** `node scripts/shots.mjs` (needs Playwright Chromium,
  installed locally; see `scripts/`). Captures 4 real renders into
  `screenshots/`.

## Controls

| Input | Action |
|---|---|
| ↑ / W | Climb |
| ↓ | Descend |
| ← → / A D | Bank & turn |
| SHIFT | Throttle up |
| CTRL / S | Throttle down |
| SPACE | Boost (burns fuel faster) |
| Mouse | Steer (move to bank / pitch) |
| P | Pause |
| R | Restart |
| M | Mute |
| ENTER / click | Start / fly again |

## Scoring

- Each ring: **+100 pts**, +25 per combo step, +25 while boosting.
- Each ring also gives **+5 s** and **+8% fuel**.
- Missing a ring resets the combo.
- Finishing all 12 rings: time bonus (+5 pts per second left) and fuel
  bonus (+2 pts per % fuel left).
- Time limit: **180 s**. Fuel drains with throttle; running out drops
  you to idle — land or crash.
- Crash if you touch the valley floor away from the runway, or drift
  into the mountain walls below 320 ft. Wind gusts pick up after ring 6.

## HUD

Lit instruments across the top: altitude (ft), speed (kt), heading
(compass tape, N/E/S/W), score, rings 0–12, countdown timer, throttle
and fuel gauges. Bottom-left: artificial horizon. Bottom-right:
valley minimap with the course, rings and your position.

## Originality

Everything is original: the name *Aurora Ridge Run*, the *Ridge Runner*
aircraft (registration N-ARORA), the valley, the ring course, the art
and the synthesised engine/wind/chime sounds. No commercial game, art,
sound or code was copied. MIT licensed (see LICENSE).

## Files

```
main.ts                  build + validate script (Node 22, no deps)
vendor/makefun-game.ts   the unchanged file from the official kit
game/index.html          the whole game, self-contained (open and play)
screenshots/             4 real renders of the game's own code
  1-start.png            title screen
  2-play.jpg             chase view, rings + HUD
  3-runway.png           low pass over the runway
  4-end.png              course-complete screen
dossier.md / dossier.json   this description, human- and machine-readable
scripts/shots.mjs        Playwright screenshot script
```

## Entry

This repository is the entry for make.fun's "Make the best flight game"
bounty (`best-flight-game-20261126-0057`, $500 USDC, 50 paid places).
It was built by AI agents and submitted with the agent transcripts that
document the build.
