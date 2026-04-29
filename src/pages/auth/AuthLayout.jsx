export default function AuthLayout({ title, subtitle, children }) {
    return (
        <main className="max-w-7xl mx-auto py-8 px-4">
            <section
                className="rounded-3xl overflow-hidden shadow-md py-8 md:py-12 bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat"
                style={{
                    backgroundImage: window.innerWidth >= 1024 ? "url('/assets/contact.jpg')" : "none"
                }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 items-center">

                        {/* FORM SIDE */}
                        <div className="w-full max-w-md mx-auto lg:mx-0 text-center lg:text-left">
                            <h2 className="text-xl md:text-3xl font-semibold">
                                {title}
                            </h2>

                            <p className="poppins text-gray-600 mt-2">
                                {subtitle}
                            </p>

                            <div className="mt-6">
                                {children}
                            </div>
                        </div>

                        {/* IMAGE SIDE */}
                        <div className="hidden lg:flex items-start justify-end">
                            <img src="/assets/auth-logo.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}