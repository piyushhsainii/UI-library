import { Github, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='h-[220px] '>
            <div className='flex justify-between'>
                <div className='flex flex-col m-4'>
                    <Image src={'/logo7.png'} width={70} height={70} alt='logo' className='h-[30px] m-4 mb-0' />
                    <div className='text-[#9c9c9c] mx-4 p-2 pl-0'> A Marketplace for Designers and Developers </div>
                    <div className='flex gap-4 mx-4 mt-0'>
                        <Twitter size={20} color='#9c9c9c' />
                        <Linkedin size={20} color='#9c9c9c' />
                        <Github size={20} color='#9c9c9c' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='text-sm  my-3 border-t border-slate-700 w-[80%] mx-auto'>
                <div className='text-[#9c9c9c]'> &copy; 2024 Velour UI. All Rights reserved.</div>
                <div className='text-[#9c9c9c]'> Privacy Policy | Terms of Service | Refund Policy </div>
            </div>
        </div>
    )
}

export default Footer