import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Filter, Plus, Search } from "lucide-react";
import "swiper/css";
import Button from "../components/PrimaryBtn";
import { Link } from "react-router-dom";
import ImageLoader from "../components/ImageLoader";

const cards = [
    {
        logo: "assets/d-1.jpg",
        title: "Millennial Beauty Salon",
        desc: "Copper Blues partners with onlyindade ..",
        rating: "4.7 (412)",
        views: "7.5M",
    },
    {
        logo: "assets/d-1.jpg",
        title: "Millennial Beauty Salon",
        desc: "Copper Blues partners with onlyindade ..",
        rating: "4.7 (412)",
        views: "7.5M",
    },
    {
        logo: "assets/d-1.jpg",
        title: "Millennial Beauty Salon",
        desc: "Copper Blues partners with onlyindade ..",
        rating: "4.7 (412)",
        views: "7.5M",
    },
    {
        logo: "assets/d-1.jpg",
        title: "Millennial Beauty Salon",
        desc: "Copper Blues partners with onlyindade ..",
        rating: "4.7 (412)",
        views: "7.5M",
    }
];

function Section({ title }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="my-10">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-center text-xl md:text-3xl font-semibold">
                    {title} <span className="text-(--primary-color)">Miami</span>
                </h2>

                <div className="flex items-center gap-2">
                    <button ref={prevRef} className="w-10 h-10 bg-(--primary-color) text-white hover:bg-(--secondary-color) cursor-pointer shadow-md rounded-full flex items-center justify-center hover:scale-105 transition">
                        <ChevronLeft size={16} />
                    </button>
                    <button ref={nextRef} className="w-10 h-10 bg-(--primary-color) text-white hover:bg-(--secondary-color) cursor-pointer shadow-md rounded-full flex items-center justify-center hover:scale-105 transition">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                breakpoints={{
                    320: { slidesPerView: 1.2 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 }
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {cards.map((c, i) => (
                    <SwiperSlide key={i}>
                        <div className="border border-gray-300 p-2 bg-white relative">

                            <ImageLoader
                                src={c.logo}
                                alt={c.title}
                                className="w-full shadow mb-3 overflow-hidden"
                                imgClass="object-cover shadow-md"
                            />
                            <div className="flex items-center justify-between text-xs mb-1">
                                <span>⭐ {c.rating}</span>
                                <span>▶ {c.views}</span>
                            </div>

                            <h3 className="font-semibold text-md">{c.title}</h3>

                            <p className="text-sm text-gray-500 mt-1">{c.desc}</p>

                            <Link
                                to={`/directory-detail`}
                                className="block mt-3 w-full text-center bg-(--primary-color) hover:bg-(--secondary-color) cursor-pointer text-white text-md font-semibold duration-300 py-2 rounded"
                            >
                                Claim my business
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default function Directory() {
    return (
        <main className="max-w-7xl mx-auto py-8 px-4">
            <div className="">

                {/* TOP BAR */}
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    {/* BUTTONS */}
                    <div className="flex gap-2 overflow-x-auto md:overflow-visible">
                        <Button icon={<Filter size={16} />} text="Manufacturing" iconPosition="left" />
                        <Button icon={<Plus size={16} />} text="Add Business" iconPosition="left" />
                    </div>

                    {/* SEARCH */}
                    <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 bg-white shadow-sm w-full md:w-72 focus-within:border-(--primary-color) focus-within:ring-2 focus-within:ring-(--primary-color)/20">
                        <Search size={16} className="text-gray-500 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
                        />
                    </div>

                </div>

                <Section title="Trending in" />
                <Section title="Browse Local Business" />

            </div>
        </main>
    );
}