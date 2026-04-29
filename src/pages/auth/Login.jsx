import AuthLayout from "./AuthLayout";
import Button from "../../components/PrimaryBtn";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <AuthLayout
            title={
                <>Vendor <span className="text-(--primary-color)">log in</span></>
            }
            subtitle="Please fill your information below"
        >
            <form className="space-y-3 mt-6">
                <input type="email" placeholder="Email Address" className="input" />
                <input type="password" placeholder="Password" className="input" />

                <div className="text-right">
                    <Link to="/forgotPassword" className="text-sm text-(--primary-color)">
                        Forgot Password?
                    </Link>
                </div>

                <Button className="w-full" text="Login" />

                <p className="text-sm text-gray-600 text-center">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-(--primary-color)">
                        Register
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
}