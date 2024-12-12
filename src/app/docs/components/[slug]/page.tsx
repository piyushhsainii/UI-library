'use client'
import CodeStructure from '@/components/CodeStructure'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {


    return (
        <div className='flex  justify-center w-full max-w-screen-2xl pt-16 m-auto'>
            <Sidebar />
            <div className=" bg-black text-white border-b border-r border-stone-800  w-[82vw] h-[100vh]">
                <CodeStructure />
            </div>
        </div>
    )
}

export default page