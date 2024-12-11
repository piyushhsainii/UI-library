'use client'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import TemplateCard from './templateCard'

const page = () => {
    return (
        <div className='pt-20 max-w-screen-2xl '>
            <div className='text-slate-200 text-3xl text-center font-sans uppercase'>
                {/* <Typewriter
                    loop
                    typeSpeed={40}
                    deleteSpeed={35}
                    words={[
                        'Templates Tailored for Your Vision',
                        'Effortless Design, Ready to Use',
                        'Find Your Perfect Template',
                        'Discover Ready-Made Templates',
                    ]} /> */}
                Discover Ready-Made Templates
            </div>
            {/* <div className='grid grid-cols-3'> */}
            {/* {Array.from({ length: 3 }, (_, i) => (
                    <TemplateCard key={i} />
                ))} */}
            {/* </div> */}
        </div>
    )
}

export default page