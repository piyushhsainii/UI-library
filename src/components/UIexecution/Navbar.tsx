import React from 'react'
import { LeftSideItems, Logo, Navbar, NavbarItem } from "@/components/UIcomponents/Navbar"

const Navbarr = () => {
    return (
        <div className='max-h-[300px] overflow-y-scroll'>
            <div className="text-white    border">
                <Navbar className='border border-pink-500 mt-20'>
                    <LeftSideItems>
                        <Logo>
                            Logo
                        </Logo>
                        <NavbarItem> 1</NavbarItem>
                    </LeftSideItems>
                </Navbar>
            </div>
        </div>
    )
}

export default Navbarr