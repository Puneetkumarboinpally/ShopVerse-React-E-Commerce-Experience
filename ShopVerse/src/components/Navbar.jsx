import { Link } from "react-router-dom";
import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center bg-surface  border-b border-border py-4 px-8">
        <div>
          <Link to="/" className="text-xl font-bold text-primary">
            Shop
            <span className="text-accent">Verse</span>
          </Link>
        </div>
        <div className="flex gap-6">
          <Link
            to="/"
            className="text-lg text-secondary font-semibold transition-all duration-300 ease hover:text-accent"
          >
            Home
          </Link>
          <Link
            to="/checkout"
            className="text-lg text-secondary font-semibold  transition-all duration-300 ease hover:text-accent"
          >
            Checkout
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <Link
            to="/auth"
            className="text-lg text-primary py-1 px-2 font-semibold bg-accent rounded active:scale-95 transition-all duration-300 ease hover:translate-y-[-2px]"
          >
            Login
          </Link>
          <Link
            to="/auth"
            className="text-lg text-primary py-1 px-2 font-semibold bg-accent rounded active:scale-95 transition-all duration-300 ease hover:translate-y-[-2px]"
          >
            Register
          </Link>
          <button className="w-12 h-6 flex items-center border-2 border-border p-1">
            <div>
              <Sun />
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
