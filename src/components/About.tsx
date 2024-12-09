import React from 'react';
import { Award, BookOpen, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Meet Pastor Jack Martin</h2>
          <p className="text-xl text-gray-600 mt-4">Specialist Wellness Counsellor ASCHP SWC18/327</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-primary-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scientific Foundation</h3>
            <p className="text-gray-600">
              Journey began in science with degrees in microbiology and molecular biology, bringing a unique analytical perspective to counselling.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Theological Insight</h3>
            <p className="text-gray-600">
              Well-versed in systematic theology and biblical studies, providing a solid foundation for spiritual guidance.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Compassionate Approach</h3>
            <p className="text-gray-600">
              Sessions characterized by warmth, compassion, and a non-judgmental atmosphere for spiritual growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;