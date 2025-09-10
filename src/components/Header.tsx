import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Biography', path: '/biography' },
    { name: 'Research', path: '/research' },
    { name: 'Activities', path: '/speaking' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' }
  ];
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-narrow flex justify-between items-center">
        <NavLink to="/" className="font-serif text-2xl font-bold text-navy-800 hover:text-navy-600 transition-colors">
          Dr. Syed Nazim Ali
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                isActive ? 'nav-link-active' : 'nav-link'
              }
              end={link.path === '/'}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy-700 hover:text-navy-900 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <nav className="container-narrow flex flex-col space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `flex items-center py-2 ${isActive ? 'nav-link-active' : 'nav-link'}`
              }
              onClick={() => setIsMenuOpen(false)}
              end={link.path === '/'}
            >
              <ChevronRight size={16} className="mr-2" />
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;