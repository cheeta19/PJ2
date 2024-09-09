import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="flex m-10 ">
      {/* Logo */}
      <div className="w-1/5 h-16">
        <div className="text-5xl text-white font-bold text-center mt-3 italic">
          FitFlowz
        </div>
      </div>

      {/* Navigation Links */}
      <div className="w-3/5 h-16 mt-3 flex">
        <div className="w-1/3 h-16">
        <Link to=""><div className="text-3xl text-white text-right">Home</div></Link>
          
        </div>
        <div className="w-1/3 h-16">
        <Link to=""><div className="text-3xl text-white text-center">About</div></Link>
          
        </div>
        <div className="w-1/3 h-16">
        <Link to=""><div className="text-3xl text-white text-left">Contact</div></Link>
          
        </div>
      </div>

      <div className="w-1/5 h-16 flex">
        <div className="w-1/2 h-16">
          <Link to="/Register">
            <button
              className="w-4/5 mb-4 text-2xl mt-3 rounded-full hover:bg-lime-400 hover:text-black py-2 transition-colors duration-300"
              type="button">
              Sign Up
            </button>
          </Link>
        </div>
        <div className="w-1/2 h-16">
        <Link to="/Login"><button
            className="w-4/5 mb-4 text-2xl mt-3 rounded-full bg-lime-400 text-black hover:bg-transparent hover:text-white py-2 transition-colors duration-300"
            type="button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;