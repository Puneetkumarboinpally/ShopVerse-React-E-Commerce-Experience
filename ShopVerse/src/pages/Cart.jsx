const Cart = () => {
  return (
    <div className="text-red-500 flex justify-center items-center min-h-screen">
      <div>
        <h1>Checkout</h1>
        <div className="products">
          <div className="card w-1/2">
            <div>
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop" />
            </div>
            <div>
              <h2>wireless HeadPhones</h2>
              <p>$99.99 each</p>
            </div>
            <div>
              <div>
                <button>-</button>
                <p>10</p>
                <button>+</button>
              </div>
              <p>$999.9</p>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="total"></div>
      </div>
    </div>
  );
};

export default Cart;
