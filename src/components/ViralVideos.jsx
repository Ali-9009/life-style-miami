import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

const videos = [
    { img: "https://picsum.photos/400/500?1", user: "Andy William", title: "Basic how to ride your skateboard comfortably", views: "58K views • 2 weeks ago", time: "7 min" },
    { img: "https://picsum.photos/400/500?2", user: "Johny Wise", title: "Prepare for your first skateboard jump", views: "53K views • 2 weeks ago", time: "7 min" },
    { img: "https://picsum.photos/400/500?3", user: "Budi Hakim", title: "Tips to playing skateboard on the ramp", views: "58K views • 2 weeks ago", time: "7 min" },
    { img: "https://picsum.photos/400/500?4", user: "Wijaya Abadi", title: "Basic Equipment to play skateboard safely", views: "58K views • 2 weeks ago", time: "7 min" },
    { img: "https://picsum.photos/400/500?5", user: "Alex Rider", title: "Skateboard balance training basics", views: "42K views • 1 week ago", time: "6 min" }
];

export default function ViralVideos() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="py-8 md:py-12">
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-center text-xl md:text-3xl font-semibold">
                    Viral <span className="text-(--primary-color)">Videos</span>
                </h2>

                <div className="flex gap-2">
                    <button ref={prevRef} className="w-10 h-10 bg-(--primary-color) text-white hover:bg-(--secondary-color) cursor-pointer shadow-md rounded-full flex items-center justify-center hover:scale-105 transition">
                        <ChevronLeft size={18} />
                    </button>
                    <button ref={nextRef} className="w-10 h-10 bg-(--primary-color) text-white hover:bg-(--secondary-color) cursor-pointer shadow-md rounded-full flex items-center justify-center hover:scale-105 transition">
                        <ChevronRight size={18} />
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
                {videos.map((v, i) => (
                    <SwiperSlide key={i}>
                        <div className="rounded-2xl overflow-hidden bg-white">

                            <div className="relative">
                                <img src={v.img} className="w-full h-full object-cover" />
                                <span className="absolute top-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-full">
                                    {v.time}
                                </span>
                            </div>

                            <div className="p-3">
                                <p className="text-xs text-gray-500">{v.user}</p>
                                <h3 className="text-sm font-medium mt-1 leading-snug">
                                    {v.title}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">{v.views}</p>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}