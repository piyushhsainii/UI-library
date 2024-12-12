'use client'
import { Command, LucideGithub } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const path = usePathname()

    return (
        <div className='flex justify-center w-full relative max-w-screen-2xl mx-auto bg-black/50 z-[80] text-white border-b border-stone-700 border-opacity-35 backdrop-blur-sm'>
            <div className='flex items-center justify-between w-full px-4 fixed'>
                <div className='flex items-center gap-5 pl-1'>
                    <Link href={'/'}>
                        <div className='brightness-90 hover:brightness-105 pl-5 md:pl-0 cursor-pointer font-bold sm:pr-3 text-base'>
                            <img src="Logo7.png" alt="" className='h-10 max-w-[100px]' />
                        </div>
                    </Link>
                    <Link href={'/docs'}>
                        <div className={` ${path == '/docs' ? "brightness-105" : "brightness-50"}  hover:brightness-105 transition-all text-sm md:text-base   duration-200 hidden sm:block cursor-pointer font-sans font-normal tracking-tight`}>Docs</div>
                    </Link>
                    <Link href={'/docs/components/Navbar'}>
                        <div className={` ${path.includes('/docs/components') ? "brightness-105" : "brightness-50"} hover:brightness-105 text-sm md:text-base   transition-all duration-200 hidden sm:block cursor-pointer font-sans font-normal tracking-tight`}>Components</div>
                    </Link>
                    <Link href={'/templates'}>
                        <div className={` ${path == '/templates' ? "brightness-105" : "brightness-50"} hover:brightness-105 transition-all text-sm md:text-base   duration-200 hidden sm:block cursor-pointer font-sans font-normal tracking-tight`}>Templates</div>
                    </Link>
                    <Link href={'/pricing'}>
                        <div className={` ${path == '/pricing' ? "brightness-105" : "brightness-50"} hover:brightness-105 transition-all text-sm md:text-base   duration-200 hidden sm:block cursor-pointer font-sans font-normal tracking-tight`}>Pricing</div>
                    </Link>
                </div>
                <div className='flex items-center gap-4 px-3 py-4'>
                    <div className='flex md:gap-4 brightness-75 hover:brightness-105 cursor-pointer font-sans text-sm border border-gray-500 px-4 py-1 rounded-lg
                    border-opacity-30 bg-stone-700 bg-opacity-35 '>
                        <div className='text-gray-400 font-normal text-sm'> Search documentation...</div>
                        <div className='flex items-center gap-[0.15rem] bg-stone-500 rounded-sm px-1 bg-opacity-40 text-[0.680rem]'>
                            <Command size={14} /> K
                        </div>
                    </div>
                    <div> <LucideGithub size={17} /> </div>
                    <div>  </div>
                </div>
            </div>
        </div>
    )
}

export default Header