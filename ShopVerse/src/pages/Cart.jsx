import { useCart } from "../context/CartContext";

const groupTotal = "flex justify-between items-center my-6";
const TotalHeader = "text-text text-xl font-semibold";
const totalValue = "text-text text-xl font-bold";

const Cart = () => {
  const {
    getCartItemsWithProducts,
    remove,
    calculateTotal,
    updateCartQuantity,
  } = useCart();
  const cartItem = getCartItemsWithProducts();
  const order = calculateTotal();

  return (
    <div className="mt-16 min-h-screen p-4">
      <h1 className="text-text text-3xl font-bold mb-4">checkout</h1>
      {/* GRID CONTAINER */}

      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8 items-start">
        {/* LEFT CONTAINER */}

        <div className="p-2 xl:pr-6">
          <h1 className="text-text text-2xl p-2 font-bold">Order Summary</h1>
          <div className="flex flex-col gap-2 p-4">
            {cartItem.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col sm:flex-row xl:gap-4 p-4 bg-primary/20 border-2 border-white/30 rounded-lg shadow-lg"
              >
                <img
                  className="w-full sm:w-32 aspect-square object-contain rounded"
                  src={item.product.image}
                  alt={item.product.name}
                />
                <div className="flex-1 p-2 text-center sm:text-left">
                  <h2 className="text-text text-lg sm:text-xl font-bold mb-4">
                    {item.product.name}
                  </h2>
                  <p className="text-text text-md font-bold my-4">
                    <span className="text-accent text-lg">
                      ${item.product.price}{" "}
                    </span>
                    each
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-4 p-2 items-center">
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() =>
                        updateCartQuantity(item.product.id, item.quantity - 1)
                      }
                      className="py-1 px-3 rounded border font-bold text-text cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-text text-xl font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateCartQuantity(item.product.id, item.quantity + 1)
                      }
                      className="py-1 px-3 rounded border font-bold text-text cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-text text-xl font-bold">
                    $ {(item.product.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => remove(item.product.id)}
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
        {/* Right container */}

        <div className="p-2 flex flex-col items-center xl:sticky xl:right-20">
          <h2 className="text-text text-2xl p- font-bold">Total Estimation</h2>
          <div className="p-6 border-2 border-border w-full max-w-md bg-surface rounded-lg shadow-xl  mt-8">
            <div className={groupTotal}>
              <h2 className={TotalHeader}>SubTotal</h2>
              <p className={totalValue}>${order.subTotal.toFixed(2)}</p>
            </div>
            <div className={groupTotal}>
              <h2 className={TotalHeader}>Shipping Cost</h2>
              <p className={totalValue}>${order.shipping}</p>
            </div>
            <div className={groupTotal}>
              <h2 className={TotalHeader}>Tax (18%)</h2>
              <p className={totalValue}>${order.tax.toFixed(2)}</p>
            </div>
            <div className={groupTotal}>
              <h2 className={TotalHeader}>Delivery Fee</h2>
              <p className={totalValue}>${order.delivery}</p>
            </div>
            <div className={`${groupTotal} border-y-2 border-text py-4 mb-0`}>
              <h2 className={TotalHeader}>Grand Total</h2>
              <p className={`${totalValue}`}>${order.total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
