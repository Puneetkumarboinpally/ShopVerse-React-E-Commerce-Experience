import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  //
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
  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
