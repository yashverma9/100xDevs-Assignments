import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([
        {
            title: "A todo 1",
            description: "Desc of a todo 1",
        },
        {
            title: "A todo 2",
            description: "Desc of a todo 2",
        },
    ]);

    const addARandomTodo = () => {
        setTodos([
            ...todos,
            {
                title: "A new random todo",
                description: "description of a random todo",
            },
        ]);
    };

    return (
        <>
            <button onClick={addARandomTodo}>Add a random Todo</button>
            {todos.map((todo) => {
                return (
                    <Todo title={todo.title} description={todo.description} />
                );
            })}
        </>
    );
}

// A new component for todo
function Todo(props) {
    return (
        <>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </>
    );
}

export default App;
