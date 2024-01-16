import Button from "../../Utilites/Button";


const NewsLatter = () => {
    return (
        <div className=" md:h-[300px]  mb-5 md:mb-[50px] bg-slate-200 flex flex-col justify-center items-center " >
            <h1 className=" text-center font-custom font-bold pt-4 md:pt-0">News Latter</h1>
            <p className="text-center text-[#646464] md:text-[16px] text-[12px] px-5 md:px-0">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex md:flex-row flex-col justify-center items-center  gap-4 md:py-8 py-4">
                <input type="email" placeholder="Email Address" className="border md:text-[15px] text-[12px] border-[#b1b1b1]  pl-2 bg-transparent focus:outline-none text-gray-600 w-[250px] "></input>
                <Button buttonText="SUBSCRIBE" ></Button>
            </div>
        </div>
    );
};

export default NewsLatter;