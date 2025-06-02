"use client";

import { useState } from 'react';
import { 
  Briefcase, Award, Book, Calendar, MapPin, Mail, Phone, 
  Languages, User, CheckCircle, FileText, Wrench, 
  ChevronRight, Clock, Globe
} from 'lucide-react';

export default function CardCVEng({ onLanguageChange }) {
  const [activePage, setActivePage] = useState('principal');

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-300">
      {/* Language Toggle Button */}
      <div className="bg-gray-100 p-2 flex justify-end">
        <button 
          onClick={onLanguageChange}
          className="btn btn-sm btn-outline btn-primary"
        >
          <Globe size={16} className="mr-1" />
          Español
        </button>
      </div>
      
      {/* Header Section */}
      <div className="bg-blue-800 text-white p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">ROLANDO AHUJA MARTÍNEZ</h1>
            <h2 className="text-xl mt-1 text-blue-200 font-semibold">Mechatronics Engineer | Process Optimization Specialist</h2>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col">
            <div className="flex items-center mt-1">
              <MapPin size={16} className="mr-2 flex-shrink-0" />
              <span>Nuevo Laredo, Tamaulipas</span>
            </div>
            <div className="flex items-center mt-1">
              <Mail size={16} className="mr-2 flex-shrink-0" />
              <span>ahuja@hush.com</span>
            </div>
            <div className="flex items-center mt-1">
              <Phone size={16} className="mr-2 flex-shrink-0" />
              <span>867-181-2166</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-100 border-b border-gray-300">
        <div className="flex">
          <button 
            onClick={() => setActivePage('principal')}
            className={`px-4 py-3 font-semibold transition-colors ${activePage === 'principal' ? 'bg-white text-blue-700 border-t-2 border-blue-700' : 'text-gray-600 hover:text-gray-800'}`}
          >
            Professional Profile
          </button>
          <button 
            onClick={() => setActivePage('historial')}
            className={`px-4 py-3 font-semibold transition-colors ${activePage === 'historial' ? 'bg-white text-blue-700 border-t-2 border-blue-700' : 'text-gray-600 hover:text-gray-800'}`}
          >
            Chronological History
          </button>
        </div>
      </div>

      {activePage === 'principal' ? (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-1">
            {/* Professional Summary */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <User size={20} className="text-blue-700 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">PROFESSIONAL PROFILE</h3>
              </div>
              <p className="text-gray-700">
                Mechatronics Engineer with solid experience in manufacturing process optimization and production system analysis. Specialized in applying quality techniques and problem-solving to improve operational efficiency.
              </p>
            </div>

            {/* Technical Expertise */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <Wrench size={20} className="text-blue-700 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">TECHNICAL SKILLS</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-blue-700 mr-1" />
                    <span className="font-semibold">Manufacturing Processes</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Process analysis and optimization, value stream mapping, parameter control</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-blue-700 mr-1" />
                    <span className="font-semibold">Quality Systems</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Core Tools (PFMEA, Control Plan, Flow Chart), 8D's, Ishikawa, 5 Why's</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-blue-700 mr-1" />
                    <span className="font-semibold">Technical Design</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Solid Edge, 3D part design, GD&T, fixtures and adaptations</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-blue-700 mr-1" />
                    <span className="font-semibold">System Monitoring</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Critical parameter analysis, temperature profiles, technical documentation</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-blue-700 mr-1" />
                    <span className="font-semibold">Computer Systems</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Technical support, network configuration, user administration</p>
                </div>
              </div>
            </div>

            {/* Education & Languages */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <div className="flex items-center mb-2">
                  <Book size={20} className="text-blue-700 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">EDUCATION</h3>
                </div>
                <div>
                  <div className="font-semibold">Mechatronics Engineering</div>
                  <div className="text-gray-600 text-sm">Technological Institute of Nuevo Laredo</div>
                  <div className="text-gray-500 text-sm italic">License: 11716565</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <Languages size={20} className="text-blue-700 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">LANGUAGES</h3>
                </div>
                <div>
                  <div className="font-semibold">Spanish</div>
                  <div className="text-gray-600 text-sm">Native</div>
                </div>
                <div className="mt-1">
                  <div className="font-semibold">English</div>
                  <div className="text-gray-600 text-sm">Conversational</div>
                </div>
              </div>
            </div>
            
            {/* Professional Competencies */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <Award size={20} className="text-blue-700 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">PROFESSIONAL COMPETENCIES</h3>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {[
                  "Problem solving",
                  "Critical analysis", 
                  "Adaptability",
                  "Work under pressure",
                  "Effective communication",
                  "Continuous improvement"
                ].map((comp, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={14} className="text-blue-700 mr-1" />
                    <span className="text-sm">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Objective */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <FileText size={20} className="text-blue-700 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">PROFESSIONAL OBJECTIVE</h3>
              </div>
              <p className="text-gray-700 bg-blue-50 p-3 rounded border-l-4 border-blue-700 text-sm">
                Contribute my experience in engineering and process optimization to the EMS Manufacturing Engineer position at TKR, applying my knowledge in analysis and process improvement to contribute to the development and implementation of solutions that increase operational efficiency and product quality.
              </p>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <Briefcase size={20} className="text-blue-700 mr-2" />
              <h3 className="text-lg font-bold text-gray-800">RELEVANT PROFESSIONAL EXPERIENCE</h3>
            </div>

            {/* Primary Experience */}
            <div className="mb-5 border-l-4 border-blue-700 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Process Engineer</h4>
                  <div className="text-blue-700 font-semibold">Modine Heat Transfer</div>
                </div>
                <div className="flex items-center bg-blue-100 px-2 py-1 rounded text-sm text-blue-800">
                  <Calendar size={14} className="mr-1" />
                  <span>2015 - 2018</span>
                </div>
              </div>
              <p className="text-gray-700 mt-2 mb-3">
                Led the optimization and documentation of manufacturing processes for high-precision radiators for premium clients (John Deere, Caterpillar, Tesla). My main responsibilities included:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Development and implementation of critical technical documentation: flow diagrams, failure mode analysis (PFMEA) and control plans for each production process.</li>
                <li>Monitoring and analysis of critical parameters to ensure compliance with technical specifications and quality standards.</li>
                <li>Design of fixtures and adaptations using Solid Edge to optimize manufacturing processes and facilitate rework operations.</li>
                <li>Implementation of improvements in safety, efficiency and ergonomics in multiple workstations.</li>
                <li>Analysis and resolution of technical problems applying structured methodologies (8D's, Ishikawa, 5 Why's).</li>
              </ul>
            </div>

            {/* Additional Experience */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-800 mb-3">ADDITIONAL PROFESSIONAL EXPERIENCE</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-gray-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">Operations Supervisor</h4>
                      <div className="text-gray-600">National Electoral Institute</div>
                    </div>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">
                      <Calendar size={14} className="mr-1" />
                      <span>2018</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-1 text-sm">
                    Logistics coordination, personnel training and supervision of critical operations, ensuring compliance with technical specifications and quality standards.
                  </p>
                </div>

                <div className="border-l-2 border-gray-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">Logistics Operator</h4>
                      <div className="text-gray-600">Integra Solution</div>
                    </div>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">
                      <Calendar size={14} className="mr-1" />
                      <span>2019 - 2020</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-1 text-sm">
                    Warehouse and inventory operations management, material handling optimization and contribution to efficient logistics.
                  </p>
                </div>

                <div className="border-l-2 border-gray-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">Transport Logistics Specialist</h4>
                      <div className="text-gray-600">PAM Transport / Autotransportes Varela Dávila</div>
                    </div>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">
                      <Calendar size={14} className="mr-1" />
                      <span>2020 - 2024</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-1 text-sm">
                    Developed advanced skills in logistics planning, route optimization, technical problem diagnosis and preventive maintenance applying analysis and problem-solving methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-800 mb-3">FEATURED PROJECTS</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-700">
                  <h4 className="font-semibold text-gray-800">Tesla Model X Radiator Welding Process Optimization</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Led the analysis and improvement of the welding process, establishing optimal temperature profiles and developing control plans to ensure consistent quality, reducing defects by 37%.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-700">
                  <h4 className="font-semibold text-gray-800">Critical Parameter Monitoring System Implementation</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Designed and implemented a system to monitor critical parameters in welding equipment, similar to reflow ovens, generating detailed technical documentation that reduced process variations and improved consistency.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-700">
                  <h4 className="font-semibold text-gray-800">Fixture Development for Manufacturing Optimization</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Used Solid Edge to design specialized fixtures that improved precision and efficiency in manufacturing processes, reducing cycle times by 18% and improving ergonomics for operators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Timeline Page
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">CHRONOLOGICAL WORK HISTORY</h3>
          <p className="text-gray-600 mb-6">Complete professional experience history in descending chronological order.</p>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-700"></div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <Clock size={16} className="text-white" />
                </div>
                <div className="ml-4">
                  <div className="bg-white p-4 border border-gray-300 rounded shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-800">Transport Logistics Specialist</h4>
                      <span className="text-sm text-gray-600">2020 - 2024</span>
                    </div>
                    <p className="text-blue-700 font-semibold mb-2">PAM Transport / Autotransportes Varela Dávila</p>
                    <p className="text-gray-700 text-sm">
                      Developed advanced skills in logistics planning, route optimization, technical problem diagnosis and preventive maintenance applying analysis and problem-solving methodologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <Clock size={16} className="text-white" />
                </div>
                <div className="ml-4">
                  <div className="bg-white p-4 border border-gray-300 rounded shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-800">Logistics Operator</h4>
                      <span className="text-sm text-gray-600">2019 - 2020</span>
                    </div>
                    <p className="text-blue-700 font-semibold mb-2">Integra Solution</p>
                    <p className="text-gray-700 text-sm">
                      Warehouse and inventory operations management, material handling optimization and contribution to efficient logistics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <Clock size={16} className="text-white" />
                </div>
                <div className="ml-4">
                  <div className="bg-white p-4 border border-gray-300 rounded shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-800">Operations Supervisor</h4>
                      <span className="text-sm text-gray-600">2018</span>
                    </div>
                    <p className="text-blue-700 font-semibold mb-2">National Electoral Institute</p>
                    <p className="text-gray-700 text-sm">
                      Logistics coordination, personnel training and supervision of critical operations, ensuring compliance with technical specifications and quality standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <Clock size={16} className="text-white" />
                </div>
                <div className="ml-4">
                  <div className="bg-white p-4 border border-gray-300 rounded shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-800">Process Engineer</h4>
                      <span className="text-sm text-gray-600">2015 - 2018</span>
                    </div>
                    <p className="text-blue-700 font-semibold mb-2">Modine Heat Transfer</p>
                    <p className="text-gray-700 text-sm">
                      Led the optimization and documentation of manufacturing processes for high-precision radiators for premium clients (John Deere, Caterpillar, Tesla). Specialized in process analysis, quality control, and technical documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-100 p-4 text-center text-sm text-gray-600 border-t border-gray-300">
        Professional committed to continuous improvement and technical excellence | Immediate availability
      </div>
    </div>
  );
} 