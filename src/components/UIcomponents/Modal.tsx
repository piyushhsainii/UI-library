'use client'
import React, { ButtonHTMLAttributes, forwardRef, HtmlHTMLAttributes, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ClassNameValue } from 'tailwind-merge';
import { div } from 'framer-motion/client';

const Modal = ({
    modalClassName,
    children,
    backdropClassname
}: {
    BtnclassName?: ClassNameValue,
    modalClassName?: ClassNameValue,
    backdropClassname?: ClassNameValue,
    children: React.ReactElement[]
}) => {
    const [isModalOpen, setisModalOpen] = useState(false);
    const modal = useRef<HTMLDivElement>(null)
    const openButton = useRef<HTMLButtonElement>(null)

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

    const triggerElement = React.Children.toArray(children).find((child) =>
        React.isValidElement(child) && (child as React.ReactElement).type === ModalTrigger
    )
    const contentElement = React.Children.toArray(children).find((child) =>
        React.isValidElement(child) && (child as React.ReactElement).type === ModalContent
    )
    return (
        <>
            {React.cloneElement(children[0], {
                onClick: () => setisModalOpen((val) => !val),
                ref: openButton,
            })}
            <AnimatePresence>
                {isModalOpen &&
                    <>
                        <div className='max-w-screen-2xl h-screen w-[99vw] absolute inset-y-0 inset-x-0 bg-black/60  z-[60] mt-20'>
                            <motion.div
                                ref={modal}
                                className={cn(modalClassName, `h-[400px] w-[75vw] max-w-[600px] bg-black text-white 
                           m-auto border border-stone-700 rounded-xl overflow-y-scroll`)}
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
                                {React.cloneElement(children[1])}
                            </motion.div>
                        </div>
                    </>}
            </AnimatePresence>

        </ >
    );
};

export default Modal;

type ModalTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ModalContentProps = HtmlHTMLAttributes<HTMLDivElement>;

const ModalTrigger = forwardRef<HTMLButtonElement, ModalTriggerProps>((props, ref) => {
    return <button ref={ref} {...props} />;
});

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>((props, ref) => {
    return <div ref={ref} {...props}> </div>
})

const BackDrop = ({
    classname
}: {
    classname: ClassNameValue
}) => {
    return (
        <div className={cn(classname, 'bg-black/70 absolute h-full w-full top-0 bottom-0 left-0 right-0 z-[100]')}>
        </div>
    )
}
export { Modal, ModalTrigger, ModalContent }