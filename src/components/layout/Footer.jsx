import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-[#8e4921] border-t border-[#8e4921] py-12 px-6 playfair">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <div className="flex flex-col gap-2 mb-4">
            <div className="font-bold text-4xl">MAHÈ</div>
            <div className="font-semibold text-lg">Fresh Artisanal Bakes</div>
            <div className="font-semibold text-lg">MAHÈ Deli</div>
          </div>
          <p className="text-sm text-[#8e4921]/80 leading-relaxed">
            Specialty coffee. Craft bakes. Fine cacao.<br />
            From the subcontinent. For all.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-2xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              'Artisanal Breads', 'Fresh Pastries', 'Signature Cakes',
              'Seasonal Specials', 'Order Online',
              'About Us', 'Careers', 'Shipping Policy',
              'Terms of Service', 'Privacy Policy'
            ].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:underline hover:text-[#8e4921]/90 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Brand Tagline */}
        <div>
          <h3 className="font-bold text-2xl mb-4">MAHÈ Fresh Artisanal Bakes</h3>
          <p className="text-[#8e4921]/80 leading-relaxed">
            Crafted daily with passion — bringing the freshest breads, pastries,
            and cakes from our ovens to your table. Perfect for every occasion,
            shared with everyone you love.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#8e4921]/30 mt-10 pt-6 text-center text-sm text-[#8e4921]/70">
        © {new Date().getFullYear()} MAHÈ Fresh Artisanal Bakes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
