import Button from "../../components/PrimaryBtn";
import AuthLayout from "./AuthLayout";

export default function ForgotPassword() {
    return (
        <AuthLayout
            title={
                <>Vendor <span className="text-(--primary-color)">Forgot Password</span></>
            }
            subtitle="Enter your Email we 'll send you a link to reset your password"
        >
            <form className="space-y-3 mt-6">
                <input type="email" placeholder="Email Address" className="input" />

                <Button to="/resetPassword" className="w-full" text="Send Reset Link" />
            </form>
        </AuthLayout>
    );
}