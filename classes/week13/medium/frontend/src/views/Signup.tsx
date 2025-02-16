import Quote from "../components/Quote";
import Auth from "../components/Auth";

export default function Signup() {
    return (
        <div className="flex w-full h-screen justify-center">
            <Auth type="signup" />
            <div className="hidden lg:block">
                <Quote />
            </div>
        </div>
    );
}
