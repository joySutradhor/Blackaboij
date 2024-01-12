import { Link } from "react-router-dom";


const BlackSaleSection = () => {
    const sectionStyle = {
        backgroundImage: 'url("https://i.ibb.co/xCfppyt/01-Blvck-Livingroom-Banner-Format-1-720x.webp")',
        backgroundSize: 'cover', // You can adjust these styles as needed
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',

    };

    return (
        <div style={sectionStyle} className="md:h-[500px] h-[250px]">
            <div className="flex flex-col text-white justify-center items-center h-full">
                <h3 className="text-[12px] md:text-[16px] font-custom">UP TO 60% OFF ON SELECTED ITEMS</h3>
                <h2 className="md:text-[110px] text-[30px] font-custom">Black Friday Sale</h2>
                <h4 className="md:py-10 py-3">
                    <Link to="/allProducts">
                        <p className="w-[200px] flex justify-center items-center text-white h-[50px] text-[12px] md:text-[16px]  hover:text-[#b1b1b1] bg-black font-custom">SHOP NOW</p>
                    </Link>
                </h4>

            </div>
        </div>
    );
};

export default BlackSaleSection;
