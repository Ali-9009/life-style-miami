export default function Hero({ title, description }) {
    return (
        <section className="relative overflow-hidden rounded-2xl text-center md:py-18 py-12 px-6 text-white">

            {/* animated gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-[#03AFC0] via-white to-[#FD4B91] opacity-90 animate-[moveGradient_8s_ease-in-out_infinite]"></div>

            {/* glow blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#03AFC0]/40 blur-3xl rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#FD4B91]/40 blur-3xl rounded-full animate-pulse"></div>
            </div>

            {/* content */}
            <div className="relative z-10 max-w-4xl mx-auto text-gray-900">

                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    {title}
                </h1>

                <p className="mt-5 text-gray-700 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                    {description}
                </p>

            </div>

            {/* animation */}
            <style>
                {`
                @keyframes moveGradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                div[class*="bg-gradient-to-r"] {
                    background-size: 200% 200%;
                }
                `}
            </style>

        </section>
    );
}