import { createContext } from "react";

const CartDataContext = createContext([]);

const CartContext = ({ Children }) => {
  const addToCart = () => {
    console.log("added");
  };
  return (
    <CartDataContext.Provider value={addToCart}>
      {Children}
    </CartDataContext.Provider>
  );
};

export default CartContext;
