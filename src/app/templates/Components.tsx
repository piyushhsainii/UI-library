import React from 'react'
import { componentsData } from './data/componentsData'
import Link from 'next/link'

const Components = () => {
    return (
        <div className='h-[700px] flex'>
            {componentsData.map((cmptns) => (
                <Link href={`/templates/${cmptns.componentName}`} key={cmptns.title}>
                    <div className='p-3 max-h-[500px] overflow-hidden m-7 border border-slate-700 border-opacity-50 hover cursor-pointer max-w-[350px] min-w-[300px] rounded-lg'>
                        <div key={cmptns.url} className='m-2'>
                            {cmptns.type == "image" ?
                                <>
                                    <div className='text-lg text-[#cfcfcf] p-3 pl-0 font-semibold'> {cmptns.title} </div>
                                    <div> {cmptns.title} </div>
                                    <img src="https://res.cloudinary.com/dzow59kgu/image/upload/v1734645992/temp1_kgi1q3.jpg" alt=""
                                        className='  pb-1  object-contain' />
                                </> : <>
                                    <div className='text-lg text-[#cfcfcf] p-3 pl-0 font-semibold'> {cmptns.title} </div>
                                    <video src={cmptns.url}
                                        autoPlay muted loop className='w-auto h-auto  scale-105 rounded-lg my-1'>
                                    </video>
                                </>}
                        </div>
                    </div>
                </Link>))}
        </div>
    )
}
export default Components