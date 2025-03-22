
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

// Import framer-motion if not done yet
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  useEffect(() => {
    // Add scroll fade-in animation logic
    const fadeInElements = document.querySelectorAll('.fade-in-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });
    
    fadeInElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      fadeInElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      
      <Footer />
      
      {/* Scroll to top button - appears when scrolling down */}
      <ScrollToTopButton />
    </div>
  );
};

// Scroll to top button component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary/90 text-white shadow-lg hover:bg-primary transition-colors z-40"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </motion.button>
      )}
    </>
  );
};

export default Index;
