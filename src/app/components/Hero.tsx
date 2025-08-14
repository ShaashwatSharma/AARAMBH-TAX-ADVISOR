'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  BadgeCheck,
  ShieldCheck,
  Receipt,
  Banknote,
} from 'lucide-react';

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const features = [
    'Professional Tax Consultancy',
    'GST & Income Tax Returns',
    'TDS Returns & Bookkeeping',
    'IT Audit & Compliance',
  ];

  return (
    <section
      id="home"
      className="relative flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden py-16 lg:py-24"
    >
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      <div className="container-custom px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center px-3 lg:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs lg:text-sm font-medium"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                <span className="hidden sm:inline">Professional Tax & Accounting Services</span>
                <span className="sm:hidden">Tax & Accounting Services</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight"
              >
                All Your
                <span className="gradient-text block">Accounting &</span>
                <span className="gradient-text block">Business Needs</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Expert tax consultancy, compliance, and business solutions tailored to your needs.
                Professional, reliable, and comprehensive accounting services.
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  variants={itemVariants}
                  className="flex items-center space-x-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm lg:text-base text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 lg:gap-4">
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight =
                      parseInt(
                        getComputedStyle(document.documentElement).getPropertyValue('--header-h')
                      ) || 72;
                    const elementPosition =
                      element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                  }
                }}
                className="btn-primary flex items-center justify-center space-x-2 py-3 lg:py-4 text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.button>

              <motion.button
                onClick={() => window.open('tel:+919258011110', '_self')}
                className="btn-secondary flex items-center justify-center space-x-2 py-3 lg:py-4 text-sm lg:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Call Now</span>
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs lg:text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9258011110</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="break-words">advutkarshbharadwaj@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Service Cards (with Lucide icons) */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-6">
              {[
                { title: 'TAN Registration', Icon: BadgeCheck, color: 'bg-blue-500', delay: 0.1 },
                { title: 'IT Audit Consultancy', Icon: ShieldCheck, color: 'bg-green-500', delay: 0.2 },
                { title: 'GST Returns', Icon: Receipt, color: 'bg-purple-500', delay: 0.3 },
                { title: 'Income Tax Returns', Icon: Banknote, color: 'bg-orange-500', delay: 0.4 },
              ].map((service) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className={`${service.color} text-white p-3 sm:p-4 lg:p-10 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
                  style={{ animationDelay: `${service.delay}s` }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      const headerHeight =
                        parseInt(
                          getComputedStyle(document.documentElement).getPropertyValue('--header-h')
                        ) || 72;
                      const elementPosition =
                        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                    }
                  }}
                >
                  <service.Icon
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 mb-2 sm:mb-4"
                    aria-hidden="true"
                  />
                  <h3 className="font-semibold text-xs sm:text-sm lg:text-lg leading-tight">
                    {service.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;









// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

// const Hero = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const features = [
//     "Professional Tax Consultancy",
//     "GST & Income Tax Returns",
//     "TDS Returns & Bookkeeping",
//     "IT Audit & Compliance"
//   ];

//   return (
//     <section id="home" className="relative flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden py-16 lg:py-24">
//       {/* Simple Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl"></div>
//         <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl"></div>
//         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl"></div>
//       </div>

//       <div className="container-custom px-4 relative z-10">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
//         >
//           {/* Left Content */}
//           <motion.div variants={itemVariants} className="space-y-6 lg:space-y-8">
//             <div className="space-y-4">
//               <motion.div
//                 variants={itemVariants}
//                 className="inline-flex items-center px-3 lg:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs lg:text-sm font-medium"
//               >
//                 <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
//                 <span className="hidden sm:inline">Professional Tax & Accounting Services</span>
//                 <span className="sm:hidden">Tax & Accounting Services</span>
//               </motion.div>
              
//               <motion.h1
//                 variants={itemVariants}
//                 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight"
//               >
//                 All Your
//                 <span className="gradient-text block">Accounting &</span>
//                 <span className="gradient-text block">Business Needs</span>
//               </motion.h1>
              
//               <motion.p
//                 variants={itemVariants}
//                 className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg"
//               >
//                 Expert tax consultancy, compliance, and business solutions tailored to your needs. 
//                 Professional, reliable, and comprehensive accounting services.
//               </motion.p>
//             </div>

//             {/* Features List */}
//             <motion.div variants={itemVariants} className="space-y-3">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={feature}
//                   variants={itemVariants}
//                   className="flex items-center space-x-3"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 flex-shrink-0" />
//                   <span className="text-sm lg:text-base text-gray-700 font-medium">{feature}</span>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Buttons */}
//             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 lg:gap-4">
//               <motion.button
//                 onClick={() => {
//                   const element = document.getElementById('contact');
//                   if (element) {
//                     const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
//                     const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
//                     window.scrollTo({ top: elementPosition, behavior: 'smooth' });
//                   }
//                 }}
//                 className="btn-primary flex items-center justify-center space-x-2 py-3 lg:py-4 text-sm lg:text-base"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span>Get Free Consultation</span>
//                 <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
//               </motion.button>
              
//               <motion.button
//                 onClick={() => window.open('tel:+919258011110', '_self')}
//                 className="btn-secondary flex items-center justify-center space-x-2 py-3 lg:py-4 text-sm lg:text-base"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Phone className="w-4 h-4 lg:w-5 lg:h-5" />
//                 <span>Call Now</span>
//               </motion.button>
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs lg:text-sm text-gray-600">
//               <div className="flex items-center space-x-2">
//                 <Phone className="w-4 h-4" />
//                 <span>+91 9258011110</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Mail className="w-4 h-4" />
//                 <span className="break-words">advutkarshbharadwaj@gmail.com</span>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Service Cards */}
//           <motion.div variants={itemVariants} className="relative">
//             <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-6">
//               {[
//                 {
//                   title: "TAN Registration",
//                   icon: "📋",
//                   color: "bg-blue-500",
//                   delay: 0.1
//                 },
//                 {
//                   title: "IT Audit Consultancy",
//                   icon: "🔍",
//                   color: "bg-green-500",
//                   delay: 0.2
//                 },
//                 {
//                   title: "GST Returns",
//                   icon: "📊",
//                   color: "bg-purple-500",
//                   delay: 0.3
//                 },
//                 {
//                   title: "Income Tax Returns",
//                   icon: "💰",
//                   color: "bg-orange-500",
//                   delay: 0.4
//                 }
//               ].map((service,) => (
//                 <motion.div
//                   key={service.title}
//                   variants={itemVariants}
//                   className={`${service.color} text-white p-3 sm:p-4 lg:p-10 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
//                   style={{ animationDelay: `${service.delay}s` }}
//                   whileHover={{ scale: 1.05 }}
//                   onClick={() => {
//                     const element = document.getElementById('services');
//                     if (element) {
//                       const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
//                       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
//                       window.scrollTo({ top: elementPosition, behavior: 'smooth' });
//                     }
//                   }}
//                 >
//                   <div className="text-xl sm:text-2xl lg:text-5xl mb-2 sm:mb-4">{service.icon}</div>
//                   <h3 className="font-semibold text-xs sm:text-sm lg:text-lg leading-tight">{service.title}</h3>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Simple Scroll Indicator */}
//       {/* <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//       >
//         <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </motion.div> */}
//     </section>
//   );
// };

// export default Hero; 