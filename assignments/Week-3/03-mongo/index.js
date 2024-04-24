const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

// To handle all exceptions and routes which dont exist
app.use((err, req, res, next) => {
    return res.status(500).send(`Internal server error ${err}`);
});

app.use((req, res, next) => {
    return res.status(404).send("Route doesn't exist");
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
