'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="sticky top-0 left-0 right-0 z-[9999] bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
      style={{ transform: 'translateY(0)' }}
    >
        <div className="container-custom px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-3xl tracking-wider font-explora">AT</span>
              </div>
              <div>
                <h1 className="font-playfair font-bold text-lg lg:text-xl text-gray-900 tracking-wide leading-tight">
                  AARAMBH TAX ADVISOR
                </h1>
                <p className="text-xs lg:text-sm font-medium text-blue-600 -mt-1 tracking-wider leading-tight">
                  LEAD BY ADVOCATE UTKARSH BHARDWAJ
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group text-sm tracking-wide"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary px-6 py-3 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Consultation
              </motion.button>
            </nav>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg max-h-screen overflow-y-auto"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.href.substring(1));
                      setIsOpen(false);
                    }}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 font-semibold py-4 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200 tracking-wide text-base"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsOpen(false);
                  }}
                  className="btn-primary w-full py-4 text-base font-semibold tracking-wide shadow-lg mt-4"
                  whileTap={{ scale: 0.95 }}
                >
                  Get Consultation
                </motion.button>
                
                {/* Mobile contact info */}
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  <div className="flex items-center space-x-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-base">+91 9258011110</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-base break-words">advutkarshbharadwaj@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
  );
};

export default Header; 