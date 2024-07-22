import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate(); // Can be only invoked by a component inside BrowserRouter
    return (
        <>
            This is my header, should show on top of all!
            <button
                onClick={() => {
                    // This way is going te fetch the html, js again as its just opening the react app again.
                    // This is not the ideal way to go forward
                    // window.location.href = "/"
                    navigate("/");
                }}
            >
                Landing page
            </button>
            <button
                onClick={() => {
                    //window.location.href = "/dashboard"
                    navigate("/dashboard");
                }}
            >
                Dashboard
            </button>
        </>
    );
}
