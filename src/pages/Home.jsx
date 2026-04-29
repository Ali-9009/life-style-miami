import Categories from "../components/Categories";
import Button from "../components/PrimaryBtn";
import ViralVideos from "../components/ViralVideos";

const news = [
    {
        img: "/assets/news-1.jpg",
        date: "RaceID – 06 June 2023",
        title: "6-Year-Old Horse Dies at Belmont Park After Race Injury",
        desc: "NEW YORK – A 6-year-old horse died after suffering injuries..."
    },
    {
        img: "/assets/news-2.jpg",
        date: "Mark L – 02 June 2023",
        title: "Sav Bunk Embraces Longer Season With World Cup",
        desc: "Local cyclist extends her season while preparing..."
    },
    {
        img: "/assets/news-3.jpg",
        date: "KBF – 02 June 2023",
        title: "Ryan Garcia is fighting again, this time on social media",
        desc: "The boxer uses social platforms to share training..."
    }
];

const filters = ["All", "Lifestyle", "Vogue", "Health & Fitness", "Travel", "Gadgets", "More"]

const rightNews = [
    { img: "/assets/w-news-2.jpg", title: "Penn’s Expanding Political Climate Gears Up For 2020 Election" },
    { img: "/assets/w-news-3.jpg", title: "Things To Look For In A Financial Trading Platform" },
    { img: "/assets/w-news-4.jpg", title: "The Only Thing That Overcomes Hard Luck Is Hard Work" },
    { img: "/assets/w-news-5.jpg", title: "Success Is Not A Good Teacher Failure Makes You Humble" },
]

export default function Home() {

    return (
        <main className="max-w-7xl mx-auto py-8 px-4">

            <section className="relative overflow-hidden rounded-2xl">
                <img src="/assets/bg-banner.png" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" />
                <div className="relative px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-22 flex flex-col items-start">
                    <h1>
                        <span className="block text-2xl font-bold text-white tracking-widest uppercase">Welcome To</span>
                        <span className="block text-3xl md:text-6xl font-bold bg-linear-to-r from-(--primary-color) via-white to-(--secondary-color) bg-clip-text text-transparent">THE NETWORK</span>
                    </h1>
                    <p className="mt-3 text-white/85 max-w-md text-sm sm:text-base">
                        Miami's most trusted platform for news, culture and community.
                    </p>
                    <div className="mt-4">
                        <Button text="Explore now" />
                    </div>
                </div>
            </section>

            <Categories />

            <section className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2 bg-white border border-gray-300 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-xl md:text-3xl font-semibold mb-6">
                        Local <span className="text-(--primary-color)">News</span>
                    </h3>

                    <div className="space-y-6">
                        {news.map((item, i) => (
                            <div key={i} className="flex gap-4 group">
                                <div className="w-28 h-20 rounded-xl overflow-hidden shrink-0">
                                    <img
                                        src={item.img}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>

                                <div className="flex-1">
                                    <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                                        {item.date}
                                    </p>

                                    <h4 className="text-sm font-semibold leading-snug mt-1">
                                        {item.title}
                                    </h4>

                                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="relative rounded-2xl overflow-hidden shadow-sm">
                    <img
                        src="/assets/news-4.jpg"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute bottom-5 left-5 text-white">
                        <p className="text-xs opacity-80">Mark – 03 June 2023</p>
                        <h4 className="text-xl md:text-2xl font-semibold leading-snug max-w-xs">
                            DISCOVER THE MEMBER BENEFITS OF USA CYCLING!
                        </h4>
                    </div>
                </aside>

            </section>

            <section className="py-8 md:py-12">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <h2 className="text-xl md:text-3xl font-semibold">
                        World <span className="text-(--primary-color)">News</span>
                    </h2>

                    <div className="flex flex-wrap gap-2 text-xs">
                        {filters.map((f, i) => (
                            <button key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-(--primary-color) text-white hover:bg-(--secondary-color) transition">
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <div className="lg:col-span-2 space-y-4">
                        <div className="relative rounded-xl overflow-hidden">
                            <img src="/assets/w-news-1.jpg" className="w-full h-72 object-cover" />
                            <span className="absolute top-4 left-4 text-xs bg-(--secondary-color) text-white px-3 py-1 rounded-full">
                                Business
                            </span>
                        </div>

                        <div>
                            <p className="text-xs text-gray-500">Craig Bator – 27 Dec 2020</p>
                            <h3 className="text-xl font-semibold mt-1">
                                Now Is the Time to Think About Your Small Business Success
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue condimentum maecenas.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        {rightNews.map((n, i) => (
                            <div key={i} className="flex gap-4">
                                <img src={n.img} className="w-24 h-18 rounded-lg object-cover shrink-0" />
                                <div>
                                    <p className="text-[11px] text-gray-400">Craig Bat – 27 Dec 2020</p>
                                    <h4 className="text-sm font-medium leading-snug mt-1">{n.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <ViralVideos />

        </main>
    );
}