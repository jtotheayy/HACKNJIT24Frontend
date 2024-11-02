// Header.jsx
import React from 'react';
import Lottie from 'lottie-react';
import HeaderAnimation from '../lotties/headerAnimation.json';

const Header = () => {
  return (
    <header className="bg-[#2c1d1d] text-[#e0c97f] py-4 shadow-lg w-full flex items-center justify-center space-x-4">
      <div className="w-16 h-16 bg-[#e0c97f] rounded-full flex items-center justify-center">
        <Lottie animationData={HeaderAnimation} className="w-12 h-12" />
      </div>
      <h1 className="text-3xl font-bold uppercase tracking-widest">
        The Steam Punk Library
      </h1>
    </header>
  );
};

export default Header;

