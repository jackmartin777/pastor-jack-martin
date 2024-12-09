import React from 'react';
import { Heart, Shield, Users, Target, Sparkles, Brain } from 'lucide-react';

const Approach = () => {
  return (
    <section id="approach" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Counselling Approach</h2>
          <p className="text-xl text-gray-600 mt-4">Understanding Supportive Counselling</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Focus on Immediate Concerns</h3>
                <p className="text-gray-600">
                  Prioritizing current challenges and difficulties you're facing, rather than diving into deep-seated issues. This approach helps you find practical solutions for your present situation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Empathy and Validation</h3>
                <p className="text-gray-600">
                  Creating a safe space where you can express yourself openly, with active listening and validation of your emotions and experiences.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-primary-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Coping Strategy Development</h3>
                <p className="text-gray-600">
                  Working together to identify and utilize healthy coping mechanisms for managing stress and difficult situations effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Positive Reinforcement</h3>
                <p className="text-gray-600">
                  Using encouragement, praise, and positive affirmations to boost your self-esteem and build resilience in facing life's challenges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-primary-gold/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-gold" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Suitable for Various Situations</h3>
                <div className="text-gray-600">
                  <p className="mb-2">Beneficial for individuals experiencing:</p>
                  <ul className="space-y-2">
                    <li>• Mild to moderate depression</li>
                    <li>• Grief and loss</li>
                    <li>• Stress related to life transitions</li>
                    <li>• Need for immediate emotional support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary-navy/5 px-6 py-3 rounded-lg">
            <p className="text-lg font-medium text-primary-navy">
              <span className="font-semibold">TL;DR:</span> In short, I provide non-judgmental support in a safe online space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;