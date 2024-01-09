import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import { MdEuroSymbol } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

import { Toaster, toast } from 'sonner'


const AllProducts = () => {

    const [men, setMen] = useState([]);
    const [women, setWomen] = useState([]);
    const [accessories, setAccessories] = useState([]);
    const [prince, setPrince] = useState([]);
    const [princess, setPrincess] = useState([]);

    const menProducts = "./MenProducts.json";
    const womenProducts = "./womenProducts.json";
    const accessoriesProducts = "./accessories.json";
    const princeProducts = "./prince.json";
    const princessProducts = "./princess.json";

    useEffect(() => {
        // Fetch the JSON data
        fetch(menProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setMen(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [menProducts]);
    useEffect(() => {
        // Fetch the JSON data
        fetch(womenProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setWomen(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [womenProducts]);
    useEffect(() => {
        // Fetch the JSON data
        fetch(accessoriesProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setAccessories(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [accessoriesProducts]);
    useEffect(() => {
        // Fetch the JSON data
        fetch(princeProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setPrince(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [princeProducts]);
    useEffect(() => {
        // Fetch the JSON data
        fetch(princessProducts)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setPrincess(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [princessProducts]);
    return (
        <div>
            <div>
                <img className="mt-[-119px] md:h-[450px] h-[150px] w-full object-cover" src="https://i.ibb.co/CnLjN4P/img-ph-collection-hero-1512x.webp" alt="" />
            </div>
            <div className="md:section-gap pt-[20px] ">
                <Toaster
                />
                <div className='flex flex-col'>
                <h1 className='mb-[10px] md:mb-[20px] text-center'>Just Dropped</h1>
                <div>
                    <Tabs>
                        <div className=' mb-[20px] md:mb-[50px] text-center'>
                            <TabList
                                className="custom-tab-list"
                            // Remove the default bottom border
                            >
                                <Tab className="custom-tab ">Men</Tab>
                                <Tab className="custom-tab">Women</Tab>
                                <Tab className="custom-tab">Prince</Tab>
                                <Tab className="custom-tab">Princess</Tab>
                                <Tab className="custom-tab">Accessories </Tab>
                            </TabList>
                        </div>

                        <TabPanel>
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-[2px] ">
                                {men.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7] product-card">
                                        <img src={product.img} alt={product.productName} className="front-img" />
                                        <img src={product.backImg} alt="" className="back-img " />
                                        <button className='absolute top-1 left-1  text-white bg-[#5A5A5A] md:px-4 md:py-1 md:text-[16px] px-2 py-1 text-[8px] '>New</button>
                                        <button className='absolute md:top-3 top-2 right-3  text-white ' onClick={() => toast.success(`${product.productName} is added`)}><FaPlus></FaPlus></button>
                                        <Link to={`product/${product.id}`}> <button className="details-button">Details</button></Link>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] text-[18px]">{product.productName}</h3>
                                        <p className="pb-3 text-center text-[15px]"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-[2px]">
                            {women.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7] product-card">
                                        <img src={product.img} alt={product.productName} className="front-img" />
                                        <img src={product.backImg} alt="" className="back-img " />
                                        <button className='absolute top-1 left-1  text-white bg-[#5A5A5A] md:px-4 md:py-1 md:text-[16px] px-2 py-1 text-[8px] '>New</button>
                                        <button className='absolute md:top-3 top-2 right-3  text-white ' onClick={() => toast.success(`${product.productName} is added`)}><FaPlus></FaPlus></button>
                                        <Link to={`product/${product.id}`}> <button className="details-button">Details</button></Link>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] text-[18px]">{product.productName}</h3>
                                        <p className="pb-3 text-center text-[15px]"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-[2px]">
                            {prince.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7] product-card">
                                        <img src={product.img} alt={product.productName} className="front-img" />
                                        <img src={product.backImg} alt="" className="back-img " />
                                        <button className='absolute top-1 left-1  text-white bg-[#5A5A5A] md:px-4 md:py-1 md:text-[16px] px-2 py-1 text-[8px] '>New</button>
                                        <button className='absolute md:top-3 top-2 right-3  text-white ' onClick={() => toast.success(`${product.productName} is added`)}><FaPlus></FaPlus></button>
                                        <Link to={`product/${product.id}`}> <button className="details-button">Details</button></Link>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] text-[18px]">{product.productName}</h3>
                                        <p className="pb-3 text-center text-[15px]"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-[2px]">
                            {princess.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7] product-card">
                                        <img src={product.img} alt={product.productName} className="front-img" />
                                        <img src={product.backImg} alt="" className="back-img " />
                                        <button className='absolute top-1 left-1  text-white bg-[#5A5A5A] md:px-4 md:py-1 md:text-[16px] px-2 py-1 text-[8px] '>New</button>
                                        <button className='absolute md:top-3 top-2 right-3  text-white ' onClick={() => toast.success(`${product.productName} is added`)}><FaPlus></FaPlus></button>
                                        <Link to={`product/${product.id}`}> <button className="details-button">Details</button></Link>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] text-[18px]">{product.productName}</h3>
                                        <p className="pb-3 text-center text-[15px]"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-[2px]">
                            {accessories.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7] product-card">
                                        <img src={product.img} alt={product.productName} className="front-img" />
                                        <img src={product.backImg} alt="" className="back-img " />
                                        <button className='absolute top-1 left-1  text-white bg-[#5A5A5A] md:px-4 md:py-1 md:text-[16px] px-2 py-1 text-[8px] '>New</button>
                                        <button className='absolute md:top-3 top-2 right-3  text-white ' onClick={() => toast.success(`${product.productName} is added`)}><FaPlus></FaPlus></button>
                                        <Link to={`product/${product.id}`}> <button className="details-button">Details</button></Link>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] text-[18px]">{product.productName}</h3>
                                        <p className="pb-3 text-center text-[15px]"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AllProducts;