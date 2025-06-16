import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const scrollPositions = {}; // Memory store (can be extended to localStorage)

const ScrollRestoration = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const prevPath = useRef(pathname);

    // Save scroll position on route change
    useEffect(() => {
        scrollPositions[prevPath.current] = window.scrollY;
        prevPath.current = pathname;
    }, [pathname]);

    // Restore scroll position after route change
    useEffect(() => {
        const y = scrollPositions[pathname] || 0;

        // Small timeout to ensure DOM is loaded
        setTimeout(() => {
            window.scrollTo({
                top: y,
                behavior: 'smooth', // Optional: make it smooth
            });
        }, 50);
    }, [pathname]);

    return null;
};

export default ScrollRestoration;
