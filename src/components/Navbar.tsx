import { NavbarType } from '../types/types';
import { MdMenu, MdClose } from 'react-icons/md';
import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';
import { navbarItems } from '../data/navbarData';

export const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <div
            className={`h-[140px] sticky backdrop-blur-sm top-0 z-50 ${isSticky ? 'shadow-md' : ''}`}
        >
            <div className='container mx-auto flex justify-between items-center h-full'>
                <div className='w-56 p-2 ml-[50px]'>
                    <img src={logo} alt='logo' className='object-contain' />
                </div>

                <div className='hidden md:block mr-[80px]'>
                    <ul className="flex text-2xl gap-8 font-poppins">
                        {navbarItems.map((item: NavbarType) => (
                            <li key={item.id}>
                                <a
                                    className="relative py-2 px-6 text-dark-blue hover:text-accent-yellow transition-colors duration-300"
                                    href={item.link}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile menu toggle button */}
                <div className='md:hidden mr-[20px]'>
                    <button
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                        className="p-2 rounded-lg hover:bg-white/20 hover:scale-110 
                                 transition-all duration-300 hover:shadow-md backdrop-blur-sm"
                    >
                        {isMobileMenuOpen ? <MdClose className='text-4xl hover:text-accent-yellow transition-colors' /> : <MdMenu className='text-4xl hover:text-accent-yellow transition-colors' />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-md absolute top-[120px] left-0 w-full z-40">
                    <ul className="flex flex-col text-xl gap-4 font-poppins p-4">
                        {navbarItems.map((item: NavbarType) => (
                            <li key={item.id}>
                                <a
                                    className="block py-2 px-4 text-dark-blue hover:bg-blue-500 hover:text-white rounded transition-colors"
                                    href={item.link}
                                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
