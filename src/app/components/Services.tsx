'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Calculator, 
  Shield, 
  TrendingUp, 
  Users, 
  BookOpen,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FileText,
      title: "TAN Registration",
      description: "Complete TAN registration services for businesses and individuals. Quick processing and compliance assurance.",
      features: ["Online Application", "Document Verification", "Quick Processing", "Compliance Support"],
      color: "blue"
    },
    {
      icon: Calculator,
      title: "IT Audit Consultancy",
      description: "Comprehensive IT audit services to ensure your business meets all regulatory requirements and best practices.",
      features: ["Risk Assessment", "Compliance Review", "Security Audit", "Recommendations"],
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Professional Tax Return",
      description: "Expert professional tax return filing services for businesses and professionals across all sectors.",
      features: ["Timely Filing", "Error-Free Returns", "Compliance Check", "Support"],
      color: "purple"
    },
    {
      icon: Users,
      title: "EPF/ESIC Returns",
      description: "Complete EPF and ESIC return filing services ensuring compliance with labor laws and regulations.",
      features: ["Monthly Returns", "Employee Management", "Compliance Check", "Audit Support"],
      color: "orange"
    },
    {
      icon: BookOpen,
      title: "Book Keeping",
      description: "Professional bookkeeping services to maintain accurate financial records and streamline your business operations.",
      features: ["Daily Transactions", "Monthly Reports", "Financial Statements", "Tax Preparation"],
      color: "indigo"
    },
    {
      icon: Shield,
      title: "TDS Returns",
      description: "Comprehensive TDS return filing services ensuring timely compliance and avoiding penalties.",
      features: ["Quarterly Returns", "Form 16/16A", "Compliance Check", "Penalty Avoidance"],
      color: "red"
    },
    {
      icon: TrendingUp,
      title: "GST Returns",
      description: "Complete GST return filing services for businesses of all sizes with expert guidance and support.",
      features: ["GSTR-1, 3B, 9", "Input Tax Credit", "Reconciliation", "Compliance"],
      color: "teal"
    },
    {
      icon: Calculator,
      title: "Income Tax Returns",
      description: "Professional income tax return filing services for individuals and businesses with maximum tax optimization.",
      features: ["Tax Planning", "Deduction Optimization", "Timely Filing", "Refund Processing"],
      color: "pink"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    purple: "bg-purple-500 text-white",
    orange: "bg-orange-500 text-white",
    indigo: "bg-indigo-500 text-white",
    red: "bg-red-500 text-white",
    teal: "bg-teal-500 text-white",
    pink: "bg-pink-500 text-white"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="relative z-0 scroll-mt-[var(--header-h,72px)] py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
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
            Our Professional
            <span className="gradient-text block">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tax and accounting solutions tailored to meet all your business needs. 
            From registration to compliance, we handle everything with expertise and precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card group cursor-pointer p-4 sm:p-6 lg:p-8 relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Service Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                {/* Service Title */}
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description - Hidden on mobile */}
                <p className="hidden sm:block text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Get Started Button */}
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  <span className="text-xs sm:text-sm">Get Started</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Every business is unique. We offer customized tax and accounting solutions 
              tailored to your specific requirements and industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                onClick={() => window.open('tel:+919258011110', '_self')}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now: +91 9258011110
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 