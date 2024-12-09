'use client'
import { Command, LucideGithub } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {

    const path = usePathname()

    return (
        <div className='flex justify-between  max-w-screen-2xl bg-black text-white border-b border-stone-700 border-opacity-35'>
            <div className='flex items-center sm:gap-5 pl-2 sm:px-8 py-4 '>
                <Link href={'/'}> <div className='brightness-90 hover:brightness-105  cursor-pointer font-bold sm:pr-4 text-base'>  UI </div></Link>
                <Link href={'/docs'}>
                    <div className={` ${path == '/docs' ? "brightness-105" : "brightness-50"}  hover:brightness-105 transition-all duration-200 hidden sm:block cursor-pointer font-sans font-normal tracking-tight`}>Docs</div></Link>
                <Link href={'/docs/components/navbar'}>
                    <div className={` ${path == '/docs/component' ? "brightness-105" : "brightness-50"} hover:brightness-105 transition-all duration-200 hidden sm:block cursor-pointer font-sans font-normal tracking-tight`}>Components</div></Link>
                <Link href={'/templates'}>
                    <div className={` ${path == '/templates' ? "brightness-105" : "brightness-50"} hover:brightness-105 transition-all duration-200 hidden sm:block cursor-pointer font-sans font-normal tracking-tight`}>Templates</div></Link>
                <Link href={'/pricing'}>
                    <div className={` ${path == '/pricing' ? "brightness-105" : "brightness-50"} hover:brightness-105 transition-all duration-200 hidden sm:block cursor-pointer font-sans font-normal tracking-tight`}>Pricing</div></Link>
            </div>
            <div className='flex items-center gap-4 px-3 py-4'>
                <div className='flex gap-3 brightness-75 hover:brightness-105 cursor-pointer font-sans text-sm border border-gray-500 px-4 py-1 rounded-lg
                border-opacity-30 bg-stone-700 bg-opacity-35 '>
                    <div className='text-gray-400 font-normal'> Search documentation...</div>
                    <div className='flex items-center gap-[0.15rem] bg-stone-500 rounded-sm px-1 bg-opacity-40 text-[0.680rem]'>
                        <Command size={14} /> K
                    </div>
                </div>
                <div> <LucideGithub size={17} /> </div>
                <div>  </div>
            </div>
        </div>
    )
}

export default Header