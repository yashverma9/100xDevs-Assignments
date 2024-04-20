const { executionAsyncResource } = require("async_hooks");
const fs = require("fs");

function myWriteToFile(filePath, content) {
  const p = new Promise((resolve) => {
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error("Error:", err);
        resolve(err);
      }
      resolve("Done!");
    });
  });
  return p;
}

function myReadFile(filePath) {
  const p = new Promise((resolve) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error:", err);
        resolve("");
      }
      console.log("data: ", data);
      resolve(data);
    });
  });
  return p;
}

function removeExtraSpaces(content) {
  let spaceCounter = 0;
  content = content.trim();
  let i = 0;
  while (i < content.length) {
    if (content[i] === " ") {
      spaceCounter += 1;
      i += 1;
    } else {
      if (spaceCounter > 1) {
        content = content.slice(0, i - spaceCounter + 1) + content.slice(i);
        i = i + 1 - (spaceCounter - 1);
      } else i += 1;
      spaceCounter = 0;
    }
  }
  return content;
}

async function execute() {
  const content = await myReadFile("randomFile.txt");
  console.log("content: ", content);
  const cleanContent = removeExtraSpaces(content);
  const res = await myWriteToFile("randomFile.txt", cleanContent);
  console.log("Response: ", res);
}

execute();
