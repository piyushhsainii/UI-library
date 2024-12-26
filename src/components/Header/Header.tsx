'use client'
import { BookOpen, Command, File, LucideGithub, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Modal, { ModalTrigger } from '../UIcomponents/Modal'
import { components } from '@/lib/components'
import Image from 'next/image'

const Header = () => {
    const path = usePathname()
    const [SearchDocsValue, setSearchDocsValue] = useState('')

    return (
        <div className='flex justify-center w-full relative max-w-screen-2xl mx-auto bg-black/50 z-[60] text-white border-b border-stone-700 border-opacity-35 backdrop-blur-sm'>
            <div className='flex items-center justify-between w-full px-4 fixed'>
                <div className='flex items-center gap-5 pl-1'>
                    <Link href={'/'}>
                        <div className='brightness-90 hover:brightness-105 pl-5 md:pl-0 cursor-pointer font-bold sm:pr-3 text-base'>
                            <Image src="/Logo7.png" alt="" className='h-10 max-w-[100px]' width={90} height={35} />
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
                    <Link href={'/contact'}>
                        <div className={` ${path == '/contact' ? "brightness-105" : "brightness-50"} hover:brightness-105 transition-all text-sm md:text-base   duration-200 hidden sm:block cursor-pointer font-sans font-normal tracking-tight`}>Contact</div>
                    </Link>
                </div>
                <div className='flex items-center gap-4 px-3 py-4'>
                    <Modal>
                        <ModalTrigger>
                            <div className='flex md:gap-4 brightness-75 hover:brightness-105 cursor-pointer font-sans text-sm border border-gray-500 px-4 py-1 rounded-lg
                    border-opacity-30 bg-stone-700 bg-opacity-35 '>
                                <div className='text-gray-400 font-normal text-sm'> Search documentation...</div>
                                <div className='flex items-center gap-[0.15rem] bg-stone-500 rounded-sm px-1 bg-opacity-40 text-[0.680rem]'>
                                    <Command size={14} /> K
                                </div>
                            </div>
                        </ModalTrigger>
                        <div className='overflow-y-scroll'>
                            <div className='overflow-y-scroll'>
                                <div className='flex items-center '>
                                    <Search size={18} className='m-2 ml-3' />
                                    <input placeholder='Search Documentation...'
                                        className='bg-black w-[95%] flex justify-center mx-auto  p-3
                                    rounded-lg outline-none
                                    ' onChange={(e) => setSearchDocsValue(e.target.value)} value={SearchDocsValue} />
                                </div>
                                <Link href={'/docs'}>
                                    <div className='p-4 flex items-center gap-2  text-base hover:bg-slate-800 cursor-pointer border border-gray-600 border-opacity-40'>
                                        <BookOpen size={18} />  Introduction
                                    </div>
                                </Link>
                                {components.map((cmptns) => (
                                    cmptns.includes(SearchDocsValue) &&
                                    <Link key={cmptns} href={`/docs/components/${cmptns}`}>
                                        <div className='p-4 flex items-center gap-2 text-base hover:bg-slate-800 cursor-pointer border border-gray-600 border-opacity-40'>
                                            <File className=' ' size={18} /> {cmptns} </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>

                        </div>
                    </Modal>
                    <div> <Link href={'https://github.com/piyushhsainii'} target='_blank'><LucideGithub size={17} /> </Link> </div>
                    <div>  </div>
                </div>
            </div>
        </div>
    )
}

export default Header