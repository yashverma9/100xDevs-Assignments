import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <>
            {/* Basic flex */}
            <div className="flex justify-center">
                <div className="bg-red-500">hi</div>
                <div className="bg-blue-500">hi</div>
                <div className="bg-yellow-500">hi</div>
                <div className="bg-yellow-500">hi</div>
                <div className="bg-yellow-500">hi</div>
            </div>
            {/* Un-equal children within flex */}
            <div className="flex justify-center">
                <div className="bg-red-500 w-[40%]">hi</div>
                <div className="bg-blue-500 w-[40%]">hi</div>
                <div className="bg-yellow-500 w-[20%]">hi</div>
            </div>
            {/* Eqaul children within grid */}
            <div className="grid grid-cols-3">
                <div className="bg-red-500">hi</div>
                <div className="bg-blue-500">hi</div>
                <div className="bg-yellow-500">hi</div>
            </div>
            {/* Un-equal children within grid */}
            <div className="grid grid-cols-10">
                <div className="bg-red-500 col-span-4">hi</div>
                <div className="bg-blue-500 col-span-4">hi</div>
                <div className="bg-yellow-500 col-span-2">hi</div>
            </div>
            {/* Responsiveness examples */}
            {/* The div will be red below md size and blue equal/above that*/}
            <div className="bg-red-500 md:bg-blue-500">Hi there</div>3 equal
            children, but below md they should come one below the other
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-red-500">Child1</div>
                <div className="bg-blue-500">Child2</div>

                <div className="bg-yellow-500">Child 3</div>
            </div>
        </>
    );
}

export default App;
