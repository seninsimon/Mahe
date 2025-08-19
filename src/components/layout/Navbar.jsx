import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offset = 120;
      setIsSticky(scrollTop >= offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    'Specialty Coffee',
    'Fine Cacao',
    'Craft Bakehouse',
    'Subculture: Merch & Events',
    'Taufah',
    'Bloom School',
    'Contact ▼'
  ];

  return (
    <nav
      className={`bg-white text-black px-6 py-4 border-t w-full transition-all ${
        isSticky ? 'fixed top-0 left-0 z-50 shadow-md' : 'relative'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link, i) => (
            <a
              key={i}
              href="#"
              className="text-yellow-800 font-bold hover:text-gray-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2">
          {links.map((link, i) => (
            <a
              key={i}
              href="#"
              className="text-stone-900 font-bold hover:text-gray-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
