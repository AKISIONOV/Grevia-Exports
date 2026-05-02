import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.products'), href: '#products' },
    { name: t('nav.quality'), href: '#quality' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const formLink = "https://docs.google.com/forms/d/1BENrusuFBdBsiZtRQ_fY1ckRg6sVtEahkyOoFGrW4A4/viewform";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-md py-3 lg:py-4' : 'bg-background/95 py-4 lg:py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group">
          <img src="images/logo.webp" alt="Grevia Exports Logo" className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-primary group-hover:text-primary-dark transition-colors">
            Grevia Exports
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-charcoal hover:text-accent font-medium transition-colors text-sm xl:text-base"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Selector Desktop */}
          <div className="relative group flex items-center gap-1 text-charcoal hover:text-primary cursor-pointer font-medium">
            <Globe size={18} />
            <span className="uppercase text-sm">{i18n.language}</span>
            <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <button onClick={() => changeLanguage('en')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-stone-50 ${i18n.language === 'en' ? 'text-primary font-bold' : 'text-charcoal'}`}>English</button>
              <button onClick={() => changeLanguage('es')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-stone-50 ${i18n.language === 'es' ? 'text-primary font-bold' : 'text-charcoal'}`}>Español</button>
              <button onClick={() => changeLanguage('fr')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-stone-50 ${i18n.language === 'fr' ? 'text-primary font-bold' : 'text-charcoal'}`}>Français</button>
            </div>
          </div>

          <a 
            href={formLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 xl:px-6 xl:py-2.5 rounded-md font-semibold hover:bg-primary-light transition-colors shadow-sm text-sm xl:text-base whitespace-nowrap"
          >
            {t('nav.quote')}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-primary p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute w-full left-0 top-full bg-background shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen py-6 border-t border-stone-100' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center space-y-4 px-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-charcoal hover:text-accent font-medium text-lg w-full text-center py-2 border-b border-stone-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          {/* Mobile Language Selector */}
          <div className="flex gap-4 py-4 w-full justify-center border-b border-stone-100">
            <button onClick={() => changeLanguage('en')} className={`px-3 py-1 rounded border ${i18n.language === 'en' ? 'bg-primary text-white border-primary' : 'border-stone-300 text-charcoal'}`}>EN</button>
            <button onClick={() => changeLanguage('es')} className={`px-3 py-1 rounded border ${i18n.language === 'es' ? 'bg-primary text-white border-primary' : 'border-stone-300 text-charcoal'}`}>ES</button>
            <button onClick={() => changeLanguage('fr')} className={`px-3 py-1 rounded border ${i18n.language === 'fr' ? 'bg-primary text-white border-primary' : 'border-stone-300 text-charcoal'}`}>FR</button>
          </div>

          <a 
            href={formLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-md font-semibold mt-4 shadow-sm w-full max-w-xs text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.quote')}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
