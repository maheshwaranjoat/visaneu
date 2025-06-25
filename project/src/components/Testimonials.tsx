import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'London, UK',
      service: 'UK Spouse Visa',
      rating: 5,
      text: 'NEU Visa made what seemed like an impossible process incredibly smooth. Their attention to detail and constant communication gave us confidence throughout. We got our visa approved in just 3 weeks!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Michael Chen',
      location: 'Manchester, UK',
      service: 'Passport Renewal',
      rating: 5,
      text: 'Exceptional service! My passport was expiring and I needed it urgently for a business trip. NEU Visa handled everything professionally and I received my new passport within 10 days. Highly recommended!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Johnson',
      location: 'Birmingham, UK',
      service: 'Schengen Visa',
      rating: 5,
      text: 'The team at NEU Visa is incredibly knowledgeable and helpful. They guided me through the entire Schengen visa process and ensured all my documents were perfect. My family trip to Europe was a success!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Rajesh Patel',
      location: 'Leicester, UK',
      service: 'OCI Application',
      rating: 5,
      text: 'Outstanding service from start to finish. The OCI application process was complex, but NEU Visa simplified everything for me. They kept me updated at every stage and delivered exactly as promised.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Emma Williams',
      location: 'Leeds, UK',
      service: 'Student Visa',
      rating: 5,
      text: 'I was stressed about my student visa application, but NEU Visa took care of everything. Their expertise and guidance made the process stress-free. I received my visa approval faster than expected!',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-white to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -top-2 -right-2 bg-blue-600 p-2 rounded-full">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Stars */}
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Client Info */}
                <div>
                  <h4 className="text-2xl font-bold text-navy-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 mb-2">{testimonials[currentIndex].location}</p>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {testimonials[currentIndex].service}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button
              onClick={goToPrevious}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-blue-50"
            >
              <ChevronLeft className="h-6 w-6 text-navy-800" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-blue-50"
            >
              <ChevronRight className="h-6 w-6 text-navy-800" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '5000+', label: 'Happy Clients' },
            { number: '99.2%', label: 'Success Rate' },
            { number: '10+', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-navy-800">4.9/5</span>
            </div>
            <p className="text-gray-600 mb-6">Based on 500+ Google Reviews</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;