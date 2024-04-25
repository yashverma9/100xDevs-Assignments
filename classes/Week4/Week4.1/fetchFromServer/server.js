const express = require("express");
const cors = require("cors");

const app = express();

//This fixes the cors error
app.use(cors());
//CORS stands for Cross-Origin Resource Sharing.
//It's a security feature implemented by web browsers that
//restricts web pages from making requests to a different domain than the one that served the original web page.
//This restriction is in place to prevent malicious websites from accessing resources (like data or APIs) on other websites without permission.

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});

app.listen(3000, () => {
    console.log("running on 3000");
});
