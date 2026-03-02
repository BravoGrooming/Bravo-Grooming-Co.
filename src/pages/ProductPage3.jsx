import React from 'react';
import logo from '../assets/logo.png';

const ProductPage3 = () => {
    return (
        <div className="bg-brand-ivory dark:bg-brand-black font-display text-slate-900 dark:text-brand-ivory selection:bg-primary/30 overflow-x-hidden min-h-screen">
            {/* Navigation / Header */}
            <nav className="fixed top-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-primary/10">
                <div className="flex items-center justify-between px-6 h-24 max-w-lg mx-auto">
                    <div className="text-primary material-symbols-outlined cursor-pointer">menu</div>
                    <img src={logo} alt="Bravo Grooming Co." className="h-24 w-auto object-contain" />
                    <div className="text-primary material-symbols-outlined cursor-pointer">person</div>
                </div>
            </nav>

            <main className="max-w-lg mx-auto pt-16 pb-24 px-6">
                {/* Hero Section */}
                {/* Hero Section */}
                <section className="py-20 flex flex-col items-center text-center space-y-8">
                    <h2 className="text-brand-ivory font-serif text-4xl font-semibold leading-tight tracking-tight uppercase">
                        A New <span className="text-primary">Standard</span> in Beard Care Is Coming
                    </h2>
                    <p className="text-primary font-sans text-xs font-semibold uppercase tracking-[0.25em] max-w-[320px] leading-relaxed">
                        Get first access to limited releases, member-only pricing, and exclusive offers.
                    </p>
                </section>

                {/* Sign-Up Bar */}
                <section className="mb-24">
                    <div className="w-full max-w-lg mx-auto">
                        <div className="klaviyo-form-XJgtWK"></div>
                    </div>
                </section>

                {/* Brand Story */}
                <section className="mb-24 px-4">
                    <div className="border-l border-primary/30 pl-6 space-y-6">
                        <h3 className="text-primary font-serif text-xl font-bold tracking-[0.4em] uppercase">Craft Over Noise</h3>
                        <p className="text-brand-ivory font-sans text-sm leading-loose font-light">
                            The grooming space is crowded with empty claims. Bravo cuts through the noise with precision-engineered formulas that put real performance first. No shortcuts. No compromises. Just results.
                        </p>
                    </div>
                </section>



                {/* The Bravo Boardroom */}
                <section className="mb-24 relative overflow-hidden rounded-xl bg-neutral-900 aspect-[3/4] flex flex-col items-center justify-center p-8 text-center space-y-8">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAU9yCZmZX663nEhW1cXJ-e0whCxaWriF_UP0gn4qHgOgBBZrDzHY_UICDNRFayDgMaNde8HN075xq81ZRhlZA2kjkrJRCC7l7Y9NLhZfO-JFK8Mqpj5P5NJAid03_kzGIO25weupf9_Rga1m-NVjuYj4djkOJpIwlQey6-g5GhyUABMuVgNH7vjkEUniOKhIXN6Up-3Ol6rVQ7yKojdrA-GnbPNJ7WBPtHW3SJApm3h4ufaa3Zr_zCsZcXKU-LXsXC2H2cZnjmjs4')" }}
                    ></div>

                    {/* Visual Element (Favicon) */}
                    <div className="relative z-10 p-6 rounded-full border border-primary/20 bg-brand-black/50 backdrop-blur-sm mb-4">
                        <img src="/favicon.png" alt="Bravo Boardroom" className="w-16 h-16 object-contain" />
                    </div>

                    <div className="relative z-10 space-y-6 max-w-xs">
                        <h3 className="text-brand-ivory font-serif text-2xl font-bold uppercase tracking-wide">
                            Introducing <br /><span className="text-primary">The Bravo Boardroom</span>
                        </h3>
                        <p className="text-brand-ivory/90 font-sans text-xs leading-relaxed font-light">
                            Where our most committed customers get a seat at the table. Members receive first-access to limited releases, preferred pricing on select products, and exclusive offers unavailable to the public.
                        </p>
                        <button className="border border-primary text-primary font-bold uppercase tracking-widest text-xs py-4 px-8 rounded hover:bg-primary hover:text-brand-black transition-all active:scale-95">
                            Join the Boardroom
                        </button>
                    </div>
                </section>

                {/* Trust Strip */}
                <section className="mb-24 py-6 border-y border-primary/10">
                    <div className="flex justify-between items-center text-[9px] font-bold tracking-[0.2em] text-primary/60 uppercase">
                        <span>Zero Fillers</span>
                        <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                        <span>Small Batch</span>
                        <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                        <span>Derm Tested</span>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-brand-black border-t border-primary/5 py-12 px-6">
                <div className="max-w-lg mx-auto flex flex-col items-center space-y-8">
                    <div className="flex space-x-8 text-[10px] font-bold tracking-[0.3em] text-brand-ivory/40 uppercase">
                        <a className="hover:text-primary transition-colors" href="#">About</a>
                        <a className="hover:text-primary transition-colors" href="#">Mission</a>
                        <a className="hover:text-primary transition-colors" href="#">Socials</a>
                    </div>
                    <p className="text-brand-ivory/20 text-[10px] tracking-widest">© 2024 BRAVO GROOMING CO. ALL RIGHTS RESERVED.</p>
                </div>
            </footer>

            {/* Bottom Nav Bar (Mobile App Style) */}
            <div className="fixed bottom-0 w-full z-50 bg-brand-black border-t border-primary/10 px-6 py-4">
                <div className="flex justify-around items-center max-w-lg mx-auto">
                    <a className="text-primary flex flex-col items-center" href="#">
                        <span className="material-symbols-outlined">home</span>
                    </a>
                    <a className="text-brand-ivory/40 flex flex-col items-center" href="#">
                        <span className="material-symbols-outlined">search</span>
                    </a>
                    <a className="text-brand-ivory/40 flex flex-col items-center" href="#">
                        <span className="material-symbols-outlined">notifications</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductPage3;
