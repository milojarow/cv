"use client";

import { useState, useEffect } from 'react';
import { 
  Briefcase, Award, Book, Calendar, MapPin, Mail, Phone, 
  Languages, User, CheckCircle, FileText, Wrench, 
  ChevronRight, Clock, Globe
} from 'lucide-react';

// Import content files
import { contentEng } from './content/content-eng';
import { contentEsp } from './content/content-esp';

// Typewriter Animation Component
function TypewriterText() {
  const words = ['Language', 'Idioma'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) return; // Don't do anything while waiting
    
    const currentWord = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (isTyping) {
        // Typing animation
        if (charIndex < currentWord.length) {
          setCurrentText(currentWord.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
          // Word is complete, wait then start deleting
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            setIsTyping(false);
          }, 2000);
        }
      } else {
        // Deleting animation
        if (charIndex > 0) {
          setCurrentText(currentWord.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          // Word is fully deleted, switch to next word and start typing
          setCurrentWordIndex(prev => (prev + 1) % words.length);
          setCharIndex(0);
          setCurrentText('');
          setIsTyping(true);
        }
      }
    }, isTyping ? 120 : 80); // Typing speed: 120ms, Deleting speed: 80ms

    return () => clearTimeout(timer);
  }, [currentWordIndex, charIndex, isTyping, isWaiting, words]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className="min-w-[80px] text-left font-mono">
      {currentText}
      <span className={`transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
        |
      </span>
    </span>
  );
}

export default function CardCV() {
  const [activePage, setActivePage] = useState('principal');
  const [language, setLanguage] = useState('eng');
  
  const content = language === 'eng' ? contentEng : contentEsp;

  const toggleLanguage = () => {
    setLanguage(language === 'eng' ? 'esp' : 'eng');
  };

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Language Toggle Button */}
      <div className="bg-gray-50 p-4 flex justify-end border-b">
        <button 
          onClick={toggleLanguage}
          className="btn btn-sm btn-outline btn-primary hover:bg-blue-600 hover:text-white transition-colors flex items-center"
        >
          <Globe size={16} className="mr-2 flex-shrink-0" />
          <TypewriterText />
        </button>
      </div>
      
      {/* Header Section */}
      <div className="bg-blue-800 text-white p-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">{content.header.name}</h1>
            <h2 className="text-xl text-blue-200 font-medium">{content.header.title}</h2>
          </div>
          <div className="flex flex-col space-y-3 text-blue-100">
            <div className="flex items-center">
              <MapPin size={18} className="mr-3 flex-shrink-0" />
              <span>{content.header.location}</span>
            </div>
            <div className="flex items-center">
              <Mail size={18} className="mr-3 flex-shrink-0" />
              <span>{content.header.email}</span>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="mr-3 flex-shrink-0" />
              <span>{content.header.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-100 px-8 pt-4">
        <div className="flex space-x-1 -mb-px">
          <button 
            onClick={() => setActivePage('principal')}
            className={`relative px-6 py-3 font-semibold rounded-t-lg transition-all duration-200 ${
              activePage === 'principal' 
                ? 'bg-white text-blue-700 shadow-md border-t-2 border-l border-r border-blue-700 border-b-white z-10' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 border border-gray-300'
            }`}
          >
            {content.tabs.profile}
          </button>
          <button 
            onClick={() => setActivePage('historial')}
            className={`relative px-6 py-3 font-semibold rounded-t-lg transition-all duration-200 ${
              activePage === 'historial' 
                ? 'bg-white text-blue-700 shadow-md border-t-2 border-l border-r border-blue-700 border-b-white z-10' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800 border border-gray-300'
            }`}
          >
            {content.tabs.history}
          </button>
        </div>
      </div>
      
      {/* Tab content area with complete border */}
      <div className="bg-white border-t border-gray-300"></div>

      {activePage === 'principal' ? (
        <div className="p-8 max-w-5xl mx-auto space-y-8">
          {/* Professional Summary */}
          <div>
            <div className="flex items-center mb-4">
              <User size={22} className="text-blue-700 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">{content.sections.profile.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {content.sections.profile.description}
            </p>
          </div>

          {/* Technical Expertise */}
          <div>
            <div className="flex items-center mb-4">
              <Wrench size={22} className="text-blue-700 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">{content.sections.technical.title}</h3>
            </div>
            <div className="space-y-4">
              {content.sections.technical.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    <ChevronRight size={16} className="text-blue-700 mr-2" />
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6 leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education, Languages & Professional Competencies - Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Professional Competencies (Quadrants II & III) */}
            <div>
              {/* Professional Competencies */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 h-full">
                <div className="flex items-center mb-4">
                  <Award size={22} className="text-blue-700 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">{content.sections.competencies.title}</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {content.sections.competencies.items.map((comp, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle size={16} className="text-blue-700 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Education & Languages (Quadrants I & IV) */}
            <div className="space-y-8">
              {/* Education (Quadrant I) */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <Book size={22} className="text-blue-700 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">{content.sections.education.title}</h3>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-800">{content.sections.education.degree}</div>
                  <div className="text-gray-600">{content.sections.education.institution}</div>
                  <div className="text-gray-500 italic">{content.sections.education.license}</div>
                </div>
              </div>
              
              {/* Languages (Quadrant IV) */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <Languages size={22} className="text-blue-700 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">{content.sections.languages.title}</h3>
                </div>
                <div className="space-y-3">
                  {content.sections.languages.items.map((lang, index) => (
                    <div key={index}>
                      <div className="font-semibold text-gray-800">{lang.language}</div>
                      <div className="text-gray-600">{lang.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Objective */}
          <div>
            <div className="flex items-center mb-4">
              <FileText size={22} className="text-blue-700 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">{content.sections.objective.title}</h3>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
              <p className="text-gray-700 leading-relaxed">
                {content.sections.objective.description}
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase size={22} className="text-blue-700 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">{content.sections.experience.title}</h3>
            </div>

            {/* Primary Experience */}
            <div className="border-l-4 border-blue-700 pl-6 mb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{content.sections.experience.primary.position}</h4>
                  <div className="text-blue-700 font-semibold text-lg">{content.sections.experience.primary.company}</div>
                </div>
                <div className="flex items-center bg-blue-100 px-3 py-2 rounded-lg text-blue-800 font-medium">
                  <Calendar size={16} className="mr-2" />
                  <span>{content.sections.experience.primary.period}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {content.sections.experience.primary.description}
              </p>
              <ul className="space-y-3 text-gray-700">
                {content.sections.experience.primary.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{content.sections.experience.additional.title}</h3>
              
              <div className="space-y-6">
                {content.sections.experience.additional.jobs.map((job, index) => (
                  <div key={index} className="border-l-2 border-gray-300 pl-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg mb-1">{job.position}</h4>
                        <div className="text-gray-600">{job.company}</div>
                      </div>
                      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg text-gray-600 font-medium">
                        <Calendar size={16} className="mr-2" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">{content.sections.projects.title}</h3>
              <div className="space-y-4">
                {content.sections.projects.items.map((project, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
                    <h4 className="font-semibold text-gray-800 mb-2">{project.name}</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Timeline Page
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{content.timeline.title}</h3>
          <p className="text-gray-600 mb-8 text-lg">{content.timeline.subtitle}</p>
          
          <div className="relative">
            {/* Timeline line positioned exactly through the center of the blue circles */}
            <div className="absolute w-0.5 bg-blue-700" style={{left: '23px', top: '24px', bottom: '0'}}></div>
            
            <div className="space-y-8">
              {content.timeline.jobs.map((job, index) => (
                <div key={index} className="flex items-start relative">
                  {/* Clock icon positioned to align with the vertical line */}
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center relative shadow-sm">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-gray-800 text-lg">{job.position}</h4>
                        <span className="text-gray-600 font-medium">{job.period}</span>
                      </div>
                      <p className="text-blue-700 font-semibold mb-3">{job.company}</p>
                      <p className="text-gray-700 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-50 p-6 text-center text-gray-600 border-t">
        <p className="text-lg">{content.footer}</p>
      </div>
    </div>
  );
} 