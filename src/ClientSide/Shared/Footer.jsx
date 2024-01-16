
import { FaFacebook, FaInstagram, FaPinterest, } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";


const Footer = () => {
    const iconSize = 19;
    return (
        <div className="section-gap md:pb-[10px] bg-black text-[14px] md:text-[16px] font-custom">
            <div className="flex justify-center items-center">
                <img src="https://i.ibb.co/3sNL27c/logo.png" className="w-[85px] md:w-[85px] xl:w-[100px]" alt="" />
            </div>

            <div className="md:flex md:justify-between  grid grid-cols-2 mx-[20px] md:mx-[50px] section-gap">
                <div >
                    <h2 className="py-3 text-white">COLLECTIONS</h2>
                    <ul className="text-[12px] text-[#646464] hover:text-white">
                        <li>Men</li>
                        <li>Women</li>
                        <li>Accessories</li>
                        <li>Prince</li>
                        <li>Princess</li>
                        <li>Seles</li>
                    </ul>
                </div>
                <div className=" md:mt-0 ">
                    <h2 className=" py-3 text-white">MORE</h2>
                    <ul className="text-[12px] text-[#646464] hover:text-white">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>About</li>
                    </ul>
                </div>
                <div >
                    <h2 className="py-3 text-white ">INFORMATION</h2>
                    <ul className="text-[12px] text-[#646464] hover:text-white">
                        <li>Return</li>
                        <li>Shiping</li>
                        <li>Tearms and conditons</li>
                        <li>Privacy</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div >
                    <h2 className="py-3 text-white ">NEWSLATTER</h2>
                    <ul className="text-[12px] text-[#646464] hover:text-white">
                        <li className="mb-3">Subscribe to receive updates, access <br></br> to exclusive deals, and more.</li>
                        <input type="email" placeholder="Email Address" className="border border-[#383838] p-1 pl-1 bg-transparent focus:outline-none text-[#646464]"></input> <br />
                        <button className="text-white my-3 py-1 px-4 border border-[#383838] hover:bg-white hover:text-black hover:border-black">Subscribe now</button>
                    </ul>
                </div>

                <div >
                    <h2 className="py-3 text-white ">SOCIAL</h2>
                    <p className="text-[12px] text-white hover:text-white">Stay connected</p>
                    <div className=" flex gap-x-3 pt-2 ">
                        <span style={{ fontSize: `${iconSize}px` }} > <FaFacebook className="text-white  " /></span>
                        <span style={{ fontSize: `${iconSize}px` }}  > <FaPinterest className="text-white " /></span>
                        <span style={{ fontSize: `${iconSize}px` }}  > <FaInstagram className="text-white " /></span>
                        <span style={{ fontSize: `${iconSize}px` }} > <IoLogoYoutube className="text-white " /></span>
                    </div>

                </div>


            </div>
            <p className="text-white text-center text-[14px] md:pt-8 pt-4  pb-2">Copyright © 2024 <Link className="text-slate-300" to='https://ethicalden.com/'>Ethical Den.</Link></p>

        </div>
    );
};

export default Footer;