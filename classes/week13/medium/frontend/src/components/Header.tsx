import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="flex items-center justify-start gap-8 p-5 pt-1">
            <div className="w-16">
                <img src="https://seeklogo.com/images/M/medium-logo-F0ACFCCD58-seeklogo.com.png" />
            </div>
            <div>Search bar</div>
            <div className="grow flex justify-end items-center gap-8">
                <Link to="/create">
                    <div>Write New</div>
                </Link>
                <div>Profile</div>
            </div>
        </div>
    );
}
