import React, { useState } from 'react';
import Lottie from 'lottie-react';
import descriptAnimation from '../lotties/descriptAnimation.json';
import Header from '../components/Header';

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-[#3b2f2f] text-[#e0c97f] flex flex-col items-center py-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl w-full mt-10 mb-10 space-y-8 md:space-y-0 md:space-x-8">
          
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold uppercase">Welcome to the Steam Punk Library</h2>
            <p className="text-lg leading-relaxed">
              Explore a vast collection of books, journal your thoughts, and share reviews with fellow enthusiasts. Dive into a world of knowledge with a steampunk twist!
            </p>
          </div>
          
          {/* Lottie Animation Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-56 h-56 bg-[#e0c97f] rounded-full flex items-center justify-center shadow-md">
              <Lottie animationData={descriptAnimation} className="w-48 h-48" />
            </div>
          </div>
        </div>

        {/* Login / Sign Up Section */}
        <div className="bg-[#4c3d3d] text-white w-full max-w-md mt-10 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center space-x-4 mb-4">
            <button 
              className={`px-4 py-2 rounded ${isLogin ? 'bg-[#e0c97f] text-[#3b2f2f]' : 'bg-[#4c3d3d] hover:bg-[#705a5a] text-white'}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`px-4 py-2 rounded ${!isLogin ? 'bg-[#e0c97f] text-[#3b2f2f]' : 'bg-[#4c3d3d] hover:bg-[#705a5a] text-white'}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {isLogin ? (
            <div>
              <input type="text" placeholder="Username..." className="w-full p-2 mb-4 text-black rounded outline outline-offset-2 outline-[#e0c97f]" />
              <input type="password" placeholder="Password..." className="w-full p-2 mb-4 text-black rounded outline outline-offset-2 outline-[#e0c97f]" />
              <button className="w-full bg-[#e0c97f] text-[#3b2f2f] py-2 rounded hover:bg-[#d9b84d]">Login</button>
            </div>
          ) : (
            <div>
              <input type="text" placeholder="Username" className="text-black w-full p-2 mb-4 rounded outline outline-offset-2 outline-[#e0c97f]" />
              <input type="email" placeholder="Email" className="text-black w-full p-2 mb-4 rounded outline outline-offset-2 outline-[#e0c97f]" />
              <input type="password" placeholder="Password" className="text-black w-full p-2 mb-4 rounded outline outline-offset-2 outline-[#e0c97f]" />
              <button className="w-full bg-[#e0c97f] text-[#3b2f2f] py-2 rounded hover:bg-[#d9b84d]">Sign Up</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;