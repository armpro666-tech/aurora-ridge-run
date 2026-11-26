// Quick headless gameplay test (run from entry/: node scripts/playtest.mjs).
// Loads the game, starts it with Enter, steers for a few seconds and
// asserts the state advances with no console errors / failed requests.
import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const game = "file://" + path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "game", "index.html");
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push(String(e)));
page.on("requestfailed", (r) => errors.push("REQFAIL " + r.url()));
await page.goto(game, { waitUntil: "load" });
await page.waitForTimeout(500);
const s0 = await page.evaluate(() => ({ state: window.AURORA.G.state, score: window.AURORA.G.score }));
console.log("before start:", JSON.stringify(s0));
await page.keyboard.press("Enter");
await page.waitForTimeout(300);
await page.keyboard.down("ArrowUp");
await page.keyboard.down("Shift");
await page.waitForTimeout(3000);
await page.keyboard.up("ArrowUp");
await page.keyboard.up("Shift");
const s1 = await page.evaluate(() => ({ state: window.AURORA.G.state, dist: Math.round(window.AURORA.G.dist), alt: Math.round(window.AURORA.G.alt), speed: Math.round(window.AURORA.G.speed), fuel: Math.round(window.AURORA.G.fuel), timeLeft: Math.round(window.AURORA.G.timeLeft) }));
console.log("after 3s flying:", JSON.stringify(s1));
await page.keyboard.press("p");
const s2 = await page.evaluate(() => window.AURORA.G.state);
console.log("after P:", s2);
await page.keyboard.press("p");
await page.keyboard.press("r");
await page.waitForTimeout(300);
const s3 = await page.evaluate(() => ({ state: window.AURORA.G.state, dist: Math.round(window.AURORA.G.dist), score: window.AURORA.G.score }));
console.log("after R:", JSON.stringify(s3));
await browser.close();
const ok = s0.state === "start" && s1.state === "playing" && s1.dist > 100 && s1.alt > 90 && s2 === "paused" && s3.state === "playing" && s3.dist < 100 && errors.length === 0;
console.log("errors:", errors.length ? errors : "none");
console.log(ok ? "PLAYTEST OK" : "PLAYTEST FAILED");
process.exit(ok ? 0 : 1);
