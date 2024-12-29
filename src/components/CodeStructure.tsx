'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import PreviewCode from './Preview&Code'
import { metadata } from '@/lib/interfaces'

const CodeStructure = () => {
    const [metaData, setmetaData] = useState<metadata | null>(null)
    const path = usePathname()
    const installation = useRef<HTMLDivElement | null>(null)
    const usage = useRef<HTMLDivElement | null>(null)
    const [activeComponent, setactiveComponent] = useState('Installation')
    const componentName = path.split('/docs/components/')
    const getMetadata = async () => {
        const metadata = await import(`../components/UIMetadata/${componentName[1]}`)
        setmetaData(metadata?.metadata)
    }
    useEffect(() => {
        getMetadata()
    }, [])
    return (
        <div className='text-slate-200 pt-6 md:p-3 font-sans md:px-9 h-[100vh] flex  '>
            <div className='overflow-y-scroll md:pr-4'>
                <div className='flex gap-2 text-sm'> <div className='text-stone-400'>Docs </div>{`> ${componentName[1]} `} </div>
                <div className='text-[1.7rem] font-semibold py-2 pb-0'>
                    {componentName[1]}
                </div>
                <div className='text-slate-400 text-sm'> {metaData?.description} </div>
                <div className='text-stone-300 text-sm py-3'>  </div>
                <PreviewCode metadata={metaData!} installation={installation!} usage={usage!} componentName={componentName[1]} />
            </div>
            <div className='max-h-[700px] right-3 hidden lg:block'>
                <div className=' px-4 lg:px-10 min-w-[200px]'>
                    <div className='my-5 font-semibold'> On this Page </div>
                    <div className={`my-1 cursor-pointer  ${activeComponent === "Installation" ? "brightness-105" : "brightness-50"} hover:brightness-105 duration-200 transition-all`} id='installation'
                        onClick={() => {
                            if (installation.current) {
                                installation.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                            setactiveComponent("Installation")
                        }}
                    >
                        Installation
                    </div>
                    <div className={`my-1 cursor-pointer  ${activeComponent === "Usage" ? "brightness-105" : "brightness-50"} hover:brightness-105 duration-200 transition-all`}
                        onClick={() => {
                            if (usage.current) {
                                usage.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                            setactiveComponent("Usage")
                        }}
                    >
                        Usage
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeStructure