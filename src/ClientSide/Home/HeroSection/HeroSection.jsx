import { Link } from "react-router-dom";
import Button from "../../Utilites/Button";
import { FaFacebook } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';


const HeroSection = () => {
    const iconSize = 22;
    return (
        <div 
        
       
        style={{
            // backgroundImage: "url('https://i.ibb.co/SP1rhKQ/Banner.png')",
            backgroundImage: "url('https://i.ibb.co/hVdDm87/Desktop-1512x.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
            height : "100vh",
            width: "100wh",
            position: "relative"
            // '@media (max-width: 768px)': {
            //     height: '50vh', // Adjust the height for smaller screens
            // },

        }}>

            <div
                className="flex  md:flex-row md:gap-5 gap-2"
                style={{
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}>
               
                <Link to="/menCollections"> <Button buttonText="SHOP MEN" ></Button></Link>
                <Link to="/menCollections"> <Button buttonText="SHOP WOMEN" ></Button></Link>
            </div>

            <div className='absolute top-[50%] md:right-[50px] right-2' >
                <div className='flex flex-col gap-3 justify-end items-center'>
                    <Link to="https://www.facebook.com/BBOIJ" target="blank">
                        <span style={{ fontSize: `${iconSize}px` }} > <FaFacebook className="text-[#b1b1b1] hover:text-white  " /></span>
                    </Link >
                    <Link>
                        <span style={{ fontSize: `${iconSize}px` }}  > <FaPinterest className="text-[#b1b1b1] hover:text-white " /></span>
                    </Link>
                    <Link to="https://www.instagram.com/blackaboij_/">
                        <span style={{ fontSize: `${iconSize}px` }}  > <FaInstagram className="text-[#b1b1b1] hover:text-white" /></span>
                    </Link>
                    <Link>
                        <span style={{ fontSize: `${iconSize}px` }} > <IoLogoYoutube className="text-[#b1b1b1] hover:text-white" /></span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;