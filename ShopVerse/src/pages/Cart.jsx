const Cart = () => {
  return (
    <div className="text-red-500 flex justify-center items-center min-h-screen">
      <div>
        <h1>Checkout</h1>
        {/* products section */}
        <div className="products w-1/2 flex justify-between items-center">
          {/* products cart section */}

          <div className="card ">
            {/*product cart image section */}
            <div>
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop" />
            </div>
            {/* product cart details */}
            <div>
              <h2>wireless HeadPhones</h2>
              <p>$99.99 each</p>
            </div>
            {/* products cart buttons section */}

            <div>
              {/* buttons section */}
              <div>
                <button>-</button>
                <p>10</p>
                <button>+</button>
              </div>
              {/* total price */}
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
