// We need to write this "use client" above this component because we want this to be handled at the client side and not server side because there is an onclick
// handler added to this component which cant be handled at server side (no buttons in server side). BY DEFAULT EVERYTHING IS A SERVER SIDE COMPONENT
// NOTE- This loses your SEO capabilities which come as a plus from NEXT
// We should avoid client as much as possible, hence we should segregate these components and avoid parent becoming client

// hence now we shift the button to another component, so that rest of the signin remains part of SEO.
// DEFER AS MUCH AS POSSIBLE!

// "use client";

import SigninButton from "./SigninButton";

export const SiginComponent = () => {
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <a
                    href="#"
                    className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
                >
                    <div>
                        <div className="px-10">
                            <div className="text-3xl font-extrabold">
                                Sign in
                            </div>
                        </div>
                        <div className="pt-2">
                            <LabelledInput
                                label="Username"
                                placeholder="abcd@gmail.com"
                            />
                            <LabelledInput
                                label="Password"
                                type={"password"}
                                placeholder="123456"
                            />
                            <SigninButton />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">
                {label}
            </label>
            <input
                type={type || "text"}
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}
