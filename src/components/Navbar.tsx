import React, { useState } from 'react';
import { Menu, X, Cross } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#approach', label: 'Approach' },
    { href: '#contact', label: 'Contact' },
    { href: 'https://www.myfiladelfia.co.za', label: 'Training', external: true },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href') || '';
    if (href.startsWith('http')) {
      window.open(href, '_blank');
      setIsOpen(false);
      return;
    }
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-primary-cream/90 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Cross className="h-6 w-6 text-primary-gold" />
            <h1 className="text-xl font-serif font-bold text-primary-burgundy">Pastor Jack Martin</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map(({ href, label, external }) => (
                <a
                  key={href}
                  href={href}
                  onClick={handleClick}
                  className={`${
                    activeSection === href.slice(1)
                      ? 'text-primary-burgundy font-semibold'
                      : 'text-primary-gray'
                  } hover:text-primary-burgundy transition relative group`}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  {label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary-gold transform origin-left transition-transform duration-300 ${
                    activeSection === href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </a>
              ))}
              <a 
                href="mailto:jack@jackmartin.co.za"
                className="bg-gradient-primary text-primary-cream px-4 py-2 rounded-md hover:opacity-90 transition transform hover:scale-105 duration-200"
              >
                Book Session
              </a>
            </div>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary-burgundy" />
            ) : (
              <Menu className="h-6 w-6 text-primary-burgundy" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map(({ href, label, external }) => (
              <a
                key={href}
                href={href}
                onClick={handleClick}
                className={`${
                  activeSection === href.slice(1)
                    ? 'text-primary-burgundy font-semibold'
                    : 'text-primary-gray'
                } block px-3 py-2 rounded-md text-base hover:text-primary-burgundy transition`}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                {label}
              </a>
            ))}
            <a 
              href="mailto:jack@jackmartin.co.za"
              className="w-full bg-gradient-primary text-primary-cream px-4 py-2 rounded-md hover:opacity-90 transition mt-2 block text-center"
            >
              Book Session
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;