import { MdMenu, MdClose } from 'react-icons/md';
import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';
import { navigationItems } from '../content/navigation';

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
        <nav
            aria-label="Main navigation"
            className={`h-[120px] sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200 ${isSticky ? 'shadow-sm' : ''}`}
        >
            <div className='container mx-auto flex justify-between items-center h-full'>
                <div className='w-56 p-2 ml-[50px]'>
                    <img src={logo} alt='Rafal Ogrodowczyk logo' className='object-contain' />
                </div>

                <div className='hidden md:block mr-[80px]'>
                    <ul className="flex text-2xl gap-8 font-poppins">
                        {navigationItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    className="relative py-2 px-6 text-slate-800 hover:text-accent-yellow transition-colors duration-300"
                                    href={item.href}
                                >
                                    {item.label}
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
                        className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                    >
                        {isMobileMenuOpen ? <MdClose className='text-4xl text-slate-700 hover:text-accent-yellow transition-colors' /> : <MdMenu className='text-4xl text-slate-700 hover:text-accent-yellow transition-colors' />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-sm absolute top-[120px] left-0 w-full z-40 border-t border-slate-200">
                    <ul className="flex flex-col text-xl gap-4 font-poppins p-4">
                        {navigationItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    className="block py-2 px-4 text-slate-800 hover:bg-slate-100 rounded transition-colors"
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
