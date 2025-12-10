// src/utils/smoothScroll.js

export const smoothScrollTo = (targetY, duration = 500) => {
    if (typeof window === "undefined") return;

    const startY = window.scrollY || window.pageYOffset || 0;
    const distance = targetY - startY;

    if (distance === 0 || duration <= 0) {
        window.scrollTo(0, targetY);
        return;
    }

    const startTime = performance.now();

    const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOut = 1 - Math.pow(1 - progress, 3);
        const nextY = startY + distance * easeOut;

        window.scrollTo(0, nextY);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
};
