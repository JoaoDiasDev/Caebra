import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-dark-purple text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Caebra</div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-phlox">Home</Link>
          <Link to="/features" className="hover:text-phlox">Features</Link>
          <Link to="/pricing" className="hover:text-phlox">Pricing</Link>
          <Link to="/support" className="hover:text-phlox">Support</Link>
        </nav>
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="bg-dark-purple text-white absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center space-y-6 md:hidden">
          <Link to="/" className="text-xl hover:text-phlox" onClick={toggleMenu}>Home</Link>
          <Link to="/features" className="text-xl hover:text-phlox" onClick={toggleMenu}>Features</Link>
          <Link to="/pricing" className="text-xl hover:text-phlox" onClick={toggleMenu}>Pricing</Link>
          <Link to="/support" className="text-xl hover:text-phlox" onClick={toggleMenu}>Support</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
