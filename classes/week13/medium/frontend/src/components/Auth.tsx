import { SigninType, SignupType } from "@vermayash/medium-zod";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

interface LabelledInputType {
    name: string;
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({
    name,
    label,
    placeholder,
    onChange,
    type,
}: LabelledInputType) {
    return (
        <div className="p-1">
            <label className="flex flex-col">
                <div className="font-medium pb-2">{label}</div>
                <input
                    className="border-gray-300 border border-1 p-2 rounded-md"
                    type={type || "text"}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    required
                />
            </label>
        </div>
    );
}

export default function Auth({ type }: { type: "signin" | "signup" }) {
    const navigate = useNavigate();
    const [signupInputs, setSignupInputs] = useState<SignupType>({
        name: "",
        email: "",
        password: "",
    });

    const [signinInputs, setSigninInputs] = useState<SigninType>({
        email: "",
        password: "",
    });

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        if (type === "signin")
            setSigninInputs((c) => ({ ...c, [name]: value }));
        else setSignupInputs((c) => ({ ...c, [name]: value }));
        //
    }

    async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            let resp;
            if (type === "signin")
                resp = await axios.post(
                    `${BACKEND_URL}/api/v1/user/signin`,
                    signinInputs
                );
            else
                resp = await axios.post(
                    `${BACKEND_URL}/api/v1/user/signup`,
                    signupInputs
                );
            console.log("resp", resp);
            const jwt = resp.data.token;
            console.log("jwt:", jwt);

            if (jwt) {
                localStorage.setItem("jwt", jwt);
                navigate("/blogs");
            } else alert(resp.data);
        } catch (e) {
            // alert error to user;
            if (type === "signup") alert(`Error while signing up ${e}`);
            else alert(`Error wile loging in: ${e}`);
            console.error("Error:", e);
        }
    }

    console.log("signupInput:", signupInputs);
    console.log("signinInput:", signinInputs);

    return (
        <div className="flex flex-col w-full items-center justify-center">
            <div className="text-4xl font-bold">
                {type === "signin"
                    ? "Login to your account"
                    : "Create an account"}
            </div>
            {type === "signin" ? (
                <div className="text-gray-500 pt-1">
                    Don't have an account?{" "}
                    <span className="underline">
                        <Link to="/signup">Signup</Link>
                    </span>
                </div>
            ) : (
                <div className="text-gray-500 pt-1">
                    Already have an account?{" "}
                    <span className="underline">
                        <Link to="/signin">Login</Link>
                    </span>
                </div>
            )}

            <div className="flex flex-col w-full px-40 pt-4">
                <form onSubmit={handleSubmit}>
                    {type === "signin" ? null : (
                        <LabelledInput
                            label="Name"
                            name="name"
                            placeholder="Enter your Name"
                            onChange={handleOnChange}
                            type="text"
                        />
                    )}
                    <LabelledInput
                        label="Email"
                        name="email"
                        placeholder="m@example.com"
                        onChange={handleOnChange}
                        type="text"
                    />
                    <LabelledInput
                        label="Password"
                        name="password"
                        placeholder=""
                        onChange={handleOnChange}
                        type="password"
                    />
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="bg-black text-white p-2 w-full rounded-md font-medium"
                        >
                            {type === "signin" ? "Sign In" : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
