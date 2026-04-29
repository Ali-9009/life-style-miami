import { Link } from "react-router-dom";
import Button from "../../components/PrimaryBtn";
import AuthLayout from "./AuthLayout";

export default function Register() {
    return (
        <AuthLayout
            title={
                <>Vendor <span className="text-(--primary-color)">Registration</span></>
            }
            subtitle="Please fill your information below"
        >
            <form className="space-y-3 mt-6">

                <input type="text" placeholder="Business Name" className="input" />
                <input type="email" placeholder="Email Address" className="input" />

                {/* Service Input */}
                <input type="text" placeholder="Service (e.g. Cleaning, Plumbing)" className="input" />

                <input type="text" placeholder="Address 1" className="input" />
                <input type="text" placeholder="Address 2 Optional" className="input" />
                <input type="text" placeholder="State" className="input" />
                <input type="text" placeholder="City" className="input" />
                <input type="text" placeholder="Zipcode" className="input" />
                <input type="text" placeholder="Business Number" className="input" />
                <input type="tel" placeholder="Owner Mobile Number" className="input" />

                <input type="password" placeholder="Password" className="input" />
                <input type="password" placeholder="Confirm Password" className="input" />

                <div className="input">
                    <input
                        type="file"
                        accept="image/*"
                        className="w-full mt-1 text-sm file:mr-3 file:px-3 file:py-2 file:border-0 file:rounded-lg file:bg-(--primary-color) file:text-white cursor-pointer"
                    />
                </div>

                <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                        type="checkbox"
                        className="w-4 h-4 accent-(--primary-color) text-white cursor-pointer"
                    />
                    By checking this box, you confirm that you have read and agree to the PassHolder. 
                </label>

                <Button className="w-full" text="Register" />

                <p className="text-sm text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-(--primary-color)">
                        Login
                    </Link>
                </p>

            </form>
        </AuthLayout>
    );
}