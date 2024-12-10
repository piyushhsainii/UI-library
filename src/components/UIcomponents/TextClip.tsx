import { cn } from '@/lib/utils'
import React from 'react'
import { ClassNameValue } from 'tailwind-merge'


type variant = "redBlue" | "purpleYellow" | "yellowPurple" | "redGreen"

const TextClip = ({ variant, className, text }: { variant?: variant, className?: ClassNameValue, text?: string }) => {
    return (
        <div className='text-white text-8xl font-bold'>
            <div
                className={cn(className, `text-xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text p-1`)}
                style={{
                    backgroundImage: `url(${variant === "redBlue" ?
                        "https://res.cloudinary.com/dzow59kgu/image/upload/v1733748616/smokeTrail_ufufw3.gif" :
                        variant === "purpleYellow" ?
                            "https://res.cloudinary.com/dzow59kgu/image/upload/v1733748611/smokeTrail2_ldii0c.webp" :
                            variant === "yellowPurple" ?
                                "https://res.cloudinary.com/dzow59kgu/image/upload/v1733748611/smokeTrail3_a2tpq4.webp" :
                                variant === "redGreen" ?
                                    "https://res.cloudinary.com/dzow59kgu/image/upload/v1733748618/smokeTrail4_u61qfr.webp" :
                                    "https://res.cloudinary.com/dzow59kgu/image/upload/v1733748616/smokeTrail_ufufw3.gif"})`, // Replace with your image
                    backgroundSize: 'fill',
                    backgroundPosition: 'center'
                }}
            >
                {text ?? "TEXT CLIPPING"}
            </div>
        </div>
    )
}

export default TextClip
