import { HiEnvelope, HiMiniChevronUp, HiMiniShoppingCart } from "react-icons/hi2";
import { HiSearch, HiUser } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { HiMiniChevronDown } from "react-icons/hi2";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";










const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenHovered, setIsMenHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isListMenuOpen, setIsListMenuOpen] = useState(false);

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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const toggleListMenu = () => {
        setIsListMenuOpen(!isListMenuOpen);
    };

    return (
        <nav>
            <div className="md:block hidden">
                <header
                    className="text-[10px] text-center md:text-[16px]"
                    style={{
                        transition: 'max-height 0.5s ease-in-out',
                        maxHeight: isSticky ? '0' : '100px',
                    }}
                >
                    Up to 60% OFF on selected items. With an additional 20%, code: BLVCKWINTER
                </header>
                {/* Header Section */}
                <div
                    className=""
                    style={{
                        // backgroundImage: "url('https://i.ibb.co/SP1rhKQ/Banner.png')",
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                        // backgroundRepeat: "no-repeat",
                        // height: '100vh',
                        position: 'relative', // Add this line
                        transition: 'border 0.3s ease-in-out', // Add this line for smooth transition
                        borderTop: isSticky ? '1px solid #383838' : 'none',
                        borderBottom: isSticky ? '1px solid #383838' : 'none',
                        zIndex: isSticky ? '9999' : '8888', // Add this line
                        backgroundColor: isMenHovered ? 'black' : 'transparent', // Added this line

                    }}
                >
                    <div className={`pt-8 ${isSticky ? 'fixed top-0 left-0 right-0 bg-black text-white transition-colors duration-500 ease-in-out ' : ''}`}>
                        <div className={`flex justify-between px-[50px] pb-[30px] `}>
                            <div className="flex gap-x-3">
                                <span> <HiEnvelope className="text-white h-[18px] w-[18px]" /></span>
                                <span> <HiEnvelope className="text-white h-[18px] w-[18px]" /></span>
                                <span> <HiEnvelope className="text-white h-[18px] w-[18px]" /></span>
                                <span> <HiEnvelope className="text-white h-[18px] w-[18px]" /></span>
                            </div>
                            <div>
                                <Link to="/"> <img src="https://i.ibb.co/3sNL27c/logo.png" className="w-[85px] md:mr-[27px]" alt="" /></Link>
                            </div>
                            <div className="flex gap-x-3">
                                <span ><HiUser className="text-white h-[18px] w-[18px]" /></span>
                                <span ><HiSearch className="text-white h-[18px] w-[18px]" /></span>
                                <span><HiMiniShoppingCart className="text-white h-[18px] w-[18px]" /></span>
                            </div>
                        </div>
                        {/* list items */}
                        <div
                            className={`flex  justify-center py-[7px] list-none gap-[30px] text-[#b1b1b1] ${isSticky ? 'border-b border-t border-[#383838]' : ''} `}

                        >
                            <li className={` group  ${isMenHovered ? 'text-white ' : ''}`}
                                onMouseEnter={() => setIsMenHovered(true)}
                                onMouseLeave={() => setIsMenHovered(false)}
                            >
                                Men
                                <div className="absolute left-0  hidden group-hover:block bg-black z-50 text-white">
                                    <div className="grid grid-cols-2 justify-around items-start pt-10  ">
                                        <div className="flex justify-around">
                                            <ul className="whitespace-nowrap  space-y-1 text-[12px]">
                                                <li className="pb-[20px]"><Link to="/menCollections">READY TO WEAR</Link></li>
                                                <li><Link to="#">NEW ARRIVALS</Link></li>
                                                <li><Link to="#">OUTFEETS</Link></li>
                                                <li><Link to="#">PANTS</Link></li>
                                                <li><Link to="#">HOODIES AND JACKETS</Link></li>
                                                <li><Link to="#">TEES</Link></li>
                                            </ul>
                                            <ul className="whitespace-nowrap space-y-1 text-[12px]">
                                                <li className="pb-[20px] "><Link to="#">READY TO WEAR</Link></li>
                                                <li><Link to="#">NEW ARRIVALS</Link></li>
                                                <li><Link to="#">OUTFEETS</Link></li>
                                                <li><Link to="#">PANTS</Link></li>
                                                <li><Link to="#">HOODIES AND JACKETS</Link></li>
                                                <li><Link to="#">TEES</Link></li>
                                            </ul>
                                        </div>
                                        <div className="flex ">
                                            <div >
                                                <img className="object-cover" src="https://i.ibb.co/q9SC0WV/BLVCKPSG-PR-1080x.webp" alt="" />
                                            </div>
                                            <div >
                                                <img className="object-cover" src="https://i.ibb.co/q9SC0WV/BLVCKPSG-PR-1080x.webp" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>Women</li>
                            <li>Accessories</li>
                            <li>Digital</li>
                            <li>Seles</li>
                            <li>Collab</li>
                            <li>Member</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden ">
                <div className={`flex justify-between py-[40px] px-[20px] relative ${isMobileMenuOpen ? "bg-black  " : ""}  `}>
                    <div>
                        <img className="h-[15px]  " src="https://i.ibb.co/3sNL27c/logo.png" alt="" />
                    </div>
                    <div>
                        {isMobileMenuOpen ? (
                            <HiMiniXMark onClick={toggleMobileMenu} className=" text-[20px] text-white"></HiMiniXMark>
                        ) : (
                            <HiBars3BottomRight onClick={toggleMobileMenu} className=" text-[20px] text-white"></HiBars3BottomRight>
                        )}
                    </div>
                    {isMobileMenuOpen && (
                        <div className="bg-black  text-white absolute left-0 top-16 w-full  h-screen px-5 ">
                            <ul className="flex flex-col   py-4 space-y-4">
                                <li>
                                    <div
                                        className={`flex justify-between items-center `}
                                    >
                                        <p>Men</p>
                                        <p>{isListMenuOpen ? <HiMiniChevronUp onClick={toggleListMenu} className=" text-[20px] text-white" /> : <HiMiniChevronDown onClick={toggleListMenu} className=" text-[20px] text-white" />}</p>
                                    </div>
                                    {
                                        isListMenuOpen ? <ul className={`pl-[5px]  `}>
                                            <li>dummy1</li>
                                            <li>dummy1</li>
                                            <li>dummy1</li>
                                            <li>dummy1</li>
                                            <li>dummy1</li>
                                            <li>dummy1</li>
                                        </ul> : ""
                                    }
                                </li>
                                <li>
                                    <Link to="/" className="text-white">Home</Link>
                                </li>
                                <li>
                                    <Link to="/men" className="text-white">Men</Link>
                                </li>
                                <li>
                                    <Link to="/women" className="text-white">Women</Link>
                                </li>
                                <li className="relative">
                                    <Link to="/accessories" className="text-white">Accessories</Link>
                                </li>
                                {/* Add more menu items as needed */}
                            </ul>
                            <div className=" flex justify-center items-center space-x-5 pt-[20px]  ">
                                <RiFacebookCircleLine size={20}></RiFacebookCircleLine>
                                <FaInstagram size={20} />
                                <CiTwitter size={20} />
                                <CiLinkedin size={20} />
                                <AiOutlineYoutube size={20} />

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </nav>
    );
};

export default Header;
