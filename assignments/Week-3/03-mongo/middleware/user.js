const { User } = require("../db/index");

async function doesUserExist(username, password) {
    const existingUser = await User.findOne({
        username: username,
        password: password,
    });
    return !!existingUser;
}

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    if (await doesUserExist(username, password)) next();
    else res.status(403).send("Unauthorized");
}

module.exports = userMiddleware;
