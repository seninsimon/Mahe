import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-amber-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="font-bold text-xl text-amber-400">MAHÈ</div>
            <div className="font-bold text-xl text-amber-400">FRESH ARTISANAL BAKES</div>
            <div className="font-bold text-xl text-amber-400">MAHÈ DELI</div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-amber-300">Quick Links</h3>
          <ul className="space-y-2">
            {[
              'Artisanal Breads', 'Fresh Pastries', 'Signature Cakes',
              'Seasonal Specials', 'Order Online',
              'About Us', 'Careers', 'Shipping Policy',
              'Terms of Service', 'Privacy Policy'
            ].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-amber-200">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Brand Tagline */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-amber-300">MAHÈ FRESH ARTISANAL BAKES</h3>
          <p className="text-stone-200">
            Crafted daily with passion — bringing the freshest breads, pastries, and cakes from our ovens to your table.
          </p>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
        Copyright © {new Date().getFullYear()} MAHÈ Fresh Artisanal Bakes.
      </div>
    </footer>
  );
};

export default Footer;
