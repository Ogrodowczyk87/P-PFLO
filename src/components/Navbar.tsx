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
        <div className={`h-[140px] border-b-1 sticky  top-0 z-50 ${isSticky ? 'bg-stone-200 shadow-md' : ''}`}>
            <div className='container  mx-auto flex justify-between items-center'>
                <div className='w-56 p-2 ml-[50px] '>
                    <img src={logo} alt='logo' className='object-contain' />
                </div>

                <div className='hidden md:block mr-[80px]'>
                    <ul className="flex text-2xl gap-8 font-poppins">
                        {navbarItems.map((item: NavbarType) => (
                            <li key={item.id}>
                                <a
                                    className="mky-btn3 relative hover:text-blue-500 py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] "
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
                    <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                        {isMobileMenuOpen ? <MdClose className='text-4xl' /> : <MdMenu className='text-4xl' />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-stone-200 shadow-md absolute top-[120px] left-0 w-full z-40">
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
