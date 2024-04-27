import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
    });
    const [done, setDone] = useState([]);
    let globalId = 0;

    function markAsDone(e) {
        console.log("e.target: ", e.target);
        const { name } = e.target;
        const updatedDone = [...done];
        updatedDone[parseInt(name)] = "Done";
        setDone(updatedDone);
        console.log("done:", done);
    }

    function handleChange(e) {
        console.log("e.target: ", e.target);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function addTodo(e) {
        e.preventDefault();
        console.log("formData: ", formData);
        const todoId = globalId++;
        setDone([...done, "Mark as done"]);
        setTodos([
            ...todos,
            {
                id: todoId,
                title: formData.title,
                description: formData.description,
            },
        ]);
    }

    return (
        <>
            <div>
                <form onSubmit={addTodo}>
                    <input
                        placeholder="title"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <br></br>
                    <input
                        placeholder="description"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <br></br>
                    <button type="submit">Add Todo</button>
                </form>

                <br></br>
                <br />
                <div id="todos">
                    <ul>
                        {todos.map((todo) => (
                            <div>
                                <li>{todo.title}</li>
                                <li>{todo.description}</li>
                                <button onClick={markAsDone} name={todo.id}>
                                    {done[todo.id]}
                                </button>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
