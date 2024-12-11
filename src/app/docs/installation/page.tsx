'use client'
import { frameworks } from '@/components/settings'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='flex  justify-start w-full max-w-screen-2xl pt-16'>
            <Sidebar />
            <div className=" bg-black text-white border-b px-7 border-r border-stone-800  w-[82vw] md:w-full ">
                <div className='flex gap-2 text-sm p-5'>
                    <div className='text-stone-400'>Docs </div>{`> Installation `}
                </div>
                <div className='text-4xl font-semibold p-4 pt-0 pb-2 tracking-tighter'> Installation  </div>
                <div className='px-4 text-gray-400'> How to install dependencies and structure your app.</div>
                <div className='border-b border-slate-300 border-opacity-25 px-4 text-3xl tracking-tight py-6 pb-4'>
                    Frameworks
                </div>
                <div className='flex '>
                    {frameworks?.map((frmks) => (
                        <Link href={`/docs/installation/${frmks}`} key={frmks} >
                            <div className='p-16 w-[300px] px-24 border border-stone-400  rounded-xl border-opacity-40 m-6
                        flex items-center text-lg justify-center font-semibold  cursor-pointer hover:bg-zinc-700 bg-opacity-30 duration-200 transition-all
                        '>
                                {frmks}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page