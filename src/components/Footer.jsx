import logo from '../assets/footer-logo.png';

const Footer = () => {
    return (
        <footer className="bg-brand-black border-t border-brand-bronze py-8 mt-auto">
            <div className="container mx-auto flex flex-col items-center gap-4">
                <img src={logo} alt="Bravo Grooming Co." className="h-10 w-auto opacity-80" />
                <p className="text-brand-ivory text-xs tracking-wider opacity-60">
                    &copy; {new Date().getFullYear()} Bravo Grooming Co. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
