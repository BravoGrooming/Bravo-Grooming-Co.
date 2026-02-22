import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero-video.mp4';
import beardOil1 from '../assets/beard-oil-1.png';

const HomePage = () => {
    return (
        <div className="flex flex-col w-full">
            {/* 1. Hero Section: Full-width cinematic */}
            <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Video with Overlay */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-4xl px-4 space-y-8">
                    <p className="text-brand-bronze tracking-[0.3em] font-julius text-sm uppercase">Precision-Crafted. Results-Driven.</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-brand-ivory leading-none tracking-widest drop-shadow-lg uppercase">
                        Premium Grooming <br />
                        <span className="text-2xl md:text-4xl italic lowercase tracking-normal font-serif text-brand-bronze block mt-2">for the</span>
                        Modern Professional
                    </h1>

                    <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
                        <Link to="/product" className="bg-brand-bronze text-brand-black px-10 py-4 font-bold tracking-widest uppercase hover:bg-brand-ivory transition-all duration-300">
                            Pre-Order Bioactive Oil
                        </Link>
                        <Link to="/signup" className="border border-brand-bronze text-brand-bronze px-10 py-4 font-bold tracking-widest uppercase hover:bg-brand-bronze hover:text-brand-black transition-all duration-300">
                            Join The Club
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Brand Story Strip */}
            <section className="py-24 bg-brand-black border-y border-brand-bronze/10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 relative">
                        <div className="aspect-[4/3] bg-brand-bronze/5 w-full relative overflow-hidden">
                            <img src={beardOil1} alt="Bioactive Science" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 grayscale" />
                            <div className="absolute inset-0 border border-brand-bronze/20 m-4"></div>
                        </div>
                    </div>
                    <div className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h2 className="text-4xl font-playfair text-brand-ivory">Built from Struggle. <br /><span className="text-brand-bronze">Refined with Purpose.</span></h2>
                        <p className="text-lg opacity-80 leading-relaxed font-julius max-w-lg">
                            We don’t chase trends — we set standards. Bravo was forged through discipline, not hype, and every bottle of our Bioactive Beard Oil reflects that. No filler oils. No shortcuts. Just high-performance ingredients engineered for men who demand results. This is grooming with intention… built for the professional who holds himself to a higher code.
                        </p>
                        <Link to="/product" className="inline-block text-brand-bronze border-b border-brand-bronze pb-1 hover:text-brand-ivory hover:border-brand-ivory transition-colors uppercase tracking-widest text-xs">
                            Read Our Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. Value Props Section */}
            <section className="py-32 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {[
                        { title: "Bioactive Formula", desc: "Potent ingredients that actively work with your biology." },
                        { title: "Skin Benefits", desc: "Nourishes the skin beneath to prevent itch and flakes." },
                        { title: "Professional Brand", desc: "Scent profiles designed for the boardroom, not the bar." },
                        { title: "Transparent Quality", desc: "What you see on the label is exactly what you get." }
                    ].map((item, idx) => (
                        <div key={idx} className="space-y-4 group">
                            <div className="w-16 h-16 mx-auto border border-brand-bronze rounded-full flex items-center justify-center group-hover:bg-brand-bronze/10 transition-colors">
                                <div className="w-2 h-2 bg-brand-bronze rotate-45"></div>
                            </div>
                            <h3 className="text-xl font-playfair text-brand-ivory">{item.title}</h3>
                            <p className="text-sm opacity-60 max-w-xs mx-auto">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Ingredient Showcase */}
            <section className="py-32 bg-brand-black relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-bronze/30 to-transparent"></div>
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-4xl md:text-5xl text-center font-playfair mb-24 text-brand-ivory uppercase tracking-widest">
                        Precision in <span className="text-brand-bronze">Every Drop</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-16 md:gap-12 md:divide-x md:divide-brand-bronze/20">
                        {/* Column 1 */}
                        <div className="space-y-8 px-4 text-center">
                            <h3 className="text-2xl font-playfair text-brand-bronze uppercase tracking-wide">Nourish + Strengthen</h3>

                            <ul className="space-y-4 text-sm font-julius uppercase tracking-wider text-brand-ivory/90">
                                <li>Meadowfoam Seed Oil</li>
                                <li>Jojoba Oil</li>
                                <li>Argan Oil</li>
                                <li>Baobab Oil</li>
                                <li>Vitamin E (Tocopherol)</li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-8 px-4 text-center">
                            <h3 className="text-2xl font-playfair text-brand-bronze uppercase tracking-wide">Restore + Regenerative</h3>

                            <ul className="space-y-4 text-sm font-julius uppercase tracking-wider text-brand-ivory/90">
                                <li>Marula Oil</li>
                                <li>Plant-Derived Squalane</li>
                                <li>Moringa Oil</li>
                                <li>Sea Buckthorn Berry Oil</li>
                                <li>Bakuchiol</li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-8 px-4 text-center">
                            <h3 className="text-2xl font-playfair text-brand-bronze uppercase tracking-wide">Protect + Condition</h3>

                            <ul className="space-y-4 text-sm font-julius uppercase tracking-wider text-brand-ivory/90">
                                <li>Castor Oil</li>
                                <li>Jojoba Oil</li>
                                <li>Plant-Derived Squalane</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. The Bioactive Edge */}
            <section className="py-32 bg-brand-black relative border-t border-brand-bronze/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-20 space-y-6 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-playfair text-brand-ivory uppercase tracking-widest">
                            The Bioactive <span className="text-brand-bronze">Edge</span>
                        </h2>
                        <div className="w-24 h-px bg-brand-bronze mx-auto opacity-60"></div>
                        <p className="font-julius text-sm md:text-base leading-relaxed opacity-80 text-brand-ivory/80">
                            Elite grooming isn’t built on trends — it’s built on formulation. Our beard oil uses clinically aligned bioactives that improve both the beard and the skin beneath it. Because real results don’t come from hype… they come from chemistry, discipline, and precision.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1 */}
                        <div className="group p-8 border border-brand-bronze/10 hover:border-brand-bronze/30 transition-all duration-500 bg-brand-ivory/[0.02]">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="font-playfair text-4xl text-brand-bronze italic">01</span>
                            </div>
                            <h3 className="text-xl font-playfair text-brand-ivory mb-4 tracking-wide">Targets the Skin–Beard Barrier</h3>
                            <p className="font-julius text-xs leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                                Your beard is only as strong as the skin supporting it. Our actives rebuild, replenish, and restore at the foundation.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="group p-8 border border-brand-bronze/10 hover:border-brand-bronze/30 transition-all duration-500 bg-brand-ivory/[0.02]">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="font-playfair text-4xl text-brand-bronze italic">02</span>
                            </div>
                            <h3 className="text-xl font-playfair text-brand-ivory mb-4 tracking-wide">Drives Real, Measurable Improvement</h3>
                            <p className="font-julius text-xs leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                                Not cosmetic shine. Real changes: resilience, softness, density, and reduced breakage.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="group p-8 border border-brand-bronze/10 hover:border-brand-bronze/30 transition-all duration-500 bg-brand-ivory/[0.02]">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="font-playfair text-4xl text-brand-bronze italic">03</span>
                            </div>
                            <h3 className="text-xl font-playfair text-brand-ivory mb-4 tracking-wide">Engineered for Professional Daily Performance</h3>
                            <p className="font-julius text-xs leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                                Lightweight, fast-absorbing, and clean — built to elevate your routine without slowing you down.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Social Proof Wall */}
            <section className="py-32 container mx-auto px-4 text-center overflow-hidden">
                <h2 className="text-xs uppercase tracking-[0.4em] text-brand-bronze mb-16">Trusted by 10,000+ Men</h2>
                <div className="relative">
                    <div className="flex gap-8 justify-center flex-wrap">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-brand-ivory/5 p-8 max-w-md text-left space-y-4 border border-transparent hover:border-brand-bronze/30 transition-all">
                                <div className="flex text-brand-bronze text-sm">★★★★★</div>
                                <p className="font-playfair italic opacity-90">"Absolutely enhanced my daily routine. The scent is subtle but commanding."</p>
                                <p className="text-xs uppercase tracking-wider opacity-50">— Verified Customer</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Email Capture */}
            <section className="py-32 bg-brand-black text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-5xl font-playfair mb-6">Join the <span className="text-brand-bronze">Inner Circle</span></h2>
                    <p className="text-lg opacity-60 mb-12 font-julius">Exclusive access to limited batches and grooming insights.</p>
                    <form className="flex flex-col md:flex-row gap-0 max-w-md mx-auto relative">
                        <input
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            className="w-full bg-transparent border-b border-brand-bronze py-4 text-brand-ivory placeholder-brand-ivory/30 focus:outline-none font-julius text-center md:text-left"
                        />
                        <button type="submit" className="mt-8 md:mt-0 md:absolute md:right-0 md:bottom-4 text-brand-bronze uppercase tracking-widest text-xs hover:text-brand-ivory transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default HomePage;
