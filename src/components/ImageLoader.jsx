import { useState } from "react";

export default function ImageLoader({ src, alt, className = "" }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative ${className}`}>

            {/* Skeleton */}
            {!loaded && (
                <div className="h-100 bg-gray-300 rounded-xl animate-pulse" />
            )}

            {/* Image */}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
            />
        </div>
    );
}