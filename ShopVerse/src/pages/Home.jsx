import { getProducts } from "../data/products";
import { Link } from "react-router-dom";

const Home = () => {
  const products = getProducts();
  const text = "text-xl text-primary font-semibold";
  const button =
    "py-2 px-3 bg-accent rounded-xl text-text font-semibold cursor-pointer active:scale-95 shadow-lg transition-all duration-300 hover:translate-y-[-2px]";

  return (
    <div className="h-full text-center p-8 mt-8">
      <div>
        <h1 className="text-5xl text-text font-bold p-4 my-8">
          Welcome to Shop
          <span className="text-accent">Verse</span>
        </h1>
        <p className="text-lg text-text-muted font-semibold">
          Discover amazing products at great prices
        </p>
      </div>
      <div className="p-4 lg:p-16">
        <h2 className="text-left mb-8 text-3xl text-text font-bold">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="h-full bg-primary/30 border-2 border-white/40 overflow-hidden shadow-lg 
              flex flex-col justify-between gap-3 rounded-xl p-4 transition-all duration-300 hover:shadow-xl"
            >
              <img
                className="aspect-square w-full object-cover object-center rounded-xl transition-all duration-300 hover:scale-105"
                loading="lazy"
                src={product.image}
                alt={product.name}
              />
              <p className={text}>{product.name}</p>
              <p className={text}>${product.price}</p>
              <div className="flex my-2 text-center gap-2">
                <Link
                  aria-label="View Details"
                  className={`${button} flex-1`}
                  to={"/Products"}
                >
                  View Details
                </Link>
                <button aria-label="add to cart" className={`${button} flex-1`}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
