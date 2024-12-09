import React from 'react';
import { Sparkles } from 'lucide-react';
import BookingOptions from './BookingOptions';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 bg-hero-pattern bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-cream mb-6 tracking-tight">
            Non-judgmental Biblical counselling<br />in a confidential online space
          </h1>
          <p className="text-xl text-primary-light/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Specialist Wellness Counsellor ASCHP SWC18/327
          </p>
          <a
            href="https://myfiladelfiashop.com/product/15min-exploratory-session/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-gold hover:bg-primary-gold/90 text-primary-burgundy px-8 py-4 rounded-lg transition transform hover:scale-105 duration-200 font-semibold shadow-lg"
          >
            <Sparkles className="h-5 w-5" />
            Book Free Consultation
          </a>
        </div>
        
        <div className="mt-20 animate-slide-up">
          <BookingOptions />
        </div>
      </div>
    </section>
  );
};

export default Hero;