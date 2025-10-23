import React, { useEffect, useState, useCallback } from 'react';

export default function ScrollToTop({ threshold = 300 }) {
    const [visible, setVisible] = useState(false);

    const handleScroll = useCallback(() => {
        const y = window.pageYOffset || document.documentElement.scrollTop;
        setVisible(y > threshold);
    }, [threshold]);

    useEffect(() => {
        handleScroll(); // initialize
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollToTop = () => {
        try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
            window.scrollTo(0, 0);
        }
    };

    if (!visible) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-50 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#52B4DA]"
        >
            <span
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] text-white shadow-lg transition transform group-hover:scale-105 opacity-70 hover:opacity-100"
            >
                {/* Up Arrow Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
            </span>
        </button>
    );
}
