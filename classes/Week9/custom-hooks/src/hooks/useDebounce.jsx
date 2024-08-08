import { useState } from "react";
import { useEffect } from "react";

// Debounce is avoid api being hit for every small change in string, instead you can wait for few seconds to make a call

export default function useDebounce(inputValue, timout) {
    const [debouncedValue, setDebouncedValue] = useState("");
    useEffect(() => {
        const val = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, timout);

        return () => {
            clearTimeout(val);
        };
    }, [inputValue]);
    return debouncedValue;
}
