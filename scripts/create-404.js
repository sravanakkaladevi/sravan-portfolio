const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "dist");
const indexPath = path.join(buildDir, "index.html");
const notFoundPath = path.join(buildDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error("dist/index.html not found. Run the build first.");
  process.exit(1);
}

fs.copyFileSync(indexPath, notFoundPath);
console.log("Created dist/404.html from dist/index.html");
