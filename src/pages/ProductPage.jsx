import { useEffect, useState } from 'react';
import client from '../lib/shopify';
import heroImage from '../assets/beard-oil-hero.png';
import textureImage from '../assets/beard-oil-2.png';
import ProductAccordions from '../components/ProductAccordions';
import ExpertSocialProof from '../components/ExpertSocialProof';

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Fetch product by handle found in previous step: 'premium-beard-oil'
                const fetchedProduct = await client.product.fetchByHandle('premium-beard-oil');
                setProduct(fetchedProduct);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    const addToBag = async () => {
        if (!product || !product.variants[0]) return;

        try {
            const checkout = await client.checkout.create();
            const lineItemsToAdd = [
                {
                    variantId: product.variants[0].id,
                    quantity: 1
                }
            ];
            const newCheckout = await client.checkout.addLineItems(checkout.id, lineItemsToAdd);
            window.location.href = newCheckout.webUrl;
        } catch (error) {
            console.error("Error adding to bag:", error);
        }
    };

    if (loading) return <div className="min-h-screen bg-brand-black text-brand-ivory flex items-center justify-center font-playfair animate-pulse">Loading Bioactive Science...</div>;

    if (!product) return <div className="min-h-screen bg-brand-black text-brand-ivory flex items-center justify-center font-playfair">Product Not Found</div>;

    return (
        <div className="py-12 space-y-24">
            {/* Hero Split */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <img
                        src={product.images[0]?.src || heroImage}
                        alt={product.title}
                        className="w-full h-auto object-cover rounded-sm border border-brand-bronze/20"
                    />
                    <div className="grid grid-cols-3 gap-2">
                        {/* Gallery Thumbs */}
                        <img src={product.images[0]?.src || heroImage} alt="Detail 1" className="w-full h-32 object-cover opacity-70 hover:opacity-100 cursor-pointer border border-transparent hover:border-brand-bronze/50 transition-all" />
                        <img src={textureImage} alt="Texture Shot" className="w-full h-32 object-cover opacity-70 hover:opacity-100 cursor-pointer border border-transparent hover:border-brand-bronze/50 transition-all" />
                        <img src={product.images[1]?.src || heroImage} alt="Detail 3" className="w-full h-32 object-cover opacity-70 hover:opacity-100 cursor-pointer border border-transparent hover:border-brand-bronze/50 transition-all" />
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="border-l border-brand-bronze pl-6">
                        <h1 className="text-5xl font-playfair text-brand-ivory mb-2">{product.title}</h1>
                        <p className="text-brand-bronze font-julius text-xl tracking-widest">
                            ${product.variants[0]?.price.amount} {product.variants[0]?.price.currencyCode}
                        </p>
                    </div>

                    <p className="font-playfair leading-relaxed opacity-80 text-lg">
                        {product.description || "Our signature blend of organic oils designed to nourish both beard and skin. Infused with subtle notes of sandalwood and citrus for a truly premium experience."}
                    </p>

                    <div className="space-y-4 pt-6 text-sm opacity-90 font-julius border-y border-brand-bronze/10 py-8">
                        <p className="flex items-center gap-4"><span className="text-brand-bronze text-xl">✓</span> Promotes Healthy Growth</p>
                        <p className="flex items-center gap-4"><span className="text-brand-bronze text-xl">✓</span> Softens Coarse Hair</p>
                        <p className="flex items-center gap-4"><span className="text-brand-bronze text-xl">✓</span> Prevents Itch & Irritation</p>
                    </div>

                    <div className="mt-8 space-y-4">
                        <button
                            onClick={addToBag}
                            className="w-full bg-brand-bronze text-brand-black px-8 py-4 uppercase tracking-widest font-bold hover:bg-brand-ivory transition-colors"
                        >
                            Pre-Order Now
                        </button>
                        <p className="text-center font-julius text-sm opacity-80 text-brand-bronze">
                            This is a pre-order item. Shipping begins Mid-March.
                        </p>
                    </div>
                </div>
            </div>

            {/* Accordions Section */}
            <ProductAccordions />

            {/* Founder's Note */}
            <div className="bg-brand-ivory/5 p-12 md:p-24 text-center border border-brand-bronze/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 text-[10rem] font-serif text-brand-bronze opacity-5 leading-none">“</div>
                <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                    <h2 className="text-3xl font-playfair uppercase tracking-widest text-brand-bronze">Uncompromised Standards</h2>
                    <p className="font-julius text-lg leading-loose opacity-80">
                        "I built this oil from the ground up because settling wasn’t an option. Bravo is crafted for the man who understands that real quality is earned through intention, effort, and discipline — every single day."
                    </p>
                    <div className="w-24 h-px bg-brand-bronze mx-auto"></div>
                    <p className="font-playfair italic text-sm opacity-60">Brandt Bravo, Founder</p>
                </div>
            </div>

            {/* Expert Social Proof */}
            <ExpertSocialProof />

            {/* Texture & Sensory Section */}
            <div className="grid md:grid-cols-2 gap-0 border border-brand-bronze/10">
                <div className="h-[500px] relative">
                    <img src={textureImage} alt="Texture and Viscosity" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-brand-black/20"></div>
                </div>
                <div className="flex items-center justify-center p-12 bg-brand-black">
                    <div className="space-y-6 max-w-md">
                        <h3 className="text-3xl font-playfair text-brand-ivory">Clean. Controlled. Professional.</h3>
                        <div className="w-12 h-1 bg-brand-bronze"></div>
                        <p className="font-julius leading-relaxed opacity-70">
                            Engineered for a weightless, disciplined finish. Our bioactive blend absorbs instantly, conditioning the beard and skin without shine, residue, or heaviness. The result: a clean, refined look built for the modern professional.
                        </p>
                        <div className="pt-4 border-t border-brand-bronze/10">
                            <p className="font-playfair italic text-brand-bronze mb-2">Scent Profile: Vetiver • Cedar • Amber</p>
                            <p className="font-julius text-xs opacity-60 leading-relaxed">
                                A bold, grounded profile with dry sophistication, warm depth, and subtle masculinity. Designed to complement your presence, not overpower it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
