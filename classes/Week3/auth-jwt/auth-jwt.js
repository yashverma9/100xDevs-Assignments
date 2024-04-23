const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "shhhhh";

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
//   for (let i = 0; i < ALL_USERS.length; i++) {
//     if (
//       ALL_USERS[i].username === username &&
//       ALL_USERS[i].password === password
//     )
//       return true;
//   }
//   return false;
// }

// Cleaner approach
function userExists(username, password) {
  return ALL_USERS.find(
    (element) => element.username === username && element.password === password
  );
}

app.post("/signin", function (req, res) {
  console.log("Current users: ", ALL_USERS);
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // return a list of users other than this username
    // let allOthersUsers = [...ALL_USERS]; // To shallow clone
    // for (let i = 0; i < ALL_USERS.length; i++) {
    //   if (allOthersUsers[i].username === username) allOthersUsers.splice(i, 1);
    // }

    //cleaner approach
    let allOthersUsers = ALL_USERS.filter(
      (element) => element.username !== username
    );
    console.log("EXISTING USERS:", ALL_USERS);
    res.status(200).json(allOthersUsers);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.use((req, res, next) => {
  res.status(404).send("Route not found!");
});

app.use((error, req, res, next) => {
  res.status(500).send(`Internal server error: ${error} `);
});

app.listen(3001);
