
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TextToSpeechDemo from './TextToSpeechDemo';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full">
              <p className="text-primary text-sm font-medium">
                Supporting 40+ Regional Languages
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Give Your Text</span>
              <span className="block text-gradient">A Universal Voice</span>
            </h1>
            
            <p className="text-foreground/80 text-lg mb-8 max-w-lg">
              Transform written text into natural-sounding speech across multiple languages and dialects. Crafted for accessibility, education, and global communication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-6 py-3 bg-white hover:bg-gray-50 text-foreground rounded-full font-medium shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300">
                Explore Voices
              </button>
            </div>
          </motion.div>
          
          {/* Demo Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Background decoration elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/5 rounded-full filter blur-2xl"></div>
            
            {/* Demo component */}
            <div className="relative">
              <TextToSpeechDemo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
