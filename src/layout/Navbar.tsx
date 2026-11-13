import { MdMenu, MdClose, MdLightMode, MdDarkMode } from 'react-icons/md';
import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { navigationItems } from '../content/navigation';

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
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
            className={`h-[88px] sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200 ${isSticky ? 'shadow-sm' : ''}`}
        >
            <div className='container mx-auto flex justify-between items-center h-full'>
                <div className='w-40 sm:w-56 shrink-0 ml-4 lg:ml-8'>
                    <img src={logo} alt='Rafal Ogrodowczyk logo' className='navbar-logo' />
                </div>

                <div className='hidden xl:block ml-auto'>
                    <ul className="flex text-base gap-1 font-poppins">
                        {navigationItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    className="relative py-2 px-2 text-slate-800 hover:text-accent-yellow transition-colors duration-300"
                                    href={item.href}
                                    download={item.download}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    type="button"
                    onClick={toggleTheme}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    className="theme-toggle ml-auto xl:ml-3 mr-2 xl:mr-8 shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                >
                    {theme === 'dark' ? <MdLightMode size={22} aria-hidden="true" /> : <MdDarkMode size={22} aria-hidden="true" />}
                </button>
                {/* Mobile menu toggle button */}
                <div className='xl:hidden mr-3 shrink-0'>
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
                <div className="xl:hidden bg-white/95 backdrop-blur-sm shadow-sm absolute top-[88px] left-0 w-full z-40 border-t border-slate-200">
                    <ul className="flex flex-col text-xl gap-4 font-poppins p-4">
                        {navigationItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    className="block py-2 px-4 text-slate-800 hover:bg-slate-100 rounded transition-colors"
                                    href={item.href}
                                    download={item.download}
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
