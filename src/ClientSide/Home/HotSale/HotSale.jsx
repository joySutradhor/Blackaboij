import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../NewArivalSection/NewArivalSection.css"
import { Link } from 'react-router-dom';
import { MdEuroSymbol } from "react-icons/md";
// import { FaPlus } from "react-icons/fa";

import { Toaster, toast } from 'sonner'
import Button from '../../Utilites/Button';



const HotSale = () => {
    // men products array
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
              
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [princessProducts]);

    return (
        <div className="md:section-gap pt-[20px] ">
            <Toaster
            />
            <div className='flex flex-col'>
                <h1 className='mb-[10px] md:mb-[20px] text-center font-custom font-bold'>Hot Sale</h1>
                <div>
                    <Tabs>
                        <div className=' mb-[20px] md:mb-[50px] font-custom text-center'>
                            <TabList
                                className="custom-tab-list md:text-[16px] text-[12px] md:gap-6 gap-[10px] "
                            // Remove the default bottom border
                            >
                                <Tab className="custom-tab  ">Men</Tab>
                                <Tab className="custom-tab">Women</Tab>
                                <Tab className="custom-tab">Prince</Tab>
                                <Tab className="custom-tab">Princess</Tab>
                                <Tab className="custom-tab">Accessories </Tab>
                            </TabList>
                        </div>

                        <TabPanel>
                            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[25px] gap-[5px] md:mx-[50px] mx-[20px] ">
                                {men.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7]  product-card font-custom">
                                       <Link to={`product/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                       <Link to={`product/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>HOT</button>
                                         <button onClick={() => toast.success(`${product.productName} is added`)} className="details-button md:px-[20px] px-[8px] md:py-[5px] py-[2px] whitespace-nowrap ">ADD TO CART</button>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                    
                                    </div>
                                ))}
                            </div>
                                <p  className = "md:pt-[50px] flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[50px] gap-[10px] md:mx-[50px] mx-[20px] ">
                                {women.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7]  product-card font-custom">
                                       <Link to={`product/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                       <Link to={`product/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                         <button onClick={() => toast.success(`${product.productName} is added`)} className="details-button md:px-[20px] px-[8px] md:py-[5px] py-[2px] whitespace-nowrap ">ADD TO CART</button>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                    
                                    </div>
                                ))}
                            </div>
                                <p  className = "md:pt-[50px] py-5 flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[50px] gap-[10px] md:mx-[50px] mx-[20px] ">
                                {prince.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7]  product-card font-custom">
                                       <Link to={`product/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                       <Link to={`product/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                         <button onClick={() => toast.success(`${product.productName} is added`)} className="details-button md:px-[20px] px-[8px] md:py-[5px] py-[2px] whitespace-nowrap ">ADD TO CART</button>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                    
                                    </div>
                                ))}
                            </div>
                                <p  className = "md:py-[50px] py-5 flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[50px] gap-[10px] md:mx-[50px] mx-[20px] ">
                                {princess.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7]  product-card font-custom">
                                       <Link to={`product/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                       <Link to={`product/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                         <button onClick={() => toast.success(`${product.productName} is added`)} className="details-button md:px-[20px] px-[8px] md:py-[5px] py-[2px] whitespace-nowrap ">ADD TO CART</button>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                    
                                    </div>
                                ))}
                            </div>
                                <p  className = "md:py-[50px] py-5 flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-[50px] gap-[10px] md:mx-[50px] mx-[20px] ">
                                {accessories.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7]  product-card font-custom">
                                       <Link to={`product/${product.id}`}> <img src={product.img} alt={product.productName} className="front-img" /></Link>
                                       <Link to={`product/${product.id}`}> <img src={product.backImg} alt="" className="back-img " /></Link>
                                        <button className='absolute top-0 right-0  text-white bg-[#000000] md:px-4 md:py-1 md:text-[16px] text-[12px] px-2  py-[2px]  '>New</button>
                                         <button onClick={() => toast.success(`${product.productName} is added`)} className="details-button md:px-[20px] px-[8px] md:py-[5px] py-[2px] whitespace-nowrap ">ADD TO CART</button>
                                        <h3 className="text-center md:py-4 py-1 md:text-[22px] bg-black text-[16px] text-white">{product.productName}</h3>
                                        <p className="md:pb-3 pb-1 text-center md:text-[15px] text-[12px] bg-black text-white"> <span className='flex justify-center items-center'><MdEuroSymbol></MdEuroSymbol> {product.price}</span> </p>
                                    
                                    </div>
                                ))}
                            </div>
                                <p  className = "md:pt-[50px] py-5 flex justify-center md:mx-[50px] mx-[20px]" ><Button buttonText="SHOW ALL"></Button></p>
                        </TabPanel>
                        
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default HotSale;
