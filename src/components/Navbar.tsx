import React from 'react'
import { NavbarType } from '../types/types'
import { MdMenu } from 'react-icons/md'
import connection from '../assets/connection.svg'
// Array of navbar items with id, title, and link
const navbarItems = [
    {
        id: 1,
        title: "AboutMe",
        link: "#"
    },
    {
        id: 2,
        title: "Home",
        link: "#"
    },
    {
        id: 3,
        title: "Skills",
        link: "#"
    },
    {
        id: 4,
        title: "Projects",
        link: "#"
    },
    {
        id: 5,
        title: "Contact",
        link: "#"
    },
]

const Navbar = () => {
    return (
        // Navbar container with background color and padding
        <div className='bg-white  border-b-1'>
            {/* Inner container to center content and space items */}
            <div className='container mx-auto  flex justify-between items-center'>
                {/* Logo section */}
                <div className='h-16 w-16 p-2'>
                    <img src={connection} alt='logo' className='object-contain' />
                </div>

                {/* Navigation links, hidden on small screens */}
                <div className='hidden md:block ml:auto'>
                    <ul className='flex  text-4xl gap-8 '>
                        {/* Mapping through navbarItems to render each link */}
                        {navbarItems.map((item: NavbarType) => (
                            <li key={item.id}>
                                <a className='inline-block' href={item.link}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='md:hidden'>
                    <MdMenu className='text-4xl' />
                </div>
            </div>
        </div>
    )
}

export default Navbar