const express = require("express");
import { Request, Response } from "express";
import { BACKEND_URL } from "@repo/common/config";

const app = express();

app.get("/", (req: Request, res: Response) => {
    return res.json({ msg: "Hi", BACKEND_URL: BACKEND_URL });
});

app.listen(5001, () => console.log("Server is up and running on 5001"));
