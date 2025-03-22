
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-background/95 border-t border-white/10 pt-16 pb-8">
      <motion.div 
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <div className="flex items-center mb-6">
              <span className="text-primary text-2xl font-bold mr-1">Speak</span>
              <span className="text-white text-2xl font-light">Verse</span>
              <div className="speech-wave ml-1 mt-1">
                <div className="speech-wave-bar bg-primary h-1.5 animate-wave-1"></div>
                <div className="speech-wave-bar bg-primary h-2 animate-wave-2"></div>
                <div className="speech-wave-bar bg-primary h-3 animate-wave-3"></div>
                <div className="speech-wave-bar bg-primary h-2 animate-wave-4"></div>
                <div className="speech-wave-bar bg-primary h-1.5 animate-wave-5"></div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 text-sm">
              Transforming text into natural speech across multiple regional languages, making content accessible to everyone.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@speakverse.ai" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/speakverse" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4 text-lg">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Documentation</a></li>
            </ul>
          </motion.div>
          
          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Support Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Language List</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Community</a></li>
            </ul>
          </motion.div>
          
          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Contact</a></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block duration-200">Terms of Service</Link></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SpeakVerse. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <Link to="/privacy" className="text-gray-500 hover:text-primary text-sm transition-colors mr-6">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
