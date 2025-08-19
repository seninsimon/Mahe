import React from 'react';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import LanguageTicker from './sections/LanguageTicker';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      {/* <Navbar /> */}
      {children}
      <LanguageTicker />

      <Footer />
    </div>
  );
};

export default AppLayout;
