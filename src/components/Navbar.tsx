import React from 'react'
import instagram from '../assets/Instagram.svg' // Importing the Instagram logo
import { NavbarType } from '../types/types' // Importing the NavbarType type for TypeScript
import { MdMenu } from 'react-icons/md'

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
        title: "Fotter",
        link: "#"
    },
]

const Navbar = () => {
    return (
        // Navbar container with background color and padding
        <div className='bg-white  border-b-1'>
            {/* Inner container to center content and space items */}
            <div className='container mx-9 flex justify-between items-center'>
                {/* Logo section */}
                <div className='h-16 w-16 p-2'>
                    <img src={instagram} alt='logo' className='object-contain' />
                </div>

                {/* Navigation links, hidden on small screens */}
                <div className='hidden md:block'>
                    <ul className='flex items-center  gap-8 '>
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