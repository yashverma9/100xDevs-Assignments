const jwt = require("jsonwebtoken");
const jwtPassword = "shhhhhhh";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const auth = req.headers.authorization;
    const token = auth.split(" ")[1];

    try {
        const verifiedDecoded = jwt.verify(token, jwtPassword);
        console.log("verifiedDecoded: ", verifiedDecoded);
        if (verifiedDecoded.username) {
            req.username = verifiedDecoded.username;
            next();
        } else return res.status(403).send("Unauthorized");
    } catch (e) {
        return res.status(400).send("Bad inputs");
    }
}

module.exports = { userMiddleware, jwtPassword };
