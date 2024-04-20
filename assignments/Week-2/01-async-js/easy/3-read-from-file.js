const fs = require("fs");

function myReadFile(fileName) {
  const p = new Promise((resolve) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      resolve(data);
    });
  });
  return p;
}

// Using async await
async function main() {
  const fileContent = await myReadFile("randomFile.txt");
  console.log("fileContent from async await", fileContent);
}

let c = 0;
for (let i = 0; i < 10000000000; i++) c += 1;

main();

// Using Promises
// function printContent(resolvedData) {
//   console.log(
//     "File Content using promises and function callback: ",
//     resolvedData
//   );
// }
// myReadFile("randomFile.txt").then((data) => {
//   console.log("File content using promises: ", data);
// });
// myReadFile("randomFile.txt").then(printContent);
