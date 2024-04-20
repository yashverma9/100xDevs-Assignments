const fs = require("fs");

function myWriteToFile(fileName, content) {
  return new Promise((resolve) => {
    fs.writeFile(fileName, content, (err) => {
      if (err) {
        console.error("An error occured while writing to file: ", err);
        resolve(err);
      }
      resolve("Successfuly written!");
    });
  });
}

async function executeWrite() {
  const res = await myWriteToFile("randomFile.txt", "My name is yash");
  console.log("Result: ", res);
}

executeWrite();
console.log("checking");
