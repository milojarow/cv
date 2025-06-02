"use client";

import { useState } from 'react';
import CardCVEng from './components/CardCVEng';
import CardCVEsp from './components/CardCVEsp';

export default function Home() {
  const [language, setLanguage] = useState('eng'); // Default to English

  const handleLanguageChange = () => {
    setLanguage(language === 'eng' ? 'esp' : 'eng');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="container mx-auto">
        {language === 'eng' ? (
          <CardCVEng onLanguageChange={handleLanguageChange} />
        ) : (
          <CardCVEsp onLanguageChange={handleLanguageChange} />
        )}
      </div>
    </main>
  );
}
