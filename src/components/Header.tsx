
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <div className="relative flex items-center">
            <span className="text-primary text-3xl font-bold mr-1">Speak</span>
            <span className="text-3xl font-light">Verse</span>
            <div className="speech-wave absolute -right-8 bottom-2">
              <div className="speech-wave-bar h-2 animate-wave-1"></div>
              <div className="speech-wave-bar h-3 animate-wave-2"></div>
              <div className="speech-wave-bar h-4 animate-wave-3"></div>
              <div className="speech-wave-bar h-3 animate-wave-4"></div>
              <div className="speech-wave-bar h-2 animate-wave-5"></div>
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8"
        >
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Features</a>
          <a href="#languages" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Languages</a>
          <a href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Pricing</a>
        </motion.nav>

        {/* Authentication Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center space-x-4"
        >
          <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Login
          </button>
          <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg">
            Sign Up
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-foreground">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-t"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2">Features</a>
            <a href="#languages" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2">Languages</a>
            <a href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2">Pricing</a>
            <div className="flex flex-col space-y-3 pt-2">
              <button className="w-full py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                Login
              </button>
              <button className="w-full py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shadow-md">
                Sign Up
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
