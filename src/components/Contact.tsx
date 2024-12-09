import React, { useState } from 'react';
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-primary-navy">Get in Touch</h2>
          <p className="section-subtitle">Ready to begin your journey towards healing?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8 animate-slide-up">
            <div className="card">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-gold/10 p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-navy">Email</h3>
                    <a href="mailto:jack@jackmartin.co.za" className="text-primary-gray hover:text-primary-navy transition">
                      jack@jackmartin.co.za
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary-gold/10 p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-navy">Phone</h3>
                    <p className="text-primary-gray">+27 (0) 61 525 2086</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary-gold/10 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-navy">Location</h3>
                    <p className="text-primary-gray">Online Sessions Available Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card animate-slide-up space-y-6">
            {/* Form content remains the same */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;