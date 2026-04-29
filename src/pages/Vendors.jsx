import { CheckCircle } from "lucide-react";
import FAQ from "../components/FAQ";
import Button from "../components/PrimaryBtn"
import Hero from "../components/Hero";
import ImageLoader from "../components/ImageLoader";

export default function Vendors() {
    return (
        <main className="max-w-7xl mx-auto py-8 px-4 space-y-14">

            <Hero
                title="Miami’s #1 Local Business Network"
                description="Get your brand in front of thousands of engaged locals who love to shop, eat, and support Miami-based businesses. Becoming a certified vendor gives your business instant credibility, priority exposure, and access to one of the most loyal audiences in South Florida."
            />

            <section className="grid md:grid-cols-2 gap-10 items-center">
                <ImageLoader
                    src="assets/v-1.jpg"
                    alt="preview"
                />

                <div>
                    <h2 className="text-xl md:text-3xl font-semibold">
                        Why Join the <span className="text-(--primary-color)">Network?</span>
                    </h2>

                    <p className="mt-4 font-medium leading-7">
                        isn’t just a platform it’s a community of over 1.3 million followers discovering where to go next. Our mission is simple: connect Miami locals with trusted, high-quality businesses like yours.
                    </p>

                    <ul className="mt-6 space-y-3 font-medium">
                        {[
                            "Massive exposure through our social media and Pass ecosystem",
                            "Targeted local reach  we put your business in front of customers ready to buy",
                            "Verified credibility with your  badge and plaque",
                            "Networking opportunities with other verified Miami businesses",
                            "Tools and resources to help your brand grow and stay top of mind",
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

            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                    <div>
                        <strong>Direct Exposure</strong>
                        <p className="font-medium leading-7">
                            Showcase your business to Miami locals actively searching for deals, services, and experiences.
                        </p>
                    </div>

                    <div>
                        <strong>Badge & Plaque</strong>
                        <p className="font-medium leading-7">
                            Display your official  certification both online and in store to boost trust.
                        </p>
                    </div>

                    <div>
                        <strong>Event Access</strong>
                        <p className="font-medium leading-7">
                            Participate in signature  events, block parties, and vendor showcases.
                        </p>
                    </div>

                    <div>
                        <strong>Featured Promotions</strong>
                        <p className="font-medium leading-7">
                            Be featured in our  directory, social campaigns, and influencer content.
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
                    src="assets/v-2.jpg"
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
                        Why It <span className="text-(--primary-color)">Matters</span>
                    </h2>

                    <p className="mt-4 font-medium leading-7">
                        If your business isn’t part of ’s verified network, you’re missing out on:
                    </p>

                    <ul className="mt-6 space-y-3 font-medium">
                        {[
                            "Weekly exposure to hundreds of thousands of Miami locals",
                            "Exclusive campaigns and influencer promotions",
                            "Community trust that converts followers into loyal customers",
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
                        members are featured in our Pass app, newsletters, social media campaigns, and exclusive events giving your brand nonstop visibility.  
                    </p>
                </div>
            </section>

            <section className="text-center space-y-8">
                <h2 className="text-center text-xl md:text-3xl font-semibold">
                    Featured <span className="text-(--primary-color)">Categories</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <Card title="Apply" desc="Choose your membership tier and submit your business info." img="assets/i-1.png" />
                    <Card title="Get Approved" desc=" Receive your official  badge, plaque, and welcome kit." img="assets/i-2.png" />
                    <Card title="Go Live" desc="Your business becomes visible across  platforms, events, and promotions" img="assets/i-3.png" />

                </div>
            </section>

            <FAQ />

            <section className="rounded-2xl bg-linear-to-r from-[#03AFC0]/25 to-[#FD4B91]/25 text-gray-900 px-6 py-8 md:py-16 flex flex-col items-center justify-center text-center space-y-5 shadow-sm">

                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                    Ready to Grow Your Business?
                </h2>

                <p className="max-w-2xl text-sm md:text-base text-gray-700">
                    Be part of the network trusted by over a million Miamians.
                </p>

                <p className="max-w-2xl text-sm md:text-base text-gray-700">
                    Join the Network today and make your business impossible to ignore.
                </p>

                <Button text="Get Started Now" />

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