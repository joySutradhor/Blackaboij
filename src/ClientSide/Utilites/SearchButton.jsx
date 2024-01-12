{/* <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"> */}

import "./search.css"
import { IoIosSearch } from "react-icons/io";

const SearchButton = () => {
    return (
        <div className="box">
        <div className="container-2">
            <span className="icon "><IoIosSearch></IoIosSearch></span>
            <input type="search" id="search" placeholder="Search..." autoComplete="off" />
        </div>
      </div>
    );
};

export default SearchButton;