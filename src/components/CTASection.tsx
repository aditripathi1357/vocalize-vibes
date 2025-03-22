
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="rounded-3xl bg-gradient-to-br from-primary to-accent overflow-hidden relative"
        >
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
            <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-white"></div>
          </div>
          
          <div className="relative z-10 py-16 px-8 md:px-16 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                  Ready to transform your content?
                </span>
              </motion.div>
              
              <motion.h2 
                variants={itemVariants} 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                Start giving voice to your words today
              </motion.h2>
              
              <motion.p 
                variants={itemVariants} 
                className="text-white/90 text-lg mb-10 max-w-2xl mx-auto"
              >
                Join thousands of users who are leveraging our technology to communicate effectively across language barriers.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3.5 bg-white text-primary rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/95 flex items-center justify-center group">
                  Sign Up Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="px-8 py-3.5 bg-transparent border border-white/30 hover:border-white/60 text-white rounded-full font-medium backdrop-blur-sm transition-all duration-300">
                  View Pricing
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
