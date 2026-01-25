const fs = require("fs");
const path = require("path");

const BASE_PATH = "/git-atelier/";

const DIST_DIR = path.join(__dirname, "../docs");

function addPrefixToMarkdown(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      addPrefixToMarkdown(fullPath);
    } else if (file.endsWith(".md")) {
      let content = fs.readFileSync(fullPath, "utf-8");

      content = content.replace(
        /!\[([^\]]*)]\((?!http)([^)]+)\)/g,
        (match, alt, src) => {
          const newSrc = `${BASE_PATH}${src.replace(/^\/+/, "")}`;
          return `![${alt}](${newSrc})`;
        }
      );

      fs.writeFileSync(fullPath, content, "utf-8");
    }
  });
}

addPrefixToMarkdown(DIST_DIR);
console.log("Markdown image paths updated with prefix!");
