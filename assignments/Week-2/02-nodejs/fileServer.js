/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const { error } = require("console");
const express = require("express");
const fs = require("fs");
const path = require("path");
const { fileURLToPath } = require("url");
const app = express();

app.use(express.json());

app.get("/files", (req, res) => {
  fs.readdir("./files/", (err, files) => {
    if (err) {
      console.error("Error reading from directory:", error);
      res.status(500).send(`Error reading from directory: ${error}`);
      return;
    }
    res.status(200).send({ fileNames: files });
  });
});

app.get("/file/:filename", (req, res) => {
  const fileName = req.params.filename;
  console.log("fileName:", fileName);
  fs.readFile("./files/" + fileName, "utf8", (err, content) => {
    if (err) {
      console.error("Error reading from file:", error);
      res.status(404).send(`File not found`);
      return;
    }
    res.status(200).send(content);
  });
});

// This will catch all exceptions within your app
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Commented as the test case is starting the server for us. Uncomment if you want to run the server yourself without test cases.
// app.listen(3000, () => {
//   console.log("App running on port 3000");
// });

module.exports = app;
