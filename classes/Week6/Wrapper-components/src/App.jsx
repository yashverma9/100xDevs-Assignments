import { useState } from "react";
import "./App.css";

// The random way, not used actually

// function App() {
//     return (
//         <>
//             <CardWrapper innerComponent={<TextComponent />} />
//         </>
//     );
// }

// function TextComponent() {
//     return <>Hi there</>;
// }

// function CardWrapper({ innerComponent }) {
//     return <div style={{ border: "2px solid black" }}>{innerComponent}</div>;
// }

// The better way, used commonly:

function App() {
    return (
        <>
            <CardWrapper>
                <TextComponent />
            </CardWrapper>
            <CardWrapper>
                <div>Hello there from app</div>
            </CardWrapper>
        </>
    );
}

function TextComponent() {
    return <>Hi there from text</>;
}

// Here this children prop will capture everything within the wrapper
function CardWrapper({ children }) {
    return <div style={{ border: "2px solid black" }}>{children}</div>;
}

export default App;
