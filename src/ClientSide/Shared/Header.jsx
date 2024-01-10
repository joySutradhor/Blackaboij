import { HiMiniChevronUp } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import { HiMiniChevronDown } from "react-icons/hi2";
import { FaInstagram, FaPinterest, } from "react-icons/fa";
import { IoLogoYoutube, } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenHovered, setIsMenHovered] = useState(false);
    const [isWomenHovered, setIsWomenHovered] = useState(false);
    const [isPrinceHovered, SetIsPrinceHovered] = useState(false);
    const [isPrincesHovered, SetIsPrincesHovered] = useState(false);
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

    const iconSize = 19;
    return (
        <nav>
            <div className="md:block hidden absolute top-0 w-full">
                <header
                    className="text-[10px] text-center md:text-[15px]"
                    style={{
                        transition: 'max-height 0.5s ease-in-out',
                        maxHeight: isSticky ? '0' : '100px',
                    }}
                >
                    Up to 60% OFF on selected items. With an additional 20%, code: BLACK WINTER
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
                        zIndex: isSticky ? '9999' : '50', // Add this line
                        backgroundColor: isMenHovered || isWomenHovered || isPrinceHovered || isPrincesHovered ? 'black' : 'transparent', // Added this line

                    }}
                >
                    <div className={`pt-8 ${isSticky ? 'fixed top-0 left-0 right-0 bg-black text-white transition-colors duration-500 ease-in-out ' : ''}`}>
                        <div className={`flex justify-between px-[50px] pb-[30px] `}>
                            <div className="flex gap-x-3">
                                <span style={{ fontSize: `${iconSize}px` }} > <FaFacebook className="text-white  " /></span>
                                <span style={{ fontSize: `${iconSize}px` }}  > <FaPinterest className="text-white " /></span>
                                <span style={{ fontSize: `${iconSize}px` }}  > <FaInstagram className="text-white " /></span>
                                <span style={{ fontSize: `${iconSize}px` }} > <IoLogoYoutube className="text-white " /></span>
                            </div>
                            <div>
                                <Link to="/"> <img src="https://i.ibb.co/3sNL27c/logo.png" className="w-[85px] md:mr-[27px]" alt="" /></Link>
                            </div>
                            <div className="flex gap-x-3">
                                <span style={{ fontSize: `${iconSize}px` }} > <FaRegUser className="text-white  " /></span>
                                <span style={{ fontSize: `${iconSize}px` }}  > <IoSearchSharp className="text-white " /></span>
                                <span style={{ fontSize: `${iconSize}px` }}  > <AiOutlineShoppingCart className="text-white " /></span>

                            </div>
                        </div>
                        {/* list items */}
                        <div
                            className={`flex   justify-center   list-none  text-[#b1b1b1] ${isSticky ? 'border-b border-t border-[#383838]' : ''} ${isMenHovered || isWomenHovered || isPrinceHovered || isPrincesHovered  ? "border-b border-t border-[#383838] bg-black" : "bg-transparent border-b-hidden border-t-hidden	"} `}

                        >
                            <li className={`relative py-[10px] px-[30px] text-[15px]  group  ${isMenHovered ? 'text-white ' : ''}`}
                                onMouseEnter={() => setIsMenHovered(true)}
                                onMouseLeave={() => setIsMenHovered(false)}
                            >
                                MEN

                                <ul className={`absolute pl-6 pr-[250px] text-[12px] top-[44px] whitespace-nowrap   ${isMenHovered ? 'block bg-black' : 'hidden'}`}>
                                    <ul className="py-[15px] font-semibold"><Link to="/menCollections">MENS NEW ARRIVALS</Link></ul>
                                    <li ><Link to="#">READY-TO-WEAR</Link></li>
                                    <li className="pt-[5px]"><Link to="#">TEES</Link></li>
                                    <li className="pt-[5px]"><Link to="#">HOODIES AND SWEATERS</Link></li>
                                    <li className="pt-[5px]"><Link to="#">PANTS</Link></li>
                                    <li className="pt-[5px]"><Link to="#">OUTWEAR</Link></li>
                                    <li className="pt-[15px] pb-10 font-semibold"><Link to="#">ACCESORIES</Link></li>
                                </ul>


                            </li>
                            <li className={`relative pr-[30px] py-[10px] text-[15px]  group  ${isWomenHovered ? 'text-white ' : ''}`}
                                onMouseEnter={() => setIsWomenHovered(true)}
                                onMouseLeave={() => setIsWomenHovered(false)}
                            >
                                WOMEN

                                <ul className={`absolute pl-6 pr-[250px] text-[12px] top-[44px] whitespace-nowrap   ${isWomenHovered ? 'block bg-black' : 'hidden'}`}>
                                    <ul className="py-[15px] font-semibold"><Link to="/">WOMEN NEW ARRIVALS</Link></ul>
                                    <li ><Link to="#">READY-TO-WEAR</Link></li>
                                    <li className="pt-[5px]"><Link to="#">TEES</Link></li>
                                    <li className="pt-[5px]"><Link to="#">HOODIES AND SWEATERS</Link></li>
                                    <li className="pt-[5px]"><Link to="#">PANTS</Link></li>
                                    <li className="pt-[5px]"><Link to="#">OUTWEAR</Link></li>
                                    <li className="pt-[15px] pb-10 font-semibold"><Link to="#">ACCESORIES</Link></li>
                                </ul>


                            </li>
                            <li className={`relative pr-[30px] py-[10px] text-[15px]  group  ${isPrinceHovered ? 'text-white ' : ''}`}
                                onMouseEnter={() => SetIsPrinceHovered(true)}
                                onMouseLeave={() => SetIsPrinceHovered(false)}
                            >
                                PRINCE

                                <ul className={`absolute pl-6 pr-[250px] text-[12px] top-[44px] whitespace-nowrap   ${isPrinceHovered ? 'block bg-black' : 'hidden'}`}>
                                    <ul className="py-[15px] font-semibold"><Link to="/">PRINCE NEW ARRIVALS</Link></ul>
                                    <li ><Link to="#">READY-TO-WEAR</Link></li>
                                    <li className="pt-[5px]"><Link to="#">TEES</Link></li>
                                    <li className="pt-[5px]"><Link to="#">HOODIES AND SWEATERS</Link></li>
                                    <li className="pt-[5px]"><Link to="#">PANTS</Link></li>
                                    <li className="pt-[5px]"><Link to="#">OUTWEAR</Link></li>
                                    <li className="pt-[15px] pb-10 font-semibold"><Link to="#">ACCESORIES</Link></li>
                                </ul>


                            </li>
                            <li className={`relative pr-[30px] py-[10px] text-[15px]  group  ${isPrincesHovered ? 'text-white ' : ''}`}
                                onMouseEnter={() => SetIsPrincesHovered(true)}
                                onMouseLeave={() => SetIsPrincesHovered(false)}
                            >
                                PRINCESS

                                <ul className={`absolute pl-6 pr-[250px] text-[12px] top-[44px] whitespace-nowrap   ${isPrincesHovered ? 'block bg-black' : 'hidden'}`}>
                                    <ul className="py-[15px] font-semibold"><Link to="/">PRINCESS NEW ARRIVALS</Link></ul>
                                    <li ><Link to="#">READY-TO-WEAR</Link></li>
                                    <li className="pt-[5px]"><Link to="#">TEES</Link></li>
                                    <li className="pt-[5px]"><Link to="#">HOODIES AND SWEATERS</Link></li>
                                    <li className="pt-[5px]"><Link to="#">PANTS</Link></li>
                                    <li className="pt-[5px]"><Link to="#">OUTWEAR</Link></li>
                                    <li className="pt-[15px] pb-10 font-semibold"><Link to="#">ACCESORIES</Link></li>
                                </ul>


                            </li>
                           

                            <Link to="/store"> <li className="py-[10px] text-[15px] pr-[30px]">SELES</li></Link>
                            <Link to="/store"> <li className="py-[10px] text-[15px] pr-[30px]">STORE</li></Link>
                            <Link to="/"> <li className="py-[10px] text-[15px] pr-[30px]">ACCESSORIES</li></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden  ">
                <div className={`flex justify-between py-[30px] px-[20px] relative ${isMobileMenuOpen ? "bg-black z-30  " : ""}  `}>
                    <div>
                        <Link to="/"> <img className="h-[15px]  " src="https://i.ibb.co/3sNL27c/logo.png" alt="" /></Link>
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
                                            <Link to='/menCollections'><li>New collections</li></Link>
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
                                <span style={{ fontSize: `${iconSize}px` }} > <FaFacebook className="text-white  " /></span>
                                <span style={{ fontSize: `${iconSize}px` }}  > <FaPinterest className="text-white " /></span>
                                <span style={{ fontSize: `${iconSize}px` }}  > <FaInstagram className="text-white " /></span>
                                <span style={{ fontSize: `${iconSize}px` }} > <IoLogoYoutube className="text-white " /></span>

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </nav>
    );
};

export default Header;
