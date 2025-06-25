import React from 'react';
import { Award, Users, Clock, Globe, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '5000+', label: 'Happy Clients', color: 'text-blue-600' },
    { icon: Clock, number: '10+', label: 'Years Experience', color: 'text-green-600' },
    { icon: Globe, number: '50+', label: 'Countries Served', color: 'text-purple-600' },
    { icon: Award, number: '99.2%', label: 'Success Rate', color: 'text-orange-600' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'Every application is meticulously reviewed to ensure accuracy and compliance with current regulations.'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'We understand that each case is unique and provide tailored solutions for your specific needs.'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Our track record speaks for itself with thousands of successful applications over the years.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-6">
            About NEU Visa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over a decade of experience in immigration services, we've helped thousands 
            of individuals and families achieve their dreams of international travel and relocation.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-navy-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-navy-800">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2015, NEU Visa emerged from a simple yet powerful vision: to make 
                international travel and immigration accessible to everyone. Our founders, 
                experienced immigration professionals, recognized the challenges people face 
                when navigating complex visa processes.
              </p>
              <p>
                What started as a small consulting firm has grown into a trusted partner for 
                thousands of clients worldwide. We've built our reputation on transparency, 
                reliability, and an unwavering commitment to client success.
              </p>
              <p>
                Today, we're proud to be one of the leading immigration service providers, 
                combining traditional expertise with modern technology to deliver exceptional results.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-navy-50 rounded-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional consultation" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-navy-800">Licensed</div>
                <div className="text-gray-600">& Regulated Service Provider</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-800 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-navy-800 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Section */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Our certified immigration consultants are here to guide you through every step of your journey.
          </p>
          <div className="inline-flex items-center space-x-4 bg-blue-50 px-6 py-3 rounded-lg">
            <Award className="h-6 w-6 text-blue-600" />
            <span className="text-blue-800 font-semibold">Certified & Licensed Professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;