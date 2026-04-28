import { Link } from "react-router-dom";
import Button from "./PrimaryBtn";

export default function Footer() {
    return (
        <footer id="footer-component" className="border-t border-[#D1D1D1]">
            <div className="max-w-6xl mx-auto py-12 sm:pt-16 px-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

                <div className=" flex flex-col items-start flex-1">
                    <Link to="/">
                        <img
                            src="/assets/logo.png"
                            alt="Logo"
                            className=""
                        />
                    </Link>

                    <p className="">
                        We kaboom your beauty holiday  <br /> instantly and memorable.
                    </p>
                </div>

                <div className=" flex flex-col items-end justify-center gap-8 flex-1">
                    <Button text="Register Now" />

                    <p className="">
                        We kaboom your beauty holiday <br /> instantly and memorable.
                    </p>

                </div>
            </div>

            <div className="bg-black text-white py-2">
                <p className="text-center text-sm">
                    ©2026 All rights reserved.
                </p>
            </div>
        </footer>
    );
}