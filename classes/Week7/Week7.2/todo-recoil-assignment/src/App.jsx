import { useState } from "react";
import "./App.css";
import {
    filterTextAtom,
    filterTodosSelector,
    todoAtom,
} from "./store/atoms/todos";
import {
    useSetRecoilState,
    useRecoilValue,
    RecoilRoot,
    useRecoilState,
} from "recoil";

function App() {
    return (
        <div>
            <RecoilRoot>
                <InputTodos />
                <FilterInput />
                <DisplayTodos />
            </RecoilRoot>
        </div>
    );
}

function InputTodos() {
    const setTodos = useSetRecoilState(todoAtom);
    const [formInput, setFormInput] = useState({
        title: "",
        description: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormInput({
            ...formInput,
            [name]: value,
        });
    }

    return (
        <div>
            <input
                type="text"
                name="title"
                value={formInput.title}
                placeholder="title"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="description"
                value={formInput.description}
                placeholder="description"
                onChange={handleChange}
            ></input>
            <button
                onClick={() =>
                    setTodos((currentTodos) => [...currentTodos, formInput])
                }
            >
                Add todo
            </button>
        </div>
    );
}

function FilterInput() {
    const [filterText, setFilterText] = useRecoilState(filterTextAtom);
    console.log("filterText:", filterText);
    return (
        <input
            type="text"
            placeholder="filter text"
            onChange={(e) => {
                setFilterText(e.target.value);
            }}
            value={filterText}
        ></input>
    );
}

function DisplayTodos() {
    const filteredTodos = useRecoilValue(filterTodosSelector);
    console.log("Filtered todos:", filteredTodos);

    return (
        <div>
            {filteredTodos.map((todo) => {
                return (
                    <div>
                        <h3>Todo</h3>
                        <p>title: {todo.title}</p>

                        <p>description: {todo.description}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
