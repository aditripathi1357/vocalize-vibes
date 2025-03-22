
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
    >
      <div className="p-6 flex-grow">
        <div className="mb-4 text-primary">
          <Quote className="w-8 h-8 opacity-80" />
        </div>
        <p className="text-foreground/80 mb-4">{testimonial.content}</p>
      </div>
      <div className="px-6 pb-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
              {testimonial.author.charAt(0)}
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
            <div className="flex items-center">
              <p className="text-xs text-foreground/60">{testimonial.role}</p>
              <span className="mx-1 text-foreground/30">•</span>
              <span className="text-xs font-medium px-1.5 py-0.5 rounded bg-primary/10 text-primary">
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

  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Say</h2>
          <p className="text-foreground/70 text-lg">
            Discover how our text-to-speech technology is transforming the way people communicate across different languages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
