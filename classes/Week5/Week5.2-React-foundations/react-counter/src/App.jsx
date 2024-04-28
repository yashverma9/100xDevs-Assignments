import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Button count={count} setCount={setCount} />
        </>
    );
}

// Creating another component called Button within same file, otherwise better to do in diff jsx
function Button(props) {
    function handleClick(e) {
        const newCount = props.count + 1;
        props.setCount(newCount);
    }

    return (
        <>
            <button onClick={handleClick}>{props.count}</button>
        </>
    );
}

export default App;
