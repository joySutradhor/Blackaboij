/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaMinus } from 'react-icons/fa6';
import { useCart } from './CartContext';
import { FiPlus } from 'react-icons/fi';
import { Fade } from 'react-awesome-reveal';

const CartItems = ({ cart, closeCart }) => {
    const { removeFromCart } = useCart();
    const [quantities, setQuantities] = useState(
        cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
    );
    const [removedItems, setRemovedItems] = useState([]);

    const increaseQuantity = (productId) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: prevQuantities[productId] + 1,
        }));
    };

    const decreaseQuantity = (productId) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: Math.max(prevQuantities[productId] - 1, 1),
        }));
    };

    const handleRemoveFromCart = (productId) => {
        setRemovedItems((prevRemovedItems) => [...prevRemovedItems, productId]);
        setTimeout(() => {
            removeFromCart(productId);
        }, 300); // Adjust the duration of the fade-out animation
    };

    return (
        <div className="absolute top-[75px] z-50 font-custom right-0 bg-black text-white px-5 pb-5  pt-[6px] h-screen w-[28%] overflow-auto ">
            <div className="flex justify-between">
                <h2 className="text-lg font-semibold mb-2">YOUR CART ({cart.length})</h2>
                <button onClick={closeCart} className="text-lg font-semibold mb-2">
                    <AiOutlineClose />
                </button>
            </div>
            {cart?.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="scroll-auto">
                    {cart?.map((item) => (
                        <Fade key={item.id} direction="left" cascade triggerOnce={!removedItems.includes(item.id)}>
                            <div className="flex justify-between border-b-[1px] border-[#383838] py-5">
                                <div className="flex gap-[20px]">
                                    <div>
                                        <img className="h-[80px] w-[80px]" src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <p>{item.productName}</p>
                                        <p className="text-[15px] text-[#b7b7b7] hover:text-white">${item.price}</p>
                                        <div className="flex items-center border text-[15px] space-x-3 px-[8px] mt-2 border-[#383838]">
                                            <button onClick={() => decreaseQuantity(item.id)}>
                                                <FaMinus />
                                            </button>
                                            <span>{quantities[item.id]}</span>
                                            <button onClick={() => increaseQuantity(item.id)}>
                                                <FiPlus />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={() => handleRemoveFromCart(item.id)}
                                        className="text-lg font-semibold hover:text-red-500"
                                    >
                                        <FaMinus />
                                    </button>
                                </div>
                            </div>
                        </Fade>
                    ))}

                    <div className="pb-20">
                        <div className="py-5">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">SUB TOTAL </h2>
                                <p className="text-3xl">
                                    $ {cart.reduce((total, item) => total + quantities[item.id] * item.price, 0).toFixed(2)}
                                </p>
                            </div>
                            <p className="text-[12px] py-1 text-[#b7b7b7]">Shipping, taxes, and discount codes are calculated at checkout</p>
                        </div>
                        <div className="flex justify-center items-center bg-slate-200 text-black py-2 px-6">
                            <button> CHECK OUT</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartItems;
