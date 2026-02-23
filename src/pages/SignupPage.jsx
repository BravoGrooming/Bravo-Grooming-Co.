import { useState } from 'react';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would integrate with an email service
        console.log("Signed up with:", email);
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-4">
            <h1 className="text-4xl md:text-5xl font-playfair text-brand-ivory">Step into <br className="md:hidden" /><span className="text-brand-bronze">The Bravo Boardroom.</span></h1>
            <p className="text-lg opacity-80 max-w-md font-julius leading-relaxed">
                Become a Boardroom member to receive priority updates, limited-release opportunities, and exclusive pricing not available to the public.
            </p>

            {submitted ? (
                <div className="bg-brand-bronze/10 border border-brand-bronze p-6 rounded-sm">
                    <p className="text-brand-bronze font-playfair text-xl">Thank you for subscribing.</p>
                    <p className="text-sm opacity-80 mt-2 font-julius">Welcome to Bravo Grooming Co.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 w-full max-w-md">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-brand-black border border-brand-bronze/50 px-4 py-3 placeholder:text-brand-ivory/30 focus:outline-none focus:border-brand-bronze text-brand-ivory w-full font-julius"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="bg-brand-bronze text-brand-black px-8 py-3 uppercase tracking-widest font-bold hover:bg-brand-ivory transition-colors whitespace-nowrap">
                        Sign Up
                    </button>
                </form>
            )}
        </div>
    );
};

export default SignupPage;
