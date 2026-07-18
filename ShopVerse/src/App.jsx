import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import Cart from "./pages/Cart.jsx";
import AuthContext from "./context/AuthContext.jsx";
import ProductsDetails from "./pages/ProductsDetails.jsx";

const App = () => {
  return (
    <AuthContext>
      <div className="transition-color duration-600 ease bg-background h-full">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </AuthContext>
  );
};

export default App;
