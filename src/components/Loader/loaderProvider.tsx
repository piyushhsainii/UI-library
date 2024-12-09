'use client'
import { usePathname } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'
import Loader from './loader'


export function LoaderProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showChildren, setShowChildren] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isLoaded) {
            document.body.style.overflow = 'hidden';
            const timer = setTimeout(() => {
                setShowChildren(true);
                document.body.style.overflow = 'visible';
            }, 100); // Matches the fade-out duration

            return () => clearTimeout(timer);
        }
    }, [isLoaded]);


    return (
        <Fragment>
            {(
                <Loader
                    progress={progress}
                    setProgress={setProgress}
                    isLoaded={isLoaded}
                    setIsLoaded={setIsLoaded}
                />
            )}
            {(showChildren) && children}
        </Fragment>
    );
}