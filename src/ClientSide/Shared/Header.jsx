import { HiEnvelope } from "react-icons/hi2";

const Header = () => {
    return (
        <nav>
           <header>Up to 60% OFF on selected items. With additional 20%, code: BLVCKWINTER</header>
           {/* for all icons */}
           <div className="flex justify-center items-center gap-3">
                <span> <HiEnvelope className="text-red-500"></HiEnvelope></span>
                <span> <HiEnvelope className="text-red-500"></HiEnvelope></span>
                <span> <HiEnvelope className="text-red-500"></HiEnvelope></span>
                <span> <HiEnvelope className="text-red-500"></HiEnvelope></span>
           </div>
        </nav>
    );
};

export default Header;