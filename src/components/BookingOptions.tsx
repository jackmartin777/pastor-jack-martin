import React from 'react';
import { Clock, Users, Sparkles, Heart } from 'lucide-react';

const BookingOptions = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <a
        href="https://myfiladelfiashop.com/product/15min-exploratory-session/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition duration-300 group border border-primary-gold/20"
      >
        <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <Sparkles className="h-6 w-6 text-primary-gold" />
        </div>
        <h3 className="text-xl font-semibold text-primary-cream mb-2">Exploratory Session</h3>
        <p className="text-primary-light/90 mb-4">Begin your journey with a free 15-minute consultation</p>
        <div className="flex items-center text-primary-gold">
          <Clock className="h-4 w-4 mr-2" />
          <span>15 minutes</span>
        </div>
      </a>

      <a
        href="https://myfiladelfiashop.com/product/60min-supportive-counselling-session/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition duration-300 group border border-primary-gold/20"
      >
        <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <Heart className="h-6 w-6 text-primary-gold" />
        </div>
        <h3 className="text-xl font-semibold text-primary-cream mb-2">Individual Session</h3>
        <p className="text-primary-light/90 mb-4">One-on-one supportive counselling session</p>
        <div className="flex items-center text-primary-gold">
          <Clock className="h-4 w-4 mr-2" />
          <span>60 minutes</span>
        </div>
      </a>

      <a
        href="https://myfiladelfiashop.com/product/90-min-supportive-counselling-session/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition duration-300 group border border-primary-gold/20"
      >
        <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <Users className="h-6 w-6 text-primary-gold" />
        </div>
        <h3 className="text-xl font-semibold text-primary-cream mb-2">Extended Session</h3>
        <p className="text-primary-light/90 mb-4">Individual or couples counselling session</p>
        <div className="flex items-center text-primary-gold">
          <Clock className="h-4 w-4 mr-2" />
          <span>90 minutes</span>
        </div>
      </a>
    </div>
  );
};

export default BookingOptions;