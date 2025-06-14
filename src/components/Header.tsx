import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Heart, Music, PenTool, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}>
              Alex
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-slate-600 hover:text-slate-800' : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-slate-600 hover:text-slate-800' : 'text-white/90 hover:text-white'
              }`}
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection('music')}
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-slate-600 hover:text-slate-800' : 'text-white/90 hover:text-white'
              }`}
            >
              Music
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-slate-600 hover:text-slate-800' : 'text-white/90 hover:text-white'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-slate-600 hover:text-slate-800' : 'text-white/90 hover:text-white'
              }`}
            >
              Contact
            </button>
            <a
              href="/resume.pdf"
              download
              className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl mt-4 p-6 space-y-4 border border-gray-100">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="block w-full text-left font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 py-2"
            >
              Community Work
            </button>
            <button
              onClick={() => scrollToSection('music')}
              className="block w-full text-left font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 py-2"
            >
              Music
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="block w-full text-left font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 py-2"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 py-2"
            >
              Contact
            </button>
            <a
              href="/resume.pdf"
              download
              className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 w-full justify-center mt-4"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;