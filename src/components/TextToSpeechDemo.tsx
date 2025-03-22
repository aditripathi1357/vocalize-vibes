
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, PauseCircle, Volume2 } from 'lucide-react';

const TextToSpeechDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [text, setText] = useState("Experience natural-sounding speech in multiple languages.");
  
  // Animation variants for the wave bars
  const waveVariants = {
    playing: (i: number) => ({
      scaleY: [1, 1.5, 1],
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: 0.8,
        delay: i * 0.1,
      },
    }),
    stopped: { scaleY: 1 }
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Auto-stop after 5 seconds for demo purposes
    if (isPlaying) {
      const timer = setTimeout(() => {
        setIsPlaying(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  const languages = [
    { name: 'English', sample: "Experience natural-sounding speech in multiple languages." },
    { name: 'Hindi', sample: "कई भाषाओं में प्राकृतिक-ध्वनि वाली आवाज़ का अनुभव करें।" },
    { name: 'Spanish', sample: "Experimente el habla de sonido natural en varios idiomas." },
    { name: 'French', sample: "Découvrez la parole naturelle dans plusieurs langues." },
    { name: 'Mandarin', sample: "体验多种语言的自然发音语音。" },
    { name: 'Arabic', sample: "جرب الكلام ذو الصوت الطبيعي بلغات متعددة." },
  ];

  const changeLanguage = (language: string) => {
    const selectedLanguage = languages.find(lang => lang.name === language);
    if (selectedLanguage) {
      setCurrentLanguage(language);
      setText(selectedLanguage.sample);
      if (isPlaying) setIsPlaying(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="glass rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 z-0"></div>
        
        {/* Language selector */}
        <div className="relative z-10 mb-6 flex flex-wrap gap-2">
          {languages.map((language) => (
            <button
              key={language.name}
              onClick={() => changeLanguage(language.name)}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                currentLanguage === language.name
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white/50 hover:bg-white/80 text-foreground/70'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
        
        {/* Text display */}
        <div className="relative z-10 bg-white/40 backdrop-blur-sm rounded-xl p-4 mb-6 min-h-[120px] flex items-center justify-center">
          <p className="text-center text-foreground/90 font-medium">{text}</p>
        </div>
        
        {/* Playback controls */}
        <div className="relative z-10 flex items-center justify-center">
          <button 
            onClick={togglePlayback}
            className="group bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            {isPlaying ? (
              <PauseCircle className="w-6 h-6 group-hover:scale-105 transition-transform" />
            ) : (
              <Play className="w-6 h-6 ml-1 group-hover:scale-105 transition-transform" />
            )}
          </button>
          
          {/* Sound wave animation */}
          <div className="ml-4 flex items-end h-8 gap-[2px]">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-primary rounded-full"
                style={{ height: `${(i % 3 + 1) * 8}px` }}
                variants={waveVariants}
                initial="stopped"
                animate={isPlaying ? "playing" : "stopped"}
                custom={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeechDemo;
