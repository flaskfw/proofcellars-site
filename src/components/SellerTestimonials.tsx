export default function SellerTestimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'J.D., Dallas, TX',
            text: "I was nervous about shipping a Macallan M because of crystal bottle and odd-shaped box, but their shipping kit was incredible. The bottle and box landed safely the next day.",
            tags: ['Shipping Anxiety'],
        },
        {
            id: 2,
            name: 'M.S., Los Angeles, CA',
            text: "Dropped off my collection at the West Hollywood office and they unloaded it from my car. Professional, secure, and I walked out with a check in like 10 minutes. Way better than waiting for an auction.",
            tags: ['Local Speed'],
        },
        {
            id: 3,
            name: 'Sarah W., San Diego, CA',
            text: "I didn't know much about the bourbons my husband left behind. The team was patient, honest, and gave me a good valuation without any pressure and even showed me auction resuilts for similar bottles going back a whole year. Highly recommended!",
            tags: ['Inherited Collection'],
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-surface">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-12">
                    Trusted by Collectors & Families Nationwide
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white rounded-lg p-8 shadow-sm border border-border flex flex-col h-full"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4 text-accent">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ))}
                            </div>

                            {/* Review Text */}
                            <blockquote className="flex-grow text-secondary text-base leading-relaxed mb-6">
                                "{review.text}"
                            </blockquote>

                            {/* Author & Badge */}
                            <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
                                <span className="font-medium text-primary text-sm">
                                    {review.name}
                                </span>
                                <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Verified Transaction
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
