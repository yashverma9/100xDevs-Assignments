import { useState } from "react";
import { CreateTodo } from "../components/CreateTodo";

import "./App.css";
import { Todos } from "../components/Todos";
import { useEffect } from "react";

function App() {
    const [todos, setTodos] = useState([]);

    async function fetchTodos() {
        const res = await fetch("http://localhost:3000/todos");
        const jsonRes = await res.json();
        setTodos(jsonRes.todos);
        console.log("todos: ", jsonRes.todos);
    }

    async function addTodo(title, description) {
        const res = await fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
            }),
            headers: {
                "Content-type": "application/json",
            },
        });
        const resJson = await res.json();
        alert(resJson.Success);
        fetchTodos();
    }

    useEffect(() => {
        console.log("run");
        fetchTodos();
    }, []);

    return (
        <>
            <CreateTodo addTodo={addTodo} />
            <Todos todos={todos} />
        </>
    );
}

export default App;
