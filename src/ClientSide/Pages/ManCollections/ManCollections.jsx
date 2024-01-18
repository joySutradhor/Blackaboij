import { useEffect, useState } from "react";
import { MdEuroSymbol } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../Utilites/Button";
import { Zoom } from "react-awesome-reveal";

// Reusable Star component
// eslint-disable-next-line react/prop-types
const Star = ({ rating }) => {
    const numberOfFullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = Array.from({ length: numberOfFullStars }, (_, index) => (
        <span key={index} className="text-white md:text-2xl  inline-block -ml-[2px]">
            &#9733; {/* Unicode for a solid star */}
        </span>
    ));

    if (hasHalfStar) {
        stars.push(
            <span key="half" className="text-white md:text-2xl text- inline-block -ml-[2px]">
                &#9734; {/* Unicode for an empty star */}
            </span>
        );
    }

    return <div>{stars}</div>;
};

const ManCollections = () => {
    const [menCollections, setMenCollections] = useState([]);

    const menCollectionsProducts = "/MenCollections.json";

    useEffect(() => {
        // Fetch the JSON data
        fetch(menCollectionsProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setMenCollections(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [menCollectionsProducts]);

    return (
        <div>
            <div className="relative md:h-[450px] h-[250px] flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://i.ibb.co/CnLjN4P/img-ph-collection-hero-1512x.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'cover',
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#00000",
                    position: "relative"
                }}
            >
                <Zoom><h2 className="md:md:text-6xl text-[20px] text-2xl text-white font-custom font-bold whitespace-nowrap"
                >
                    MEN NEW COLLECTIONS
                </h2></Zoom>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-[10px] md:gap-[25px] md:mt-[25px]">
                {menCollections.map((product) => (


                    <div key={product.id} className="bg-[#B7B7B7]  product-card font-custom">
                        <Link to={`product/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                        <Link to={`product/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>NEW</button>
                        <button className="details-button md:px-[20px] px-[8px] md:py-[5px] py-[2px] whitespace-nowrap ">ADD TO CART</button>
                        <h3 className="text-center md:py-3 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                        <div className="text-center bg-[#000000] text-white md:pb-2 pb-2 flex justify-center items-center">
                            <span className="md:mr-2 mr-1">
                                <Star rating={product.starRating} />
                            </span>
                            <span>
                                {product.starRating} Reviews
                            </span>
                        </div>
                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>

                    </div>
                ))}
            </div>
            <p className="md:py-[50px] py-[25px] flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
        </div>
    );
};

export default ManCollections;
