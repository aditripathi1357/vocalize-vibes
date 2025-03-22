
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  region: string;
}

const languages: Language[] = [
  { code: 'hi', name: 'Hindi', region: 'India' },
  { code: 'ta', name: 'Tamil', region: 'India' },
  { code: 'te', name: 'Telugu', region: 'India' },
  { code: 'mr', name: 'Marathi', region: 'India' },
  { code: 'bn', name: 'Bengali', region: 'India, Bangladesh' },
  { code: 'ur', name: 'Urdu', region: 'India, Pakistan' },
  { code: 'gu', name: 'Gujarati', region: 'India' },
  { code: 'kn', name: 'Kannada', region: 'India' },
  { code: 'ml', name: 'Malayalam', region: 'India' },
  { code: 'pa', name: 'Punjabi', region: 'India, Pakistan' },
  { code: 'as', name: 'Assamese', region: 'India' },
  { code: 'ne', name: 'Nepali', region: 'Nepal, India' },
  { code: 'si', name: 'Sinhala', region: 'Sri Lanka' },
  { code: 'id', name: 'Indonesian', region: 'Indonesia' },
  { code: 'ms', name: 'Malay', region: 'Malaysia' },
  { code: 'vi', name: 'Vietnamese', region: 'Vietnam' },
  { code: 'th', name: 'Thai', region: 'Thailand' },
  { code: 'zh', name: 'Mandarin', region: 'China' },
  { code: 'ja', name: 'Japanese', region: 'Japan' },
  { code: 'ko', name: 'Korean', region: 'Korea' },
];

const LanguageSelector: React.FC<{ onSelect?: (lang: Language) => void }> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    if (onSelect) onSelect(language);
  };

  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lang.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 hover:bg-gray-50 transition-colors"
      >
        {selectedLanguage ? (
          <span>{selectedLanguage.name} - {selectedLanguage.region}</span>
        ) : (
          <span className="text-gray-500">Select a language</span>
        )}
        <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-80 overflow-auto"
        >
          <div className="p-2 sticky top-0 bg-white border-b">
            <input
              type="text"
              placeholder="Search languages..."
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="py-1">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleSelect(language)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between transition-colors"
                >
                  <div>
                    <span className="block font-medium">{language.name}</span>
                    <span className="text-xs text-gray-500">{language.region}</span>
                  </div>
                  {selectedLanguage?.code === language.code && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </button>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">No languages found</div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSelector;
