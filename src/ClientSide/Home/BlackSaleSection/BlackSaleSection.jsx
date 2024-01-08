

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
                <h3 className="text-[12px] md:text-[16px]">UP TO 60% OFF ON SELECTED ITEMS</h3>
                <h2 className= "md:text-[110px] text-[30px]">Black Friday Sale</h2> 
                <h4 className="py-10"><button className="bg-black md:py-5 md:px-10 px-4 py-2 text-[12px] md:text-[16px] rounded-[5px] hover:text-[#b1b1b1]">Shop Now</button></h4>
                
            </div>
        </div>
    );
};

export default BlackSaleSection;
