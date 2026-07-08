import React from "react";
import products from "../data/products";

const Home = () => {
  return (
    <div className="h-full text-center p-8">
      <div>
        <h1 className="text-5xl text-text font-bold p-4 mb-2">
          Welcome to ShopVerse
        </h1>
        <p className="text-lg text-text-muted font-semibold">
          Discover amazing products at great prices
        </p>
      </div>
      <div className="p-16">
        <h2 className="text-left mb-8 text-xl text-text font-bold">
          Our Products
        </h2>
        <div className="flex grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div className="bg-surface flex flex-col justify-between gap-3 rounded-xl p-2">
              <img
                className="h-60 object-cover rounded-xl loading-lazy transition-all duration-300 hover:scale-105"
                src={product.image}
                alt={product.name}
              />
              <h3 className="text-xl text-primary font-semibold ">{product.name}</h3>
              <h3 className="text-xl text-primary font-semibold ">${product.price}</h3>
              <div className="">
                <button className="">View Details</button>
                <button >Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
