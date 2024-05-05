import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

// function App() {
//     // This will only happen once when the app will render first time
//     useEffect(() => {
//         alert("hello");
//     }, []);
//     return <>Helllo</>;
// }

function UseEffectApp() {
    const [todos, setTodos] = useState([]);
    const [id, setId] = useState([]);

    useEffect(() => {
        console.log("in seEffect");
        axios
            .get("https://sum-server.100xdevs.com/todos")
            .then((resp) => setTodos(resp.data.todos));
    }, []);

    function handleOnClick(e) {
        const { name } = e.target;
        setId(name);
    }

    return (
        <>
            {/* {todos.map((todo) => (
                <Todo title={todo.title} description={todo.description} />
            ))} */}
            <button name="1" onClick={handleOnClick}>
                1
            </button>
            <button name="2" onClick={handleOnClick}>
                2
            </button>
            <button name="3" onClick={handleOnClick}>
                3
            </button>
            <button name="4" onClick={handleOnClick}>
                4
            </button>
            <OneTodoAtOnce id={id} />
        </>
    );
}

function Todo({ title, description }) {
    return (
        <>
            <p>{title}</p>
            <p>{description}</p>
        </>
    );
}

function OneTodoAtOnce({ id }) {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        axios
            .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            .then((resp) => setTodo(resp.data.todo));
    }, [id]);

    return (
        <div>
            <p>{todo && todo.title}</p>
            <p>{todo && todo.description}</p>
        </div>
    );
}

export default UseEffectApp;
