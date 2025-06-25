import React from 'react';
import { 
  Plane, 
  FileText, 
  MapPin, 
  Shield, 
  Globe, 
  Clock,
  CheckCircle,
  ArrowRight,
  Umbrella
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: 'UK Visa Services',
      description: 'Complete assistance for all UK visa categories including work, study, family, business, and visitor visas.',
      features: ['Visit Visa', 'Employment Visa', 'Study Visa', 'Business Visa', 'Transit Visa', 'Settlement Visa', 'Dependent Visa'],
      color: 'from-blue-500 to-blue-600',
      accent: 'text-blue-600'
    },
    {
      icon: FileText,
      title: 'Passport Services',
      description: 'New passport applications, renewals, and replacements with expedited processing options.',
      features: ['New Applications', 'Renewals', 'Lost/Damaged', 'Urgent Processing'],
      color: 'from-green-500 to-green-600',
      accent: 'text-green-600'
    },
    {
      icon: MapPin,
      title: 'Schengen Visa',
      description: 'Travel across 26 European countries with our comprehensive Schengen visa assistance.',
      features: ['Tourist Visa', 'Business Visa', 'Transit Visa', 'Multiple Entry'],
      color: 'from-orange-500 to-orange-600',
      accent: 'text-orange-600'
    },
    {
      icon: Shield,
      title: 'Police Clearance',
      description: 'Fast and reliable police clearance certificates for various countries and purposes.',
      features: ['UK PCC', 'Indian PCC', 'Other Countries', 'Apostille Service'],
      color: 'from-red-500 to-red-600',
      accent: 'text-red-600'
    },
    {
      icon: Globe,
      title: 'OCI & Citizenship',
      description: 'Overseas Citizen of India services and citizenship applications with expert guidance.',
      features: ['OCI Application', 'OCI Renewal', 'Citizenship Services', 'Document Review'],
      color: 'from-indigo-500 to-indigo-600',
      accent: 'text-indigo-600'
    },
    {
      icon: Umbrella,
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance coverage to protect you during your international journeys.',
      features: ['Medical Coverage', 'Trip Cancellation', 'Lost Baggage', 'Emergency Assistance'],
      color: 'from-purple-500 to-purple-600',
      accent: 'text-purple-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From visa applications to passport renewals, we provide comprehensive immigration 
            services with personalized attention and guaranteed results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <service.icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className={`h-5 w-5 ${service.accent} flex-shrink-0`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`group/btn w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg border-2 ${service.accent.replace('text-', 'border-')} ${service.accent} hover:bg-gradient-to-r ${service.color} hover:text-white transition-all duration-200 font-semibold`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-navy-800 text-center mb-12">
            Our Simple 4-Step Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                description: 'Book a free consultation to discuss your requirements and get expert advice.',
                icon: Clock
              },
              {
                step: '02',
                title: 'Document Review',
                description: 'We review your documents and provide a comprehensive checklist of requirements.',
                icon: FileText
              },
              {
                step: '03',
                title: 'Application Processing',
                description: 'Our experts handle your application with meticulous attention to detail.',
                icon: Shield
              },
              {
                step: '04',
                title: 'Success & Support',
                description: 'Receive your approved documents with continued support throughout the process.',
                icon: CheckCircle
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-navy-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gold-400 text-navy-800 text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {process.step}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-navy-800 mb-3">{process.title}</h4>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;