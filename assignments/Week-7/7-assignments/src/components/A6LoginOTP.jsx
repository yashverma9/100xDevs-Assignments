import { useState } from "react";

export default function A6LoginOTP() {
    const [isOtpPage, setIsOtpPage] = useState(false);

    function focusNextInput(e) {
        const target = e.target;
        if (target.value.length === 1) {
            const next = target.nextElementSibling;
            if (next && next.tagName.toLowerCase() === "input") next.focus();
        }
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "100vh",
                alignItems: "center",
                gap: "10px",
            }}
        >
            <h3>Login Page</h3>
            {isOtpPage ? (
                <div>
                    <input
                        type="number"
                        maxLength="1"
                        onInput={focusNextInput}
                    ></input>
                    <input
                        type="number"
                        maxLength={1}
                        onInput={focusNextInput}
                    ></input>
                    <input
                        type="number"
                        maxLength="1"
                        onInput={focusNextInput}
                    ></input>
                    <input type="number" maxLength="1"></input>

                    <button onClick={() => setIsOtpPage(false)}>Login</button>
                </div>
            ) : (
                <div>
                    <input type="text" placeholder="Enter Mobile Number" />
                    <button onClick={() => setIsOtpPage(true)}>Send OTP</button>
                </div>
            )}
        </div>
    );
}
