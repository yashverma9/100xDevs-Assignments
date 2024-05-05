import { useState } from "react";
import { useCallback } from "react";
import React from "react";

export default function UseCallbackApp() {
    const [counter, setCounter] = useState(1);

    // We have uses useCallback to avoid initialization of this function and hence changing the prop for child again again
    // This will redefine only if a dependency updates. here that is counter. (it can be empty, which means only once)
    // Hence, useCallback is preventing re-render of child when not required

    // const somePropFunc = useCallback(() => {
    //     console.log("hey we are doing something and counter is: ", counter);
    // }, [counter]);

    // In this case it will not re-initialize again even if counter updates
    const somePropFunc = useCallback(() => {
        console.log("hey we are doing something");
    }, []);

    return (
        <div>
            {/* <button onClick={() => setCounter(counter + 1)}> */}
            <button onClick={() => setCounter(counter + 1)}>
                Incrememnt counter ({counter})
            </button>
            <br></br>
            <br></br>
            <ChildComp somePropFunc={somePropFunc} />
        </div>
    );
}

// This will only re-render if a prop updates
const ChildComp = React.memo(({ somePropFunc }) => {
    console.log("rendered again!");
    return (
        <>
            <button onClick={somePropFunc}>Click here</button>
        </>
    );
});
