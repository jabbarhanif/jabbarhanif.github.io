import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Tampilkan tombol jika scroll > 200px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 60) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-pink-600 text-black dark:text-white shadow-lg hover:bg-[#A2CFFE] transition-all"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={20} />
                </button>
            )}
        </>
    );
}

//