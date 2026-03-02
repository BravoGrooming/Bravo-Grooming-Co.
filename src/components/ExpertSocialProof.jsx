const ExpertSocialProof = () => {
    const experts = [
        {
            title: "Licensed Esthetician",
            quote: "Bakuchiol is the only natural alternative I trust to deliver retinol-like cellular turnover without the irritation typical of synthetic retinoids."
        },
        {
            title: "Master Barber",
            quote: "The absorption profile of this 10-oil blend is unlike anything I've encountered in 15 years. It softens coarse hair instantly without leaving a greasy residue."
        },
        {
            title: "Men's Grooming Educator",
            quote: "Squalane and Meadowfoam are the gold standard for hydration. Seeing them combined with Sea Buckthorn makes this more of a serum than a standard oil."
        },
        {
            title: "Cosmetic Chemist",
            quote: "A lipid profile this robust usually requires synthetic stabilizers. Achieving this texture with 100% bioactive plant oils is a formulation mastery."
        }
    ];

    return (
        <section className="py-24 bg-brand-black border-y border-brand-bronze/10">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <h2 className="mb-6">
                        Trusted by Experts
                    </h2>
                    <div className="w-24 h-px bg-brand-bronze mx-auto"></div>
                    <p className="font-julius text-xs tracking-[0.2em] text-brand-bronze uppercase max-w-2xl mx-auto opacity-80 leading-relaxed">
                        Validated by professionals for bio-availability, ingredient integrity, and superior performance.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    {experts.map((expert, idx) => (
                        <div key={idx} className="space-y-6 group">
                            {/* Decorative Line */}
                            <div className="w-8 h-px bg-brand-bronze/40 group-hover:w-12 transition-all duration-500"></div>

                            {/* Quote */}
                            <p className="font-playfair text-lg md:text-xl text-brand-ivory leading-relaxed italic opacity-90">
                                "{expert.quote}"
                            </p>

                            {/* Title */}
                            <div className="flex items-center gap-3 pt-2">
                                <div className="w-2 h-2 rounded-full bg-brand-bronze"></div>
                                <span className="font-julius text-xs tracking-[0.2em] text-brand-bronze uppercase">
                                    {expert.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertSocialProof;
