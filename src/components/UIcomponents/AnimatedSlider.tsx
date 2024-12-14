'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ClassNameValue } from 'tailwind-merge';

const AnimatedSlider = ({
    img,
    classname,
    imgClassname,
    title,
    description,
}: {
    img: string[],
    classname?: ClassNameValue,
    imgClassname?: ClassNameValue
    title?: string[],
    description?: string[],
}) => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const image = useRef<HTMLDivElement>()
    const [activeImg, setActiveImg] = useState(0);

    const scrollHandler = (index: number, width?: any) => {
        if (scrollContainerRef.current) {
            const containerWidth = scrollContainerRef.current.offsetWidth; // Width of the scroll container
            const imaegs = width && width + 24
            const imageWidth = 470;

            const offset = (containerWidth - imageWidth) / 2; // Calculate offset for centering
            const imgOffSet = (containerWidth - width) / 2

            // Scroll position to center the clicked image

            const scrollPosition = width ? (imaegs * index - imgOffSet) : (imageWidth * index - offset);

            scrollContainerRef.current.scrollTo({
                left: Math.max(scrollPosition, 0), // Ensure no negative scroll
                behavior: 'smooth', // Smooth scrolling
            });
            setActiveImg(index); // Update active image index
        }
    };

    const imageVariants = {
        initial: {
            scale: 0.9,
            opacity: 0.6,
            filter: 'brightness(50%)'
        },
        active: {
            scale: 1,
            opacity: 1,
            filter: 'brightness(100%)',
            transition: {
                duration: 0.3,
                type: 'tween'
            }
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        img &&
        <div className="w-screen h-screen flex items-center justify-center  max-w-screen-2xl max-h-[1000px] mx-auto">
            <div>
                <div
                    className={cn(classname, "  w-full  max-w-[360px] sm:max-w-[600px] md:w-[627px]  md:px-4 mx-auto overflow-x-hidden  md:max-w-screen-2xl max-h-[900px]")}
                    ref={scrollContainerRef}
                >
                    <div className="flex items-center  relative">
                        <AnimatePresence>
                            {img.map((_, index) => (
                                <motion.div
                                    key={index}
                                    className={`h-[70vh] md:w-auto max-h-[800px] mx-3 flex-shrink-0 text-white flex flex-col items-center justify-center`}
                                >
                                    <div className="text-center mb-4">
                                        {
                                            title &&
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{
                                                    opacity: activeImg === index ? 1 : 0.5,
                                                    y: activeImg === index ? 0 : 20
                                                }}
                                                transition={{ duration: 0.4, delay: 0.3 }}
                                                className="text-3xl font-light cursor-pointer"
                                            >
                                                {title[index]}
                                            </motion.div>
                                        }
                                        {
                                            description &&
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{
                                                    opacity: activeImg === index ? 1 : 0.5,
                                                    y: activeImg === index ? 0 : 20,
                                                }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                            >
                                                {description[index]}
                                            </motion.div>
                                        }
                                    </div>
                                    <motion.img
                                        src="https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg"
                                        alt=""
                                        // @ts-ignore
                                        ref={image!}
                                        variants={imageVariants}
                                        initial="initial"
                                        animate={activeImg === index ? "active" : "initial"}
                                        whileHover="hover"
                                        className={cn(imgClassname, `md:p-2 w-full sm:w-auto max-w-[320px] md:max-w-[535px] max-h-[300px] md:max-h-[300px] object-cover rounded-3xl cursor-pointer`)}
                                        onClick={() => scrollHandler(index)}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className=' justify-end flex gap-4 w-full'>
                    <ChevronLeft size={19} color='white' className='cursor-pointer' onClick={() => {
                        if (activeImg == 0) return;
                        scrollHandler(activeImg - 1, image.current?.offsetWidth)
                    }} />
                    <ChevronRight size={19} color='white' className='cursor-pointer' onClick={() => {
                        if (img.length - 1 == activeImg) return;
                        scrollHandler(activeImg + 1, image.current?.offsetWidth!)
                    }} />
                </div>
            </div>
        </div>
    );
};

export default AnimatedSlider;