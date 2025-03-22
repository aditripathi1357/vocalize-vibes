
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Mic, HeadphonesIcon, Sparkles, Layout, SpeakerIcon } from 'lucide-react';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
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
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-xl p-6 h-full"
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
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

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "40+ Regional Languages",
      description: "Support for a diverse range of languages including Hindi, Tamil, Bengali, Urdu, and many more regional dialects."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Natural Voice Quality",
      description: "Advanced neural voice technology that produces human-like speech with proper intonation and emotion."
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Accessibility Focus",
      description: "Designed to help users with visual impairments or reading difficulties access written content effortlessly."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Custom Voice Options",
      description: "Choose from a variety of voice styles and customize parameters like speed, pitch, and emphasis."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Easy Integration",
      description: "Simple API and SDK options for developers to integrate text-to-speech into websites and applications."
    },
    {
      icon: <SpeakerIcon className="w-6 h-6" />,
      title: "Audio Export",
      description: "Export speech as MP3 or WAV files for use in presentations, videos, or educational content."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Text into Natural Speech
          </h2>
          <p className="text-foreground/70 text-lg">
            Our platform uses advanced AI to convert text into lifelike speech across dozens of regional languages and dialects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
