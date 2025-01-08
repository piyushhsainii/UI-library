import React from 'react'
import { componentsData } from './data/componentsData'
import Link from 'next/link'

const Components = () => {
    return (
        <div className='min-h-[700px] h-auto flex flex-wrap '>
            {componentsData.map((cmptns) => (
                <Link href={`/templates/${cmptns.componentName}`} key={cmptns.title}>
                    <div className='p-3 max-h-[500px] overflow-hidden m-7 my-2 border border-slate-700 bg-black hover:bg-slate-950  border-opacity-50 hover cursor-pointer max-w-[350px] min-w-[300px] rounded-lg'>
                        <div key={cmptns.url} className='m-2'>
                            {cmptns.type == "image" ?
                                <>
                                    <div className='text-lg text-[#cfcfcf] p-3 pl-0 font-semibold flex justify-between'>
                                        <div> {cmptns.title}</div>
                                    </div>
                                    <div className='text-base text-white brightness-75 p-1 pl-0 '>{cmptns.description}</div>
                                    <img src={cmptns.url} alt=""
                                        className='  pb-1  object-contain' />
                                </> : <>
                                    <div className='text-lg text-[#cfcfcf] p-3 pl-0 font-semibold flex justify-between'>
                                        <div> {cmptns.title}</div>
                                    </div>
                                    <div className='text-base text-white brightness-75 p-1 pl-0 '>{cmptns.description}</div>
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