
import { FaFacebook, FaInstagram, FaPinterest, } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";


const Footer = () => {
    const iconSize = 19;
    return (
        <div className="section-gap md:pb-[10px] bg-black text-[14px] md:text-[16px] font-custom">
            <div className="flex justify-center items-center">
                <img src="https://i.ibb.co/3sNL27c/logo.png" className="md:w-[85px] xl:w-[100px]" alt="" />
            </div>

            <div className="md:flex md:justify-between  grid grid-cols-2 mx-[20px] md:mx-[50px] section-gap">
                <div className="text-white">
                    <h2 className="py-3 ">COLLECTIONS</h2>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Accessories</li>
                        <li>Prince</li>
                        <li>Princess</li>
                        <li>Seles</li>
                    </ul>
                </div>
                <div className="text-white md:mt-0 mt-[20px]">
                    <h2 className="py-3 ">MORE</h2>
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="text-white">
                    <h2 className="py-3 ">INFORMATION</h2>
                    <ul>
                        <li>Return</li>
                        <li>Shiping</li>
                        <li>Tearms and conditons</li>
                        <li>Privacy</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="text-white">
                    <h2 className="py-3 ">NEWSLATTER</h2>
                    <ul>
                        <li className="mb-3">Subscribe to receive updates, access <br></br> to exclusive deals, and more.</li>
                        <input type="email" placeholder="Email Address" className="border border-[#b1b1b1] p-1 pl-1 bg-transparent focus:outline-none text-[#b1b1b1]"></input> <br />
                        <button className="text-white my-5 py-1 px-4 border border-[#b1b1b1] hover:bg-white hover:text-black hover:border-black">Subscribe now</button>
                    </ul>
                </div>

                <div className="text-white">
                    <h2 className="py-3 ">SOCIAL</h2>
                    <p>Stay connected</p>
                    <div className=" flex gap-x-3 pt-2 ">
                        <span style={{ fontSize: `${iconSize}px` }} > <FaFacebook className="text-white  " /></span>
                        <span style={{ fontSize: `${iconSize}px` }}  > <FaPinterest className="text-white " /></span>
                        <span style={{ fontSize: `${iconSize}px` }}  > <FaInstagram className="text-white " /></span>
                        <span style={{ fontSize: `${iconSize}px` }} > <IoLogoYoutube className="text-white " /></span>
                    </div>

                </div>
            </div>
            <p className="text-white text-center text-[14px] md:pt-8 pt-3  pb-1">Copyright © 2024 <Link className="text-green-300" to='https://ethicalden.com/'>Ethical Den.</Link></p>

        </div>
    );
};

export default Footer;