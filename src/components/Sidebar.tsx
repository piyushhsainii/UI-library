import { components } from '@/lib/components'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className=' text-white flex flex-col justify-start overflow-y-auto max-w-[220px] border-b border-r border-stone-800 p-4 pt-6'>
            <div className='py-4 font-semibold text-sm cursor-pointer'> Follow for updates </div>
            <Link href={'https://x.com/piyushsainii'} target='_blank' >
                <div className='text-zinc-500 text-sm cursor-pointer'>
                    Twitter @piyushsainii
                </div>
            </Link>
            <div className='py-5 cursor-pointer'> Getting Started </div>
            <div className='text-base brightness-75 hover:brightness-95 cursor-pointer '>Introduction</div>
            <div className='text-base brightness-75 hover:brightness-95 cursor-pointer '>Installation</div>
            <div className='py-5  font-nromal brightness-90 tracking-tight'> Getting Started </div>
            <div className='h-72 px-1 overflow-y-auto hide-scrollbar'>
                {
                    components?.map((comnts) => (
                        <div key={comnts} className=' my-1 text-base brightness-50  hover:brightness-110 duration-200 transition-all cursor-pointer'>
                            {comnts}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar