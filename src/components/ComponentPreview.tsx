import React from 'react'
import AnimatedSlider from './UIcomponents/AnimatedSlider'
import TextClip from './UIcomponents/TextClip'
import AnimatedCarousel from './UIcomponents/AnimatedCarousel'
import Modal, { ModalTrigger } from './UIcomponents/Modal'
import Flipcard from './UIcomponents/Flipcard'
import Slider from './UIcomponents/Slider'
import { div } from 'framer-motion/client'

const ComponentPreview = ({ preview }: { preview: string }) => {
    return (
        <div className='border border-stone-700 border-opacity-30   min-h-40 flex justify-center items-center'>
            {
                preview == "Navbar" ?
                    <video
                        src="https://res.cloudinary.com/dzow59kgu/video/upload/v1733856142/NavbarV2_ih4hxn.mp4"
                        muted playsInline autoPlay={true} loop
                    >
                    </video> :
                    preview == "TextClip" ?
                        <>
                            <TextClip variant='redBlue' text='TEXT CLIP' />
                        </> :
                        preview == "AnimatedCarousel" ?
                            <>
                                <AnimatedCarousel
                                    img={[
                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257800/zvgzb7nwijybs2ef9n88.jpg",
                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257656/jpdrbz6fw0qsgsxhbzm1.jpg",
                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257800/wpubdtsjofyowibz1euj.jpg",]}
                                />
                            </> : preview == "AnimatedSlider" ? <>
                                <AnimatedSlider
                                    img={[
                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                    ]}
                                /> </> : preview == "Interactive3DParticles" ?
                                <video
                                    src="https://res.cloudinary.com/dzow59kgu/video/upload/v1734510246/Temp2Final_vc2nkv.mp4"
                                    muted playsInline autoPlay={true} loop
                                >
                                </video>
                                :
                                preview == "Modal" ?
                                    <Modal >
                                        <ModalTrigger className='bg-slate-700 px-4 py-2 rounded-md cursor-pointer hover:bg-slate-800'>
                                            Modal
                                        </ModalTrigger>
                                        <div className='h-full flex items-center justify-center'>
                                            This is Modal
                                        </div>
                                    </Modal> :
                                    preview == "Flipcard"
                                        ?
                                        <div className='w-[350px]'>
                                            <Flipcard img="https://res.cloudinary.com/dzow59kgu/image/upload/v1733157790/nrqcosisdpnb149prpqu.jpg">
                                                <div>
                                                    This is ROBOT
                                                </div>
                                            </Flipcard>
                                        </div> :
                                        preview == "Slider"
                                            ?
                                            <div> <Slider values={[1, 3, 5, 7, 9]} sliderColor='grey' variant={'breakpoints'} /></div>
                                            : null
            }
        </div>
    )
}

export default ComponentPreview