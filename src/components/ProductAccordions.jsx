import { useState } from 'react';

const ProductAccordions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const ingredients = [
        "Meadowfoam Seed Oil",
        "Golden Jojoba Oil",
        "Argan Kernel Oil",
        "Virgin Marula Oil",
        "Plant-Derived Squalane",
        "Baobab Seed Oil",
        "Moringa Oleifera Seed Oil",
        "Ricinus Communis (Castor) Seed Oil",
        "Bakuchiol (Plant-Based Retinol Alternative)",
        "Sea Buckthorn Berry Oil",
        "Tocopherol (Vitamin E)",
        "Signature Fragrance Blend"
    ];

    const sections = [
        {
            title: "What It Does",
            content: "A regenerative bioactive formula engineered to restore hair health and dermal integrity. It eliminates sub-beard dryness, neutralizes itch, and conditions coarse follicles for a controlled, professional presence."
        },
        {
            title: "Why It Works",
            content: "Powered by a high-concentration blend of ten premium botanical oils and Bakuchiol—a plant-based retinol alternative. This dual-action system penetrates the follicle to strengthen hair from the root while accelerating skin cell turnover for long-term health."
        },
        {
            title: "Full Ingredient Composition",
            type: "list",
            items: ingredients
        }
    ];

    return (
        <div className="max-w-3xl mx-auto border-t border-brand-bronze/20">
            {sections.map((section, idx) => (
                <div key={idx} className="border-b border-brand-bronze/20">
                    <button
                        onClick={() => toggleAccordion(idx)}
                        className="w-full py-6 flex justify-between items-center cursor-pointer group hover:bg-brand-ivory/5 px-4 transition-colors text-left focus:outline-none"
                    >
                        <span className="font-playfair text-xl text-brand-ivory tracking-wide">{section.title}</span>
                        <span className={`text-brand-bronze text-2xl transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`}>+</span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-4 pb-8 pt-2">
                            {section.type === 'list' ? (
                                <ul className="flex flex-col">
                                    {section.items.map((item, i) => (
                                        <li key={i} className={`font-julius text-brand-ivory/80 py-3 ${i !== section.items.length - 1 ? 'border-b border-brand-bronze/20' : ''}`}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="font-julius text-brand-ivory/80 leading-relaxed text-lg">
                                    {section.content}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductAccordions;
