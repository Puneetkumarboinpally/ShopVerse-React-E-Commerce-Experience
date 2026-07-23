import { createContext, useContext, useState } from "react";
import { getProductsById } from "../data/products.js";

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

  //  GET CART ITEMS WITH PRODUCTS
  const getCartItemsWithProducts = () => {
    return cartItem
      .map((item) => ({
        ...item,
        product: getProductsById(item.id),
      }))
      .filter((item) => item.product);
  };

  // REMOVE FROM CART FUNCTION
  const remove = (productId) => {
    const removeFromCart = cartItem.filter((item) => item.id !== productId);
    setCartItem(removeFromCart);
  };

  // SUBTOTAL FUNCTION
  const calculateTotal = () => {
    const validItems = cartItem
      .map((item) => ({
        ...item,
        product: getProductsById(item.id),
      }))
      .filter((item) => item.product);

    const subTotal = validItems.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0,
    );

    const shipping = subTotal === 0 || subTotal > 500 ? 0 : 50;
    const tax = subTotal * 0.18;
    const delivery = subTotal === 0 || subTotal > 200 ? 0 : 20;

    const total = subTotal + shipping + tax + delivery;

    return { subTotal, shipping, tax, delivery, total };
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItem,
        remove,
        getCartItemsWithProducts,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
