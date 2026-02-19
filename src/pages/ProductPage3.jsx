import React from 'react';
import logo from '../assets/logo.png';
import productImage from '../assets/beard-oil-hero.png';

const ProductPage3 = () => {
    return (
        <div className="bg-brand-ivory dark:bg-brand-black font-display text-slate-900 dark:text-brand-ivory selection:bg-primary/30 overflow-x-hidden min-h-screen">
            {/* Navigation / Header */}
            <nav className="fixed top-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-primary/10">
                <div className="flex items-center justify-between px-6 h-16 max-w-lg mx-auto">
                    <div className="text-primary material-symbols-outlined cursor-pointer">menu</div>
                    <img src={logo} alt="Bravo Grooming Co." className="h-12 w-auto object-contain" />
                    <div className="text-primary material-symbols-outlined cursor-pointer">person</div>
                </div>
            </nav>

            <main className="max-w-lg mx-auto pt-16 pb-24 px-6">
                {/* Hero Section */}
                <section className="py-20 flex flex-col items-center text-center space-y-8">
                    <div className="w-20 h-20 border-2 border-primary rounded-full flex items-center justify-center mb-4">
                        <span className="text-primary font-black text-4xl">B</span>
                    </div>
                    <h2 className="text-brand-ivory text-4xl font-extrabold leading-tight tracking-tight uppercase">
                        A New Standard in <span className="text-primary">Beard Care</span> is Coming.
                    </h2>
                    <p className="text-brand-ivory/60 text-xs font-light uppercase tracking-[0.25em] max-w-[280px] leading-relaxed">
                        Crafted with integrity. Engineered for the modern professional.
                    </p>
                </section>

                {/* Sign-Up Bar */}
                <section className="mb-24">
                    <div className="flex flex-col space-y-3">
                        <div className="relative">
                            <input
                                className="w-full bg-transparent border border-primary/40 rounded text-brand-ivory placeholder:text-brand-ivory/30 py-4 px-4 focus:border-primary focus:ring-0 transition-colors"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>
                        <button className="w-full bg-primary text-brand-black font-bold py-4 rounded uppercase tracking-widest text-sm hover:bg-primary/90 transition-all active:scale-[0.98]">
                            Notify Me
                        </button>
                    </div>
                </section>

                {/* Brand Story */}
                <section className="mb-24 px-4">
                    <div className="border-l border-primary/30 pl-6 space-y-6">
                        <h3 className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">Our Philosophy</h3>
                        <p className="text-brand-ivory/80 text-sm leading-loose font-light">
                            Bravo Grooming Co. was born from a singular obsession: to engineer a grooming ritual that matches the discipline of the modern professional.
                        </p>
                        <p className="text-brand-ivory/80 text-sm leading-loose font-light">
                            No fillers. No compromise. Just high-performance formulas for the discerning man who values precision over hype.
                        </p>
                    </div>
                </section>

                {/* Formula Preview */}
                <section className="mb-24">
                    <h3 className="text-center text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-10">Premium Actives</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {/* Ingredient Card 1 */}
                        <div className="border border-primary/20 rounded-lg p-6 bg-primary/5 group hover:border-primary/50 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary material-symbols-outlined text-3xl">science</span>
                                <span className="text-[10px] text-primary/40 font-mono">01</span>
                            </div>
                            <h4 className="text-brand-ivory font-bold uppercase tracking-widest text-sm mb-2">Bakuchiol</h4>
                            <p className="text-brand-ivory/50 text-xs font-light">A plant-based retinol alternative that reinforces the skin barrier without irritation.</p>
                        </div>
                        {/* Ingredient Card 2 */}
                        <div className="border border-primary/20 rounded-lg p-6 bg-primary/5 group hover:border-primary/50 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary material-symbols-outlined text-3xl">opacity</span>
                                <span className="text-[10px] text-primary/40 font-mono">02</span>
                            </div>
                            <h4 className="text-brand-ivory font-bold uppercase tracking-widest text-sm mb-2">Squalane</h4>
                            <p className="text-brand-ivory/50 text-xs font-light">Biomimetic hydration that mimics natural oils for weightless, deep absorption.</p>
                        </div>
                        {/* Ingredient Card 3 */}
                        <div className="border border-primary/20 rounded-lg p-6 bg-primary/5 group hover:border-primary/50 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-primary material-symbols-outlined text-3xl">eco</span>
                                <span className="text-[10px] text-primary/40 font-mono">03</span>
                            </div>
                            <h4 className="text-brand-ivory font-bold uppercase tracking-widest text-sm mb-2">Black Seed Oil</h4>
                            <p className="text-brand-ivory/50 text-xs font-light">Antique wisdom meets modern science to soothe follicles and promote density.</p>
                        </div>
                    </div>
                </section>

                {/* Visual Teaser */}
                <section className="mb-24 relative overflow-hidden rounded-xl bg-neutral-900 aspect-[3/4] flex flex-col items-center justify-end p-8">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAU9yCZmZX663nEhW1cXJ-e0whCxaWriF_UP0gn4qHgOgBBZrDzHY_UICDNRFayDgMaNde8HN075xq81ZRhlZA2kjkrJRCC7l7Y9NLhZfO-JFK8Mqpj5P5NJAid03_kzGIO25weupf9_Rga1m-NVjuYj4djkOJpIwlQey6-g5GhyUABMuVgNH7vjkEUniOKhIXN6Up-3Ol6rVQ7yKojdrA-GnbPNJ7WBPtHW3SJApm3h4ufaa3Zr_zCsZcXKU-LXsXC2H2cZnjmjs4')" }}
                    ></div>
                    {/* Product Silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <img src={productImage} alt="Bravo Beard Oil" className="h-64 md:h-80 w-auto object-contain drop-shadow-2xl opacity-90" />
                    </div>
                    <div className="relative text-center space-y-2">
                        <p className="text-brand-ivory text-lg font-bold">You’ll see it soon.</p>
                        <p className="text-primary text-sm font-light italic">You’ll feel it even sooner.</p>
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

                {/* Secondary CTA */}
                <section className="mb-24 text-center">
                    <h3 className="text-brand-ivory text-xl font-bold uppercase tracking-widest mb-8">Join the Bravo Inner Circle</h3>
                    <div className="flex flex-col space-y-3">
                        <input
                            className="w-full bg-transparent border border-primary/40 rounded text-brand-ivory py-4 px-4 focus:border-primary focus:ring-0"
                            placeholder="Email Address"
                            type="email"
                        />
                        <button className="w-full bg-primary text-brand-black font-bold py-4 rounded uppercase tracking-widest text-sm">
                            Access Private Launch
                        </button>
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
