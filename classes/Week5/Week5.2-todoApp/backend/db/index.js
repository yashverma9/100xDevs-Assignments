const mongoose = require("mongoose");

// added in .env otherwise, not pushed to git
mongoose.connect(
    "mongodb+srv://admin:cLjxVhv9QJtclu41@cluster0.3ak084w.mongodb.net/todo_app"
);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    done: {
        type: Boolean,
        default: false,
    },
});

const todoModel = mongoose.model("todos", todoSchema);

module.exports = { todoModel };
