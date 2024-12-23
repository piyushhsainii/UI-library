'use client'
import { ArrowLeft, Check, Share } from 'lucide-react'
import React, { useState } from 'react'
import { componentsData } from '../data/componentsData'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'

const page = () => {
    const params = useParams()
    const host = window.location.host
    const searchParams = usePathname()
    const [isCopied, setisCopied] = useState(false)
    console.log(searchParams)
    const tempName = params?.tempid
    const data = componentsData.find((data) => data.componentName == tempName)

    return (
        <div className='h-[90vh] flex justify-start w-full mt-20 gap-5 max-w-screen-2xl mx-auto transition-all duration-200' >
            <Link href={'/templates'}>  <div
                className='text-white flex w-[180px] mt-10 hover:gap-3 text-center justify-center brightness-50 hover:brightness-105 transition-all duration-200  ml-5 hover:underline cursor-pointer'>
                <ArrowLeft color='white' className='' /> Back to Templates </div> </Link>
            <div className='text-white mx-6 mt-10'>
                {data?.type == "image" ?
                    <img src={data.url} alt="" className='max-h-[500px] max-w-[500px]' /> :
                    <video src={data?.url} muted autoPlay loop className='max-h-[500px] max-w-[500px]' ></video>
                }
            </div>
            <div className='text-white mx-6 mt-10'>
                <div className='text-2xl m-1'> {data?.title} </div>
                <div className='text-base text-gray-400 m-1'> {data?.description}  </div>
                {data?.isPaid == true ? <div className='text-2xl'> {data?.price} </div> :
                    <div className='text-green-500 font-semibold tracking-tight text-lg ml-1'> Free To Use </div>}
                <div className='flex items-center m-1 my-5'>
                    {isCopied == true ?
                        <Check /> :
                        <Share onClick={() => { window.navigator.clipboard.writeText(host + searchParams), setisCopied(true), setTimeout(() => { setisCopied(false) }, 1200) }} />
                    }
                </div>
                <div className='text-lg'> What you'll get after purchase: </div>
                <div className='text-base m-5 my-3 ml-0 tracking-tight'> A customised component like this  in your website <br></br>
                    tailored according to your needs.
                </div>
                <div className='flex gap-3 my-8'>
                    <button className=' px-4 py-2  bg-slate-700 rounded-lg'>
                        {data?.isPaid ?
                            <div>Request this Component</div>
                            : <Link href={`/docs/components/${data?.componentName}`}><div>Get Started</div></Link>}
                    </button>
                    <button className=' px-4 py-2 border-slate-700 border rounded-lg'> Get in Touch </button>
                </div>
            </div>
        </div>
    )
}

export default page