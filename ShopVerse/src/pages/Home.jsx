import React from "react";
import products from "../data/products";

const Home = () => {
  return (
    <div className="h-[90vh] text-center p-8">
      <div>
        <h1 className="text-5xl text-text font-bold p-4 mb-2">
          Welcome to ShopVerse
        </h1>
        <p className="text-lg text-text-muted font-semibold mb-8">
          Discover amazing products at great prices
        </p>
      </div>
      <div className="p-4 flex flex-col ">
        <h2 className="text-left mb-4 text-xl text-text font-bold">
          Our Products
        </h2>
        <div className="flex grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div className="bg-surface">
              <img className=""
              src={product.image} alt={product.name}
               />
              <h3>{product.name}</h3>
              <h3>${product.price}</h3>
              <div>
                <button>View Details</button>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
