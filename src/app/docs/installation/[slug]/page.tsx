'use client'
import Sidebar from '@/components/Sidebar'
import { usePathname } from 'next/navigation'
import React from 'react'
import { data } from './InstallationData'

const page = () => {

    const path = usePathname()
    const frameWorkName = path.split('/docs/installation/')
    const FrameworkData = data.find((data) => data.title == frameWorkName[1])

    return (
        <div className='flex  justify-start w-full max-w-screen-2xl pt-16'>
            <Sidebar />
            <div className=" bg-black text-white border-b px-7 border-r border-stone-800  w-[82vw] md:w-full ">
                <div className='flex gap-2 text-sm p-5 pb-2'>
                    <div className='text-stone-400'>Docs </div>{`> ${FrameworkData?.title} `}
                </div>
                <div className='text-3xl px-5'> {FrameworkData?.title} </div>
                <div className='text-base px-5 py-2 text-stone-400'> {FrameworkData?.description} </div>
            </div>
        </div>
    )
}

export default page