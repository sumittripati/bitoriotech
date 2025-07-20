import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="./logo-Image.png" alt="logo" className="h-10 w-auto" />
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          <Link to="/service" className="text-gray-800 hover:text-blue-600">Service</Link>
          <Link to="/project" className="text-gray-800 hover:text-blue-600">Project</Link>
        </nav>
        <div className="hidden md:block">
          <button className="flex items-center bg-[#0093E5] text-white py-2 px-4 rounded-md hover:bg-[#007ac2] transition"><GoArrowRight className="mr-2" />Request a Demo</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-blue-600">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-blue-600">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-blue-600">Contact</Link>
          <Link to="/service" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-blue-600">Service</Link>
          <Link to="/project" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-blue-600">Project</Link>
          <button onClick={() => setIsOpen(false)} className="w-full flex items-center justify-center mt-2 bg-[#0093E5] text-white py-2 px-4 rounded-md hover:bg-[#007ac2]"> <GoArrowRight className="mr-2" /> Request a Demo </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
