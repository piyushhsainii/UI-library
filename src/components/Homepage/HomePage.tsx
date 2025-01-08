'use client'
import Link from 'next/link'
import React from 'react'
import Featured from '../Featured'
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';



const HomePage = () => {
    const { rive, RiveComponent } = useRive({
        src: "https://res.cloudinary.com/dzow59kgu/raw/upload/v1736159747/coder__6_cj21gw.riv",
        autoplay: true,
        stateMachines: "bumpy",

        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),

    });
    if (rive) {
        rive.play("Timeline 1");
    }


    return (
        <>
            <div className='h-[97vh] w-[99vw] flex justify-between max-h-[900px]  max-w-screen-2xl mx-auto'>
                <div className='flex flex-col items-center justify-center'>
                    <div className=" text-4xl md:text-6xl font-light tracking-tight font-sans flex flex-col gap-2
             select-none bg-gradient-to-t from-slate-700 uppercase via-slate-400  to-white text-transparent bg-clip-text leading-10 h-[142px]">
                        <div> A Marketplace for Designers <br></br> and Developers</div>
                    </div>
                    <div className='text-slate-300 ml-36 font-light uppercase tracking-tighter text-xl mr-0  m-4 mb-0 mt-2 text-center'>
                        Built on top of popular technologies like Rive, Spline and much more!
                    </div>
                    <div className='text-slate-300 uppercase text-xl  font-light   text-center'>
                        Build for Free, Buy with Ease, Earn Without Limits.
                    </div>
                    <div className='flex flex-col md:flex-row my-4 justify-center gap-5 mr-40 ml-3'>
                        <Link href={'/docs/components/Modal'} >
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
                <div className='w-[30%]'>
                    <RiveComponent />
                </div>
            </div>
            <Featured />
        </>

    )
}

export default HomePage