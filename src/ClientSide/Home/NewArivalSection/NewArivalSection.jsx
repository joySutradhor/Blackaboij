import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./NewArivalSection.css"
import { Link } from 'react-router-dom';


const NewArivalSection = () => {
    // men products array
    const [men, setMen] = useState([]);
    const [women, setWomen] = useState([]);
    const [accessories, setAccessories] = useState([]);

    const menProducts = "./MenProducts.json";
    const womenProducts = "./womenProducts.json";
    const accessoriesProducts = "./accessories.json";

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

    return (
        <div className="section-gap ">
            <div className='flex flex-col'>
                <h1 className='mb-[20px] text-center'>Just Dropped</h1>
                <div>
                    <Tabs>
                        <div className='mb-[30px] text-center'>
                            <TabList
                                className="custom-tab-list"
                            // Remove the default bottom border
                            >
                                <Tab className="custom-tab">Men</Tab>
                                <Tab className="custom-tab">Women</Tab>
                                <Tab className="custom-tab">Accessories</Tab>
                            </TabList>
                        </div>

                        <TabPanel>
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-[2px]">
                                {men.map((product) => (
                                    <div key={product.id} className="bg-[#B7B7B7] product-card">
                                        <img src={product.img} alt={product.productName} className="front-img" />
                                        <img src={product.backImg} alt="" className="back-img " />
                                        <Link to={`product/${product.id}`}> <button className="details-button">Details</button></Link>
                                        <h3 className="text-center py-4">{product.productName}</h3>
                                        <p className="pb-3 text-center">Euro.{product.price}</p>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-[2px]">
                                {women.map(product => (
                                    <div key={product.id} className='bg-[#B7B7B7]'>
                                        <img src={product.img} alt={product.productName} />
                                        <h3 className='text-center py-4'>{product.productName}</h3>
                                        <p className='pb-3 text-center'>Euro.{product.price}</p>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid md:grid-cols-4 grid-cols-2 gap-[2px]">
                                {accessories.map(product => (
                                    <div key={product.id} className='bg-[#B7B7B7]'>
                                        <img src={product.img} alt={product.productName} />
                                        <h3 className='text-center py-4'>{product.productName}</h3>
                                        <p className='pb-3 text-center'>Euro.{product.price}</p>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default NewArivalSection;
