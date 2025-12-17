const fs = require("fs");
const s = fs.readFileSync("js/app.js", "utf8");
let lo = 0,
  hi = s.length;
let lastGood = 0;
while (lo < hi) {
  const mid = Math.floor((lo + hi) / 2);
  const part = s.slice(0, mid);
  try {
    new Function(part);
    lastGood = mid;
    lo = mid + 1;
  } catch (e) {
    hi = mid;
  }
}
console.log("lastGoodChar:", lastGood);
const lines = s.slice(0, lastGood).split("\n");
console.log("Last good lines (end):");
console.log(lines.slice(-10).join("\n"));
console.log("\nNext lines (start):");
console.log(s.slice(lastGood, lastGood + 400));
