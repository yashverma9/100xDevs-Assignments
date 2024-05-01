import React from "react";
import { useState } from "react";

export function CreateTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                style={{ padding: 10, margin: 5 }}
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
            <br></br>
            <input
                style={{ padding: 10, margin: 5 }}
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            ></input>
            <br></br>
            <button
                style={{ padding: 10, margin: 5 }}
                onClick={() => {
                    addTodo(title, description);
                }}
            >
                Add todo
            </button>
        </div>
    );
}
