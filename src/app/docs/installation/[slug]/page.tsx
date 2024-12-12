'use client'
import Sidebar from '@/components/Sidebar'
import { usePathname } from 'next/navigation'
import React, { useRef, useEffect, useState } from 'react'
import { data } from './InstallationData'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Check, Copy } from 'lucide-react'

const Page = () => {
    const path = usePathname()
    const frameWorkName = path.split('/docs/installation/')
    const FrameworkData = data.find((data) => data.title == frameWorkName[1])

    // Create refs object to store references to step elements
    const stepRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
    const [activeTitle, setActiveTitle] = useState('Create a  project')
    const [isCopied, setisCopied] = useState<any>(null)
    const [isTitle, setisTitle] = useState<any>(null)

    const handleScrollToStep = (stepTitle: string) => {
        const stepRef = stepRefs.current[stepTitle]
        if (stepRef) {
            stepRef.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setActiveTitle(stepTitle)
    }

    return (
        <div className='flex md:justify-center w-full max-w-screen-2xl pt-10 mx-auto'>
            <Sidebar />
            <div className="bg-black relative text-white border-b md:px-7 border-r border-stone-800 flex w-[90vw] md:w-[82vw]  mt-6 md:mx-auto">
                <div className='overflow-y-scroll h-[90vh]'>
                    <div className='flex gap-2 text-sm p-5 pt-0 pb-2'>
                        <div className='text-stone-400'>Docs </div>{`> ${FrameworkData?.title} `}
                    </div>
                    <div className='text-3xl px-5'> {FrameworkData?.title} </div>
                    <div className='text-base px-5 py-2 text-stone-400'> {FrameworkData?.description} </div>
                    <div className='max-w-[800px] '>
                        {
                            FrameworkData?.steps.map((steps, index) => (
                                <div key={steps.title}>
                                    <div
                                        // Use ref callback to store references
                                        ref={(el) => {
                                            if (el) {
                                                stepRefs.current[steps.title] = el
                                            }
                                        }}
                                        className='flex flex-col items-start'
                                    >
                                        <div className='flex gap-2 items-center mt-5' id={steps.title}>
                                            <div className='p-[0.40rem] px-4 mt-3 m-2 bg-gray-700 bg-opacity-35 rounded-[100%]'> {index + 1} </div>
                                            <div className='text-2xl tracking-tighter font-semibold'> {steps.title} </div>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            {steps.code.map((code, index) => (
                                                <div key={code.code} className='pl-16'>
                                                    {code.title &&
                                                        <div> {code.title} </div>
                                                    }{
                                                        code.code &&
                                                        <div className='rounded-lg md:w-[600px] min-w-[400px] w-full flex items-center relative '>
                                                            <SyntaxHighlighter customStyle={{ borderRadius: "10px" }}
                                                                style={vscDarkPlus}
                                                            >
                                                                {code.code}
                                                            </SyntaxHighlighter>
                                                            {
                                                                isCopied === index && isTitle == code.title ?
                                                                    <Check className='absolute right-0 cursor-pointer' size={18} />
                                                                    :
                                                                    <Copy size={18} className='absolute right-0 cursor-pointer'
                                                                        onClick={() => {
                                                                            navigator.clipboard.writeText(code.code)
                                                                            setisCopied(index)
                                                                            setisTitle(code.title)
                                                                            setTimeout(() => {
                                                                                setisCopied(null)
                                                                            }, 1300)
                                                                        }} />
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='max-h-[700px] right-3 hidden md:block'>
                    <div className=' px-10 min-w-[300px]'>
                        <div className='my-5 font-semibold'> On this Page </div>
                        {FrameworkData?.steps.map((title) => (
                            <div
                                className={`my-1 cursor-pointer ${activeTitle == title.title ? "brightness-110" : " brightness-50"} hover:brightness-105 duration-200 transition-all`}
                                key={title.title}
                                onClick={() => handleScrollToStep(title.title)}
                            >
                                {title.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page