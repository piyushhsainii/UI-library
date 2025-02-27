'use client'
import React, { useState } from 'react'
import Components from './Components'
import FreeToUse from './FreeToUse'
import { componentsData } from './data/componentsData'
import Graphics from './2dGraphics'

type activeTab = "Components" | "Portfolio" | "2D Graphics" | "Dashboard" | "E-Commerce" | "Free To Use"

const page = () => {

    const templatesTypes = ['Components', 'Portfolio', '2D Graphics', 'Dashboard', 'E-Commerce', "Free To Use"]
    const templatesLength = [componentsData.length, '0', componentsData.filter((data) => data.componentType == "2dGraphics").length, '0', '0', componentsData.filter((data) => data.isPaid == false).length]
    const [activeTab, setActiveTab] = useState<activeTab>('Components')

    return (
        <div className='pt-20 max-w-screen-2xl mx-auto'>
            <div className='text-slate-200 text-3xl text-center font-sans uppercase'>
                Explore Templates
            </div>
            <div className='flex justify-between items-center px-5 m-4 text-slate-200 mt-5'>
                <div className='flex gap-6 max-w-[1200px] border border-slate-700 border-opacity-70 rounded-2xl px-8 py-1 '>
                    {templatesTypes.map((temp, index) => (
                        <div key={temp} className={`hover:brightness-105 cursor-pointer transition-all duration-200 flex items-center
                        ${temp == activeTab ? "brightness-105" : "brightness-50 "}`}
                            onClick={() => setActiveTab(temp as activeTab)}
                        > {temp} ({templatesLength[index]}) </div>
                    ))}
                </div>
                {/* <div className='flex items-center gap-4 cursor-pointer '>
                    <div className='brightness-50 hover:brightness-105 transition-all duration-200'>Clear All </div>
                    <div className='brightness-50 hover:brightness-105 transition-all duration-200'>Filters</div>
                </div> */}
            </div>
            <div >
                {activeTab == "Components" ? <Components /> :
                    activeTab == "Free To Use" ? <FreeToUse /> :
                        activeTab == "2D Graphics" ? <Graphics /> :
                            <div className='h-[50vh] flex items-center justify-center mx-auto text-2xl font-semibold text-white text-center'>
                                Templates of this Category <br></br>
                                Coming Soon!
                            </div>

                }

            </div>
        </div>
    )
}

export default page