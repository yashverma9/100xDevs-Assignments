import { useRef } from "react";
import CreateHeader from "../components/CreateHeader";
import CreateInput from "../components/CreateInput";

export default function CreateBlog() {
    const formRef = useRef<any>(null);

    const handleSubmit = () => {
        console.log("In root handleSubmit!");
        if (formRef.current) formRef.current.submitForm();
    };

    return (
        <div className="flex flex-col">
            <CreateHeader handleSubmit={handleSubmit} />
            <CreateInput ref={formRef} />
        </div>
    );
}
