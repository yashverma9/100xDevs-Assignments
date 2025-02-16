import {
    ChangeEvent,
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Link } from "react-router-dom";

interface CreateForm {
    title: string;
    content: string;
}

const CreateInput = forwardRef((_, ref: any) => {
    const inFormRef = useRef<any>(null);
    const [createInput, setCreateInput] = useState<CreateForm>({
        title: "",
        content: "",
    });
    const [createAlert, setCreateAlert] = useState<boolean>(false);

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setCreateInput((c) => ({ ...c, [name]: value }));
        //
    }

    useImperativeHandle(ref, () => ({
        submitForm: async () => {
            if (inFormRef.current) {
                console.log("Submitting form...");
                try {
                    let resp;

                    resp = await axios.post(
                        `${BACKEND_URL}/api/v1/blog`,
                        createInput,
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem(
                                    "jwt"
                                )}`,
                            },
                        }
                    );
                    console.log("resp", resp);
                    setCreateAlert(true);
                } catch (e) {
                    console.error("Error:", e);
                }

                // <- Not needed as no need to actually submit form ->
                // inFormRef.current.dispatchEvent(
                //     new Event("submit", { bubbles: true, cancelable: true })
                // );
            }
        },
    }));

    return (
        <div className="p-10 flex items-center">
            {createAlert ? (
                <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold pb-4">
                            Your blog was published!
                        </h2>
                        <Link
                            to={"/blogs"}
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
                        >
                            Go to blogs
                        </Link>
                    </div>
                </div>
            ) : null}
            <form
                className="flex flex-col"
                ref={inFormRef}
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("inside the onSubmit of the form!");
                }}
            >
                <div className="flex items-center">
                    <div className="text-gray-500 border-r border-gray-300 px-2 py-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width=".8"
                            stroke="currentColor"
                            className="size-14"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        className="focus:outline-none text-6xl pl-2"
                        placeholder="Title"
                        name="title"
                        onChange={handleOnChange}
                    />
                </div>

                <input
                    className="focus:outline-none text-3xl pl-20"
                    placeholder="Tell your story..."
                    name="content"
                    onChange={handleOnChange}
                />
            </form>
        </div>
    );
});

export default CreateInput;
