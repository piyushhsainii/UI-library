const metadata = {
    cli: 'npx velour-ui add modal',
    description: "A Cool Modal which has a open and close transition",
    import: `import { Modal, ModalTrigger } from './Modal'`,
    code: `
import React from 'react'
import { Modal, ModalTrigger } from './Modal'

const page = () => {

    return (
        <div className='text-black bg-slate-300 h-screen w-screen pt-40'>
            <Modal>
                <ModalTrigger>
                    <div className='bg-white px-4 py-2 rounded-lg' > This is an Animated Modal</div>
                </ModalTrigger>
                <div className='text-white flex items-center justify-center h-full'>
                    Modal Content
                </div>
            </Modal>
        </div>
    )
}
export default page
    `,
    demo: `
<Modal>
    <ModalTrigger>
        <div className='bg-white px-4 py-2 rounded-lg' > This is an Animated Modal</div>
    </ModalTrigger>
    <div className='text-white flex items-center justify-center h-full'>
        Modal Content
    </div>
</Modal>
`,
    hasVariants: false,
    manualSteps: [
        {
            title: "Install the following dependencies:",
            code: "npm install tailwind-merge framer-motion"
        },
        {
            title: "Copy and paste the following code into your project",
            code: `
'use client'
import React, { ButtonHTMLAttributes, forwardRef, HtmlHTMLAttributes, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ClassNameValue } from 'tailwind-merge';

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
    {isModalOpen && (
        <motion.div
            ref={modal}
            className={cn(modalClassName, \`h-[400px] w-[75vw] max-w-[600px] bg-black text-white  z-50
                absolute inset-y-0 inset-x-0  m-auto border border-stone-700 rounded-xl\`)}
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
    )}
</AnimatePresence>
            {isModalOpen &&
                <BackDrop classname={backdropClassname} />}
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
        <div className={cn(classname, 'bg-black/70 absolute h-full w-full top-0 bottom-0 left-0 right-0 z-10')}>
        </div>
    )
}
export { Modal, ModalTrigger, ModalContent }
            `
        },
        {
            title: "Update the import paths to match your project setup."
        },

    ]
}

export { metadata }