import { useMemo, useState } from "react";
import "./App.css";
import {
    RecoilRoot,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
import countAtom, { evenSelector } from "./store/atoms/count";

function App() {
    // Anything which uses recoil state needs to be wrapped in RecoilRoot (Do it at the parent)
    return (
        <>
            <div>
                <RecoilRoot>
                    <Count />
                </RecoilRoot>
            </div>
        </>
    );
}

function Count() {
    console.log("Count re render");
    return (
        <div>
            <CountRenderer />
            <Buttons />
        </div>
    );
}

function CountRenderer() {
    const count = useRecoilValue(countAtom); // Just the recoilState value
    // const [count, setCount] = useRecoilState(countAtom); // Same as useState

    return (
        <div>
            <b>{count}</b>
            <EvenCountRenderer />
        </div>
    );
}

function EvenCountRenderer() {
    const count = useRecoilValue(countAtom);

    // This is like a derived state, we update it only when the state updates.

    // const isEven = useMemo(() => {
    //     return count % 2 == 0;
    // }, [count]);

    // There is a better way to do this in Recoil using SELECTORS

    const isEven = useRecoilValue(evenSelector);

    return <>{isEven ? "It is even" : null}</>;
}

function Buttons({}) {
    console.log("Button re rendered");
    const setCount = useSetRecoilState(countAtom);
    return (
        <div>
            <button
                onClick={() => {
                    setCount((count) => count + 1);
                }}
            >
                Increase
            </button>
            <button
                onClick={() => {
                    setCount((count) => count - 1);
                }}
            >
                Decrease
            </button>
        </div>
    );
}

export default App;
