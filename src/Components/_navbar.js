import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import SideNav from './_sidenav'

const navbar = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)

    const closeNav = (e) => {
        e.preventDefault()

        setIsOpen(false)
    }

    return (
        <>
        {isOpen && <SideNav  closeNav={closeNav}/>}
            <nav className="flex flex-row flex-wrap justify-around content-center z-10 sticky top-0 bg-primary font-andadaPro text-primary">
                <span className="md:px-3 py-5">
                    C
                </span>

                <span className="py-5 block md:hidden" onClick={e => setIsOpen(true)}>
                    <FaBars className="text-2xl"/>
                </span>

                <div className="flex flex-row justify-between content-center hidden md:inline py-5">
                    <a className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white" href="/"> Services </a>
                    <a className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white" href="/"> Clients </a>
                    <a className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white" href="/"> Careers </a>
                    <a className="md:px-3 py-3 mx-1 transition duration-600 hover:bg-white" href="/"> About </a>
                    <a className="md:px-3 py-3 mx-1 border border-black transition duration-600 hover:bg-white" href="/"> Contact </a>
                </div>

            </nav>
        </>
    )
}

export default navbar
