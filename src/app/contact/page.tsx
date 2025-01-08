'use client'
import { createClient } from '@/lib/supabase'
import { Send } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [name, setname] = useState('')
    const [message, setmessage] = useState('')
    const supabase = createClient()

    const sendMessage = async () => {
        await supabase.from("users").insert({
            name: name,
            message: message
        }).select('*').single()
    }

    return (
        <div className='h-screen w-full mt-10 flex flex-col md:flex-row justify-center items-center gap-10'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex justify-center items-center '>
                    <div className='text-2xl md:text-5xl font-semibold text-white '>
                        Get in Touch
                        <div className='text-base md:text-xl mt-4'>
                            Want to work with me? <br></br> You can connect to me via these platforms.
                            <div className='text-base mt-2 font-light'>
                                For any queries - sainipiyush8860@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-gray-400 text-center flex flex-row md:flex-col items-center gap-3'>
                    <Link href={'https://x.com/piyushsainii'}><Image src={'/twittericon.png'} height={42} width={59} alt='logo' /></Link>
                    <Link href={'https://www.linkedin.com/in/piyush-saini-b860ab1bb/'}><Image src={'/linkedIn.png'} height={42} width={52} alt='logo' className='' /></Link>
                </div>
            </div>
            <div className='text-white'>
                <div className='flex flex-col m-3 gap-1'>
                    <label>Name</label>
                    <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder='Name' className='bg-slate-900 pl-2 rounded-lg outline-none p-1 border border-blue-600 border-opacity-40' />
                </div>
                <div className='flex flex-col m-3 gap-1'>
                    <label> Message </label>
                    <textarea value={message} onChange={(e) => setmessage(e.target.value)} cols={40} rows={7}
                        placeholder='Send me a message...'
                        className='bg-slate-900 resize-none rounded-lg pl-2  outline-none p-1 border border-blue-600 border-opacity-40' ></textarea>
                </div>
                <button onClick={() => sendMessage()} className='flex items-center gap-2 bg-white px-4 py-2 text-black rounded-md ml-3'> <div>Send Message </div><Send size={18} /> </button>
            </div>
        </div>
    )
}

export default page