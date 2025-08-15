import React, { useState } from 'react';
import { Search, User, ShoppingCart } from 'lucide-react';
import maheLogo from '../../assets/mahe-logo.png';

const Header = () => {
  const [cartCount] = useState(0);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm relative">
        Get your MAHÈ fix on Zomato/Swiggy
        <div className="absolute top-2 right-4 text-sm">(INR ₹) ▼</div>
      </div>

      {/* Main Header */}
      <header className="bg-white text-black px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
          
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img 
              src={maheLogo} 
              alt="MAHÈ Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Search */}
          <div className="flex-1 w-full md:max-w-md relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button className="flex items-center justify-center space-x-2 px-4 py-2 border border-black rounded-full hover:bg-gray-100 w-full sm:w-auto">
              <User className="w-4 h-4" />
              <span>ACCOUNT</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 w-full sm:w-auto">
              <ShoppingCart className="w-4 h-4" />
              <span>₹ 0 ({cartCount})</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
