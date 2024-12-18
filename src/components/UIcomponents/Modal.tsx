'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ClassNameValue } from 'tailwind-merge';

const Modal = ({
    BtnclassName,
    modalClassName,
    children,
    backdropClassname
}: {
    BtnclassName?: ClassNameValue,
    modalClassName?: ClassNameValue,
    backdropClassname?: ClassNameValue,
    children: React.ReactNode
}) => {
    const [isModalOpen, setisModalOpen] = useState(false);
    const modal = useRef<HTMLDivElement>(null)
    const openButton = useRef<HTMLButtonElement>(null)
    console.log(isModalOpen)
    useEffect(() => {
        window.addEventListener("click", (evt) => {
            if (modal.current && !modal.current.contains(evt.target as Node) && !openButton.current!.contains(evt.target as Node)) {
                setisModalOpen(false);
            }
        })
        return () => {
            window.removeEventListener("click", (evt) => {
                if (modal.current && !modal.current.contains(evt.target as Node) && !openButton.current!.contains(evt.target as Node)) {
                    setisModalOpen(false);
                }
            });
        };
    }, [])
    return (
        <>
            <button
                ref={openButton!}
                className={cn(BtnclassName, 'cursor-pointer bg-white p-2 px-4 py-3 rounded-lg m-2 mt-20')}
                onClick={() => setisModalOpen((val) => !val)}
            >
                <ModalTrigger>
                    <div> LMAO </div>
                </ModalTrigger>
            </button>
            {/* Modal Content */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        // @ts-ignore
                        ref={modal}
                        className={cn(modalClassName, `h-[400px] w-[75vw] max-w-[600px] bg-black text-white  z-50
                   absolute inset-y-0 inset-x-0  m-auto border border-stone-700 rounded-xl`)}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            type: "spring",
                            damping: 30, // Decreased damping for faster settling
                            stiffness: 200, // Increased stiffness for more speed
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
            {
                isModalOpen &&
                <BackDrop classname={backdropClassname} />
            }
        </ >
    );
};

export default Modal;

export const ModalTrigger = ({
    // ref,
    // className,
    // BtnclassName,
    // setisModalOpen,
    children
}: {
    // ref:,
    // className:,
    // BtnclassName:,
    // setisModalOpen:,
    children: React.ReactNode
}) => {
    return (
        <div
        // ref={ref!}
        // className={cn(BtnclassName, 'cursor-pointer bg-white p-2 px-4 py-3 rounded-lg m-2 mt-20')}
        // onClick={() => setisModalOpen((val: any) => !val)}
        >
            {children}
        </div>
    )
}

export const BackDrop = ({
    classname
}: {
    classname: ClassNameValue
}) => {
    return (
        <div className={cn(classname, 'bg-black/70 absolute h-full w-full top-0 bottom-0 left-0 right-0 z-10')}>

        </div>
    )
}

