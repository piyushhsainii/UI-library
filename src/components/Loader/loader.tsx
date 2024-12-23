"use client";
import React, { Fragment, useEffect, useState, useRef, Dispatch, SetStateAction, useCallback } from 'react';

const Loader = ({
    progress,
    setProgress,
    isLoaded,
    setIsLoaded
}: {
    progress: number,
    setProgress: Dispatch<SetStateAction<number>>,
    isLoaded: boolean,
    setIsLoaded: Dispatch<SetStateAction<boolean>>
}) => {
    const [opacity, setOpacity] = useState(100);
    const rafIdRef = useRef<number | null>(null);
    const startTimeRef = useRef(Date.now());

    const startFadeOut = useCallback(() => {
        let currentOpacity = 100;
        const fadeOutInterval = setInterval(() => {
            currentOpacity -= 1;
            setOpacity(currentOpacity);
            if (currentOpacity <= 0) {
                clearInterval(fadeOutInterval);
                setIsLoaded(true);
                if (typeof window !== 'undefined') {
                    document.body.style.overflow = 'visible';
                }
            }
        }, 1);
    }, [setIsLoaded]);

    const radius = 40; // Radius of the circle
    const strokeWidth = 0.5; // Thickness of the circle
    const circumference = 10 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const calculateProgress = () => {
            const images = document.images;
            const loadedImages = Array.from(images).filter(img => img.complete && img.naturalHeight > 0).length;
            return (loadedImages / images.length) * 100 || 0;
        };

        const updateProgress = () => {
            const currentProgress = calculateProgress();
            const elapsedTime = Date.now() - startTimeRef.current;
            const timeBasedProgress = Math.min(elapsedTime / 50, 100);

            const finalProgress = Math.max(currentProgress, timeBasedProgress);
            setProgress(Math.round(finalProgress));

            if (finalProgress >= 100) {
                setIsLoaded(true);
                startFadeOut();
            } else {
                rafIdRef.current = requestAnimationFrame(updateProgress);
            }
        };

        updateProgress();
        const fallbackTimer = setTimeout(() => {
            setIsLoaded(true);
            startFadeOut();
        }, 50000);

        return () => {
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
            clearTimeout(fallbackTimer);
        };
    }, [setProgress, setIsLoaded, startFadeOut]);

    if (opacity <= 0) {
        return null;
    }

    return (
        <Fragment>
            <div
                className={`fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center loader-background-2 z-50`}
                style={{ opacity: opacity / 100 }}
            >
                <div className={`text-xl tracking-tight font-light text-white`}> VELOUR UI </div>
                <svg
                    width="360"
                    height="360"
                    viewBox="0 0 120 120"
                    className="transform -rotate-90"
                >
                    <circle
                        cx="57"
                        cy="60"
                        r={radius}
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth={strokeWidth}
                    />
                    <circle
                        cx="57"
                        cy="60"
                        r={radius}
                        fill="none"
                        stroke="#64748b " // Tailwind green-500 (use Tailwind class in styles for colors if needed)
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all ease-in-out duration-500"
                    />
                    <text
                        x="60"
                        y="65"
                        textAnchor="middle"
                        width={2}
                        className="fill-slate-200 text-[0.350rem] font-light tracking-wider "
                        transform="rotate(90, 60, 60)"
                    >
                        {progress}%
                    </text>
                </svg>
                <div className={`text-sm tracking-tight font-light text-white`}> NOT A FAKE LOADER </div>

            </div>
        </Fragment>
    );
};

export default Loader;
