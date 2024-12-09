import React from 'react';
import { Video, MessageSquare, MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="h-6 w-6 text-primary-gold" />
            <span className="text-lg font-medium text-primary-gray">Available Worldwide</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900">Online Sessions</h2>
          <p className="text-xl text-gray-600 mt-4">Convenient and Accessible Support Worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
            <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Video className="h-6 w-6 text-primary-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Zoom</h3>
            <p className="text-gray-600">Professional video conferencing for clear, secure communication</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
            <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="h-6 w-6 text-primary-gold" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm.168 3.45a8.55 8.55 0 0 1 8.382 8.55 8.55 8.55 0 0 1-8.55 8.55 8.55 8.55 0 0 1-8.55-8.55 8.55 8.55 0 0 1 8.718-8.55z M10.102 8.026L6.573 17.86l2.352-.313 1.201-3.3h3.738l1.202 3.3 2.351.313-3.529-9.834h-3.786zm1.893 2.324l1.292 3.554h-2.584l1.292-3.554z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Microsoft Teams</h3>
            <p className="text-gray-600">Integrated platform for seamless online counselling sessions</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
            <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
              <MessageSquare className="h-6 w-6 text-primary-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600">Convenient messaging and video calls for flexible communication</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary-navy/5 px-6 py-3 rounded-lg">
            <p className="text-gray-700">
              All sessions are conducted online, making counselling accessible no matter where you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;