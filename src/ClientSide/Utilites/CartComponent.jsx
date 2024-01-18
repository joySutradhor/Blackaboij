import { useCart } from "./CartContext";



const CartComponent = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.productName} - {item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => clearCart()}>Clear Cart</button>
    </div>
  );
};

export default CartComponent;
