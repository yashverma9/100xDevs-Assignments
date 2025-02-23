import express from "express";
import cookieParser from "cookie-parser"; // parses the very long cookie string and gives us an object
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";

const JWT_SECRET = "test123";

const app = express();
app.use(cookieParser()); // This middleware injects the cookie simply into req.cookies object which is access later in apis, o
// therwise we would have to fetch from headers and parse on our own
app.use(express.json());
app.use(
    cors({
        credentials: true, // Only important (even origin parameter) when frontend and backennd are running differently
        origin: "http://localhost:5173", // Allows setting cookies on this domain/origin (our frontend basically)
        // we need to do these steps when backend/frontend deployed differently to make cookies work
    })
);

app.post("/signin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // do db validations, fetch id of user from db
    const token = jwt.sign(
        {
            id: 1,
        },
        JWT_SECRET
    );
    res.cookie("token", token); // Like this you can set any number of key value pairs in the cookie and finally send the the response
    //res.cookie("random_cookie", "random_value")  // Like this..
    res.send("Logged in!");
});

app.get("/user", (req, res) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    // Get email of the user from the database
    res.send({
        userId: decoded.id,
    });
});

app.post("/logout", (req, res) => {
    res.cookie("token", ""); // or res.clearCookie("token"); both work
    res.json({
        message: "Logged out!",
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(3000);
