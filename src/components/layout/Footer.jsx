import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="font-bold text-xl">MAHÈ</div>
            <div className="font-bold text-xl">FRESH ARTISANAL BAKES</div>
            <div className="font-bold text-xl">MAHÈ DELI</div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              'Artisanal Breads', 'Fresh Pastries', 'Signature Cakes',
              'Seasonal Specials', 'Order Online',
              'About Us', 'Careers', 'Shipping Policy',
              'Terms of Service', 'Privacy Policy'
            ].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-gray-300">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Brand Tagline */}
        <div>
          <h3 className="font-bold text-lg mb-4">MAHÈ FRESH ARTISANAL BAKES</h3>
          <p className="text-gray-200">
            Crafted daily with passion — bringing the freshest breads, pastries, and cakes from our ovens to your table.
          </p>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-teal-600 mt-8 pt-8 text-center text-gray-300">
        Copyright © {new Date().getFullYear()} MAHÈ Fresh Artisanal Bakes.
      </div>
    </footer>
  );
};

export default Footer;
