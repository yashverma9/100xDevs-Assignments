const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwtPassword = "123456";

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

mongoose.connect(
    "mongodb+srv://admin:cLjxVhv9QJtclu41@cluster0.3ak084w.mongodb.net/user_app"
); // Connection string to my db

// This approach when shorter schema
const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

// or

// This approach is cleaner when you have bigger schema to define
// const userSchema = new mongoose.Schema({
//     name: String,
//     username: String,
//     password: String,
//     age: Number
// });

// const User = mongoose.model("User", userSchema);

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    if (await userExists(username)) {
        res.status(500).send("The username already exists!");
        console.log("hi1");
        return;
    }
    console.log("hi2");

    const user = new User({
        name: name,
        username: username,
        password: password,
    });

    try {
        user.save(); // This is also async function, you can do .then((result)=> console.log(result._id);) to retrieve the id of the document
    } catch (e) {
        res.status(500).json({ error: e });
        return;
    }
    res.status(200).json({
        msg: "User created successfully",
    });
});

async function userExists(username) {
    // should check in the database\
    const existingUser = await User.findOne({
        username: username,
    });
    console.log("existing user: ", existingUser);
    if (existingUser) return true;
    return false;
}

async function validateUser(username, password) {
    const existingUser = await User.findOne({
        username: username,
        password: password,
    });
    console.log("existing user: ", existingUser);
    if (existingUser) return true;
    return false;
}

app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!(await validateUser(username, password))) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", async function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username from the database

        const allUsers = await User.find({});
        res.status(200).json(allUsers.filter((el) => el.username !== username));
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.use((req, res, next) => {
    res.status(404).send("Route not found!");
});

app.use((err, req, res, next) => {
    res.status(500).send(`There is some error with your request!: ${err}`);
});

app.listen(3000, () => console.log("Running on 3000"));
