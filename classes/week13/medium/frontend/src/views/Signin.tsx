import Quote from "../components/Quote";
import Auth from "../components/Auth";

export default function Signin() {
    return (
        <div className="flex w-full h-screen">
            <Auth type="signin" />
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    );
}
