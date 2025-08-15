import React from 'react';

const SectionButton = ({ children }) => {
  return (
    <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
      {children}
    </button>
  );
};

export default SectionButton;
