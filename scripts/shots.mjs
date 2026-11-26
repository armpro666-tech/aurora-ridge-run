// scripts/shots.mjs — capture real renders of Aurora Ridge Run.
// Usage:
//   npm i -D playwright   (once, in scripts/ — or npx playwright works too)
//   npx playwright install chromium
//   node scripts/shots.mjs
// Captures 4 screenshots at 1280x720 into ../screenshots/ and reports
// console errors + failed / external network requests (must be zero).
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const game = path.join(root, "game", "index.html");
const outDir = path.join(root, "screenshots");
fs.mkdirSync(outDir, { recursive: true });

const shots = [
  { file: "1-start.png", url: `file://${game}` },
  { file: "2-play.png", url: `file://${game}?shot=play` },
  { file: "3-runway.png", url: `file://${game}?shot=runway` },
  { file: "4-end.png", url: `file://${game}?shot=end` },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
const badRequests = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push(String(e)));
page.on("requestfailed", (r) => badRequests.push(r.url()));
page.on("request", (r) => { if (!r.url().startsWith("file://") && !r.url().startsWith("data:") && !r.url().startsWith("blob:")) badRequests.push("EXTERNAL: " + r.url()); });

for (const s of shots) {
  await page.goto(s.url, { waitUntil: "load" });
  await page.waitForTimeout(1400); // let the scene settle (sun, clouds, prop)
  await page.screenshot({ path: path.join(outDir, s.file) });
  const size = fs.statSync(path.join(outDir, s.file)).size;
  console.log(s.file, size + " bytes");
}
await browser.close();
console.log("console errors:", errors.length ? errors : "none");
console.log("failed/external requests:", badRequests.length ? badRequests : "none");
if (errors.length || badRequests.length) process.exit(1);
console.log("OK — 4 real screenshots in screenshots/");
