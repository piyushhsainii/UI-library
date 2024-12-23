'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import TemplateCard from './templateCard'

const page = () => {

    const templatesTypes = ['Portfolio', 'Product Page', 'Dashboard', 'Components', 'E-Commerce']

    return (
        <div className='pt-20 max-w-screen-2xl mx-auto'>
            <div className='text-slate-200 text-3xl text-center font-sans uppercase'>
                Discover Ready-Made Templates
            </div>
            <div className='flex justify-between items-center px-5 m-4 text-slate-200 mt-5'>
                <div className='flex gap-6 max-w-[1200px] border border-slate-700 border-opacity-70 rounded-2xl px-8 py-1 '>
                    {templatesTypes.map((temp) => (
                        <div key={temp} className='brightness-50 hover:brightness-105 cursor-pointer'> {temp} </div>
                    ))}
                </div>
                <div className='flex items-center gap-4 cursor-pointer'>
                    <div>Clear All </div>
                    <div>Filters</div>
                </div>
            </div>
            <div>
                <div className='p-3 m-4 max-h-[500px] overflow-hidden  border border-slate-700 max-w-[350px] min-w-[300px] rounded-lg'>
                    <div>
                        <img src="https://res.cloudinary.com/dzow59kgu/image/upload/v1734645992/temp1_kgi1q3.jpg" alt=""
                            className='  pb-1  object-contain  '
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page