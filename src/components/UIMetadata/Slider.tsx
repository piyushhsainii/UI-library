const metadata = {
    cli: 'npx velour-ui add slider',
    description: "A Value Slider with various variants. ",
    import: `import Slider from '@/components/UIcomponents/Slider'`,
    code: `import Slider from '@/components/UIcomponents/Slider'
<Slider values={[1, 3, 5, 7, 9]} sliderColor='grey' variant={'breakpoints'} />`,
    demo: `<Slider values={[1, 3, 5, 7, 9]} sliderColor='grey' variant={'breakpoints'} />`,
    hasVariants: true,
    manualSteps: [
        {
            title: "Install the following dependencies:",
            code: "npm install tailwind-merge"
        },
        {
            title: "Copy and paste the following code into your project",
            code: `
'use client'
import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import { ClassNameValue } from 'tailwind-merge';

type Variants = "basic" | "breakpoints"

const Slider = ({
    variant,
    values,
    sliderColor,
    breakPointersClassname,
    className
}: {
    variant: Variants
    values: number[]
    sliderColor?: string,
    breakPointersClassname?: ClassNameValue,
    className?: ClassNameValue
}) => {
    const [value, setValue] = useState(0);
    const breakpoints = values;
    const handleChange = (e: any) => {
        const inputValue = parseInt(e.target.value, 10);
        const closestBreakpoint = breakpoints.reduce((prev, curr) =>
            Math.abs(curr - inputValue) < Math.abs(prev - inputValue) ? curr : prev
        );
        setValue(closestBreakpoint);
    };

    const handleBasicChange = (e: any) => {
        setValue(Math.floor(e.target.value))

    }
    return (
        <>
            {
                variant == "breakpoints" ?
                    <div className={cn(className, 'flex flex-col font-sans')} >
                        <div className="text-white mb-4">Value: {value}</div>
                        <input
                            type="range"
                            className="w-64  h-2 bg-gray-400 rounded-lg cursor-pointer"
                            value={value}
                            min={Math.min(...breakpoints)}
                            max={Math.max(...breakpoints)}
                            step={0.1}
                            onChange={handleChange}
                            style={{
                                accentColor: sliderColor ?? "black",
                            }}
                        />
                        <div className={cn(breakPointersClassname, "w-64 flex justify-between mt-2")}>
                            {breakpoints.map((point, index) => (
                                <div
                                    key={index}
                                    style={{
                                        left: \`\${((point - Math.min(...breakpoints)) /
                                            (Math.max(...breakpoints) - Math.min(...breakpoints))) *
                                            100
                                            }%\`,
                                        transform: "translateX(-50%)",
                                    }}
                                    className={\`w-1 h-1  rounded-full \${value === point ? "bg-black" : "bg-white"
                                        }\`}
                                ></div>
                            ))}
                        </div>
                    </div> :
                    <div className={cn(className, 'flex flex-col font-sans')} >
                        <div className="text-white mb-4">Value: {value}</div>
                        <input
                            type="range"
                            className="w-64  h-2 bg-gray-400 rounded-lg cursor-pointer"
                            value={value}
                            min={Math.min(...breakpoints)}
                            max={Math.max(...breakpoints)}
                            step={0.5}
                            onChange={handleBasicChange}
                            style={{
                                accentColor: sliderColor ?? "black",
                            }}
                        />
                        <div className={cn(breakPointersClassname, "w-64 flex justify-between mt-2")}>
                            <div
                                className={\` flex justify-between w-full rounded-full text-white
                                        }\`}
                            >
                                <div>  {Math.min(...breakpoints)}</div>
                                <div>   {Math.max(...breakpoints)}</div>
                            </div>
                        </div>
                    </div>
            }

        </>

    )
}

export default Slider
            `
        },
        {
            title: "Update the import paths to match your project setup."
        },

    ]
}

export { metadata }