import { useState } from "react";

// In this flow of components, we are passing down the props to the last child.
// This is known as Props Drilling and makes the code difficult and untidy to understand.
// Better way to jump props between components- Context

export default function PropDrilling() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Count count={count} />
            <Buttons count={count} setCount={setCount} />
        </div>
    );
}

function Count({ count }) {
    return <div>{count}</div>;
}

function Buttons({ count, setCount }) {
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
