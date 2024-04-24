// Middleware for handling auth
const { Admin } = require("../db/index");

async function doesAdminExist(username, password) {
    const existingAdmin = await Admin.findOne({
        username: username,
        password: password,
    });
    return !!existingAdmin;
}

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;

    if (await doesAdminExist(username, password)) next();
    else res.status(403).send("Unauthorized");
}

module.exports = adminMiddleware;
