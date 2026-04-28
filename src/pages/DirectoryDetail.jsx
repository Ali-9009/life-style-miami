import {
    Phone,
    MessageSquare,
    Wifi,
    Voicemail,
    PhoneCall,
    Mail,
    Building2,
    Star,
} from "lucide-react";
import { useState } from "react";



export default function DirectoryDetail() {
    const [loading, setLoading] = useState(true);
    return (
        <main className="max-w-7xl mx-auto py-8 px-4 space-y-12">

            <section className="">
                <div className="flex items-center justify-center">
                    <img src="assets/d-d-1.jpg" alt="logo" className="" />
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <div>
                        <h3 className="font-semibold text-black text-lg">
                            Company Information
                        </h3>
                        <p>Transforming the world of wireless accessories, one peg hook at a time.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-black text-lg">
                            Product Information
                        </h3>
                        <p>Scaling Beyond Business as Usual</p>
                    </div>

                    <p>
                        With 29 years of industry leadership, Alphacomm offers unmatched global manufacturing, distribution, and warehousing capabilities.
                    </p>

                    <p>
                        As part of Telementum, we design, engineer, manufacture, and distribute accessories worldwide, delivering over 35 million units annually.
                    </p>

                    <p>
                        Our in-house brands reinforce our commitment to quality and accessibility.
                    </p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Services</h2>

                <div className="grid md:grid-cols-2 gap-5">

                    <ServiceCard
                        icon={<Phone className="text-blue-600" />}
                        title="Voice Calls"
                        desc="Local, national, and international calling."
                    />

                    <ServiceCard
                        icon={<MessageSquare className="text-green-600" />}
                        title="Text Messaging"
                        desc="Send and receive messages instantly."
                    />

                    <ServiceCard
                        icon={<Wifi className="text-purple-600" />}
                        title="Mobile Data"
                        desc="3G, 4G, 5G internet connectivity."
                    />

                    <ServiceCard
                        icon={<Voicemail className="text-orange-500" />}
                        title="Voicemail"
                        desc="Record and listen to missed calls."
                    />
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Gallery</h2>

                <div className="grid lg:grid-cols-2 gap-4">

                    <img
                        src="assets/g-1.jpg"
                        className="rounded-lg"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <img src="assets/g-2.jpg" className="rounded-lg" />
                        <img src="assets/g-3.jpg" className="rounded-lg" />
                        <img src="assets/g-4.jpg" className="rounded-lg" />
                        <img src="assets/g-5.jpg" className="rounded-lg" />
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">Reviews</h2>

                <div className="flex flex-col md:flex-row gap-10 items-start">

                    {/* score */}
                    <div className="text-center">
                        <div className="text-5xl font-bold">4.5</div>
                        <div className="flex justify-center text-yellow-500">
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star fill="currentColor" />
                            <Star />
                        </div>
                        <p className="text-sm text-gray-500">from 1.25k reviews</p>
                    </div>

                    {/* bars */}
                    <div className="flex-1 space-y-3">

                        <RatingBar label="5" width="85%" />
                        <RatingBar label="4" width="60%" />
                        <RatingBar label="3" width="30%" />
                        <RatingBar label="2" width="10%" />
                        <RatingBar label="1" width="5%" />

                    </div>
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-6">

                <div className="p-6 border border-gray-300 rounded-xl shadow bg-white space-y-4">
                    <h2 className="text-xl font-bold">Quick Contact</h2>

                    <p className="flex items-center gap-2">
                        <PhoneCall size={18} /> +1 888-951-0909
                    </p>

                    <p className="flex items-center gap-2">
                        <Mail size={18} /> support@alphacomm.com
                    </p>

                    <p className="flex items-start gap-2">
                        <Building2 size={18} />
                        1500 Lakes Parkway, Lawrenceville, GA 30043
                    </p>

                    <div className="flex gap-4 text-gray-600 pt-3 text-xl">

                        <a href="#">
                            <i className="ri-facebook-fill"></i>
                        </a>

                        <a href="#">
                            <i className="ri-instagram-line"></i>
                        </a>

                        <a href="#">
                            <i className="ri-twitter-x-line"></i>
                        </a>

                        <a href="#">
                            <i className="ri-linkedin-fill"></i>
                        </a>

                    </div>
                </div>

                <div className="p-6 border border-gray-300 rounded-xl shadow bg-white">
                    <h2 className="text-xl font-bold mb-4">Special Offers</h2>
                    <img src="assets/offer.jpg" className="rounded-xl w-full" />
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Location</h2>

                <div className="relative rounded-xl overflow-hidden border border-gray-300 shadow bg-gray-100">

                    {loading && (
                        <div className="absolute inset-0 animate-pulse bg-gray-200 flex items-center justify-center">
                            <div className="text-gray-500 text-sm">
                                Loading map...
                            </div>
                        </div>
                    )}

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.948179786271!2d-74.0060154845933!3d40.71277577933085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3161aabc97%3A0xa0d7c8f1d3f3bb6f!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000"
                        className="w-full h-87"
                        loading="lazy"
                        onLoad={() => setLoading(false)}
                    />
                </div>
            </section>

        </main>
    );
}

/* ---------------- COMPONENTS ---------------- */

function ServiceCard({ icon, title, desc }) {
    return (
        <div className="flex gap-4 p-5 border border-gray-300 rounded-xl shadow-sm bg-white hover:shadow-md transition">
            <div>{icon}</div>
            <div>
                <h4 className="font-semibold text-lg">{title}</h4>
                <p className="text-gray-600">{desc}</p>
            </div>
        </div>
    );
}

function RatingBar({ label, width }) {
    return (
        <div className="flex items-center gap-2 w-full min-w-0">

            {/* Label */}
            <span className="text-xs sm:text-sm w-8 sm:w-10 shrink-0 text-gray-700">
                {label}.0
            </span>

            {/* Bar wrapper */}
            <div className="flex-1 min-w-80 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-black rounded-full"
                    style={{ width }}
                />
            </div>

        </div>
    );
}