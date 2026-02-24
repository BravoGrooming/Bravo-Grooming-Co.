import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Close menus on route change
    const closeMenus = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    const navigationLinks = [
        { name: 'Our Story', path: '/our-story' },
        { name: 'Shop', path: '/product' },
        { name: 'The Ritual', path: '/ritual' },
        { name: 'Science', path: '/science-of-bioactive' },
        { name: 'Join', path: '/signup' }
    ];

    return (
        <div className="flex flex-col w-full sticky top-0 z-50">
            {/* Promotional Banner */}
            <div className="bg-brand-black text-brand-bronze py-2 text-center text-xs tracking-[0.2em] font-julius uppercase border-b border-brand-bronze/20">
                Pre-Order Live - Limited Initial Batch.
            </div>

            <nav className="bg-brand-black border-b border-brand-bronze/20 p-6 transition-all duration-300 relative z-50">
                <div className="container mx-auto flex items-center justify-between relative">

                    {/* Left Side: Navigation Toggles */}
                    <div className="flex items-center flex-1">
                        {/* Desktop Dropdown Menu */}
                        <div className="hidden md:block relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="text-brand-ivory hover:text-brand-bronze font-julius tracking-widest uppercase text-sm flex items-center gap-2 transition-colors cursor-pointer"
                            >
                                Menu
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>

                            {/* Desktop Dropdown Pane */}
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-6 w-56 bg-brand-black border border-brand-bronze/20 shadow-2xl flex flex-col font-julius text-brand-ivory text-sm tracking-widest py-4 z-50">
                                    {navigationLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className="hover:text-brand-bronze hover:bg-brand-ivory/5 transition-colors px-6 py-3 cursor-pointer"
                                            onClick={closeMenus}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Icon Toggle */}
                        <button
                            className="md:hidden text-brand-ivory hover:text-brand-bronze relative z-50 cursor-pointer p-2 -ml-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brand-bronze">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Center: Logo (Absolutely centered) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                        <Link to="/" className="flex items-center flex-shrink-0 pointer-events-auto" onClick={closeMenus}>
                            <img src={logo} alt="Bravo Grooming Co." className="h-14 md:h-16 w-auto object-contain transition-all" />
                        </Link>
                    </div>

                    {/* Right Side - Cart Icon */}
                    <div className="flex items-center justify-end flex-1 relative z-50">
                        <button className="text-brand-bronze hover:text-brand-ivory transition-colors group relative cursor-pointer p-2 -mr-2">
                            <span className="sr-only">Cart</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`absolute top-[100%] left-0 w-full bg-brand-black border-b border-brand-bronze/20 md:hidden flex flex-col items-center py-8 gap-8 font-julius text-brand-ivory text-sm tracking-[0.2em] font-bold uppercase z-40 shadow-2xl transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="hover:text-brand-bronze transition-colors flex w-full justify-center p-2"
                            onClick={closeMenus}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
