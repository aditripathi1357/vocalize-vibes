
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "This tool has been invaluable for connecting with my grandmother who struggles with reading but understands Hindi perfectly. The natural voice quality is extraordinary.",
    author: "Priya Sharma",
    role: "Elementary School Teacher",
    language: "Hindi"
  },
  {
    id: 2,
    content: "As someone developing educational apps in Tamil, this platform has saved us countless hours of recording. The regional language support is unmatched.",
    author: "Vikram Rajan",
    role: "App Developer",
    language: "Tamil"
  },
  {
    id: 3,
    content: "The Bengali speech sounds remarkably natural. I've used it to create accessible learning materials for students with different abilities.",
    author: "Ananya Dasgupta",
    role: "Accessibility Specialist",
    language: "Bengali"
  },
  {
    id: 4,
    content: "We integrated this service into our website to provide equal access to our Urdu content. The voice quality and pronunciation accuracy are exceptional.",
    author: "Ahmed Khan",
    role: "Content Creator",
    language: "Urdu"
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="bg-secondary/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden h-full flex flex-col transform-gpu hover:scale-[1.02] transition-transform border border-white/10"
    >
      <div className="p-6 flex-grow">
        <motion.div 
          initial={{ rotate: -10, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
          className="mb-4 text-primary"
        >
          <Quote className="w-8 h-8 opacity-90" />
        </motion.div>
        <p className="text-white mb-4 leading-relaxed">{testimonial.content}</p>
      </div>
      <div className="px-6 pb-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-white font-medium">
              {testimonial.author.charAt(0)}
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">{testimonial.author}</p>
            <div className="flex items-center">
              <p className="text-xs text-white/70">{testimonial.role}</p>
              <span className="mx-1 text-white/30">•</span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/20 text-primary/90">
                {testimonial.language}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 overflow-hidden relative">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">What Our Users Say</h2>
          <p className="text-white/80 text-lg">
            Discover how our text-to-speech technology is transforming the way people communicate across different languages.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
