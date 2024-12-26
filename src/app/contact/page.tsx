import { Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='h-screen w-full mt-10 flex justify-center items-center gap-10'>
            <div className='flex justify-center items-center gap-12'>
                <div className='text-4xl font-semibold text-white '>
                    Get in Touch
                    <div className='text-xl mt-4'>
                        Want to work with me? <br></br> You can connect to me via these platforms.
                        <div className='text-base mt-4'> My Email - sainipiyush8860@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className='text-gray-400 text-center flex flex-col items-center gap-3'>
                <Link href={'https://x.com/piyushsainii'}><Image src={'/twittericon.png'} height={42} width={59} alt='logo' /></Link>
                {/* <div className='flex items-center ml-10'>
                    <Image src={'/discordicon.png'} height={1} width={62} alt='logo' /> - @piyushhsainii </div>
                <div className='flex items-center'>
                    <Image src={'/gmailicon.png'} height={42} width={52} alt='logo' /> -</div> */}
                <Link href={'https://www.linkedin.com/in/piyush-saini-b860ab1bb/'}><Image src={'/linkedIn.png'} height={42} width={52} alt='logo' className='' /></Link>
            </div>
        </div>
    )
}

export default page