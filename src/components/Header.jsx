import { useState, useEffect } from "react";
import {
    Menu,
    X,
    Heart,
    MessageCircle,
    Home,
    Users,
    Store,
    FileText,
    Phone,
    CalendarDays,
    ThermometerSun,
} from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import Button from "./PrimaryBtn";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const navItems = [
        { name: "Home", icon: Home, path: "/" },
        { name: "Directory", icon: Users, path: "/directory" },
        { name: "Vendors", icon: Store, path: "/vendors" },
        { name: "PassHolders", icon: Users, path: "/passHolders" },
        { name: "The Lowdown", icon: FileText, path: "/lowdown" },
        { name: "Contact Us", icon: Phone, path: "/contact" },
    ];

    //  Detect scroll for sticky animation
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 120);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const today = new Date().toDateString();

    return (
        <>
            {/* TOP BAR */}
            <div className="w-full bg-white border-b border-gray-200 py-2 text-sm shadow-sm">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4">

                    {/* ✅ Updated Icons */}
                    <div className="flex items-center text-[11px] space-x-4 text-gray-600">
                        <div className="flex items-center gap-1">
                            <ThermometerSun size={14} />
                            <span>15°C Miami</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <CalendarDays size={14} />
                            <span>{today}</span>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center space-x-4 text-lg">
                        <i className="ri-facebook-fill hover:text-blue-600 cursor-pointer"></i>
                        <i className="ri-twitter-x-line hover:text-black cursor-pointer"></i>
                        <i className="ri-linkedin-fill hover:text-blue-500 cursor-pointer"></i>
                    </div>
                </div>
            </div>

            {/* HEADER */}
            <header className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/">
                        <img src="assets/logo.png" alt="logo" />
                    </Link>

                    <div className="hidden md:flex items-center gap-3">
                        <Button text="Login" />
                        <Button text="Vendor Login" />

                        <Heart className="w-5 h-5 cursor-pointer hover:text-red-500" />
                    </div>

                    <button onClick={() => setOpen(true)} className="md:hidden">
                        <Menu />
                    </button>
                </div>
            </header>

            {/*  NAVBAR (SMART STICKY) */}
            <nav
                className={`hidden md:block z-30 transition-all duration-300
        ${isSticky
                        ? "fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow-md animate-slideDown"
                        : "relative max-w-7xl mx-auto bg-white rounded-xl shadow-sm"
                    }`}
            >
                <div
                    className={`flex justify-center space-x-12 py-4 text-sm transition-all duration-300 ${isSticky ? "max-w-7xl mx-auto" : ""
                        }`}
                >
                    {navItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={i}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-1 px-3 py-2 rounded-full text-md font-semibold transition ${isActive
                                        ? "bg-(--primary-color) text-white"
                                        : "hover:bg-(--primary-color) hover:text-white"
                                    }`
                                }
                            >
                                <Icon size={16} />
                                {item.name}
                            </NavLink>
                        );
                    })}
                </div>
            </nav>

            {/* MOBILE SIDEBAR */}
            <div
                className={`fixed top-0 right-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4 border-b">
                    <X onClick={() => setOpen(false)} className="cursor-pointer" />
                </div>

                <div className="flex flex-col space-y-3 px-6 py-4 text-sm">
                    {navItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={i}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 py-2 px-3 rounded transition ${isActive
                                        ? "bg-(--secondary-color) text-white"
                                        : "hover:bg-(--secondary-color) hover:text-white"
                                    }`
                                }
                            >
                                <Icon size={16} />
                                {item.name}
                            </NavLink>
                        );
                    })}

                    <div className="flex items-center gap-2 text-(--primary-color) mt-3">
                        <MessageCircle />
                        <span className="font-medium">Chat</span>
                    </div>

                    <hr />

                    <button className="bg-(--primary-color) text-white py-2 px-4 rounded hover:bg-(--secondary-color) transition">
                        FamPass Holder Login
                    </button>

                    <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-(--secondary-color) transition">
                        Vendor Login
                    </button>
                </div>
            </div>

            {/* OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40"
                />
            )}

            {/* ANIMATION */}
            <style>
                {`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-slideDown {
            animation: slideDown 0.3s ease forwards;
          }
        `}
            </style>
        </>
    );
}