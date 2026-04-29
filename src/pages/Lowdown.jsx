import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";

export default function Lowdown() {
    const posts = [
        {
            title: "Dream destinations to visit this year in Paris",
            img: "assets/b-1.jpg",
        },
        {
            title: "The Anatomy of a Web Page and Basic Elements",
            img: "assets/b-1.jpg",
        },
        {
            title: "Types of Contrast in User Interface Design",
            img: "assets/b-1.jpg",
        },
        {
            title: "Dream destinations to visit this year in Paris",
            img: "assets/b-1.jpg",
        },
    ];

    return (
        <main className="max-w-7xl mx-auto py-8 px-4 space-y-14">
            <Hero title="Lowdown" />

            <section className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {posts.map((item, i) => (
                        <Link to={`/lowdownDetail`}>
                            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">

                                {/* IMAGE */}
                                <div className="h-64 bg-gray-100">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-4 space-y-3">
                                    <h3 className="font-semibold text-md leading-5">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        Progressively innovative cooperative systems through.
                                    </p>

                                    <div className="flex items-center gap-2 text-xs text-gray-400 pt-2 border-t">
                                        <Clock size={14} />
                                        <span>4 Minutes Read</span>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))}

                </div>
            </section>
        </main>
    );
}