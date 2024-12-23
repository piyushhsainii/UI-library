'use client'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {

    return (
        <div className='flex  justify-center w-full max-w-screen-2xl pt-16 mx-auto'>
            <Sidebar />
            <div className=" bg-black text-white border-b border-r  border-stone-800  w-[82vw]">
                <div className='text-3xl p-5 tracking-tight font-semibold'>
                    Introducing Velour UI!
                </div>
                <div className='flex justify-evenly px-5 items-center gap-7 select-none '>
                    <div className='border border-stone-700 rounded-2xl p-3'>
                        <div className='p-3 text-xl '>
                            Build for Free
                        </div>
                        <div className='px-3 tracking-tight text-stone-400'>
                            Velour UI offers a wide range of free and reuseable react based components!
                        </div>
                    </div>
                    <div className='border border-stone-700 rounded-2xl p-3'>
                        <div className='p-3 text-xl '>Buy with Ease</div>
                        <div className='px-3 tracking-tight text-stone-400'>
                            Velour UI offers a wide range of free and reuseable react based components!
                        </div>
                    </div>
                    <div className='border border-stone-700 rounded-2xl p-3'>
                        <div className='p-3 text-xl '>Earn Without Limits</div>
                        <div className='px-3 tracking-tight text-stone-400'>
                            Velour UI offers a wide range of free and reuseable react based components!
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default page
