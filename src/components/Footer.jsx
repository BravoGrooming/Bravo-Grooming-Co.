import { Link } from 'react-router-dom';
import logo from '../assets/footer-logo.png';

const Footer = () => {
    return (
        <footer className="bg-brand-black border-t border-brand-bronze py-12 mt-auto">
            <div className="container mx-auto flex flex-col items-center gap-8">
                <img src={logo} alt="Bravo Grooming Co." className="h-10 w-auto opacity-80" />

                <div className="flex gap-8 font-julius text-xs uppercase tracking-widest text-brand-ivory/60">
                    <Link to="/our-story" className="hover:text-brand-bronze transition-colors">Our Story</Link>
                    <Link to="/product" className="hover:text-brand-bronze transition-colors">Shop</Link>
                    <Link to="/signup" className="hover:text-brand-bronze transition-colors">Join</Link>
                </div>

                <p className="text-brand-ivory/40 text-[10px] tracking-wider mt-4">
                    &copy; {new Date().getFullYear()} Bravo Grooming Co. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
