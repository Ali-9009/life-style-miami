import Button from "../components/PrimaryBtn";

export default function Contact() {
    return (

        <main className="max-w-7xl mx-auto py-8 px-4">
            <section
                className="contact-bg rounded-3xl bg-center bg-no-repeat bg-cover overflow-hidden shadow-md md:py-12"
                style={{ backgroundImage: "url('assets/contact.jpg')" }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 items-start">
                    <div>
                        <h2 className="unbounded text-3xl font-bold text-gray-900">
                            Get in <span className="text-(--primary-color)">Touch</span>
                        </h2>
                        <p className="poppins text-gray-600 mt-2">
                            Fill out this form to become  Certified
                        </p>
                        <form className="space-y-3 mt-6">
                            <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none" />
                            <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none" />
                            <input type="text" placeholder="Mobile Number" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none" />
                            <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 outline-none">
                                <option>Select Service</option>
                                <option>Service 1</option>
                                <option>Service 2</option>
                            </select>
                            <textarea rows="4" placeholder="Your Message" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none"></textarea>
                            <Button text="SUBMIT" />
                        </form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <div>
                                <p className="font-bold text-gray-900">Phone</p>
                                <a href="tel:+17866070337" className="text-(--primary-color) text-sm">
                                    +1 786-607-0337
                                </a>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Address</p>
                                <p className="text-gray-600 text-sm">5801 SW 40 St Miami</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Email</p>
                                <a href="mailto:passholder@connectmiami.com" className="text-(--primary-color) text-sm">
                                    passholder@connectmiami.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.948179786271!2d-74.0060154845933!3d40.71277577933085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3161aabc97%3A0xa0d7c8f1d3f3bb6f!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                            className="w-full h-150 rounded-xl shadow-md"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>

    );
}