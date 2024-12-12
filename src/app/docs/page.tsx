'use client'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {



    return (
        <div className='flex  justify-center w-full max-w-screen-2xl pt-16 '>
            <Sidebar />
            <div className=" bg-black text-white border-b border-r  border-stone-800  w-[82vw]">
                <div className='text-3xl p-5 tracking-tight font-semibold'>
                    Introducing Velour UI!
                </div>
            </div>
        </div>
    )
}

export default page
