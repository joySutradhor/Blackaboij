import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <div style={{
            // backgroundImage: "url('https://i.ibb.co/SP1rhKQ/Banner.png')",
            backgroundImage: "url('https://i.ibb.co/hVdDm87/Desktop-1512x.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
            height: '100vh',
            width :"100wh"
            // '@media (max-width: 768px)': {
            //     height: '50vh', // Adjust the height for smaller screens
            // },


        }}>

            <div 
                className="flex flex-col md:flex-row gap-5"
            style={{
                position: 'absolute',
                top: '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
            }}>
                {/* <h1 className="md:text-[60px] text-[25px] text-[#b1b1b1]">ALL BLACK  IS HERE</h1> */}
               <p className="w-[200px] flex justify-center items-center h-[50px] text-white z-10 hover:text-[#b1b1b1] bg-black"><Link to="/menCollections">  SHOP MEN</Link></p>
               <p className="w-[200px] flex justify-center items-center h-[50px] text-white z-10 hover:text-[#b1b1b1] bg-black"><Link to="/">  SHOP WOMEN</Link></p>
            </div>

        </div>
    );
};

export default HeroSection;