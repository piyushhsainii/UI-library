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
                {/* <div className={`text-[3.2rem] tracking-wide text-themeAccent p-2 pb-1`}>Vexio</div> */}
                <div className='text-white text-lg'>Not a fake Loader</div>
                <div className="w-[250px] m-2 my-10 mt-7 bg-gray-700 h-1 rounded-full">
                    <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Loader;
