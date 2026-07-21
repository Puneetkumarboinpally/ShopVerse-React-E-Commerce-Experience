import { getProducts } from "../data/products";
const Cart = () => {
  return (
    <div className=" mt-16 min-h-screen">
      <h1 className="text-3xl font-bold text-text p-4">Checkout</h1>
      {/* Main Container */}

      <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* products section */}

        <div className="w-full p-2 flex flex-col gap-2">
          {/* products cart left section */}
          <div className="bg-surface p-6 shadow-xl rounded-lg grid grid-cols-1 sm:grid-cols-[100px_1fr_auto] gap-4 items-center">
            {/*product cart image section */}

            <img
              className="w-24 h-24 object-contain rounded mx-auto sm:mx-0"
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
            />

            {/* product cart details */}
            <div>
              <h2 className="text-text text-xl font-bold">
                wireless Head Phones
              </h2>
              <p className="text-text text-xl">$99.99 each</p>
            </div>

            {/* products cart buttons section */}

            <div className="flex flex-col items-center sm:items-center gap-3">
              {/* buttons section */}
              <div className="flex items-center gap-3">
                <button className="px-3 py-1 border rounded font-bold">
                  -
                </button>
                <span className="text-2xl">10</span>
                <button className="px-3 py-1 border rounded font-bold">
                  +
                </button>
              </div>
              {/* total price */}
              <p className="text-xl font-bold">$99.99</p>
              <button
                className="py-2 px-4 border rounded-lg cursor-pointer font-bold
              active:scale-95 transition-all duration-300 hover:translate-y-[-2px]"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="w-full p-2">
          <h2 className="text-text text-xl font-bold">Total Calculations</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
