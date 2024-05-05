import { useMemo } from "react";
import { useState, useEffect } from "react";

export default function UseMemoApp() {
    const [count, setCount] = useState(0);
    const [values, setValues] = useState(0);

    // Imagine if this is an heavy operation, this will run every re-render. In our case everytime the button is clicked
    // let ans = 0;
    // for(let i = 0; i <= values; i++) {
    //   ans = ans + i;
    // }

    // Optimized approach. Whenever the values update, then only compute this operation, not at every re-render.
    const ans = useMemo(() => {
        console.log("iin useMemo");
        let ans = 0;
        for (let i = 0; i <= values; i++) {
            ans = ans + i;
        }
        return ans;
    }, [values]);

    return (
        <div>
            <input
                type="text"
                onChange={(e) => {
                    setValues(e.target.value);
                }}
            ></input>
            <p>Sum is {ans}</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Count is {count}
            </button>
        </div>
    );
}
