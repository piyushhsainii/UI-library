'use client'
import Sidebar from '@/components/Sidebar'
import { usePathname } from 'next/navigation'
import React from 'react'
import { data } from './InstallationData'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const page = () => {

    const path = usePathname()
    const frameWorkName = path.split('/docs/installation/')
    const FrameworkData = data.find((data) => data.title == frameWorkName[1])

    return (
        <div className='flex  justify-center w-full max-w-screen-2xl pt-10 m-auto'>
            <Sidebar />
            <div className=" bg-black relative  text-white border-b px-7 border-r border-stone-800 flex w-[82vw] md:w-full mt-6 mx-auto">
                <div className='overflow-y-scroll  h-[90vh]'>
                    <div className='flex gap-2 text-sm p-5 pt-0 pb-2'>
                        <div className='text-stone-400'>Docs </div>{`> ${FrameworkData?.title} `}
                    </div>
                    <div className='text-3xl px-5'> {FrameworkData?.title} </div>
                    <div className='text-base px-5 py-2 text-stone-400'> {FrameworkData?.description} </div>
                    <div className='max-w-[800px] '>
                        {
                            FrameworkData?.steps.map((steps, index) => (
                                <div key={steps.title}>
                                    <div className='flex flex-col items-start'>
                                        <div className='flex gap-2 items-center mt-5'>
                                            <div className='p-[0.40rem] px-4 mt-3 m-2 bg-gray-700 bg-opacity-35 rounded-[100%]'> {index + 1} </div>
                                            <div className='text-2xl tracking-tighter font-semibold'> {steps.title} </div>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            {steps.code.map((code) => (
                                                <div key={code.code} className='pl-16'>
                                                    {code.title &&
                                                        <div> {code.title} </div>
                                                    }{
                                                        code.code &&
                                                        <div className='rounded-lg w-auto max-w-[600px]'>
                                                            <SyntaxHighlighter customStyle={{ borderRadius: "10px" }}
                                                                style={vscDarkPlus}
                                                            >
                                                                {code.code}
                                                            </SyntaxHighlighter>
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
                {/*  */}
                <div className='max-h-[700px]  right-3'>
                    <div className=' px-10 min-w-[300px]'>
                        <div className='my-5 font-semibold'> On this Page </div>
                        {FrameworkData?.steps.map((title) => (
                            <div className='my-1 brightness-50' key={title.title}>
                                {title.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page