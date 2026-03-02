
import Reveal from '../components/Reveal';

const SignupPage = () => {


    return (
        <Reveal className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-4">
            <h1 className="mb-8">Step into <br className="md:hidden" /><span className="text-brand-bronze">The Bravo Boardroom.</span></h1>
            <p className="text-lg opacity-80 max-w-md font-julius leading-relaxed">
                Become a Boardroom member to receive priority updates, limited-release opportunities, and exclusive pricing not available to the public.
            </p>

            <div className="w-full max-w-md mx-auto">
                <div className="klaviyo-form-XJgtWK"></div>
            </div>
        </Reveal>
    );
};

export default SignupPage;
