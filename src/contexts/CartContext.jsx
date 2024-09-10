import { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0)

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    setCount(count => count+1);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      return setCart(updatedCart);
    }
    return setCart([...cart, { ...product, quantity: 1 }]);
  }

  const removeFromCart = (product) => {
    setCount(count => count - product.quantity);
    return setCart(cart.filter((item) => item.id !== product.id));
  }

  const clearCart = () => {
    setCount(0);
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart, count}}>
      {children}
    </CartContext.Provider>
  );
}