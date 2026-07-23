import { useCart } from "../context/CartContext";

const Cart = () => {
  const { getCartItemsWithProducts } = useCart();

  const cartItem = getCartItemsWithProducts();

  return (
    <div className="mt-16 h-screen p-4">
      <h1 className="text-text text-3xl font-bold mb-4">checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-2">
          <h1 className="text-text text-2xl p-2 font-bold">Order Summary</h1>
          <div className="flex flex-col gap-2 p-4">
            {cartItem.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-4 bg-primary/20 border-2 border-white/30 rounded-lg shadow-lg"
              >
                <img
                  className="w-36 aspect-square object-contain rounded"
                  src={item.product.image}
                  alt={item.product.name}
                />
                <div className="flex-1 p-2">
                  <h2 className="text-text text-xl font-bold mb-4">
                    {item.product.name}
                  </h2>
                  <p className="text-text text-md font-bold my-4">
                    <span className="text-accent text-lg">
                      ${item.product.price}{" "}
                    </span>
                    each
                  </p>
                </div>
                <div className="flex flex-col gap-4 p-2 items-center">
                  <div className="flex gap-3 items-center">
                    <button className="py-1 px-3 rounded border font-bold text-text cursor-pointer">
                      -
                    </button>
                    <span className="text-text text-xl font-bold">1</span>
                    <button className="py-1 px-3 rounded border font-bold text-text cursor-pointer">
                      +
                    </button>
                  </div>
                  <p className="text-text text-xl font-bold">
                    $ {item.product.price}
                  </p>
                  <button
                    className="px-4 py-2 border rounded-lg text-text font-semibold cursor-pointer
                  active:scale-95 transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    {" "}
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="right-container p-2 border">
          <h2 className="text-text text-2xl p- font-bold">Total Estimation</h2>
          <div className="p-8 border w-2/3 flex flex-col mx-auto my-4">
            <div className="flex justify-between items-center">
              <h2>SubTotal</h2>
              <p>89.99</p>
            </div>
            <div>
              <h2>Tax (20%)</h2>
              <p>89.99</p>
            </div>
            <div>
              <h2>Discount</h2>
              <p>89.99</p>
            </div>
            <div>
              <h2>Delivery Fee</h2>
              <p>89.99</p>
            </div>
            <div>
              <h2>Grand Total</h2>
              <p>89.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
