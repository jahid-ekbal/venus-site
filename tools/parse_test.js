const fs = require("fs");
try {
  new Function(fs.readFileSync("js/app.js", "utf8"));
  console.log("PARSE_OK");
} catch (e) {
  console.error("PARSE_ERR", e && e.message);
  console.error(e.stack);
  process.exit(2);
}
