import React from "react";
import products from "../data/products";

const Home = () => {
  const text = "text-xl text-primary font-semibold";
  const button =
    "py-1 px-3 bg-accent rounded-2xl text-text font-semibold cursor-pointer active:scale-95 shadow-lg transition-all duration-300 hover:translate-y-[-2px]";

  return (
    <div className="h-full text-center p-8">
      <div>
        <h1 className="text-5xl text-text font-bold p-4 my-8">
          Welcome to ShopVerse
        </h1>
        <p className="text-lg text-text-muted font-semibold">
          Discover amazing products at great prices
        </p>
      </div>
      <div className="sm:p-4 lg:p-16">
        <h2 className="text-left mb-8 text-3xl text-text font-bold">
          Our Products
        </h2>
        <div className="flex grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div className="bg-primary/30 border-2 border-white/40 shadow-lg flex flex-col justify-between gap-3 rounded-xl p-4">
              <img
                className="h-60 object-cover rounded-xl loading-lazy transition-all duration-300 hover:scale-105"
                src={product.image}
                alt={product.name}
              />
              <h3 className={text}>{product.name}</h3>
              <h3 className={text}>${product.price}</h3>
              <div className="flex text-center gap-2">
                <button className={button}>View Details</button>
                <button className={button}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
