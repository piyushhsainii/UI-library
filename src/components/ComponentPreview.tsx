import React from 'react'
import AnimatedSlider from './UIcomponents/AnimatedSlider'
import TextClip from './UIcomponents/TextClip'
import AnimatedCarousel from './UIcomponents/AnimatedCarousel'

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
                                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257800/wpubdtsjofyowibz1euj.jpg",
                                    ]}
                                />
                            </>
                            :
                            preview == "AnimatedSlider" ?
                                <>
                                    <AnimatedSlider
                                        img={[
                                            "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                            "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                            "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                            "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                            "https://res.cloudinary.com/dzow59kgu/image/upload/v1713257776/iqtbwyaifajal4zn5t8b.jpg",
                                        ]}
                                    />
                                </> :
                                preview == "Interactive3DParticles" ?
                                    <video
                                        src="https://res.cloudinary.com/dzow59kgu/video/upload/v1734510246/Temp2Final_vc2nkv.mp4"
                                        muted playsInline autoPlay={true} loop
                                    >
                                    </video>
                                    :
                                    preview == "Modal" ?
                                        <video
                                            src="https://res.cloudinary.com/dzow59kgu/video/upload/v1734552949/Modal_ddrmap.mp4"
                                            muted playsInline autoPlay={true} loop
                                        >
                                        </video>
                                        : null
            }
        </div>
    )
}

export default ComponentPreview