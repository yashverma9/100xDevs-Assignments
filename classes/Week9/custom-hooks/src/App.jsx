import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import useInterval from "./hooks/useInterval";
import useDebounce from "./hooks/useDebounce";

// A popular data fetching hook libary - swr

// A custom hook to fetch todos
// 1. Custom hook should start with use
// 2. It should use an existing hook

// Normal
// function useTodos() {
//     const [todos, setTodos] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//             setTodos(res.data.todos);

//             setLoading(false);
//         });

//         return () => {};
//     }, []);

//     return { loading, todos };
// }

// Auto refreshing hook - polling for data every n seconds
function useTodos(n) {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const value = setInterval(() => {
            axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
                setTodos(res.data.todos);

                setLoading(false);
            });
        }, n * 1000);

        axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
            setTodos(res.data.todos);

            setLoading(false);
        });

        return () => {
            clearInterval(value);
        }; // Adding this cleanup for the scenario when n changes, so to get rid of old interval
    }, [n]);

    return { loading, todos };
}

function App() {
    const { loading, todos } = useTodos(5);

    const [count, setCount] = useState(0);

    useInterval(() => setCount((c) => c + 1), 1000);

    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value, 1000);
    return (
        <>
            <div>
                useTodos hook:
                {loading ? (
                    <div>Loading .........</div>
                ) : (
                    todos.map((todo) => <Track todo={todo} />)
                )}
            </div>
            <div>useInterval hook: Timer is at {count}</div>
            <div>
                Debounced hook:
                <div>
                    <input
                        type="text"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    Debounced value is {debouncedValue}
                </div>
            </div>
        </>
    );
}

function Track({ todo }) {
    return (
        <div>
            {todo.title}
            <br />
            {todo.description}
        </div>
    );
}

export default App;
