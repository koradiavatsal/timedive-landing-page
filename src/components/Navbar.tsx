
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-sm sticky top-0 z-50">
      <div className="container-wrapper flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-timedive-primary flex items-center">
            <span className="text-timedive-accent">Time</span>Dive
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 text-timedive-gray focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-timedive-gray hover:text-timedive-primary">Features</a>
          <a href="#software" className="text-timedive-gray hover:text-timedive-primary">Software</a>
          <a href="#resources" className="text-timedive-gray hover:text-timedive-primary">Resources</a>
          <a href="#pricing" className="text-timedive-gray hover:text-timedive-primary">Pricing</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="primary-button">Get Started Free</Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-md">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-timedive-gray hover:text-timedive-primary py-2">Features</a>
              <a href="#software" className="text-timedive-gray hover:text-timedive-primary py-2">Software</a>
              <a href="#resources" className="text-timedive-gray hover:text-timedive-primary py-2">Resources</a>
              <a href="#pricing" className="text-timedive-gray hover:text-timedive-primary py-2">Pricing</a>
              <Button className="primary-button w-full">Get Started Free</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
