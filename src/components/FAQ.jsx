import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "What is the OiD FamPass?",
            a: "A digital membership card offering exclusive perks at local businesses.",
        },
        {
            q: "Is it free?",
            a: "Yes, the FamPass is completely free to use.",
        },
        {
            q: "How do I use it?",
            a: "Show your FamPass at participating locations to unlock deals.",
        },
        {
            q: "Where is it available?",
            a: "Across Miami-Dade local partner businesses.",
        },
    ];

    return (
        <section className="max-w-4xl mx-auto px-4 space-y-6">

            <h2 className="text-center text-xl md:text-3xl font-semibold">
                Frequently Asked <span className="text-(--primary-color)">Questions</span>
            </h2>

            <div className="space-y-3">

                {faqs.map((item, i) => {
                    const isOpen = openIndex === i;

                    return (
                        <div
                            key={i}
                            className="border border-gray-300 rounded-xl bg-white shadow-sm overflow-hidden transition"
                        >

                            {/* HEADER */}
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="w-full flex items-center justify-between gap-4 p-4 text-left font-semibold"
                            >
                                <span className="text-sm sm:text-base">
                                    {item.q}
                                </span>

                                <ChevronDown
                                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* CONTENT (smooth animation) */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            </div>

                        </div>
                    );
                })}

            </div>
        </section>
    );
}