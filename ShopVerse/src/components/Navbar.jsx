import { NavLink, Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <nav className="fixed top-0 right-0 left-0 z-50 flex justify-between items-center bg-surface  border-b border-border p-6 h-18">
        <div>
          {/* logo */}

          <NavLink to="/" className="text-2xl font-bold text-primary">
            Shop
            <span className="text-accent">Verse</span>
          </NavLink>
        </div>
        {/* nav menu */}

        <div className="hidden md:flex justify-center items-center gap-6">
          {/* nav links */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-bold transition-all duration-300 ${
                isActive ? "text-accent" : "text-secondary hover:text-accent"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `text-lg font-bold transition-all duration-300 ${
                isActive ? "text-accent" : "text-secondary hover:text-accent"
              }`
            }
          >
            Checkout
          </NavLink>
        </div>
        {/* CTA buttons */}

        <div className="hidden md:flex gap-2 items-center">
          {/* Login button */}
          <Link
            to="/auth"
            className="text-lg text-primary py-2 px-4 font-bold bg-accent rounded-md active:scale-95 transition-all duration-500 ease hover:translate-y-[-4px]"
          >
            Login
          </Link>
          {/* Register button */}

          <Link
            to="/auth"
            className="text-lg text-accent py-2 px-4 font-bold bg-primary rounded-md active:scale-95 transition-all duration-500 ease hover:translate-y-[-4px]"
          >
            Register
          </Link>
          {/* Toggle button */}

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

        <div
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden cursor-pointer"
        >
          {menuOpen ? <Menu /> : <X />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
