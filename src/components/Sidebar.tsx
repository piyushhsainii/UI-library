import { components } from '@/lib/components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const path = usePathname()
    return (
        <div className='h-[700px] overflow-y-auto overflow-x-hidden min-w-[220px] hidden md:flex'>
            <div className=' text-white  flex-col  justify-start min-w-[220px] border-b border-r border-stone-800 p-4 hidden md:flex'>
                <div className='py-4 font-semibold text-sm cursor-pointer'> Follow for updates </div>
                <Link href={'https://x.com/piyushsainii'} target='_blank' >
                    <div className='text-zinc-500 text-sm cursor-pointer'>
                        Twitter @piyushsainii
                    </div>
                </Link>
                <div className='py-5 cursor-pointer'> Getting Started </div>
                <Link href={'/docs'}>
                    <div className={`text-base  hover:brightness-95 cursor-pointer ${path == "/docs" ? "brightness-125" : "brightness-50"} `}>
                        Introduction
                    </div>
                </Link>
                <Link href={'/docs/installation'}>
                    <div className={`text-base  hover:brightness-95 cursor-pointer ${path == "/docs/installation" ? "brightness-125" : "brightness-50"} `}>
                        Installation
                    </div>
                </Link>
                <div className='py-5  font-nromal brightness-90 tracking-tight'> Components </div>
                <div className='h-72 px-1  hide-scrollbar'>
                    {
                        components?.map((comnts) => (
                            <Link key={comnts} href={`/docs/components/${comnts}`}>
                                <div className={`${path == `/docs/components/${comnts}` ? 'brightness-110' : 'brightness-50'} my-1 text-base   hover:brightness-110 duration-200 transition-all cursor-pointer`}>
                                    {comnts}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Sidebar