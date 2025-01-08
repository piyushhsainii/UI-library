import React from 'react'
import Interactive3DParticles from './UIcomponents/Interactive3DParticles'
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

const Featured = () => {

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
        <div className='min-h-[80vh] relative h-auto border-t border-slate-700 w-full max-h-[1400px] mx-auto max-w-screen-2xl'>
            <div className='text-slate-200 text-7xl p-2 font-light'> FEATURED</div>
            <div className='flex justify-evenly m-8 flex-col'>
                <div className='min-h-[50vh] '>
                    <div className=' '> <Interactive3DParticles particleColor='red' /></div>
                </div>
                <div className='h-[500px] w-[400px] absolute '> <RiveComponent /> </div>
            </div>
        </div>
    )
}

export default Featured



const FeatureCard = () => {
    return (
        <div className='h-[500px] w-[350px] border border-slate-700'>

        </div>
    )
}