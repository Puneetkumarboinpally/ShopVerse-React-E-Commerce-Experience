import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  //ADD TO CART FUNCTION
  const addToCart = (productId) => {
    // find the existing product from the cart
    const existing = cartItem.find((item) => item.id === productId);

    // if existing product found
    if (existing) {
      // take current quantity from the existing product
      const currentQuantity = existing.quantity;

      // and map it to a new array with only increasing the the quantity while keeping the items same
      const updatedCartQuantity = cartItem.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item,
      );
      setCartItem(updatedCartQuantity);
    } else {
      setCartItem([...cartItem, { id: productId, quantity: 1 }]);
    }
  };

  // REMOVE FROM CART FUNCTION
  const remove = (productId) => {
    const removeFromCart = cartItem.filter((item) => item.id !== productId);
    setCartItem(removeFromCart);
  };
  return (
    <CartContext.Provider value={{ addToCart, cartItem, remove }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
