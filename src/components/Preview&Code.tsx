'use client'
import { metadata } from '@/lib/interfaces'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, atomDark, vs, coldarkDark, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Navbarr from '../components/UIexecution/Navbar';
import TextClip from './UIcomponents/TextClip';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
const PreviewCode = ({ metadata }: { metadata: metadata }) => {

    const [TogglePreview, setTogglePreview] = useState(1)
    const [ComponentPreview, setcomponentPreview] = useState<any>(null)
    const path = usePathname()
    const preview = path.split('/docs/components/')

    const getComponentPreview = async () => {
        const component = await import(`../components/UIcomponents/${preview[1]}`)
        setcomponentPreview(component.default)
        console.log(component.default)
        console.log('ComponentPreview is a function:', typeof component.default === 'function');
        console.log(preview[1])
    }

    useEffect(() => {
        // getComponentPreview()
    }, [])

    return (
        <div className='max-w-[700px]  min-h-[300px]'>
            <div className='border-b border-stone-600 border-opacity-30 flex gap-4 '>
                <div onClick={() => setTogglePreview(1)}
                    className={`font-medium brightness-75 ${TogglePreview == 1 && "brightness-125 border-b border-white"} py-2 px-2 cursor-pointer`}>
                    Preview</div>
                <div onClick={() => setTogglePreview(2)}
                    className={`font-medium brightness-75 ${TogglePreview == 2 && "brightness-125 border-b border-white"} py-2 px-2 cursor-pointer`}>
                    Code</div>
            </div>
            <div className=' min-h-52 mt-5 rounded-lg' >
                {TogglePreview === 2 ?
                    <>
                        <SyntaxHighlighter
                            language="javascript"
                            style={vscDarkPlus}
                        >
                            {metadata.code}
                        </SyntaxHighlighter>
                    </> :
                    <div className='border border-stone-700 border-opacity-30 overflow-y-auto  min-h-40 flex justify-center items-center'>
                        {
                            preview[1] == "Navbar" ?
                                <video
                                    src="https://res.cloudinary.com/dzow59kgu/video/upload/v1733856142/NavbarV2_ih4hxn.mp4"
                                    muted playsInline autoPlay={true} loop
                                >
                                </video> :
                                preview[1] == "TextClip" ?
                                    <TextClip variant='redBlue' text='TEXT CLIP' />
                                    :

                                    null
                        }
                    </div>
                }
            </div>
        </div >
    )
}

export default PreviewCode