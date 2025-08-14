'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle,
  Star,
  // TrendingUp,
  // FileText
} from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We maintain the highest standards of professional ethics and integrity in all our dealings."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We ensure all deadlines are met with precision and accuracy, never compromising on quality."
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Your success is our priority. We provide personalized solutions tailored to your specific needs."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our services, from consultation to execution."
    }
  ];

  const expertise = [
    "Tax Planning & Optimization",
    "GST Compliance & Returns",
    "Income Tax Returns",
    "TDS Management",
    "Bookkeeping & Accounting",
    "Audit & Assurance",
    "Business Registration",
    "Compliance Management"
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
    <section id="about" className="relative z-0 scroll-mt-[var(--header-h,72px)] py-16 lg:py-24 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      {/* <div className="container-custom relative z-10">      changed now   */} 
      <div className="container-custom relative z-10 px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            // className="space-y-8" changes now 
            className="space-y-8 text-center lg:text-left"

          >
            <motion.div variants={itemVariants}>
              {/* <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                About Our Firm
              </div> */}
              
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Professional Excellence in
                <span className="gradient-text">Tax & Accounting</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                AARAMBH TAX ADVISOR led by Advocate UTKARSH BHARDWAJ is a leading professional services firm specializing in 
                comprehensive tax and accounting solutions. With over 2 years of experience, we have 
                helped hundreds of businesses navigate complex tax regulations and achieve financial success.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of qualified professionals combines deep expertise with personalized service to 
                deliver solutions that drive your business forward. We believe in building long-term 
                relationships based on trust, transparency, and exceptional results.
              </p>
            </motion.div>

            {/* Expertise Areas */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
              {/* <div className="grid grid-cols-2 gap-3"> */}
              <div className="grid grid-cols-2 gap-3 justify-items-center lg:justify-items-start">

                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                  }
                }}
                // className="btn-primary" changes now 
                className="btn-primary mx-auto lg:mx-0"

                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            // className="space-y-8"
            className="space-y-8 max-w-md mx-auto lg:max-w-none lg:mx-0"

          >
            {/* Values Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="card text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Achievement Stats */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="w-4 h-4 text-yellow-400 fill-current opacity-50" />
                  </div>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">99%</div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">2+</div>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">500+</div>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 