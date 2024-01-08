import { AiOutlineYoutube } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="section-gap md:pb-[50px] bg-black">
            <div className="flex justify-center items-center">
                <img src="https://i.ibb.co/3sNL27c/logo.png" className="w-[85px] " alt="" />
            </div>

            <div className="md:flex md:justify-around  grid grid-cols-2 mx-[10px] md:mx-0 section-gap">
                <div className="text-white">
                    <h2>Collections</h2>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Accessories</li>
                        <li>Digital</li>
                        <li>White</li>
                        <li>Stores</li>
                        <li>Seles</li>
                    </ul>
                </div>
                <div className="text-white">
                    <h2>Information</h2>
                    <ul>
                        <li>Return</li>
                        <li>Shiping</li>
                        <li>Tearms and conditons</li>
                        <li>Privacy</li>
                        <li>FAQ</li>
                        <li>Stores</li>
                    </ul>
                </div>
                <div className="text-white md:mt-0 mt-[20px]">
                    <h2>More</h2>
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>About</li>
                        <li>Affliate Program</li>
                    </ul>
                </div>
                <div className="text-white">
                    <h2 className="pb-3">SOCIAL</h2>
                    <p>Stay connected</p>
                    <div className=" flex gap-x-3 pt-2 ">
                        <span> <CiFacebook className="text-white h-[18px] w-[18px]" /></span>
                        <span> <FaPinterestP className="text-white h-[18px] w-[18px]" /></span>
                        <span> <AiOutlineYoutube className="text-white h-[18px] w-[18px]" /></span>
                        <span> <FaInstagram className="text-white h-[18px] w-[18px]" /></span>
                    </div>

                </div>
            </div>
            <p className="text-white text-center text-[12px]">Copyright © 2024 <Link className="text-green-300" to='https://ethicalden.com/'>Ethical Den.</Link></p>

        </div>
    );
};

export default Footer;