'use client'
import { ArrowLeft, Check, Share } from 'lucide-react'
import React, { useState } from 'react'
import { componentsData } from '../data/componentsData'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import Modal, { ModalTrigger } from '@/components/UIcomponents/Modal'

const page = () => {
    const params = useParams()
    const host = window.location.host
    const searchParams = usePathname()
    const [isCopied, setisCopied] = useState(false)
    const tempName = params?.tempid
    const data = componentsData.find((data) => data.componentName == tempName)

    return (
        <div className='h-[90vh] flex justify-center w-full mt-20 gap-5 max-w-screen-2xl mx-auto transition-all duration-200' >
            <div className='text-white mx-6 mt-2 flex flex-col gap-4'>
                <Link href={'/templates'}>  <div
                    className='text-white flex w-[180px] mt-10 hover:gap-2 text-center justify-center brightness-50  transition-all duration-200 hover:underline cursor-pointer'>
                    <ArrowLeft color='white' className='' /> Back to Templates </div>
                </Link>
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
                <div className='flex items-center m-1 my-5 gap-2'>
                    {isCopied == true ?
                        <Check size={18} /> :
                        <Share size={18} onClick={() => { window.navigator.clipboard.writeText(host + searchParams), setisCopied(true), setTimeout(() => { setisCopied(false) }, 1200) }} />
                    }
                    {/* <Link href={`${searchParams}/demo`}> <div className='cursor-pointer hover:underline hover:text-slate-300'> Checkout Live Demo </div></Link> */}
                </div>
                <div className='text-lg'> What you'll get after purchase: </div>
                <div className='text-base m-5 my-3 ml-0 tracking-tight'> A customised component like this  in your website <br></br>
                    tailored according to your needs.
                </div>
                <div className='flex gap-3 my-8'>
                    {data?.isPaid &&
                        <div className=' px-4 py-2  bg-slate-700 rounded-lg'>
                            <Modal>
                                <ModalTrigger>
                                    Request this Component
                                </ModalTrigger>
                                <div className='text-pretty flex flex-col items-center justify-center h-full'>
                                    <div className='text-3xl p-3'>{data.title}  </div>
                                    <div className='px-7 text-center text-base'
                                    > Upon purchasing this component <br></br> we will contact you within 24 hours and get in touch to
                                        discuss your product requirements. </div>
                                    <button className='bg-green-500 px-4 py-2 text-black m-3 rounded-lg font-semibold'> BUY COMPONENT {data.price} </button>
                                </div>
                            </Modal>
                        </div>}
                    {!data?.isPaid &&
                        <button className=' px-4 py-2  bg-slate-700 rounded-lg'>
                            <Link href={`/docs/components/${data?.componentName}`}><div>Download</div></Link>
                        </button>}
                    <Link href={'/contact'}><button className=' px-4 py-2 border-slate-700 border rounded-lg'> Get in Touch </button></Link>
                </div>
            </div>
        </div>
    )
}

export default page