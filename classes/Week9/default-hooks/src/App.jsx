import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [rendering, setRendering] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setRendering(false);
        }, 10000);
    }, []);

    return <>{rendering ? <MyComponent /> : <div>Nothing to show</div>}</>;
}

function MyComponent() {
    useEffect(() => {
        console.log("Component mounted!");

        // Cleanup (runs post the component unmounts)
        return () => {
            console.log("Component unmounted!");
        };
    }, []);
}

export default App;
