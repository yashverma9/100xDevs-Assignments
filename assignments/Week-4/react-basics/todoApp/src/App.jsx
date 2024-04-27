import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Easy todo using dom directly

function App() {
    let globalId = 0;

    function markAsDone(id) {
        const todoDiv = document.getElementById(id);
        todoDiv.children[2].innerHTML = "Done!";
    }

    function createChild(title, description, id) {
        const todoDiv = document.createElement("div");
        const titlePara = document.createElement("p");
        titlePara.innerHTML = title;
        const descriptionPara = document.createElement("p");
        descriptionPara.innerHTML = description;
        const markDoneButton = document.createElement("button");
        markDoneButton.innerHTML = "Mark as done!";
        markDoneButton.addEventListener("click", () => markAsDone(id));
        todoDiv.appendChild(titlePara);
        todoDiv.appendChild(descriptionPara);
        todoDiv.appendChild(markDoneButton);
        todoDiv.setAttribute("id", id);
        return todoDiv;
    }

    function addTodo() {
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        console.log(name, description);
        const todosContainer = document.getElementById("todos");

        todosContainer.appendChild(createChild(name, description, globalId++));
    }

    return (
        <>
            <div>
                <input placeholder="name" id="name" />
                <br></br>
                <input placeholder="description" id="description" />
                <br></br>
                <button onClick={addTodo}>Add Todo</button>
                <br></br>
                <br />
                <div id="todos"></div>
            </div>
        </>
    );
}

export default App;
