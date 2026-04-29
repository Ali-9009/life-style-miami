import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import ImageLoader from "./ImageLoader";

const data = [
    { img: "/assets/c-1.jpg", name: "All Categories" },
    { img: "/assets/c-2.jpg", name: "Manufacturing" },
    { img: "/assets/c-3.jpg", name: "Education and Training" },
    { img: "/assets/c-4.jpg", name: "Construction" },
    { img: "/assets/c-5.jpg", name: "Service" },
    { img: "/assets/c-6.jpg", name: "Retail" },
    { img: "/assets/c-7.jpg", name: "Health and Wellness" }
];

export default function Categories() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="py-8 md:py-12">
            <h2 className="text-center text-xl md:text-3xl font-semibold mb-6">
                Browse Your <span className="text-(--primary-color)">Local Businesses</span>
            </h2>

            <div className="relative px-4">
                <button
                    ref={prevRef}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-(--primary-color) text-white hover:bg-(--secondary-color) cursor-pointer shadow-md rounded-full flex items-center justify-center hover:scale-105 transition"
                >
                    <ChevronLeft size={18} />
                </button>

                <button
                    ref={nextRef}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-(--primary-color) text-white hover:bg-(--secondary-color) cursor-pointer shadow-md rounded-full flex items-center justify-center hover:scale-105 transition"
                >
                    <ChevronRight size={18} />
                </button>

                <Swiper
                    modules={[Navigation]}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    spaceBetween={12}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 6 }
                    }}
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="text-center cursor-pointer">
                                <div className="border border-gray-200 rounded-lg overflow-hidden p-3">
                                    <ImageLoader
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                        imgClass="object-cover"
                                    />                                </div>
                                <p className="text-md font-semibold mt-2">{item.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}