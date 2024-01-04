import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomizedAccordions from './CustomizedAccordions';



const SingleProduct = () => {


    return (
        <div>
            <img className="mt-[-120px] h-[150px] w-full" src="https://i.ibb.co/hy7jH3N/black.png" alt="" />
            <div className='flex gap-[50px] bg-black text-white'>
                <div>
                    <Carousel
                        width={600}  // Set the width
                        height={300} // Set the height
                    >
                        <div>
                            <img src="https://i.ibb.co/pxHWz7H/BLVCK01711-048471e1-7f2f-4f54-b689-14daa8ab593d-360x.webp" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/pxHWz7H/BLVCK01711-048471e1-7f2f-4f54-b689-14daa8ab593d-360x.webp" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/pxHWz7H/BLVCK01711-048471e1-7f2f-4f54-b689-14daa8ab593d-360x.webp" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
                <div>
                    <p>Home/Product/Tshirts</p>
                    <h2 className='my-[25px]'>SPORT T-SHIRT</h2>
                    <h2> EUR.1250.00</h2>
                    <p className='mt-[25px] mr-[40px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem officiis tempore iusto hic rem perferendis sequi recusandae blanditiis totam delectus quam, vitae placeat possimus libero aliquid deleniti alias nemo commodi repellendus dicta incidunt quo repudiandae unde? Qui, numquam consectetur.</p>
                    <div className=''>
                        <div className='flex my-[25px] space-x-3'>
                            <p className='py-[6px]'>Size :</p>
                            <button className='btn'>XS</button>
                            <button className='btn'>S</button>
                            <button className='btn'>M</button>
                            <button className='btn'>L</button>
                            <button className='btn'>Xl</button>
                            <button className='btn'>2Xl</button>
                        </div>
                        <div className='space-y-3 mb-[25px]'>
                            <p>SKU: 111763</p>
                            <p>Category: Men T-shirt</p>
                            <p>Tags: Sport, T-shirt, Blue</p>
                        </div>
                        <div className='mr-[40px] ml-0 '>
                            <CustomizedAccordions></CustomizedAccordions>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
