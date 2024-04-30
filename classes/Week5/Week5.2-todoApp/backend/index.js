const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { createTodoSchema, updateTodoSchema } = require("./types");
const { todoModel } = require("./db/index");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hi its working");
});

app.post("/todo", async (req, res) => {
    const todoInput = req.body;
    todoInput["done"] = false;
    const valid = createTodoSchema.safeParse(todoInput);
    console.log("todoInput valid: ", valid);
    if (!valid.success)
        return res
            .status(400)
            .json({ Success: "False", Message: "Invalid input values" });
    // add to mongo
    await todoModel
        .create({
            title: todoInput.title,
            description: todoInput.description,
        })
        .catch((e) => console.log("caught errror:", e));
    res.status(200).json({
        Success: "True",
        Message: "Todo added successfully",
    });
});

app.get("/todos", async (req, res) => {
    console.log("in get todos");
    const todos = await todoModel.find({});
    return res.status(200).json({ Success: "True", todos: todos });
});

app.put("/completed", async (req, res) => {
    const todoUpdateInput = req.body;
    const valid = updateTodoSchema.safeParse(todoUpdateInput);
    console.log("todoInput valid: ", valid);
    if (!valid.success)
        return res
            .status(400)
            .json({ Success: "False", Message: "Invalid input values" });

    await todoModel.updateOne(
        {
            _id: todoUpdateInput.id,
        },
        {
            done: true,
        }
    );
    res.status(200).send({
        Success: "True",
        Message: "Completed todo successfully!",
    });
});

app.use((err, req, res, next) => {
    return res.status(500).send(`Internal server error: ${err}`);
});

app.use((req, res, next) => {
    return res.status(404).send("This route doesn't exist!");
});

app.listen(3000, () => {
    console.log("Running server on 3000!");
});
