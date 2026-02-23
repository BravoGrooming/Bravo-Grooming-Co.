import { Link } from 'react-router-dom';
import founderImage from '../assets/founder-portrait.png';
import oilBeakerImage from '../assets/oil-in-beaker.png';

const OurStoryPage = () => {
    return (
        <div className="flex flex-col w-full bg-brand-black text-brand-ivory">
            {/* Hero Section */}
            <section className="relative flex h-[85vh] w-full flex-col items-center justify-center pt-20">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div
                        className="h-full w-full bg-cover bg-center opacity-40 grayscale scale-110"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdmfZ48EyHMdS-uTXYkn8WifwvSrcCafick8Nh6wObrRJUAIPvmsTS0dUO6GXwuwGwjLkVNTIEUU23JVvAerXDPqiHuPqzU7QdKlV8SeBxGBgX0fS2sP0S-eZ_TOpWFKgO2JQc3KnCXS2Q4g3k4068HvFKvoo8a5PxT4lW1aAeH4VwtpWeS55OZSCgDURLpNwXqpkV42UdQjHBMV5O0Cj8C4fUhF1I1vA-GGz8gE2b47UE59X0Z54TNp453gjyJjzayEdgnARXcrvF')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center text-center px-6">
                    <h1 className="tracking-[0.3em] text-4xl font-playfair uppercase leading-none md:text-6xl text-brand-ivory">
                        Our Story
                    </h1>
                    <div className="mt-8 h-[1px] w-12 bg-brand-bronze mx-auto"></div>
                    <p className="mt-8 max-w-[280px] text-xs uppercase tracking-[0.3em] font-julius text-brand-bronze/80">
                        A disciplined approach to the modern man's ritual
                    </p>
                </div>
            </section>

            {/* Section 1: Philosophy */}
            <section className="flex flex-col items-center px-8 py-32 text-center border-y border-brand-bronze/10">
                <div className="max-w-xl">
                    <h2 className="tracking-wide mb-10 text-3xl font-playfair leading-relaxed text-brand-ivory">
                        Grooming isn’t just routine. It’s a reset. A moment of clarity in a chaotic world.
                    </h2>
                    <div className="mx-auto mb-10 h-[1px] w-12 bg-brand-bronze"></div>
                    <p className="text-sm font-julius uppercase leading-loose tracking-widest text-brand-ivory/60 max-w-lg mx-auto">
                        Every stroke, every drop, a commitment to self-mastery. We believe the morning ritual is the cornerstone of a disciplined life.
                    </p>
                </div>
            </section>

            {/* Section 2: Founder's Journey (Two Column) */}
            <section className="grid grid-cols-1 md:grid-cols-2">
                {/* Image Column */}
                <div className="relative h-[500px] md:h-[600px] lg:h-auto min-h-[500px] w-full bg-brand-black overflow-hidden border-b md:border-b-0 md:border-r border-brand-bronze/10">
                    <div
                        className="h-full w-full bg-cover bg-center opacity-90"
                        style={{ backgroundImage: `url(${founderImage})` }}
                    ></div>
                </div>
                {/* Copy Column */}
                <div className="flex flex-col justify-center bg-brand-black p-12 md:p-24 border-l border-brand-bronze/10">
                    <span className="mb-4 text-xs font-bold tracking-[0.5em] text-brand-bronze font-julius">01 / ORIGIN</span>
                    <h3 className="mb-12 text-4xl font-playfair uppercase tracking-widest text-brand-ivory">The Foundation</h3>
                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 bg-brand-bronze rotate-45"></span>
                            <p className="text-sm font-julius leading-relaxed tracking-wider text-brand-ivory/80">
                                Bravo Grooming Co. was built on one truth: a man’s standards shape his identity. This brand wasn’t created in comfort — it was forged in the quiet, uncomfortable moments when you decide who you’re going to become. Grooming became a discipline, a reset, a way to take control when everything else felt uncertain.
                            </p>
                        </div>
                        <div className="flex gap-6 items-start">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 bg-brand-bronze rotate-45"></span>
                            <p className="text-sm font-julius leading-relaxed tracking-wider text-brand-ivory/80">
                                From that mindset came our foundation: show up sharp, stay grounded, honor the small details, and demand more from yourself every single day. This is where Bravo began.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: The Vision (Staggered Layout) */}
            <section className="grid grid-cols-1 md:grid-cols-2 bg-brand-black border-t border-brand-bronze/10">
                {/* Copy Column (Left side) */}
                <div className="flex flex-col justify-center p-12 md:p-24 border-b md:border-b-0 md:border-r border-brand-bronze/10 order-2 md:order-1">
                    <span className="mb-4 text-xs font-bold tracking-[0.5em] text-brand-bronze font-julius">02 / VISION</span>
                    <h3 className="mb-12 text-3xl font-playfair uppercase tracking-widest text-brand-ivory">The Vision</h3>
                    <div className="space-y-8">
                        <p className="text-sm font-julius leading-relaxed tracking-wider text-brand-ivory/80">
                            Our vision is direct — elevate men’s grooming to a level worthy of the men who refuse to cut corners. We create products that match the standards of those who take pride in how they present themselves: premium formulations, purposeful ingredients, and a philosophy rooted in discipline rather than trends.
                        </p>
                        <p className="text-sm font-julius leading-relaxed tracking-wider text-brand-ivory/80">
                            We’re building a brand that stands for integrity, precision, and confidence. <br /><br />
                            <span className="text-brand-bronze italic">Not loud. Not flashy. <br />Just undeniably premium.</span>
                        </p>
                    </div>
                </div>
                {/* Image Column (Right side) */}
                <div className="relative h-[500px] md:h-[600px] lg:h-auto min-h-[500px] w-full overflow-hidden order-1 md:order-2">
                    <div
                        className="h-full w-full bg-cover bg-center opacity-90"
                        style={{ backgroundImage: `url(${oilBeakerImage})` }}
                    ></div>
                </div>
            </section>

            {/* Section 3: Execution (Staggered Layout) */}
            <section className="grid grid-cols-1 md:grid-cols-2 bg-brand-black border-t border-brand-bronze/10">
                {/* Image Column (Left side) */}
                <div className="relative h-[500px] md:h-[600px] lg:h-auto min-h-[500px] w-full overflow-hidden border-b md:border-b-0 md:border-r border-brand-bronze/10">
                    <div
                        className="h-full w-full bg-neutral-900 flex items-center justify-center opacity-80"
                    >
                        <span className="text-brand-ivory/20 font-julius tracking-widest text-xs uppercase px-8 text-center border border-brand-ivory/10 py-4 rounded">Placeholder for Execution Image</span>
                    </div>
                </div>
                {/* Copy Column (Right side) */}
                <div className="flex flex-col justify-center p-12 md:p-24">
                    <span className="mb-4 text-xs font-bold tracking-[0.5em] text-brand-bronze font-julius">03 / EXECUTION</span>
                    <h3 className="mb-12 text-3xl font-playfair uppercase tracking-widest text-brand-ivory">Execution</h3>
                    <div className="space-y-8">
                        <p className="text-sm font-julius leading-relaxed tracking-wider text-brand-ivory/80">
                            A vision means nothing without disciplined follow-through. Execution is where Bravo separates itself: no gimmicks, no filler ingredients, no shortcuts — just uncompromising craftsmanship engineered to perform.
                        </p>
                        <div className="space-y-4 pt-4 border-t border-brand-bronze/20">
                            <p className="text-sm font-julius uppercase tracking-widest text-brand-ivory"><span className="text-brand-bronze pr-4">✦</span> Every formula is built with intent.</p>
                            <p className="text-sm font-julius uppercase tracking-widest text-brand-ivory"><span className="text-brand-bronze pr-4">✦</span> Every detail is deliberate.</p>
                            <p className="text-sm font-julius uppercase tracking-widest text-brand-ivory"><span className="text-brand-bronze pr-4">✦</span> Every product earns its place on your shelf.</p>
                        </div>
                        <p className="text-sm font-julius leading-relaxed tracking-wider text-brand-ivory/80 mt-6 pt-4 border-t border-brand-bronze/20">
                            This is how we turn standards into results — one premium bottle at a time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 3: Discipline (Pull Quote) */}
            <section className="bg-brand-black border-y border-brand-bronze/10 flex flex-col items-center justify-center px-8 py-32 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 text-[10rem] font-serif text-brand-bronze opacity-5 leading-none">“</div>
                <div className="max-w-2xl relative z-10">
                    <h2 className="text-3xl font-playfair italic leading-loose text-brand-bronze md:text-3xl">
                        "Precision matters. Integrity matters. Consistency matters. That’s why we craft without shortcuts, hype, or empty marketing."
                    </h2>
                    <p className="text-sm font-julius leading-relaxed tracking-wider text-brand-ivory/80 mt-12 mb-16">
                        Our products are built with purpose, our standards don’t bend, and our mission is simple: help you look sharp, feel grounded, and move through the world with confidence.
                    </p>
                    <div className="flex items-center justify-center gap-6">
                        <div className="h-[1px] w-16 bg-brand-bronze/30"></div>
                        <span className="text-xs uppercase tracking-[0.4em] text-brand-bronze/60 font-julius">The Bravo Credo</span>
                        <div className="h-[1px] w-16 bg-brand-bronze/30"></div>
                    </div>
                </div>
            </section>

            {/* Section 4: The Bravo Standard (Grid) */}
            <section className="bg-brand-black py-32 container mx-auto px-4 max-w-6xl">
                <div className="mb-24 text-center">
                    <h3 className="tracking-[0.4em] text-sm font-bold uppercase text-brand-ivory font-julius">The Bravo Standard</h3>
                    <div className="mt-6 h-[1px] w-12 bg-brand-bronze mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-brand-bronze/10 pt-16">
                    <div className="flex flex-col text-center space-y-6">
                        <div className="mx-auto w-16 h-16 border border-brand-bronze rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-brand-bronze rotate-45"></div>
                        </div>
                        <h4 className="text-sm font-bold tracking-widest text-brand-bronze uppercase font-julius">Ingredients</h4>
                        <p className="text-xs uppercase leading-relaxed tracking-widest text-brand-ivory/60 font-julius">Premium cold-pressed oils sourced from sustainable heritage groves.</p>
                    </div>
                    <div className="flex flex-col text-center space-y-6">
                        <div className="mx-auto w-16 h-16 border border-brand-bronze rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-brand-bronze rotate-45"></div>
                        </div>
                        <h4 className="text-sm font-bold tracking-widest text-brand-bronze uppercase font-julius">Craft</h4>
                        <p className="text-xs uppercase leading-relaxed tracking-widest text-brand-ivory/60 font-julius">Small batch production ensuring uncompromising quality in every bottle.</p>
                    </div>
                    <div className="flex flex-col text-center space-y-6">
                        <div className="mx-auto w-16 h-16 border border-brand-bronze rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-brand-bronze rotate-45"></div>
                        </div>
                        <h4 className="text-sm font-bold tracking-widest text-brand-bronze uppercase font-julius">Scent</h4>
                        <p className="text-xs uppercase leading-relaxed tracking-widest text-brand-ivory/60 font-julius">Architectural fragrance profiles: Sandalwood, Bergamot, and Obsidian Smoke.</p>
                    </div>
                    <div className="flex flex-col text-center space-y-6">
                        <div className="mx-auto w-16 h-16 border border-brand-bronze rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-brand-bronze rotate-45"></div>
                        </div>
                        <h4 className="text-sm font-bold tracking-widest text-brand-bronze uppercase font-julius">Result</h4>
                        <p className="text-xs uppercase leading-relaxed tracking-widest text-brand-ivory/60 font-julius">A superior finish that lasts from the morning ritual to the midnight hour.</p>
                    </div>
                </div>
            </section>

            {/* Section 5: Closing */}
            <section className="flex flex-col items-center bg-brand-black px-8 py-32 text-center border-t border-brand-bronze/10">
                <div className="max-w-[400px]">
                    <h2 className="tracking-widest mb-8 text-3xl font-playfair uppercase text-brand-ivory">Welcome to <br />Bravo Grooming Co.</h2>
                    <p className="text-sm uppercase leading-loose tracking-[0.3em] font-julius text-brand-bronze">
                        The ritual begins with you.
                    </p>
                </div>
                <Link to="/product" className="mt-16 bg-brand-bronze text-brand-black px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-brand-ivory whitespace-nowrap">
                    Explore The Collection
                </Link>
            </section>
        </div>
    );
};

export default OurStoryPage;
