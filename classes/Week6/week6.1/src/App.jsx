import { useState, memo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// In the first approach, state is maintained in the parent. Any change in state, rerenders parent. And in React,
// any change in parent the children re render despite of being static

// function App() {
//     const [title, setTitle] = useState("First title");

//     function generateNewTitle() {
//         setTitle(`New title ${Math.random()}`);
//     }
//     return (
//         <div>
//             <button onClick={generateNewTitle}>Set new title 1</button>
//             <Header name={title} />
//             <Header name={"second one"} />
//             <Header name={"second one"} />
//             <Header name={"second one"} />
//             <Header name={"second one"} />
//         </div>
//     );
// }

// function Header({ name }) {
//     return <h2>{name}</h2>;
// }

// In the above approach all Header childs are rerendered. In this approach we push down the state to child,
// as its not used in the parent.

// function App() {
//     return (
//         <div>
//             <HeaderWithButton />
//             <Header name={"second one"} />
//             <Header name={"second one"} />
//             <Header name={"second one"} />
//             <Header name={"second one"} />
//         </div>
//     );
// }

// function Header({ name }) {
//     return <h2>{name}</h2>;
// }

// function HeaderWithButton() {
//     const [title, setTitle] = useState("First title");

//     function generateNewTitle() {
//         setTitle(`New title ${Math.random()}`);
//     }
//     return (
//         <>
//             <button onClick={generateNewTitle}>Set new title 1</button>
//             <Header name={title} />
//         </>
//     );
// }

// In the next approach we can keep same structure as the first one, and stop the children whose props didn't
// change from rerendering using memo (Memoization)

function App() {
    const [title, setTitle] = useState("First title");

    function generateNewTitle() {
        setTitle(`New title ${Math.random()}`);
    }
    return (
        <div>
            <button onClick={generateNewTitle}>Set new title 1</button>
            <Header name={title} />
            <Header name={"second one"} />
            <Header name={"second one"} />
            <Header name={"second one"} />
            <Header name={"second one"} />
        </div>
    );
}

const Header = memo(function Header({ name }) {
    return <h2>{name}</h2>;
});

export default App;
