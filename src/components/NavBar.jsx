import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavBar = () => {
    return (
        <div className="flex flex-col w-full sticky top-0 z-50">
            {/* Promotional Banner */}
            <div className="bg-brand-black text-brand-bronze py-2 text-center text-xs tracking-[0.2em] font-julius uppercase border-b border-brand-bronze/20">
                Pre-Order Live - Limited Initial Batch.
            </div>

            <nav className="bg-brand-black border-b border-brand-bronze/20 p-6 transition-all duration-300">
                <div className="container mx-auto flex items-center justify-between md:justify-start">
                    {/* Logo - Scaled up 50% (h-12 -> h-20 approx) */}
                    <Link to="/" className="flex items-center flex-shrink-0">
                        <img src={logo} alt="Bravo Grooming Co." className="h-16 md:h-20 w-auto object-contain transition-all" />
                    </Link>

                    <div className="hidden md:flex items-center gap-8 lg:gap-12 ml-8 lg:ml-16 font-julius text-brand-ivory text-sm tracking-[0.2em] font-bold uppercase whitespace-nowrap">
                        <Link to="/our-story" className="hover:text-brand-bronze transition-colors">Our Story</Link>
                        <Link to="/product" className="hover:text-brand-bronze transition-colors">Shop</Link>
                        <Link to="/science-of-bioactive" className="hover:text-brand-bronze transition-colors">Science</Link>
                        <Link to="/signup" className="hover:text-brand-bronze transition-colors">Join</Link>
                    </div>

                    {/* Right Side - Cart Icon */}
                    <div className="ml-auto flex items-center gap-6">
                        <button className="text-brand-bronze hover:text-brand-ivory transition-colors group relative">
                            <span className="sr-only">Cart</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </button>
                        {/* Mobile Menu Icon Placeholder */}
                        <button className="md:hidden text-brand-ivory hover:text-brand-bronze">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
