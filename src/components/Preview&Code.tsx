'use client'
import { metadata } from '@/lib/interfaces'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import TextClip from './UIcomponents/TextClip';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Copy } from 'lucide-react';
import { components } from '@/lib/components';
import Link from 'next/link';
import AnimatedCarousel from './UIcomponents/AnimatedCarousel';
import AnimatedSlider from './UIcomponents/AnimatedSlider';
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
    const [ComponentPreview, setcomponentPreview] = useState<any>(null)
    const path = usePathname()
    const preview = path.split('/docs/components/')
    const component = components.indexOf(componentName)
    const prevMoment = components[component - 1]
    const nextMoment = components[component + 1]



    return (
        <div className='flex w-full overflow-y-auto'>
            <div className='min-w-[700px]  min-h-[300px] '>
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
                        <div className='border border-stone-700 border-opacity-30   min-h-40 flex justify-center items-center'>
                            {
                                preview[1] == "Navbar" ?
                                    <video
                                        src="https://res.cloudinary.com/dzow59kgu/video/upload/v1733856142/NavbarV2_ih4hxn.mp4"
                                        muted playsInline autoPlay={true} loop
                                    >
                                    </video> :
                                    preview[1] == "TextClip" ?
                                        <>
                                            <TextClip variant='redBlue' text='TEXT CLIP' />
                                        </> :
                                        preview[1] == "AnimatedCarousel" ?
                                            <>
                                                <AnimatedCarousel
                                                    img={[
                                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257800/zvgzb7nwijybs2ef9n88.jpg",
                                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257656/jpdrbz6fw0qsgsxhbzm1.jpg",
                                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257800/wpubdtsjofyowibz1euj.jpg",
                                                    ]}
                                                />
                                            </>
                                            :
                                            preview[1] == "AnimatedSlider" ?
                                                <>
                                                    <AnimatedSlider
                                                        img={[
                                                            "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                                            "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                                            "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                                            "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                                            "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                                        ]}
                                                    />
                                                </>
                                                :
                                                null
                            }
                        </div>
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
                            <div className='my-6 flex items-center justify-evenly gap-2'>
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={vscDarkPlus}
                                    customStyle={{ borderRadius: "12px", width: "90%" }}
                                >
                                    {metadata?.cli}
                                </SyntaxHighlighter>
                                <Copy size={19} onClick={() => { navigator.clipboard.writeText(metadata.cli) }} />
                            </div>
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
                                    <div className='text-2xl tracking-tighter font-semibold'> {Msteps.title} </div>
                                </div>
                                <div>
                                    {Msteps.code &&
                                        <SyntaxHighlighter
                                            language="javascript"
                                            style={vscDarkPlus}
                                            customStyle={{ borderRadius: "12px" }}
                                        >
                                            {Msteps.code}
                                        </SyntaxHighlighter>}
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