import { Link } from "react-router-dom";

export default function Footer() {

    const links = [
        { name: "Home", path: "/" },
        { name: "Directory", path: "/directory" },
        { name: "Vendors", path: "/vendors" },
        { name: "PassHolder", path: "/passHolders" },
        { name: "Lowdown", path: "/lowdown" },
        { name: "Contact Us", path: "/contact" },
    ];

    const social = [
        { icon: "ri-facebook-fill", link: "#" },
        { icon: "ri-google-fill", link: "#" },
        { icon: "ri-youtube-fill", link: "#" },
        { icon: "ri-instagram-fill", link: "#" },
    ];

    return (
        <footer className="relative overflow-hidden bg-linear-to-r from-[#1FA2A6] to-[#F64F8B] text-white">

            <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">

                {/* TOP SECTION */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-lg">Stay Connected</h3>
                        <p className="text-sm opacity-90 max-w-md">
                            Subscribe to our newsletter for the latest updates, events and local highlights.
                        </p>
                    </div>

                    <div className="flex w-full md:w-auto bg-white rounded-lg overflow-hidden">
                        <input
                            type="email"
                            placeholder="Enter your email here..."
                            className="px-4 py-2 text-sm text-gray-700 outline-none w-full md:w-64"
                        />
                        <button className="bg-pink-500 text-white px-4 text-sm font-medium hover:bg-pink-600">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* NAV LINKS */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">

                    {/* LINKS */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        {links.map((item, i) => (
                            <Link
                                key={i}
                                to={item.path}
                                className="hover:opacity-80 transition"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* SOCIAL */}
                    <div className="flex gap-3">
                        {social.map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                            >
                                <i className={`${item.icon} text-lg`} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="text-center text-xs mt-6 opacity-80">
                    © 2026. All rights reserved.
                </div>
            </div>

            {/* LEFT TREE */}
            <img src="/assets/f-2.png" className="absolute left-0 bottom-0" />

            {/* RIGHT TREE */}
            <img src="/assets/f-1.png" className="absolute right-0 bottom-0" />
        </footer>
    );
}