import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // On non-homepage, always show solid header
  const isHomePage = location.pathname === "/";
  const showSolidHeader = isScrolled || !isHomePage;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Life Journey", path: "/life-journey" },
    { name: "Research", path: "/research" },
    { name: "IFC-Harvard", path: "/harvard-archives" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        showSolidHeader
          ? "bg-white/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-wide flex justify-between items-center">
        {/* Logo/Name */}
        <NavLink to="/" className="flex items-center group">
          <div>
            <span
              className={`font-serif text-xl font-bold transition-colors duration-300 ${
                showSolidHeader ? "text-burgundy-800" : "text-white"
              }`}
            >
              Dr. Syed Nazim Ali
            </span>
            <span
              className={`block text-xs tracking-wider transition-colors duration-300 ${
                showSolidHeader ? "text-slate-500" : "text-cream-300"
              }`}
            >
              Islamic Finance Scholar
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? showSolidHeader
                      ? "bg-burgundy-800 text-white"
                      : "bg-gold-500 text-slate-900"
                    : showSolidHeader
                      ? "text-slate-700 hover:text-burgundy-800 hover:bg-burgundy-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`
              }
              end={link.path === "/"}
            >
              {link.name}
            </NavLink>
          ))}

          {/* CTA Button */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `ml-4 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive
                  ? showSolidHeader
                    ? "bg-burgundy-800 text-white"
                    : "bg-gold-500 text-slate-900"
                  : showSolidHeader
                    ? "text-slate-700 hover:text-burgundy-800 hover:bg-burgundy-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
            showSolidHeader
              ? "text-burgundy-800 hover:bg-burgundy-50"
              : "text-white hover:bg-white/10"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-elegant-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-narrow flex flex-col py-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 rounded-lg text-base transition-all duration-300 ${
                  isActive
                    ? "bg-burgundy-50 text-burgundy-800 font-semibold"
                    : "text-slate-700 hover:bg-cream-100 hover:text-burgundy-800"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
              end={link.path === "/"}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ChevronRight size={16} className="mr-2 text-gold-500" />
              {link.name}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <div className="mt-4 pt-4 border-t border-cream-300">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center py-3 px-4 rounded-lg text-base transition-all duration-300 ${
                  isActive
                    ? "bg-burgundy-50 text-burgundy-800 font-semibold"
                    : "text-slate-700 hover:bg-cream-100 hover:text-burgundy-800"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <ChevronRight size={16} className="mr-2 text-gold-500" />
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
