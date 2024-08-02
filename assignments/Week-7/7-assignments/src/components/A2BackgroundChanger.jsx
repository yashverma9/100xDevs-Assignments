import { useState } from "react";

export default function A2BackgroundChanger() {
    const [styleState, setStyleState] = useState({ backgroundColor: "" });

    const buttons = [
        {
            name: "red",
        },
        {
            name: "blue",
        },
        {
            name: "white",
        },
        {
            name: "black",
        },
        {
            name: "yellow",
        },
        {
            name: "pink",
        },
    ];

    function handleOnclick(e) {
        const name = e.target.name;
        setStyleState({ backgroundColor: name });
    }
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                backgroundColor: styleState.backgroundColor,
            }}
        >
            <div
                style={{
                    display: "flex",
                    position: "fixed",
                    bottom: "50px",
                    margin: "auto",
                    gap: "10px",
                }}
            >
                {buttons.map((button) => {
                    return (
                        <button onClick={handleOnclick} name={button.name}>
                            {button.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
