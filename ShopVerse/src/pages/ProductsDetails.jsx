import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";

const ProductsDetails = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = getProductsById(id);
    if (!foundProduct) {
      Navigate("/", { replace: true });
      return;
    }

    setProduct(foundProduct);
  }, [id, Navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-text">Loading...</h2>
      </div>
    );
  }
  const { addToCart, cartItem } = useCart();
  const CartQuantity = cartItem.find((item) => item.id === product.id);
  const updatedCartQuantity = CartQuantity ? `(${CartQuantity.quantity}) ` : "";

  return (
    <div className="min-h-screen flex items-center justify-center mt-6 p-6">
      <div className="w-full max-w-3xl p-6 bg-surface shadow-2xl rounded-2xl">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/2">
            <img
              className="w-full rounded-lg object-contain aspect-square"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="w-full sm:w-1/2">
            <h2 className="text-text text-3xl font-bold">{product.name}</h2>
            <p className="text-accent font-bold text-xl mt-4">
              ${product.price}
            </p>
            <p className="text-text text-lg my-6 leading-7">
              {product.description}
            </p>
            <button
              onClick={() => addToCart(product.id)}
              className="py-2 px-4 bg-accent rounded text-text 
            font-bold text-md cursor-pointer active:scale-95
            transition-all duration-300 hover:translate-y-[-2px]"
            >
              Add to Cart {updatedCartQuantity}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
