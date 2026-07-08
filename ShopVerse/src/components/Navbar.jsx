import { NavLink, Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div>
      <nav className="flex justify-between items-center bg-surface  border-b border-border p-4 h-15">
        <div>
          <NavLink to="/" className="text-xl font-bold text-primary">
            Shop
            <span className="text-accent">Verse</span>
          </NavLink>
        </div>
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-semibold transition-all duration-300 ${
                isActive ? "text-accent" : "text-secondary hover:text-accent"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `text-lg font-semibold transition-all duration-300 ${
                isActive ? "text-accent" : "text-secondary hover:text-accent"
              }`
            }
          >
            Checkout
          </NavLink>
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
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="w-10 h-6 flex items-center border-2 border-border bg-secondary cursor-pointer p-1 rounded-full"
          >
            <div
              className={`w-4 h-4 flex items-center rounded-full
                 transition-all duration-500
                  transform ${darkMode ? "translate-x-3 rotate-90 bg-yellow-500" : "translate-x-0 rotate-0 bg-blue-500"}`}
            >
              {darkMode ? <Sun /> : <Moon />}
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
