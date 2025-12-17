const fs = require("fs");
const s = fs.readFileSync("js/app.js", "utf8");
let stack = [];
let inSingle = false,
  inDouble = false,
  inBack = false,
  esc = false;
for (let i = 0; i < s.length; i++) {
  const c = s[i];
  if (esc) {
    esc = false;
    continue;
  }
  if (c === "\\") {
    esc = true;
    continue;
  }
  if (inSingle) {
    if (c === "'") inSingle = false;
    continue;
  }
  if (inDouble) {
    if (c === '"') inDouble = false;
    continue;
  }
  if (inBack) {
    if (c === "`") inBack = false;
    continue;
  }
  if (c === "'") {
    inSingle = true;
    continue;
  }
  if (c === '"') {
    inDouble = true;
    continue;
  }
  if (c === "`") {
    inBack = true;
    continue;
  }
  if (c === "{" || c === "(" || c === "[") stack.push({ c, i });
  else if (c === "}" || c === ")" || c === "]") {
    if (stack.length === 0) {
      console.log("Unmatched closing", c, "at", i);
      process.exit(0);
    }
    const top = stack.pop();
    const pairs = { "}": "{", ")": "(", "]": "[" };
    if (pairs[c] !== top.c) {
      console.log("Mismatched", top, "vs", c, "at", i);
      process.exit(0);
    }
  }
}
if (stack.length) {
  console.log("Unclosed openings (last 10):");
  console.log(stack.slice(-10));
} else console.log("All balanced");
