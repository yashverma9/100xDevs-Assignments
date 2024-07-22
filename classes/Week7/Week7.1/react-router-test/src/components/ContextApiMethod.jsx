import { useContext, useState } from "react";
import { CountContext } from "./context";

// Better way to jump props between components- Context

export default function ContextApiMethod() {
    const [count, setCount] = useState(0);

    // Wrap anyone that wants to use the teleported value insider a provider of that context
    // The state is passed as the value, and no need to send as prop now. See count isn't anymore
    // Same can be done with setCount.
    return (
        <div>
            {/* <CountContext.Provider value={count}>
                <Count setCount={setCount} />
            </CountContext.Provider> */}
            <CountContext.Provider value={{ count, setCount }}>
                <Count />
            </CountContext.Provider>
        </div>
    );
}

function Count({}) {
    return (
        <div>
            <CountRenderer />
            <Buttons />
        </div>
    );
}

function CountRenderer() {
    const { count } = useContext(CountContext); // Getting the value of count using the context we just created
    return <>{count}</>;
}

function Buttons({}) {
    const { count, setCount } = useContext(CountContext);
    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase
            </button>
            <button
                onClick={() => {
                    setCount(count - 1);
                }}
            >
                Decrease
            </button>
        </div>
    );
}
