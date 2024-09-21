import React from "react";

const DonateButton = () => {
    return (
        <a href="/feed">
            <button className="relative px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg focus:outline-none transition-all">
                {/* Heart Icon with Wave Animation */}
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center wave-animation">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </span>
                {/* Button Text */}
                <span className="ml-10">Contribuie</span>
            </button>
        </a>

    );
};

export default DonateButton;
