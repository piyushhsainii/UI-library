'use client'
import { metadata } from '@/lib/interfaces'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import TextClip from './UIcomponents/TextClip';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Check, Copy } from 'lucide-react';
import { components } from '@/lib/components';
import Link from 'next/link';
import ComponentPreview from './ComponentPreview';
const PreviewCode = ({
    metadata,
    installation,
    usage,
    componentName
}: {
    metadata: metadata,
    installation: React.RefObject<HTMLDivElement>,
    usage: React.RefObject<HTMLDivElement>,
    componentName: string
}) => {

    const [TogglePreview, setTogglePreview] = useState(1)
    const [InstallationPreview, setInstallationPreview] = useState(1)
    const [isCollapsed, setisCollapsed] = useState(false)
    const [isCopied, setisCopied] = useState<any>(null)
    const path = usePathname()
    const preview = path.split('/docs/components/')
    const component = components.indexOf(componentName)
    const prevMoment = components[component - 1]
    const nextMoment = components[component + 1]



    return (
        <div className='flex w-full overflow-y-auto'>
            <div className='w-full lg:min-w-[700px]  min-h-[300px] '>
                <div className='border-b border-stone-600 border-opacity-30 flex gap-4 '>
                    <div onClick={() => setTogglePreview(1)}
                        className={`font-medium  ${TogglePreview == 1 ? "brightness-125 border-b border-white" : "brightness-75"} py-2 px-2 cursor-pointer`}>
                        Preview</div>
                    <div onClick={() => setTogglePreview(2)}
                        className={`font-medium ${TogglePreview == 2 ? "brightness-125 border-b border-white" : " brightness-75"} py-2 px-2 cursor-pointer`}>
                        Code</div>
                </div>
                <div className=' min-h-52 mt-5 rounded-lg' >
                    {TogglePreview === 2 ?
                        <>
                            <SyntaxHighlighter
                                language="javascript"
                                style={vscDarkPlus}
                            >
                                {metadata?.code}
                            </SyntaxHighlighter>
                        </> :
                        <ComponentPreview preview={preview[1] as string} />
                    }
                    {/* INSTALLATION */}
                    <div className=''>
                        <div className='text-2xl font-semibold tracking-tight border-b border-stone-500 pb-2 border-opacity-40 my-4 text'
                            ref={installation}
                        >
                            Installation
                        </div>
                        <div className='py-5 pb-0 border-b border-slate-500  flex gap-5 px-2 border-opacity-35'>
                            <div className={`cursor-pointer font-semibold ${InstallationPreview == 1 ? "border-b brightness-110" : "brightness-75"} pb-3 px-2`}
                                onClick={() => { setInstallationPreview(1) }}
                            > CLI </div>
                            <div className={`cursor-pointer font-semibold ${InstallationPreview == 2 ? "border-b brightness-110" : "brightness-75"} pb-3 px-2`}
                                onClick={() => { setInstallationPreview(2) }}
                            > Manual </div>
                        </div>
                    </div>
                    {
                        InstallationPreview == 1 &&
                        <div className='my-6 '>
                            <div className='my-6 flex items-center justify-between gap-2'>
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={vscDarkPlus}
                                    customStyle={{ borderRadius: "12px", width: "90%" }}
                                >
                                    {metadata?.cli}
                                </SyntaxHighlighter>
                                {
                                    isCopied == metadata?.cli ?
                                        <Check color='green' /> :
                                        <Copy size={19}
                                            className='cursor-pointer'
                                            onClick={() => {
                                                navigator.clipboard.writeText(metadata?.cli),
                                                    setisCopied(metadata.cli)
                                                setTimeout(() => {
                                                    setisCopied(null)
                                                }, 1500)
                                            }} />
                                }
                            </div>
                            {/* if additional steps -  */}
                            {
                                metadata?.additionalSteps?.map((data, index) => (
                                    <div key={index} className=''>
                                        <div> {data.title} </div>
                                        <SyntaxHighlighter
                                            language="javascript"
                                            style={vscDarkPlus}
                                            customStyle={{ borderRadius: "12px", width: "90%" }}
                                        >
                                            {data.desc}
                                        </SyntaxHighlighter>
                                    </div>
                                ))
                            }
                            <div>
                                <div className='text-2xl text-slate-200 font-semibold pb-3 border-b border-stone-700 tracking-tight'
                                    ref={usage}
                                >Usage</div>
                                <div className='my-6'>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={vscDarkPlus}
                                        customStyle={{ borderRadius: "12px", width: "90%" }}
                                    >
                                        {metadata?.import}
                                    </SyntaxHighlighter>
                                </div>
                                <div className='my-2 mb-12'>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={vscDarkPlus}
                                        customStyle={{ borderRadius: "12px", width: "90%" }}
                                    >
                                        {metadata?.demo}
                                    </SyntaxHighlighter>
                                </div>
                            </div>

                        </div>
                    }
                    {/* Prev or Next */}
                    {InstallationPreview == 2 && metadata?.manualSteps?.map((Msteps, index) => (
                        <div key={index}>
                            <div className='my-6 flex flex-col' key={index}>
                                <div className='flex gap-2 items-center mt-5'>
                                    <div className='p-[0.40rem] px-4 mt-3 m-2 bg-gray-700 bg-opacity-35 rounded-[100%]'> {index + 1} </div>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className='text-2xl tracking-tighter font-semibold'> {Msteps.title} </div>
                                        {
                                            isCopied == Msteps.title ?
                                                <Check color='green' /> :
                                                Msteps.title.includes("Update the import paths to match your project setup.") ?
                                                    null :
                                                    <Copy size={19}
                                                        className='cursor-pointer'
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(metadata?.cli),
                                                                setisCopied(Msteps.title)
                                                            setTimeout(() => {
                                                                setisCopied(null)
                                                            }, 1500)
                                                        }} />
                                        }
                                    </div>
                                </div>
                                <div className='relative' >
                                    {Msteps.code &&
                                        <>
                                            <SyntaxHighlighter
                                                language="javascript"
                                                style={vscDarkPlus}
                                                customStyle={{
                                                    borderRadius: "12px",
                                                    maxHeight: !isCollapsed ? "300px" : "auto",
                                                    minHeight: isCollapsed == true && Msteps.code.length > 400 ? "600px" : "40px",
                                                    overflowY: !isCollapsed ? "hidden" : "scroll"
                                                }}
                                            >
                                                {Msteps.code}
                                            </SyntaxHighlighter>
                                            {!isCollapsed && Msteps.code.length > 400 ?
                                                <div onClick={() => setisCollapsed((val) => !val)} className='absolute bottom-10 bg-black/60 px-4 py-2 rounded-xl left-[43%]'>
                                                    Expand
                                                </div> :
                                                Msteps.code.length > 400 ?
                                                    <div onClick={() => setisCollapsed((val) => !val)} className='absolute bottom-10 bg-black/60 px-4 py-2 rounded-xl left-[43%]'>
                                                        Collapse
                                                    </div> : null}
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                    {
                        InstallationPreview == 2 && <div className='text-center text-xl'> YOU'RE ALL SET! </div>
                    }
                    <div className='my-10 flex justify-between mb-24 border-b pb-7 border-opacity-30 border-stone-300'>
                        {
                            <Link href={`/docs/components/${prevMoment}`} >
                                <div className='cursor-pointer'> {`<`}  {component > 0 && prevMoment}</div>
                            </Link>
                        }{
                            nextMoment &&
                            <Link href={`/docs/components/${nextMoment}`}>
                                <div className='cursor-pointer'>  {nextMoment} {`>`} </div>
                            </Link>
                        }
                    </div>
                </div>
            </div >
            {/*  */}
        </div >

    )
}

export default PreviewCode