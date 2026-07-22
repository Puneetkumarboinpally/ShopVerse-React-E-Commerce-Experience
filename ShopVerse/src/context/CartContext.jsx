import { createContext } from "react";

const CartContext = createContext(null);

const CartProvider = ({ Children }) => {
  const addToCart = () => {
    console.log("added");
  };
  return (
    <CartContext.Provider value={addToCart}>{Children}</CartContext.Provider>
  );
};

export default CartProvider;
