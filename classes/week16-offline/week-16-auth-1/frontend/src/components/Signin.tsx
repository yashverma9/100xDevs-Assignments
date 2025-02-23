import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <input
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                type="text"
                placeholder="username"
            />
            <input
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                type="password"
                placeholder="password"
            />
            <button
                onClick={async () => {
                    await axios.post(
                        `${BACKEND_URL}/signin`,
                        {
                            username,
                            password,
                        },
                        {
                            withCredentials: true, // This flag is important only when frontend and backend running on different ports. Can be removed in next apps
                        }
                    );
                    alert("you are logged in");
                }}
            >
                Submit
            </button>
        </div>
    );
};
