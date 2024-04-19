const express = require("express");

const app = express();

// Similary body parser can be used as well
app.use(express.json()); // You need to specify the content format as Json. Send the requests in the same format using headers\

const port = 3000;

const todos = [
  {
    name: "Dummy",
    content: "Random content",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World this is my first api using express!");
});

app.post("/createTodo", (req, res) => {
  const data = req.body;
  console.log("data:", data);
  res.send("Rec");
});

// The 2nd arguement is a callback function here. Its optional.
app.listen(port, () => {
  console.log(`Exanple app listening on port ${port}`);
});
