import { useEffect, useState } from "react";
import { MdEuroSymbol } from "react-icons/md";
import { Link } from "react-router-dom";

// Reusable Star component
// eslint-disable-next-line react/prop-types
const Star = ({ rating }) => {
    const numberOfFullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = Array.from({ length: numberOfFullStars }, (_, index) => (
        <span key={index} className="text-black md:text-2xl  inline-block -ml-[2px]">
            &#9733; {/* Unicode for a solid star */}
        </span>
    ));

    if (hasHalfStar) {
        stars.push(
            <span key="half" className="text-black md:text-2xl text- inline-block -ml-[2px]">
                &#9734; {/* Unicode for an empty star */}
            </span>
        );
    }

    return <div>{stars}</div>;
};

const WomenPants = () => {
    const [womenPantsCollections, setWomenPantsCollections] = useState([]);

    const womenPantsCollectionsProducts = "/Womens/womenPants.json";

    useEffect(() => {
        // Fetch the JSON data
        fetch(womenPantsCollectionsProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setWomenPantsCollections(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [womenPantsCollectionsProducts]);

    return (
        <div>
            <div>
                <img className="md:h-[450px] h-[150px] w-full object-cover" src="https://i.ibb.co/CnLjN4P/img-ph-collection-hero-1512x.webp" alt="" />
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-[2px]">
                {womenPantsCollections.map((product) => (
                    <div key={product.id} className="bg-[#B7B7B7] product-card">
                        <img src={product.img} alt={product.productName} className="front-img" />
                        <img src={product.backImg} alt="" className="back-img " />
                        <Link to={`product/${product.id}`}>
                            <button className="details-button">Details</button>
                        </Link>
                        <h3 className="text-center md:py-4 py-2">{product.productName}</h3>
                        <div className="text-center md:pb-4 pb-2 flex justify-center items-center">
                            <span className="md:mr-2 mr-1">
                                <Star rating={product.starRating} />
                            </span>
                            <span>
                                 {product.starRating} Reviews
                            </span>
                        </div>
                        <p className="md:pb-3 pb-2 text-center">
                            <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WomenPants;
