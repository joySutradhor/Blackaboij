import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomizedAccordions from './CustomizedAccordions';
import { MdEuroSymbol } from 'react-icons/md';
import { Toaster, toast } from 'sonner';

const SingleProduct = () => {
    return (
        <div className=' font-custom'>
            <Toaster
            />
            {/* <div className=''>
                <img className="md:mt-[-110px]  md:h-[150px] h-[70px] w-full" src="https://i.ibb.co/hy7jH3N/black.png" alt="" />
            </div> */}
            <div className='grid md:grid-cols-2  md:mx-[50px] md:gap-[50px] md:mt-[50px]  relative z-10  '>
                <div>
                    <Carousel
                        style={{ width: '100%', maxWidth: '500px' }}
                        dynamicHeight={false}
                    >
                        <div>
                            <img src="https://i.ibb.co/pxHWz7H/BLVCK01711-048471e1-7f2f-4f54-b689-14daa8ab593d-360x.webp" />
                           
                        </div>
                        <div>
                            <img src="https://i.ibb.co/pxHWz7H/BLVCK01711-048471e1-7f2f-4f54-b689-14daa8ab593d-360x.webp" />
                            
                        </div>
                        <div>
                            <img src="https://i.ibb.co/pxHWz7H/BLVCK01711-048471e1-7f2f-4f54-b689-14daa8ab593d-360x.webp" />
                           
                        </div>
                    </Carousel>
                </div>
                <div className='px-[20px] md:px-[0px]'>
                    <p className='text-[14px] text-[#212121]'>Home . Blvck Winter Beanie</p>
                    <h2 className='md:my-[20px] md:text-[39px] my-[10px] text-[20px] text-[#212121] '>Black Winter Beanie</h2>
                    <h2><span className='flex  items-center md:text-[23px] text-[16px]'><MdEuroSymbol></MdEuroSymbol> 7400.00</span></h2>
                    <div className='grid grid-cols-2 items-center md:my-[30px] my-[15px] md:gap-2 gap-1'>
                        <button className='bg-black text-white md:py-[14px] md:px-[20px] py-[7px] px-[10px] text-[14px]'  onClick={() => toast.success(`Product is added`)}>ADD TO CART</button>
                        <button className='bg-[#B7B7B7] hover:bg-black hover:text-white text-black md:py-[14px] md:px-[20px] py-[7px] px-[10px] text-[14px]'>PAYPAL</button>
                    </div>

                    <div className=' ml-0 '>
                        <CustomizedAccordions></CustomizedAccordions>
                    </div>
                    <p className='py-4'><button  className='px-[20px] py-2 text-white hover:text-[#686565] hover:border-[#b7b7b7] border bg-black'>Write Review</button></p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
