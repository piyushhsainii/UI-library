'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import PreviewCode from './Preview&Code'
import { metadata } from '@/lib/interfaces'

const CodeStructure = () => {

    const [metaData, setmetaData] = useState<metadata | null>(null)
    const path = usePathname()
    const componentName = path.split('/docs/components/')
    const getMetadata = async () => {
        const metadata = await import(`../components/UIMetadata/${componentName[1]}`)
        setmetaData(metadata?.metadata)
    }
    useEffect(() => {
        getMetadata()
    }, [])
    return (
        <div className='text-slate-200 pt-6 p-3 font-sans px-9 h-[120vh] max-h-[900px] '>
            <div className='flex gap-2 text-sm'> <div className='text-stone-400'>Docs </div>{`> ${componentName[1]} `} </div>
            <div className='text-xl font-semibold py-2'>
                {componentName[1]}
            </div>
            <div> {metaData?.description} </div>
            <div className='text-stone-300 text-sm py-3'>  </div>
            <PreviewCode metadata={metaData!} />
        </div>
    )
}

export default CodeStructure