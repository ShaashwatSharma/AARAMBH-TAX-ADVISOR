'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Shaashwat Sharma",
      position: "SDE",
      company: "Tech Company",
      content: "AARAMBH TAX ADVISOR has been handling our tax compliance for over 3 years. Their expertise in GST and income tax has saved us significant time and money. Highly recommended!",
      rating: 5,
      avatar: "SS"
    },
    {
      name: "Rekha Sharma",
      position: "Teacher",
      company: "Education Sector",
      content: "The team's professional approach and timely delivery of services have exceeded my expectations. They've helped me navigate complex tax regulations with ease.",
      rating: 5,
      avatar: "RS"
    },
    {
      name: "Vicky Sharma",
      position: "Business Owner",
      company: "Retail Business",
      content: "Outstanding service quality and attention to detail. They've been instrumental in my business growth by ensuring complete tax compliance and optimization.",
      rating: 5,
      avatar: "VS"
    },
    {
      name: "Sonu Tyagi",
      position: "Manufacturing Co.",
      company: "Manufacturing Sector",
      content: "Professional, reliable, and extremely knowledgeable. They've been our trusted partners for all tax and accounting needs. Their audit support is exceptional.",
      rating: 5,
      avatar: "ST"
    },
    {
      name: "Ayan Saifi",
      position: "Doctor",
      company: "Healthcare Sector",
      content: "As a healthcare professional, I needed guidance on various tax aspects. The team provided excellent support and helped me set up proper accounting systems.",
      rating: 5,
      avatar: "AS"
    },
    {
      name: "Neetu Goel",
      position: "Business Owner",
      company: "Service Business",
      content: "The level of expertise and personalized service we receive is outstanding. They've helped us optimize our tax structure and improve our financial planning.",
      rating: 5,
      avatar: "NG"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="testimonials" className="relative z-0 scroll-mt-[var(--header-h,72px)] py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
            What Our
            <span className="gradient-text block">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about 
            their experience working with AARAMBH TAX ADVISOR.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`card group cursor-pointer p-4 sm:p-6 lg:p-8 ${index >= 4 ? 'hidden lg:block' : ''}`}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 opacity-20" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs sm:text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Join Our Growing Client Family
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the same level of professional excellence and personalized service 
              that has earned us the trust of hundreds of satisfied clients.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">2000+</div>
                <p className="text-gray-600">Returns Filed</p>
              </div>
              <div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 