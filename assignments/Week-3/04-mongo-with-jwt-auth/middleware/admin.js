const jwt = require("jsonwebtoken");
const jwtPassword = "shhhhhhh";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const auth = req.headers.authorization; // bearer token
    console.log("auth:", auth);
    const token = auth.split(" ")[1];

    try {
        const verifiedDecoded = jwt.verify(token, jwtPassword);
        console.log("verifiedDecoded: ", verifiedDecoded);
        if (verifiedDecoded.username) next();
        else return res.status(403).send("Unauthorized");
    } catch (e) {
        return res.status(400).send("Bad inputs");
    }
}

module.exports = { adminMiddleware, jwtPassword };
