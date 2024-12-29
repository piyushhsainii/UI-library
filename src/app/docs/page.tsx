'use client'
import Sidebar from '@/components/Sidebar'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {

    return (
        <div className='flex  justify-center w-full max-w-screen-2xl pt-16 mx-auto'>
            <Sidebar />
            <div className=" bg-black text-white border-b border-r  border-stone-800  w-[82vw]">
                <div className='text-3xl p-5 tracking-tight font-light'>
                    Introducing Velour UI!
                </div>
                <div className='flex flex-wrap justify-evenly px-5 items-center gap-7 select-none '>
                    <div className='border border-stone-700 rounded-2xl p-3'>
                        <div className='p-3 text-xl '>
                            Build for Free
                        </div>
                        <div className='px-3 tracking-tight text-stone-400 max-w-[309px] h-[120px]'>
                            Velour UI offers a wide range of free-to-use framer motion and 3D based components compatible with react and next!
                        </div>
                        <Link href={'/docs/component/Modal'}>
                            <div className='flex gap-1 items-center brightness-75 hover:brightness-110 justify-end mr-3'>Explore <ArrowRight size={18} /> </div></Link>
                    </div>
                    <div className='border border-stone-700 rounded-2xl p-3'>
                        <div className='p-3 text-xl '>Buy with Ease</div>
                        <div className='px-3 tracking-tight text-stone-400 max-w-[309px] h-[120px]'>
                            Velour UI offers various templates which you can easily purchase and download.
                        </div>
                        <Link href={'/templates'}>
                            <div className='flex gap-1 items-center brightness-75 hover:brightness-110 justify-end mr-3'>Explore <ArrowRight size={18} /> </div>
                        </Link>
                    </div>
                    <div className='border border-stone-700 rounded-2xl p-3'>
                        <div className='p-3 text-xl '>Earn Without Limits</div>
                        <div className='px-3 tracking-tight text-stone-400 max-w-[309px] h-[120px]'>
                            Good in designs? You can post your template to Velour UI and can get paid
                            everytime someone purchase it!
                        </div>
                        <Link href={'/templates'}>
                            <div className='flex gap-1 items-center brightness-75 hover:brightness-110 justify-end mr-3'>Explore <ArrowRight size={18} /> </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default page
