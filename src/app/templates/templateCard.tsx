import { MoveUpRight } from 'lucide-react'
import React from 'react'

const TemplateCard = () => {
    return (
        <div className='text-white p-1  border border-slate-400 border-opacity-30 w-[25rem] m-5 rounded-2xl h-[450px]  cursor-pointer hover:border-opacity-70'>
            <img
                className='h-[60%]'
                src="https://res.cloudinary.com/dzow59kgu/image/upload/v1731706489/qcvue9gq4rr1teyuusaq.jpg"
                alt="" />
            <div className='text-xl p-2 px-3 text-slate-300'> Modern Template </div>
            <div className='p-3 pt-0 text-slate-500 text-sm'>
                Modern Template for portfolio designed just for you. Buy and Get started </div>
            <div className='flex gap-3 border border-slate-400 pl-3 ml-3 rounded-lg w-[60%] justify-center py-1 items-center border-opacity-45 brightness-75 hover:brightness-125 cursor-pointer'>
                CHECK OUT TEMPLATE <MoveUpRight size={19} />
            </div>
        </div>
    )
}

export default TemplateCard