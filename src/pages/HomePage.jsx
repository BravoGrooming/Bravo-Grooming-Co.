import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero-video.mp4';
import beardOil1 from '../assets/beard-oil-1.png';
import Reveal from '../components/Reveal';

const HomePage = () => {
    // Determine unique ingredients across all 3 columns
    const ingredientsC1 = ["Meadowfoam Seed Oil", "Jojoba Oil", "Argan Oil", "Baobab Oil", "Vitamin E (Tocopherol)"];
    const ingredientsC2 = ["Marula Oil", "Plant-Derived Squalane", "Moringa Oil", "Sea Buckthorn Berry Oil", "Bakuchiol"];
    const ingredientsC3 = ["Castor Oil", "Jojoba Oil", "Plant-Derived Squalane"];

    const seen = new Set();
    const uniqueC1 = ingredientsC1.filter(item => { if (seen.has(item)) return false; seen.add(item); return true; });
    const uniqueC2 = ingredientsC2.filter(item => { if (seen.has(item)) return false; seen.add(item); return true; });
    const uniqueC3 = ingredientsC3.filter(item => { if (seen.has(item)) return false; seen.add(item); return true; });

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
                <Reveal delay={200} className="relative z-10 text-center max-w-4xl px-4 space-y-8 mt-20">
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
                    </div>
                </Reveal>
            </section>

            {/* 2. Brand Story Strip */}
            <section className="py-24 bg-brand-black border-y border-brand-bronze/10 overflow-hidden">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <Reveal className="md:w-1/2 relative">
                        <div className="aspect-[4/3] bg-brand-bronze/5 w-full relative overflow-hidden">
                            <img src={beardOil1} alt="Bioactive Science" className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 grayscale" />
                            <div className="absolute inset-0 border border-brand-bronze/20 m-4"></div>
                        </div>
                    </Reveal>
                    <Reveal delay={200} className="md:w-1/2 space-y-6 text-center md:text-left">
                        <h2 className="text-4xl font-playfair text-brand-ivory">Forged Through Discipline. <br /><span className="text-brand-bronze">Elevated With Purpose.</span></h2>
                        <p className="text-lg opacity-80 leading-relaxed font-julius max-w-lg">
                            We don’t follow the industry — we refine it. Bravo was built on discipline, consistency, and a commitment to doing things the right way, not the easy way. Every bottle of our Bioactive Beard Oil reflects that standard. No filler. No compromises. Only proven, high-performance ingredients designed for men who expect real results. This is grooming with purpose — crafted for the professional who holds himself to a higher code.
                        </p>
                        <Link to="/our-story" className="inline-block text-brand-bronze border-b border-brand-bronze pb-1 hover:text-brand-ivory hover:border-brand-ivory transition-colors uppercase tracking-widest text-xs">
                            Read Our Story
                        </Link>
                    </Reveal>
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
                        <Reveal key={idx} delay={idx * 150} className="space-y-4 group">
                            <div className="w-16 h-16 mx-auto border border-brand-bronze rounded-full flex items-center justify-center group-hover:bg-brand-bronze/10 transition-colors">
                                <div className="w-2 h-2 bg-brand-bronze rotate-45"></div>
                            </div>
                            <h3 className="text-xl font-playfair text-brand-ivory">{item.title}</h3>
                            <p className="text-sm opacity-60 max-w-xs mx-auto">{item.desc}</p>
                        </Reveal>
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
                                {uniqueC1.map((ingredient, idx) => (
                                    <li key={idx}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-8 px-4 text-center">
                            <h3 className="text-2xl font-playfair text-brand-bronze uppercase tracking-wide">Restore + Regenerative</h3>

                            <ul className="space-y-4 text-sm font-julius uppercase tracking-wider text-brand-ivory/90">
                                {uniqueC2.map((ingredient, idx) => (
                                    <li key={idx}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-8 px-4 text-center">
                            <h3 className="text-2xl font-playfair text-brand-bronze uppercase tracking-wide">Protect + Condition</h3>

                            <ul className="space-y-4 text-sm font-julius uppercase tracking-wider text-brand-ivory/90">
                                {uniqueC3.map((ingredient, idx) => (
                                    <li key={idx}>{ingredient}</li>
                                ))}
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
                        <Reveal delay={100} className="group p-8 border border-brand-bronze/10 hover:border-brand-bronze/30 transition-all duration-500 bg-brand-ivory/[0.02]">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="font-playfair text-4xl text-brand-bronze italic">01</span>
                            </div>
                            <h3 className="text-xl font-playfair text-brand-ivory mb-4 tracking-wide">Targets the Skin–Beard Barrier</h3>
                            <p className="font-julius text-xs leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                                Your beard is only as strong as the skin supporting it. Our actives rebuild, replenish, and restore at the foundation.
                            </p>
                        </Reveal>

                        {/* Pillar 2 */}
                        <Reveal delay={300} className="group p-8 border border-brand-bronze/10 hover:border-brand-bronze/30 transition-all duration-500 bg-brand-ivory/[0.02]">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="font-playfair text-4xl text-brand-bronze italic">02</span>
                            </div>
                            <h3 className="text-xl font-playfair text-brand-ivory mb-4 tracking-wide">Drives Real, Measurable Improvement</h3>
                            <p className="font-julius text-xs leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                                Not cosmetic shine. Real changes: resilience, softness, density, and reduced breakage.
                            </p>
                        </Reveal>

                        {/* Pillar 3 */}
                        <Reveal delay={500} className="group p-8 border border-brand-bronze/10 hover:border-brand-bronze/30 transition-all duration-500 bg-brand-ivory/[0.02]">
                            <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="font-playfair text-4xl text-brand-bronze italic">03</span>
                            </div>
                            <h3 className="text-xl font-playfair text-brand-ivory mb-4 tracking-wide">Engineered for Professional Daily Performance</h3>
                            <p className="font-julius text-xs leading-relaxed opacity-60 group-hover:opacity-80 transition-opacity duration-500">
                                Lightweight, fast-absorbing, and clean — built to elevate your routine without slowing you down.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 6. Social Proof Wall */}
            <section className="py-32 container mx-auto px-4 text-center overflow-hidden">
                <h2 className="text-xs uppercase tracking-[0.4em] text-brand-bronze mb-16">Proven by the Pursuit of Excellence</h2>
                <div className="relative">
                    <div className="flex gap-8 justify-center flex-wrap">
                        {/* Testimonial 1 */}
                        <div className="bg-brand-ivory/5 p-8 max-w-md text-left space-y-4 border border-transparent hover:border-brand-bronze/30 transition-all flex-1 min-w-[300px]">
                            <div className="flex text-brand-bronze text-sm">★★★★★</div>
                            <p className="font-playfair italic opacity-90">"I’m picky with ingredients because my skin is super sensitive. No issues here. My beard looks fuller and feels softer, but the biggest change is the skin underneath. No redness, no flakes, nothing. My beard just feels healthier overall."</p>
                            <p className="text-xs uppercase tracking-wider opacity-50">— Miguel A., 26 — Software Engineer</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-brand-ivory/5 p-8 max-w-md text-left space-y-4 border border-transparent hover:border-brand-bronze/30 transition-all flex-1 min-w-[300px]">
                            <div className="flex text-brand-bronze text-sm">★★★★★</div>
                            <p className="font-playfair italic opacity-90">"My beard is mostly grey now and gets wiry. This stuff actually tamed it without feeling like a balm. The hydration is noticeable. Took maybe three days for the rough patches to smooth out. I’ve used a lot of ‘premium’ oils over the years… this one earns the label."</p>
                            <p className="text-xs uppercase tracking-wider opacity-50">— Terrence L., 54 — Small Business Owner</p>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="bg-brand-ivory/5 p-8 max-w-md text-left space-y-4 border border-transparent hover:border-brand-bronze/30 transition-all flex-1 min-w-[300px]">
                            <div className="flex text-brand-bronze text-sm">★★★★★</div>
                            <p className="font-playfair italic opacity-90">"I meet clients face-to-face all day, so looking put together matters. This oil makes my beard look controlled without looking like I tried too hard. The scent is classy and subtle, which is important to me. What stood out most was how much healthier the skin under my beard feels. My barber even asked what I've been using."</p>
                            <p className="text-xs uppercase tracking-wider opacity-50">— Daniel K., 45 — Realtor</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Email Capture */}
            <section className="py-32 bg-brand-black text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-5xl font-playfair mb-6">Join The <span className="text-brand-bronze">Bravo Boardroom</span></h2>
                    <p className="text-lg opacity-60 mb-12 font-julius">Join the Bravo Boardroom to unlock premium updates, limited-time opportunities, and elevated pricing benefits available only to our members.</p>
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
