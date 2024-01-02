import { HiEnvelope, HiMiniShoppingCart } from "react-icons/hi2";
import { HiSearch, HiUser } from "react-icons/hi";
import { useEffect, useState } from "react";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsSticky(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="">
            <header>Up to 60% OFF on selected items. With an additional 20%, code: BLVCKWINTER</header>

            {/* Header Section */}
            <div
                style={{
                    backgroundImage: "url('https://i.ibb.co/SP1rhKQ/Banner.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                    height: '100vh',
                    position: 'relative', // Add this line
                    zIndex: isSticky ? '10' : '0', // Add this line
                }}
            >
                <div className={`pt-8  ${isSticky ? 'fixed top-0 left-0 right-0 bg-black  text-white transition-colors duration-200 ease-in ' : ''}`}>
                    <div className="flex justify-between px-[50px] pb-[30px]">
                        <div className="flex gap-x-3">
                            <span> <HiEnvelope className="text-white h-[18px] w-[18px]" /></span>
                            <span> <HiEnvelope className="text-white h-[18px] w-[18px]" /></span>
                            <span> <HiEnvelope className="text-white h-[18px] w-[18px]" /></span>
                            <span> <HiEnvelope className="text-white h-[18px] w-[18px]" /></span>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/3sNL27c/logo.png" className="w-[85px] md:mr-[27px]" alt="" />
                        </div>
                        <div className="flex gap-x-3">
                            <span ><HiUser className="text-white h-[18px] w-[18px]" /></span>
                            <span ><HiSearch className="text-white h-[18px] w-[18px]" /></span>
                            <span><HiMiniShoppingCart className="text-white h-[18px] w-[18px]" /></span>
                        </div>
                    </div>
                    {/* list items */}
                    <ul  className={`flex justify-center py-[7px]  gap-[30px] text-white ${isSticky ? 'text-white border-b border-t border-[#383838]' : ''}`}>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Accessories</li>
                        <li>Digital</li>
                        <li>Seles</li>
                        <li>Collab</li>
                        <li>Member</li>
                    </ul>
                </div>
            </div>
            <div>
                {/* Your other content */}
            </div>
        </nav>
    );
};

export default Header;
