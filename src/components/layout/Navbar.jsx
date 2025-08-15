import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Adjust this value to the total height of the two navbars above
      const offset = 120; 
      setIsSticky(scrollTop >= offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white text-black px-6 py-4 border-t w-full transition-all ${
        isSticky
          ? 'fixed top-0 left-0 z-50 shadow-md'
          : 'relative'
      }`}
    >
      <div className="flex items-center justify-center space-x-8 max-w-7xl mx-auto">
        {[
          'Specialty Coffee',
          'Fine Cacao',
          'Craft Bakehouse',
          'Subculture: Merch & Events',
          'Taufah',
          'Bloom School',
          'Contact ▼'
        ].map((link, i) => (
          <a
            key={i}
            href="#"
            className="text-gray-900 font-bold hover:text-gray-600 transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
