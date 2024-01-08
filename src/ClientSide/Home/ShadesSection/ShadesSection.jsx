
const ShadesSection = () => {
    const sectionStyle = {
        backgroundImage: 'url("https://i.ibb.co/CmGj3rj/social-share-74-d4088aec-1ac0-4f07-a1b7-0ceb116e0577-720x.jpg")',
        backgroundSize: 'cover', // You can adjust these styles as needed
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
       
    };

    return (
        <div style={sectionStyle} className="md:h-[500px] h-[300px]">
            <div className="flex flex-col text-white justify-center items-center h-full">
                <h2 className= "md:text-[100px] text-[30px] text-center">All shades of black available.</h2> 
                <h4 className="py-10"><button className="bg-black md:py-5 md:px-10 px-4 py-2 text-[12px] md:text-[16px] rounded-[5px] hover:text-[#b1b1b1]">Shop The Collecitons</button></h4>
            </div>
        </div>
    );
};

export default ShadesSection;
