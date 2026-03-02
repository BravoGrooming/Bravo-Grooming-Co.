import { Link } from 'react-router-dom';
import heroImage from '../assets/science-hero.png';
import Reveal from '../components/Reveal';

const ScienceOfBioactive = () => {
    return (
        <div className="flex flex-col w-full bg-brand-black text-brand-ivory font-julius">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden text-center">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-bronze/20 via-transparent to-transparent"></div>
                </div>

                <div className="z-10 max-w-2xl space-y-8">

                    <h1 className="mb-8">
                        Where <span className="italic text-brand-bronze normal-case">Bioactive Science</span> <br />Meets Elevated Grooming™
                    </h1>
                    <p className="text-sm tracking-[0.2em] uppercase text-brand-bronze/80 leading-relaxed max-w-lg mx-auto">
                        Powered by 10 advanced oils and botanical nutrients formulated at the molecular level.
                    </p>

                    <div className="relative w-full max-w-sm mx-auto aspect-[3/4] mt-12 border border-brand-bronze/20 p-2">
                        <img
                            alt="Premium Bioactive Product Bottle"
                            className="w-full h-full object-cover"
                            src={heroImage}
                        />
                    </div>
                </div>
            </section>

            {/* Definition Section */}
            <Reveal className="px-6 py-24 border-t border-brand-bronze/10">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-16 text-center md:text-left">
                        <h2 className="mb-4">Bioactive Isn’t a Buzzword</h2>
                        <div className="w-12 h-px bg-brand-bronze mx-auto md:mx-0"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="group space-y-4">
                            <span className="text-brand-bronze text-xs tracking-widest block">01.</span>
                            <h3 className="mb-2">Targeted Functionality</h3>
                            <p className="text-sm text-brand-ivory/60 leading-relaxed">
                                Ingredients designed to bypass the surface barrier and deliver nutrients directly to the follicle and dermis.
                            </p>
                        </div>
                        <div className="group space-y-4">
                            <span className="text-brand-bronze text-xs tracking-widest block">02.</span>
                            <h3 className="mb-2">Clinically-Aligned Actives</h3>
                            <p className="text-sm text-brand-ivory/60 leading-relaxed">
                                Formulated with specific concentrations of Vitamin E, Squalane, and Bakuchiol that match successful clinical benchmarks.
                            </p>
                        </div>
                        <div className="group space-y-4">
                            <span className="text-brand-bronze text-xs tracking-widest block">03.</span>
                            <h3 className="mb-2">Performance Stability</h3>
                            <p className="text-sm text-brand-ivory/60 leading-relaxed">
                                Bioactive compounds remain potent from the first drop to the last through proprietary cold-pressed stabilization.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Ingredient Clusters */}
            <Reveal delay={200} className="px-6 py-24 bg-brand-ivory/5">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="mb-16 text-center text-xs tracking-[0.3em]">Formulation Anatomy</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Cluster 1 */}
                        <div className="p-8 border border-brand-bronze/20 bg-brand-black hover:border-brand-bronze/50 transition-colors h-full">
                            <div className="mb-6">
                                <h3 className="mb-2">The Base System</h3>
                                <p className="text-[10px] tracking-widest text-brand-bronze uppercase">Absorption, Moisture & Glide</p>
                                <p className="text-[10px] italic text-brand-ivory/50 mt-2">(Carrier oils that create the luxurious feel and penetration profile.)</p>
                            </div>
                            <ul className="space-y-3 text-[10px] tracking-[0.2em] text-brand-ivory/70 border-t border-brand-bronze/10 pt-4">
                                <li>MEADOWFOAM</li>
                                <li>JOJOBA</li>
                                <li>ARGAN</li>
                                <li>MARULA</li>
                                <li>SQUALANE</li>
                            </ul>
                        </div>
                        {/* Cluster 2 */}
                        <div className="p-8 border border-brand-bronze/20 bg-brand-black hover:border-brand-bronze/50 transition-colors h-full">
                            <div className="mb-6">
                                <h3 className="mb-2">The Fortification System</h3>
                                <p className="text-[10px] tracking-widest text-brand-bronze uppercase">Strength, Repair & Softening</p>
                                <p className="text-[10px] italic text-brand-ivory/50 mt-2">(Nutrient-dense oils that improve beard structure and skin barrier.)</p>
                            </div>
                            <ul className="space-y-3 text-[10px] tracking-[0.2em] text-brand-ivory/70 border-t border-brand-bronze/10 pt-4">
                                <li>BAOBAB</li>
                                <li>MORINGA</li>
                                <li>CASTOR</li>
                                <li>SEA BUCKTHORN</li>
                                <li>VITAMIN E</li>
                            </ul>
                        </div>
                        {/* Cluster 3 */}
                        <div className="p-8 border border-brand-bronze/20 bg-brand-black hover:border-brand-bronze/50 transition-colors h-full">
                            <div className="mb-6">
                                <h3 className="mb-2">The Regeneration System</h3>
                                <p className="text-[10px] tracking-widest text-brand-bronze uppercase">Active Performance Layer</p>
                                <p className="text-[10px] italic text-brand-ivory/50 mt-2">(Your bioactive that drives long-term improvement.)</p>
                            </div>
                            <ul className="space-y-3 text-[10px] tracking-[0.2em] text-brand-ivory/70 border-t border-brand-bronze/10 pt-4">
                                <li>BAKUCHIOL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Comparison Table */}
            <Reveal delay={200} className="px-6 py-24 container mx-auto max-w-3xl">
                <h2 className="mb-12 text-center">The Bioactive Difference</h2>
                <div className="border border-brand-bronze/30">
                    <div className="grid grid-cols-2 bg-brand-bronze/10 border-b border-brand-bronze/30">
                        <div className="p-6 text-[10px] tracking-[0.2em] uppercase text-brand-ivory/50 border-r border-brand-bronze/30">Conventional</div>
                        <div className="p-6 text-[10px] tracking-[0.2em] uppercase text-brand-bronze font-bold">Bravo Formula</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-brand-bronze/30">
                        <div className="p-8 text-sm opacity-70 border-r border-brand-bronze/30">Synthetic Fillers & Silicones</div>
                        <div className="p-8 text-sm text-brand-ivory">100% Nutrient-Dense Base</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-brand-bronze/30">
                        <div className="p-8 text-sm opacity-70 border-r border-brand-bronze/30">Surface-Level Coating</div>
                        <div className="p-8 text-sm text-brand-ivory">Cellular-Level Absorption</div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="p-8 text-sm opacity-70 border-r border-brand-bronze/30">Temporary Aesthetic Softness</div>
                        <div className="p-8 text-sm text-brand-ivory">Long-term Follicular Health</div>
                    </div>
                </div>
            </Reveal>

            {/* Regenerative Effect */}
            <Reveal delay={200} className="px-6 py-24 bg-brand-ivory/5">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="mb-4">Regenerative Cycle</h2>
                        <p className="text-xs tracking-[0.3em] text-brand-bronze/70">THE 24-HOUR BIO-PATHWAY</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="hidden md:block absolute left-0 right-0 top-6 h-px bg-brand-bronze/20 z-0"></div>

                        <div className="grid md:grid-cols-3 gap-12 relative z-10">
                            {[
                                { step: "01. Absorb", desc: "Low molecular weight lipids penetrate the outer cuticle within 60 seconds." },
                                { step: "02. Repair", desc: "Active antioxidants neutralize oxidative stress and repair protein chains." },
                                { step: "03. Strengthen", desc: "Long-term usage builds a resilient lipid barrier against environmental toxins." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center space-y-6 bg-brand-black p-6 border border-brand-bronze/10">
                                    <div className="w-4 h-4 rounded-full bg-brand-bronze"></div>
                                    <h4 className="text-lg font-playfair tracking-widest uppercase">{item.step}</h4>
                                    <p className="text-xs text-brand-ivory/60 max-w-[200px] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* CTA Section */}
            <Reveal delay={200} className="px-6 py-32 text-center bg-brand-black container mx-auto">
                <div className="max-w-2xl mx-auto border border-brand-bronze/20 p-12">
                    <h3 className="mb-8 text-xs tracking-[0.4em]">Ready for the Evolution?</h3>
                    <p className="text-3xl font-playfair mb-12 uppercase">Experience the science of <br /> bioactive grooming.</p>
                    <Link to="/product" className="inline-block bg-brand-bronze text-brand-black py-4 px-10 text-xs tracking-[0.3em] font-bold uppercase hover:bg-brand-ivory transition-all">
                        Upgrade Routine
                    </Link>
                </div>
                <div className="mt-24 pt-12 border-t border-brand-bronze/10">
                    <p className="text-[10px] tracking-widest text-brand-ivory/30 uppercase">© 2024 Bravo Grooming Supply • Molecular Division</p>
                </div>
            </Reveal>
        </div>
    );
};

export default ScienceOfBioactive;
