const metadata = {
    cli: 'npx velour-ui add animated-carousel',
    description: "A Navigation Bar with animation",
    import: `import AnimatedCarousel from '@/components/ui/AnimatedCarousel'`,
    code: `
      import AnimatedCarousel from '@/components/AnimatedCarousel'
        <AnimatedCarousel
            img={[ /** image links here **/ ]}
            title=""        //optional
        />
      `,
    demo: `<AnimatedCarousel img={["demo1.png", "demo2.png"]}  title="title"/> `,
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
import React, { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/lib/utils';

const AnimatedCarousel = ({
    img
    , classname,
    imageClassname,
    title,
    description,
    imageWidth,
    imageHeight,
}:
    {
        img: string[],
        classname?: ClassNameValue,
        imageClassname?: ClassNameValue,
        title?: string[],
        description?: string[],
        imageWidth?: string,
        imageHeight?: string
    }) => {
    const [ActiveImg, setActiveImg] = useState(0);

    return (
        img &&
        <div className='flex flex-col  p-4'>
            <div className={cn(classname, 'flex justify-center w-[80%] md:w-auto items-center gap-2 min-h-[400px] max-h-screen max-w-screen-2xl m-auto relative')} >
                {
                    img && img.map((_, index) => (
                        <Fragment key={index}>
                            <motion.div
                                key={index}
                                initial={{ width: '80px' }}
                                animate={{ width: index === ActiveImg ? imageWidth ?? '300px' : '80px' }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className='relative '
                            >
                                <img
                                    src={_}
                                    className={cn(imageClassname, \`min-h-[300px] \${imageHeight ?? ' h-[300px]'}  w-[300px] object-cover rounded-3xl brightness-90 relative cursor-pointer select-none\`)}
                                    alt="img"
                                    onClick={() => setActiveImg(index)}
                                />
                                {
                                    index == ActiveImg && (title || description) &&
                                    <div className='text-white  absolute bottom-[10px] p-2 rounded-2xl w-[70%] ml-4 bg-black/40'>
                                        {title && <div>{title[index]}</div>}
                                        {description && <div className='text-sm'> {description[index]}</div>}
                                    </div>
                                }
                            </motion.div>

                        </Fragment>
                    ))

                }
                <div className='w-[100px] justify-end flex gap-4 mx-auto absolute bottom-0 right-0'>
                    <ChevronLeft size={19} color='white' onClick={() => {
                        if (ActiveImg == 0) return;
                        setActiveImg((img) => img - 1)
                    }} />
                    <ChevronRight size={19} color='white' onClick={() => {
                        if (img.length - 1 == ActiveImg) return;
                        setActiveImg((img) => img + 1)
                    }} />
                </div>
            </div>
        </div>
    );
};

export default AnimatedCarousel;
        `
        },
        {
            title: "Update the import paths to match your project setup."
        },

    ]
}

export { metadata }