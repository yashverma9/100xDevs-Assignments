import { useState } from "react";

import "./App.css";

function App() {
    let idCounter = 2;
    const [todos, setTodos] = useState([
        {
            id: 0,
            title: "Go to gym",
            description: "You need to go man",
        },
        {
            id: 1,
            title: "Drink water",
            description: "You need to drink water",
        },
    ]);

    const [formInput, setFormInput] = useState({
        title: "",
        description: "",
    });

    function addTodo() {
        setTodos([
            ...todos,
            {
                id: idCounter++,
                title: formInput.title,
                description: formInput.description,
            },
        ]);
    }

    return (
        <>
            <TodoForm formInput={formInput} setFormInput={setFormInput} />
            <br></br>
            <button onClick={addTodo}>Add Todo</button>
            <br></br>
            <br></br>
            <DisplayTodos todos={todos} />
        </>
    );
}

function TodoForm({ formInput, setFormInput }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value });
    }

    return (
        <>
            Todo Form
            <br></br>
            <input
                placeholder="title"
                type="text"
                value={formInput.title}
                name="title"
                onChange={handleChange}
            ></input>
            <br></br>
            <input
                placeholder="description"
                type="text"
                value={formInput.description}
                name="description"
                onChange={handleChange}
            ></input>
        </>
    );
}

function DisplayTodos({ todos }) {
    return (
        <>
            Todos
            <br></br>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <p>{todo.title}</p>
                        <p>{todo.description}</p>
                    </div>
                );
            })}
        </>
    );
}

export default App;
