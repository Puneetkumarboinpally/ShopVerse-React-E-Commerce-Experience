import { NavLink, Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AuthDataContext } from "../context/AuthContext";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  const { user, logout } = useContext(AuthDataContext);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border h-16">
      <div className="flex items-center justify-between h-full px-6">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-primary">
          Shop<span className="text-accent">Verse</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
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
            to="/cart"
            className={({ isActive }) =>
              `text-lg font-bold transition-all duration-300 ${
                isActive ? "text-accent" : "text-secondary hover:text-accent"
              }`
            }
          >
            Cart
          </NavLink>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-2 items-center">
          {!user ? (
            <>
              <Link
                to="/auth"
                className="text-lg text-primary py-2 px-4 font-bold bg-accent rounded-md active:scale-95 transition-all duration-500 hover:-translate-y-1"
              >
                Login
              </Link>

              <Link
                to="/auth"
                className="text-lg text-accent py-2 px-4 font-bold bg-primary rounded-md active:scale-95 transition-all duration-500 hover:-translate-y-1"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className=" text-text text-lg font-bold mx-2">
                {user.name}
              </span>

              <button
                className="text-lg text-primary cursor-pointer py-2 px-4 font-bold bg-accent rounded-md active:scale-95 transition-all duration-500 hover:-translate-y-1"
                onClick={() => logout()}
                type="button"
              >
                Logout
              </button>
            </>
          )}

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
            className="w-10 h-6 flex items-center border-2 border-border bg-secondary rounded-full p-1"
          >
            <div
              className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500 ${
                darkMode
                  ? "translate-x-3 rotate-90 bg-yellow-500"
                  : "translate-x-0 bg-blue-500"
              }`}
            >
              {darkMode ? <Sun size={12} /> : <Moon size={12} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary cursor-pointer"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all  duration-500 ease-in-out ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 bg-surface border-t border-border px-6 py-4">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-accent"
                : "font-bold text-secondary hover:text-accent"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-accent"
                : "font-bold text-secondary hover:text-accent"
            }
          >
            Cart
          </NavLink>

          {!user ? (
            <>
              <Link
                to="/auth"
                onClick={() => setMenuOpen(false)}
                className="bg-accent text-primary font-bold rounded-md py-2 text-center"
              >
                Login
              </Link>

              <Link
                to="/auth"
                onClick={() => setMenuOpen(false)}
                className="bg-primary text-accent font-bold rounded-md py-2 text-center"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="text-text font-bold">{user.name}</span>

              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                type="button"
                className="bg-accent text-primary font-bold rounded-md py-2"
              >
                Logout
              </button>
            </>
          )}

          <button
            onClick={() => {
              setDarkMode((prev) => !prev);
              setMenuOpen(false);
            }}
            className="flex items-center gap-2 py-2 text-primary cursor-pointer"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
