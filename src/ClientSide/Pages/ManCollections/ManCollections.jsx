import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ManCollections = () => {
    const [menCollections , setMenCollections] = useState([]) ;

    const menCollectionsProducts = "/MenCollections.json" ;

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
            <div>
                <img className="mt-[-119px] h-[450px] w-full object-cover" src="https://i.ibb.co/CnLjN4P/img-ph-collection-hero-1512x.webp" alt="" />

            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-[2px]">
                                {menCollections.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7] product-card">
                                        <img src={product.img} alt={product.productName} className="front-img" />
                                        <img src={product.backImg} alt="" className="back-img " />
                                        <Link to={`product/${product.id}`}> <button className="details-button">Details</button></Link>
                                        <h3 className="text-center py-4">{product.productName}</h3>
                                        <p className="pb-3 text-center">Euro.{product.price}</p>
                                    </div>
                                ))}
                            </div>
        </div>
    );
};

export default ManCollections;