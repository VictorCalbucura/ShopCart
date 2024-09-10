import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cart, clearCart, addToCart, removeFromCart, count } = useContext(CartContext);

  return (
    <>
      <label className='cart-button' htmlFor='cart'> 🛒 {count} </label>
      <input id='cart' type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.description} />

              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>

              <footer>
                <button onClick={() => removeFromCart(product)}>X</button>
                <small>Quantity: {product.quantity}</small>
                <button onClick={() => addToCart(product)}>+</button>
              </footer>
            </li>
          ))}
        </ul>

        <button onClick={clearCart}>Clear cart</button>
      </aside>
    </>
  );
}