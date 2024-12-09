import React from 'react';
import { GraduationCap, Heart, BookOpen, Award } from 'lucide-react';

const Biography = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-cream to-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary-navy mb-6">A Journey of Faith and Science</h2>
          <p className="text-lg text-primary-gray leading-relaxed">
            Pastor Jack Martin is a wellness counsellor dedicated to guiding individuals and families
            towards hope, healing, and a fulfilling life in Christ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-primary-cream p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-gold/20 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-gold" />
              </div>
              <h3 className="text-xl font-semibold text-primary-navy">Academic Excellence</h3>
            </div>
            <p className="text-primary-gray leading-relaxed">
              With a strong foundation in microbiology and cellular and molecular biology from Stellenbosch University,
              Pastor Jack brings a unique scientific perspective to his practice. Currently pursuing his M.Div, he combines
              academic rigor with spiritual wisdom.
            </p>
          </div>

          <div className="bg-primary-cream p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-gold/20 p-3 rounded-lg">
                <Award className="h-6 w-6 text-primary-gold" />
              </div>
              <h3 className="text-xl font-semibold text-primary-navy">Professional Certification</h3>
            </div>
            <p className="text-primary-gray leading-relaxed">
              As a Certified Specialist Wellness Counsellor with the ASCHP (Association for Supportive Counsellors & 
              Holistic Practitioners), Pastor Jack maintains the highest standards of professional practice and ethical conduct.
            </p>
          </div>

          <div className="bg-primary-cream p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-gold/20 p-3 rounded-lg">
                <Heart className="h-6 w-6 text-primary-gold" />
              </div>
              <h3 className="text-xl font-semibold text-primary-navy">Ministry Approach</h3>
            </div>
            <p className="text-primary-gray leading-relaxed">
              As a Ministry Coordinator at MyFiladelfia Biblical Counselling and Training, Pastor Jack's genuine love
              for people, exceptional listening skills, and insightful guidance have made him a sought-after
              counsellor and trainer.
            </p>
          </div>

          <div className="bg-primary-cream p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-gold/20 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary-gold" />
              </div>
              <h3 className="text-xl font-semibold text-primary-navy">Expertise & Vision</h3>
            </div>
            <p className="text-primary-gray leading-relaxed">
              Pastor Jack's approach integrates his extensive knowledge of systematic theology, qualitative research,
              and biblical studies. His counselling philosophy is grounded in the belief that every individual has a
              unique purpose and potential in God, helping them find hope and healing through Christ-centered guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;