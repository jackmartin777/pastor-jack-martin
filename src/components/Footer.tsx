import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif text-white mb-4">Pastor Jack Martin</h3>
            <p className="text-sm">
              Specialist Wellness Counsellor<br />
              ASCHP SWC18/327
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#approach" className="hover:text-white transition">Approach</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              <li>
                <a 
                  href="https://www.myfiladelfia.co.za" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition"
                >
                  Training
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-gold hover:text-primary-gold/80 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-gold hover:text-primary-gold/80 transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Pastor Jack Martin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;