const fs = require("fs");
const s = fs.readFileSync("js/app.js", "utf8");
let count = 0;
for (let i = 0; i < s.length; i++) if (s[i] === "`") count++;
console.log("backtick count:", count);
let lines = s.split("\n");
lines.forEach((l, idx) => {
  if (l.includes("`")) console.log(idx + 1, l);
});
