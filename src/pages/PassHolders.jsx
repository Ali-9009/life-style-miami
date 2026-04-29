import { CheckCircle } from "lucide-react";
import FAQ from "../components/FAQ";
import Button from "../components/PrimaryBtn"
import Hero from "../components/Hero";
import ImageLoader from "../components/ImageLoader";


export default function PassHolders() {
    return (
        <main className="max-w-7xl mx-auto py-8 px-4 space-y-14">

            <Hero
                title="Welcome to the Life Style"
                description="The Pass connects you to exclusive discounts and special perks from verified local businesses across the 305 all for free. Think of it as your digital key to discovering Miami’s hidden gems, from restaurants to gyms, salons, and boutiques, while supporting the small businesses that make this city one of a kind."
            />

            <section className="grid md:grid-cols-2 gap-10 items-center">
                <ImageLoader
                    src="assets/p-1.jpg"
                    alt="preview"
                />

                <div>
                    <h2 className="text-xl md:text-3xl font-semibold">
                        Why be a <span className="text-(--primary-color)">pass holder?</span>
                    </h2>

                    <p className="mt-4 font-medium leading-7">
                        The Passis a free digital program created by  to help locals and visitors explore Miami’s top-rated small businesses.
                    </p>

                    <p className="mt-4 font-medium leading-7">
                        When you show your Passat participating locations, you’ll unlock:
                    </p>

                    <ul className="mt-6 space-y-3 font-medium">
                        {[
                            "Exclusive discounts and perks available only to PassHolders",
                            "Verified local businesses you can trust, all -Certified",
                            "Constantly updated offers from restaurants, spas, and service providers all across Dade",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">

                                <CheckCircle className="text-(--primary-color) w-5 h-5 mt-1 shrink-0" />

                                <span className="text-sm sm:text-base leading-snug">
                                    {item}
                                </span>

                            </li>
                        ))}
                    </ul>

                    <p className="mt-4 font-medium leading-7">
                        It’s more than a pass it’s a way to support the city you love while saving money at the same time.
                    </p>
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                    <h2 className="text-xl md:text-3xl font-semibold">
                        Why You’ll <span className="text-(--primary-color)">Love It</span>
                    </h2>
                    <div>
                        <strong>Save While You Explore</strong>
                        <p className="font-medium leading-7">
                            Enjoy exclusive discounts at Miami’s favorite local spots — all curated by .
                        </p>
                    </div>

                    <div>
                        <strong>Support Small Businesses</strong>
                        <p className="font-medium leading-7">
                            Every offer you redeem helps a local business grow. By using your FamPass, you’re keeping Miami’s small-business scene alive and thriving.
                        </p>
                    </div>

                    <div>
                        <strong>The lifestyle App Coming Soon</strong>
                        <p className="font-medium leading-7">
                            Soon, you’ll be able to browse nearby deals, discover new spots, and redeem perks instantly — all from your phone. Stay tuned for the official launch and be among the first to access Miami’s best local offers through the new life Style App.
                        </p>
                    </div>

                    <div>
                        <strong>Always Something New</strong>
                        <p className="font-medium leading-7">
                            New businesses and offers are added all the time, so there’s always another reason to check back and explore what’s happening around the 305.
                        </p>
                    </div>

                    <div>
                        <strong>Ongoing Support</strong>
                        <p className="font-medium leading-7">
                            We don’t just list your business we help it grow with real strategies and continuous guidance.
                        </p>
                    </div>
                </div>

                <ImageLoader
                    src="assets/p-2.jpg"
                    alt="preview"
                />
            </section>

            <section className="grid md:grid-cols-2 gap-10 items-center">
                <ImageLoader
                    src="assets/v-3.jpg"
                    alt="preview"
                />

                <div>
                    <h2 className="text-xl md:text-3xl font-semibold">
                        How It <span className="text-(--primary-color)">Works</span>
                    </h2>

                    <ul className="mt-6 space-y-3 font-medium">
                        {[
                            "Get Your Free Pass– No payment, no sign-up fees.",
                            "Discover Local Offers – Search businesses participating in the passHolder program.",
                            "Show Your Pass – Redeem your discount by showing your passHolder at checkout.",
                            "Enjoy & Support Local – Save money while helping small businesses thrive.",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">

                                <CheckCircle className="text-(--primary-color) w-5 h-5 mt-1 shrink-0" />

                                <span className="text-sm sm:text-base leading-snug">
                                    {item}
                                </span>

                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="text-center space-y-8">
                <h2 className="text-center text-xl md:text-3xl font-semibold">
                    Featured <span className="text-(--primary-color)">Categories</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <Card title="Food & Drink" desc="Rooftops, cafés, bars, and local favorites" img="assets/i-4.png" />
                    <Card title="Wellness & Beauty" desc="salons, fitness studios, and skincare clinics" img="assets/i-5.png" />
                    <Card title="Shops & Services" desc="Boutiques, creative studios, and home services" img="assets/i-6.png" />

                </div>
            </section>

            <FAQ />

            <section className="rounded-2xl bg-linear-to-r from-[#03AFC0]/25 to-[#FD4B91]/25 text-gray-900 px-6 py-8 md:py-16 flex flex-col items-center justify-center text-center space-y-5 shadow-sm">

                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                    Be Part of the  community
                </h2>

                <p className="max-w-2xl text-sm md:text-base text-gray-700">
                    Your Pass connects you to the best of Miami the local restaurants, medspas, shops, and services that make this city special. No sign-ups. No payments. Just perks, savings, and local love.
                </p>
                <Button text="View Participating Businesses" />
                <p className="max-w-2xl text-sm md:text-base text-gray-700">
                    Shop local. Save local. Support the 305.
                </p>

            </section>

        </main>
    );
}

/* ---------- CARD ---------- */
function Card({ title, desc, img }) {
    return (
        <div className="border border-gray-300 rounded-2xl p-6 shadow hover:shadow-lg transition text-center space-y-3">
            <img src={img} className="mx-auto h-16" />
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}