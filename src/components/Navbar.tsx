import { NavbarType } from '../types/types';
import { MdMenu } from 'react-icons/md';
import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';

// Array of navbar items with id, title, and link
const navbarItems = [
    {
        id: 1,
        title: "AboutMe",
        link: "#AboutMe"
    },
    {
        id: 3,
        title: "Skills",
        link: "#Skills"
    },
    {
        id: 4,
        title: "Projects",
        link: "#Projects"
    },
    {
        id: 5,
        title: "Contact",
        link: "#Contact"
    },
];

export const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        // Navbar container with background color and padding
        <div className={`border-b-1 sticky top-0 z-50 ${isSticky ? 'bg-gray-400 shadow-md' : ''}`}>
            {/* Inner container to center content and space items */}
            <div className='container mx-auto flex justify-between items-center'>
                {/* Logo section */}
                <div className='w-56 p-2 ml-[50px]'>
                    <img src={logo} alt='logo' className='object-contain' />
                </div>

                {/* Navigation links, hidden on small screens */}
                <div className='hidden md:block mr-[80px]'>
                    <ul className="flex text-2xl gap-8 font-poppins">
                        {navbarItems.map((item: NavbarType) => (
                            <li key={item.id}>
                                <a
                                    className="mky-btn3 relative hover:text-blue-500 py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-blue-500 after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-shadow-blue-500"
                                    href={item.link}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='md:hidden mr-[20px]'>
                    <MdMenu className='text-4xl' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
