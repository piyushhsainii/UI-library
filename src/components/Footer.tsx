import { Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='h-[220px] '>
            <div className='flex justify-between'>
                <div className='flex flex-col m-4'>
                    <Image src={'/logo7.png'} width={70} height={70} alt='logo' className='h-[30px] m-4 mb-0' />
                    <div className='text-[#9c9c9c] mx-4 p-2 pl-0'> A Marketplace for Designers and Developers </div>
                    <div className='flex gap-4 mx-4 mt-0'>
                        <Link href={'https://x.com/piyushsainii'} target='_blank'>
                            <Twitter size={20} color='#9c9c9c' /> </Link>
                        <Link href={'https://www.linkedin.com/in/piyush-saini-b860ab1bb/'} target='_blank'>
                            <Linkedin size={20} color='#9c9c9c' /> </Link>
                        <Link href={'https://github.com/piyushhsainii'} target='_blank'>
                            <Github size={20} color='#9c9c9c' /></Link>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <hr className='w-[90%] mx-auto border-t border-stone-700 border-opacity-45' />
            <div className='text-sm  my-3  w-full pl-8 p-3  '>
                <div className='text-[#9c9c9c]'> &copy; 2024 Velour UI. All Rights reserved.</div>
                <div className='text-[#9c9c9c]'> Privacy Policy | Terms of Service | Refund Policy </div>
            </div>
        </div>
    )
}

export default Footer