import React from 'react';
import { CheckCircle, ArrowRight, Star, Users, Award, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustIndicators = [
    { icon: Users, text: '5000+ Happy Clients', color: 'text-green-600' },
    { icon: Award, text: 'Licensed & Certified', color: 'text-blue-600' },
    { icon: Clock, text: '10+ Years Experience', color: 'text-purple-600' },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-navy-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-2 fill-current" />
                Trusted by Thousands
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-navy-800 leading-tight">
                Your Trusted Partner for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-navy-800">
                  {' '}Visa & Passport{' '}
                </span>
                Services
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Navigate the complex world of visas and immigration with confidence. 
                Our expert team provides personalized assistance for all your travel document needs.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                'Fast processing with guaranteed results',
                'Expert guidance through every step',
                'Transparent pricing with no hidden fees',
                'Dedicated support until completion'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Free Consultation
                <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="border-2 border-navy-800 text-navy-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-navy-800 hover:text-white transition-all duration-200">
                View Our Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {trustIndicators.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                  <span className="font-semibold text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-navy-800 mb-4">Quick Service Check</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { flag: '🇬🇧', country: 'UK Visa', time: '15-20 days' },
                      { flag: '🇪🇺', country: 'Schengen', time: '10-15 days' },
                      { flag: '🇮🇳', country: 'Indian Passport', time: '30-45 days' },
                      { flag: '🌍', country: 'OCI Services', time: '60-90 days' }
                    ].map((service, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="text-2xl mb-2">{service.flag}</div>
                        <div className="font-semibold text-sm text-gray-800">{service.country}</div>
                        <div className="text-xs text-gray-600 mt-1">{service.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-green-800">Success Rate</div>
                      <div className="text-2xl font-bold text-green-600">99.2%</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-blue-800">Processing Time</div>
                      <div className="text-2xl font-bold text-blue-600">50% Faster</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-200 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-navy-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;