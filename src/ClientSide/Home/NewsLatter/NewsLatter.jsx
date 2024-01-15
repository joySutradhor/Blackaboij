import Button from "../../Utilites/Button";


const NewsLatter = () => {
    return (
        <div className="md:mb-[50px] h-[300px] bg-slate-200 flex flex-col justify-center items-center " >
            <h1 className="pt-6">News Latter</h1>
            <p className="text-center pt-2">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex gap-4 py-5">
            <input type="email" placeholder="Email Address" className="border border-[#b1b1b1] p-1 pl-1 bg-transparent focus:outline-none text-gray-600"></input>
                <Button buttonText="SUBSCRIBE" ></Button>
            </div>
        </div>
    );
};

export default NewsLatter;