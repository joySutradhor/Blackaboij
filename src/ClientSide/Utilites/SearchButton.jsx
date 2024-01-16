{/* <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"> */ }

// import "./search.css"
import { IoIosSearch } from "react-icons/io";

const SearchButton = () => {
    return (
        <div className="relative ">

            <input type="search" id="search" placeholder="Search Here" autoComplete="off" className="w-[250px] py-1 rounded-sm p-4 bg-transparent border border-[#383838] text-white focus:outline-none " />
            <button className="absolute  top-[10px] text-white ml-[-25px] "><IoIosSearch></IoIosSearch></button>
        </div>
    );
};

export default SearchButton;