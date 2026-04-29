import AuthLayout from "./AuthLayout";
import Button from "../../components/PrimaryBtn";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
    const { token } = useParams(); // from URL

    return (
        <AuthLayout
            title={
                <>Vendor Reset <span className="text-(--primary-color)">Password</span></>
            } >
            <form className="space-y-3 mt-6">
                <input
                    type="password"
                    placeholder="New Password"
                    className="input"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input"
                />

                <Button to="/" className="w-full" text="Update Password" />
            </form>
        </AuthLayout>
    );
}