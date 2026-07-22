import { useCart } from "../context/CartContext";

const Cart = () => {
  const { getCartItemsWithProducts } = useCart();

  const cartItem = getCartItemsWithProducts();

  return (
    <div className="mt-16 h-screen p-4">
      <h1 className="text-text text-3xl font-bold mb-4">checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 border gap-2">
        <div className="left-container border">
          <h1 className="text-text text-2xl p-2 font-bold">Order Summary</h1>
          <div className="flex flex-col gap-2 p-4">
            {cartItem.map((item) => (
              <div
                key={item.product.id}
                className="p-4 bg-primary/20 border-2 border-white/30 rounded-lg shadow-lg"
              >
                <img
                  className="w-48 aspect-square object-contain rounded"
                  src={item.product.image}
                  alt={item.product.name}
                />
                <div>
                  <h2>{item.product.name}</h2>
                  <p>${item.product.price} per item</p>
                </div>
                <div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="right-container"></div>
      </div>
    </div>
  );
};

export default Cart;
