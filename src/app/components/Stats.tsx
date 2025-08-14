'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, FileText, Award, Clock, TrendingUp } from 'lucide-react';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: FileText,
      number: "2000+",
      label: "Returns Filed",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      number: "2+",
      label: "Years of Experience",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
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
    <section id="stats" className="relative z-0 scroll-mt-[var(--header-h,72px)] py-16 lg:py-24 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="container-custom px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <motion.div
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
            Trusted by Businesses Across India
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've helped hundreds of businesses navigate complex tax regulations and maintain compliance. 
            Our expertise spans across various industries and business sizes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats; 