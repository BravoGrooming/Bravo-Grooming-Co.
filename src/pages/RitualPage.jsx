import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FlaskConical, ShieldCheck, Award } from 'lucide-react';
import Reveal from '../components/Reveal';

const RitualPage = () => {
    return (
        <div className="bg-brand-black min-h-screen font-julius text-brand-ivory selection:bg-brand-bronze selection:text-brand-black">

            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background Image with Parallax effect */}
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1542382156-df53350ca9e1?q=80&w=2670&auto=format&fit=crop" alt="Luxury grooming lifestyle" className="w-full h-full object-cover opacity-30 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 to-brand-black/90"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full pt-20">
                    <div className="max-w-3xl">
                        <Reveal delay={200}>
                            <p className="text-brand-bronze text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-bold">
                                Bioactive Regeneration
                            </p>
                        </Reveal>
                        <Reveal delay={400}>
                            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-brand-ivory leading-tight mb-8">
                                Built from struggle.<br />
                                <span className="text-brand-bronze">Refined with purpose.</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={600}>
                            <p className="text-lg md:text-xl text-brand-ivory/80 max-w-xl mb-12 leading-relaxed">
                                The Bioactive Beard Oil. Precision skincare for the professional man. Where cellular regeneration meets uncompromising discipline.
                            </p>
                        </Reveal>
                        <Reveal delay={800}>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <Link to="/product" className="bg-brand-bronze text-brand-black border border-brand-bronze px-10 py-4 text-sm tracking-widest uppercase font-bold inline-flex items-center justify-center gap-3 transition-all hover:bg-transparent hover:text-brand-bronze">
                                    Experience the Formula
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a href="#formula" className="bg-transparent border border-brand-bronze text-brand-bronze px-10 py-4 text-sm tracking-widest uppercase font-bold inline-flex items-center justify-center gap-3 transition-all hover:bg-brand-bronze hover:text-brand-black shadow-[0_0_0_rgba(189,152,101,0)] hover:shadow-[0_0_20px_rgba(189,152,101,0.3)]">
                                    Discover the Science
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <Reveal delay={1200} className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 opacity-60">
                    <span className="text-xs tracking-widest uppercase text-brand-ivory/60 font-bold">Scroll</span>
                    <div className="w-px h-16 bg-gradient-to-b from-brand-bronze to-transparent"></div>
                </Reveal>
            </section>

            {/* Product Introduction */}
            <section id="formula" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-bronze/30 to-transparent"></div>

                <div className="max-w-7xl mx-auto container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Product Image */}
                        <div className="relative order-2 lg:order-1">
                            <Reveal>
                                <div className="aspect-[4/5] relative overflow-hidden border border-brand-bronze/30">
                                    <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop" alt="Bioactive Beard Oil" className="w-full h-full object-cover grayscale-[30%]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent"></div>
                                </div>
                            </Reveal>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-brand-bronze/30 hidden lg:block"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 border border-brand-bronze/30 hidden lg:block"></div>
                        </div>

                        {/* Product Details */}
                        <div className="order-1 lg:order-2">
                            <Reveal delay={100}>
                                <p className="text-brand-bronze text-sm tracking-[0.3em] uppercase mb-4 font-bold">The Standard</p>
                            </Reveal>
                            <Reveal delay={200}>
                                <h2 className="font-playfair text-4xl md:text-5xl text-brand-ivory mb-6">
                                    Bioactive Beard Oil
                                </h2>
                            </Reveal>
                            <Reveal delay={300}>
                                <p className="text-brand-ivory/70 text-lg mb-8 leading-relaxed">
                                    Grooming at this level is an art. Become your artist. A cellular-level regenerative formula engineered for the man who demands performance from every aspect of his presence.
                                </p>
                            </Reveal>

                            {/* Price and CTA */}
                            <Reveal delay={400}>
                                <div className="flex items-center gap-8 mb-12">
                                    <span className="font-playfair text-3xl text-brand-bronze">$39.99</span>
                                    <span className="text-brand-ivory/40 text-sm uppercase tracking-widest font-bold">30ml / 1 fl oz</span>
                                </div>
                            </Reveal>

                            <Reveal delay={500}>
                                <Link to="/product" className="bg-brand-bronze text-brand-black border border-brand-bronze px-10 py-4 text-sm tracking-widest uppercase font-bold inline-flex items-center gap-3 mb-16 transition-all hover:bg-transparent hover:text-brand-bronze">
                                    Elevate Your Routine
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Reveal>

                            {/* Key Benefits */}
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    "Skin Regeneration",
                                    "Density Support",
                                    "Anti-Inflammation",
                                    "Micro-Circulation"
                                ].map((benefit, idx) => (
                                    <Reveal key={idx} delay={600 + (idx * 100)}>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand-bronze mt-0.5 flex-shrink-0" />
                                            <span className="text-brand-ivory/80 text-sm tracking-widest">{benefit}</span>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-brand-bronze/10 relative">
                <div className="max-w-5xl mx-auto text-center container">
                    <Reveal>
                        <p className="text-brand-bronze text-sm tracking-[0.3em] uppercase mb-6 font-bold">The Experience</p>
                    </Reveal>
                    <Reveal delay={200}>
                        <h2 className="font-playfair text-4xl md:text-6xl text-brand-ivory mb-8 leading-tight">
                            Precision skincare meets<br />uncompromising discipline
                        </h2>
                    </Reveal>
                    <Reveal delay={400}>
                        <p className="text-brand-ivory/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16">
                            Every drop contains 12 bioactive compounds working in synergy. Not merely a conditioner—this is cellular architecture for the modern professional. Science-backed. Purpose-driven. Results-obsessed.
                        </p>
                    </Reveal>

                    <Reveal delay={600}>
                        <div className="h-px w-24 mx-auto mb-16 bg-gradient-to-r from-transparent via-brand-bronze to-transparent"></div>
                    </Reveal>

                    {/* Stats */}
                    <div className="grid md:grid-cols-3 gap-12">
                        <Reveal delay={700}>
                            <div className="text-center">
                                <span className="font-playfair text-5xl text-brand-bronze block mb-4">12</span>
                                <span className="text-brand-ivory/60 text-sm uppercase tracking-widest font-bold">Bioactive Compounds</span>
                            </div>
                        </Reveal>
                        <Reveal delay={900}>
                            <div className="text-center">
                                <span className="font-playfair text-5xl text-brand-bronze block mb-4">98%</span>
                                <span className="text-brand-ivory/60 text-sm uppercase tracking-widest font-bold">Natural Origin</span>
                            </div>
                        </Reveal>
                        <Reveal delay={1100}>
                            <div className="text-center">
                                <span className="font-playfair text-5xl text-brand-bronze block mb-4">0%</span>
                                <span className="text-brand-ivory/60 text-sm uppercase tracking-widest font-bold">Synthetic Fillers</span>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Lifestyle Section */}
            <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-brand-bronze/10">
                <div className="max-w-7xl mx-auto container">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <Reveal delay={100}>
                            <div className="group relative overflow-hidden border border-brand-bronze/20 transition-all hover:border-brand-bronze">
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1507682520764-93453a69b605?q=80&w=800&auto=format&fit=crop" alt="Professional grooming" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%]" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <p className="text-brand-bronze text-xs tracking-[0.3em] uppercase mb-3 font-bold">Discipline</p>
                                    <h3 className="font-playfair text-2xl text-brand-ivory">The Morning Ritual</h3>
                                </div>
                            </div>
                        </Reveal>

                        {/* Card 2 */}
                        <Reveal delay={300}>
                            <div className="group relative overflow-hidden border border-brand-bronze/20 transition-all hover:border-brand-bronze">
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" alt="Executive presence" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%]" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <p className="text-brand-bronze text-xs tracking-[0.3em] uppercase mb-3 font-bold">Presence</p>
                                    <h3 className="font-playfair text-2xl text-brand-ivory">Executive Standard</h3>
                                </div>
                            </div>
                        </Reveal>

                        {/* Card 3 */}
                        <Reveal delay={500}>
                            <div className="group relative overflow-hidden border border-brand-bronze/20 transition-all hover:border-brand-bronze">
                                <div className="aspect-[3/4] overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=800&auto=format&fit=crop" alt="Precision grooming" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%]" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <p className="text-brand-bronze text-xs tracking-[0.3em] uppercase mb-3 font-bold">Mastery</p>
                                    <h3 className="font-playfair text-2xl text-brand-ivory">The Details Define</h3>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Credibility Section */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-brand-bronze/10">
                <div className="max-w-7xl mx-auto container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Reveal>
                                <p className="text-brand-bronze text-sm tracking-[0.3em] uppercase mb-6 font-bold">Formulation Excellence</p>
                            </Reveal>
                            <Reveal delay={200}>
                                <h2 className="font-playfair text-4xl md:text-5xl text-brand-ivory mb-12">
                                    Transparency is power.<br />Knowledge is luxury.
                                </h2>
                            </Reveal>
                            <div className="space-y-8">
                                <Reveal delay={400}>
                                    <div className="flex items-start gap-6 group hover:bg-brand-bronze/5 p-4 -ml-4 rounded-sm transition-colors border border-transparent hover:border-brand-bronze/20">
                                        <div className="w-14 h-14 border border-brand-bronze/30 flex items-center justify-center flex-shrink-0 bg-brand-black">
                                            <FlaskConical className="w-6 h-6 text-brand-bronze" />
                                        </div>
                                        <div>
                                            <h4 className="text-brand-ivory font-bold tracking-widest mb-2">Evidence-Based Ingredients</h4>
                                            <p className="text-brand-ivory/60 text-sm leading-relaxed">Every compound selected based on clinical data and dermatological research.</p>
                                        </div>
                                    </div>
                                </Reveal>
                                <Reveal delay={600}>
                                    <div className="flex items-start gap-6 group hover:bg-brand-bronze/5 p-4 -ml-4 rounded-sm transition-colors border border-transparent hover:border-brand-bronze/20">
                                        <div className="w-14 h-14 border border-brand-bronze/30 flex items-center justify-center flex-shrink-0 bg-brand-black">
                                            <ShieldCheck className="w-6 h-6 text-brand-bronze" />
                                        </div>
                                        <div>
                                            <h4 className="text-brand-ivory font-bold tracking-widest mb-2">Clean Formulation Protocol</h4>
                                            <p className="text-brand-ivory/60 text-sm leading-relaxed">No parabens, sulfates, or synthetic fragrances. Only bioactive efficacy.</p>
                                        </div>
                                    </div>
                                </Reveal>
                                <Reveal delay={800}>
                                    <div className="flex items-start gap-6 group hover:bg-brand-bronze/5 p-4 -ml-4 rounded-sm transition-colors border border-transparent hover:border-brand-bronze/20">
                                        <div className="w-14 h-14 border border-brand-bronze/30 flex items-center justify-center flex-shrink-0 bg-brand-black">
                                            <Award className="w-6 h-6 text-brand-bronze" />
                                        </div>
                                        <div>
                                            <h4 className="text-brand-ivory font-bold tracking-widest mb-2">Artisan Production</h4>
                                            <p className="text-brand-ivory/60 text-sm leading-relaxed">Small-batch production ensuring potency and molecular integrity.</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>

                        <div className="relative mt-8 lg:mt-0 lg:pl-12 pl-0">
                            <Reveal>
                                <div className="aspect-square border border-brand-bronze/30 p-4 md:p-8">
                                    <img src="https://images.unsplash.com/photo-1544365518-da14b14ac3c5?q=80&w=800&auto=format&fit=crop" alt="Laboratory precision" className="w-full h-full object-cover grayscale-[20%]" />
                                </div>
                            </Reveal>
                            <Reveal delay={500}>
                                <div className="absolute -bottom-8 -left-2 md:-left-8 bg-brand-black border border-brand-bronze/40 p-6 md:p-8 max-w-[280px] shadow-2xl">
                                    <p className="font-playfair text-brand-bronze text-xl mb-3 leading-snug">"Grooming at this level is an art."</p>
                                    <p className="text-brand-ivory/60 text-xs tracking-[0.2em] font-bold uppercase">Become your artist.</p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-brand-bronze/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-bronze/10 via-brand-black to-brand-black opacity-80"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10 container">
                    <Reveal>
                        <h2 className="font-playfair text-5xl md:text-7xl text-brand-ivory mb-10 leading-tight">
                            Experience the<br />
                            <span className="text-brand-gradient">Bioactive Standard</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={200}>
                        <p className="text-brand-ivory/70 text-lg md:text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
                            Join the professionals who understand that excellence isn't an act—it's a standard. Your beard deserves cellular-level architecture.
                        </p>
                    </Reveal>
                    <Reveal delay={400}>
                        <Link to="/product" className="bg-brand-bronze text-brand-black border border-brand-bronze px-12 py-5 text-sm tracking-[0.2em] uppercase font-bold inline-flex items-center gap-4 transition-all hover:bg-transparent hover:text-brand-bronze hover:shadow-[0_0_30px_rgba(189,152,101,0.3)]">
                            Acquire the Formula
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default RitualPage;
