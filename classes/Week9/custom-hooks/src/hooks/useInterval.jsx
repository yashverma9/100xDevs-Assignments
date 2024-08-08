import { useEffect } from "react";

export default function useInterval(fn, timeout) {
    useEffect(() => {
        setInterval(() => {
            fn();
        }, timeout);
    }, []);
}
