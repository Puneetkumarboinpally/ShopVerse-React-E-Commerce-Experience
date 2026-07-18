import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById } from "../data/products.js";

const ProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const foundProducts = getProductsById(id);
    if (!foundProducts) {
      navigate("/");
      return;
    }
    setProducts(foundProducts);
  }, [id]);
  return (
    <div className="min-h-screen flex items-center justify-center mt-6 p-6">
      <div className="w-full max-w-3xl p-6 bg-surface shadow-2xl rounded-2xl">
        <div className="flex sm:gap-6">
          <div className="w-1/2">
            <img
              className="w-full overflow-hidden max-w-xs rounded object-contain aspect-square object-center"
              src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop"
              alt=""
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-text text-3xl font-bold">Controller</h2>
            <p className="text-accent font-bold text-xl mt-4">$242.99</p>
            <p className="text-text text-lg my-6 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              impedit?
            </p>
            <button
              className="py-2 px-4 bg-accent rounded text-text 
            font-bold text-md cursor-pointer active:scale-95
            transition-all duration-300 hover:translate-y-[-2px]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
