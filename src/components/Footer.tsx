
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, GitHub } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-primary text-2xl font-bold mr-1">Speak</span>
              <span className="text-2xl font-light">Verse</span>
              <div className="speech-wave ml-1 mt-1">
                <div className="speech-wave-bar h-1.5 animate-wave-1"></div>
                <div className="speech-wave-bar h-2 animate-wave-2"></div>
                <div className="speech-wave-bar h-3 animate-wave-3"></div>
                <div className="speech-wave-bar h-2 animate-wave-4"></div>
                <div className="speech-wave-bar h-1.5 animate-wave-5"></div>
              </div>
            </div>
            
            <p className="text-foreground/70 mb-6 text-sm">
              Transforming text into natural speech across multiple regional languages, making content accessible to everyone.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Features</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">API</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Integrations</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Support Center</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Language List</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Community</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} SpeakVerse. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center">
            <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors mr-6">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
