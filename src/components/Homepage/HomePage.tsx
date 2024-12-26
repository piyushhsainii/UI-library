import Link from 'next/link'
import React from 'react'

const HomePage = () => {
    return (
        <>
            <div className='h-screen w-[99vw] flex flex-col items-center justify-center max-w-screen-2xl mx-auto'>
                <div className=" text-4xl md:text-6xl font-semibold tracking-tight text-center font-sans flex flex-col gap-2
             select-none bg-gradient-to-t from-slate-700 via-slate-400  to-white text-transparent bg-clip-text leading-10 h-[142px]">
                    <div> A Marketplace for</div>
                    <div>  Designers and Developers</div>
                </div>
                <div className='text-slate-500 text-xl  m-4 mb-0 mt-2  p-2'>
                    Reaching the peak of UI elegance and performance.
                </div>
                <div className='text-slate-500 text-base '>
                    Build for Free, Buy with Ease, Earn Without Limits.
                </div>
                <div className='flex my-4 justify-center gap-5'>
                    <Link href={'/docs/components/Interactive3DParticles'} >
                        <button className='bg-slate-300 px-4 py-2 min-w-[150px] rounded-md text-black font-semibold border-opacity-70
                 hover:bg-slate-400 transition-all duration-200
                 '>
                            Browse Components
                        </button>
                    </Link>
                    <Link href={'/docs'}>
                        <button className='border border-slate-600 px-4 py-2 min-w-[150px] rounded-md text-white font-semibold border-opacity-70
                hover:bg-slate-900 transition-all duration-200
                '>
                            Docs
                        </button>
                    </Link>
                </div>
            </div>
        </>

    )
}

export default HomePage