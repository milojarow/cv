"use client";

import { useState } from 'react';
import { 
  Briefcase, Award, Book, Calendar, MapPin, Mail, Phone, 
  Languages, User, CheckCircle, FileText, Wrench, 
  ChevronRight, Clock, Globe
} from 'lucide-react';

export default function CardCVEsp({ onLanguageChange }) {
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
          English
        </button>
      </div>
      
      {/* Header Section */}
      <div className="bg-blue-800 text-white p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">ROLANDO AHUJA MARTÍNEZ</h1>
            <h2 className="text-xl mt-1 text-blue-200 font-semibold">Ingeniero Mecatrónico | Especialista en Optimización de Procesos</h2>
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
            Perfil Profesional
          </button>
          <button 
            onClick={() => setActivePage('historial')}
            className={`px-4 py-3 font-semibold transition-colors ${activePage === 'historial' ? 'bg-white text-blue-700 border-t-2 border-blue-700' : 'text-gray-600 hover:text-gray-800'}`}
          >
            Historial Cronológico
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
                <h3 className="text-lg font-bold text-gray-800">PERFIL PROFESIONAL</h3>
              </div>
              <p className="text-gray-700">
                Ingeniero Mecatrónico con sólida experiencia en optimización de procesos de manufactura y análisis de sistemas de producción. Especializado en aplicación de técnicas de calidad y solución de problemas para mejorar eficiencia operativa.
              </p>
            </div>

            {/* Technical Expertise */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <Wrench size={20} className="text-blue-700 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">COMPETENCIAS TÉCNICAS</h3>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-blue-700 mr-1" />
                    <span className="font-semibold">Procesos de Manufactura</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Análisis y optimización de procesos, mapeo de flujo de valor, control de parámetros</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-blue-700 mr-1" />
                    <span className="font-semibold">Sistemas de Calidad</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Herramientas Core (PFMEA, Control Plan, Flow Chart), 8D's, Ishikawa, 5 Why's</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-blue-700 mr-1" />
                    <span className="font-semibold">Diseño Técnico</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Solid Edge, diseño de piezas 3D, GD&T, fixtures y adaptaciones</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-blue-700 mr-1" />
                    <span className="font-semibold">Monitoreo de Sistemas</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Análisis de parámetros críticos, perfiles de temperatura, documentación técnica</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-blue-700 mr-1" />
                    <span className="font-semibold">Sistemas Computacionales</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">Soporte técnico, configuración de redes, administración de usuarios</p>
                </div>
              </div>
            </div>

            {/* Education & Languages */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <div className="flex items-center mb-2">
                  <Book size={20} className="text-blue-700 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">EDUCACIÓN</h3>
                </div>
                <div>
                  <div className="font-semibold">Ingeniería en Mecatrónica</div>
                  <div className="text-gray-600 text-sm">Instituto Tecnológico de Nuevo Laredo</div>
                  <div className="text-gray-500 text-sm italic">Cédula: 11716565</div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <Languages size={20} className="text-blue-700 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">IDIOMAS</h3>
                </div>
                <div>
                  <div className="font-semibold">Español</div>
                  <div className="text-gray-600 text-sm">Nativo</div>
                </div>
                <div className="mt-1">
                  <div className="font-semibold">Inglés</div>
                  <div className="text-gray-600 text-sm">Conversacional</div>
                </div>
              </div>
            </div>
            
            {/* Professional Competencies */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <Award size={20} className="text-blue-700 mr-2" />
                <h3 className="text-lg font-bold text-gray-800">COMPETENCIAS PROFESIONALES</h3>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {[
                  "Resolución de problemas",
                  "Análisis crítico",
                  "Adaptabilidad",
                  "Trabajo bajo presión",
                  "Comunicación efectiva",
                  "Mejora continua"
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
                <h3 className="text-lg font-bold text-gray-800">OBJETIVO PROFESIONAL</h3>
              </div>
              <p className="text-gray-700 bg-blue-50 p-3 rounded border-l-4 border-blue-700 text-sm">
                Aportar mi experiencia en ingeniería y optimización de procesos al puesto de Ingeniero de Manufactura EMS en TKR, aplicando mis conocimientos en análisis y mejora de procesos para contribuir al desarrollo e implementación de soluciones que incrementen la eficiencia operativa y la calidad del producto.
              </p>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <Briefcase size={20} className="text-blue-700 mr-2" />
              <h3 className="text-lg font-bold text-gray-800">EXPERIENCIA PROFESIONAL RELEVANTE</h3>
            </div>

            {/* Primary Experience */}
            <div className="mb-5 border-l-4 border-blue-700 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Ingeniero de Proceso</h4>
                  <div className="text-blue-700 font-semibold">Modine Transferencia de Calor</div>
                </div>
                <div className="flex items-center bg-blue-100 px-2 py-1 rounded text-sm text-blue-800">
                  <Calendar size={14} className="mr-1" />
                  <span>2015 - 2018</span>
                </div>
              </div>
              <p className="text-gray-700 mt-2 mb-3">
                Lideré la optimización y documentación de procesos de manufactura para radiadores de alta precisión destinados a clientes premium (John Deere, Caterpillar, Tesla). Mis principales responsabilidades incluían:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Desarrollo e implementación de documentación técnica crítica: diagramas de flujo, análisis de modos de falla (PFMEA) y planes de control para cada proceso productivo.</li>
                <li>Monitoreo y análisis de parámetros críticos para asegurar el cumplimiento de especificaciones técnicas y estándares de calidad.</li>
                <li>Diseño de fixtures y adaptaciones utilizando Solid Edge para optimizar procesos de manufactura y facilitar operaciones de retrabajo.</li>
                <li>Implementación de mejoras en seguridad, eficiencia y ergonomía en múltiples estaciones de trabajo.</li>
                <li>Análisis y solución de problemas técnicos aplicando metodologías estructuradas (8D's, Ishikawa, 5 Why's).</li>
              </ul>
            </div>

            {/* Additional Experience */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-800 mb-3">EXPERIENCIA PROFESIONAL ADICIONAL</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-gray-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">Supervisor de Operaciones</h4>
                      <div className="text-gray-600">Instituto Nacional Electoral</div>
                    </div>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">
                      <Calendar size={14} className="mr-1" />
                      <span>2018</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-1 text-sm">
                    Coordinación de logística, capacitación de personal y supervisión de operaciones críticas, asegurando el cumplimiento de especificaciones técnicas y estándares de calidad.
                  </p>
                </div>

                <div className="border-l-2 border-gray-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">Operador Logístico</h4>
                      <div className="text-gray-600">Integra Solution</div>
                    </div>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">
                      <Calendar size={14} className="mr-1" />
                      <span>2019 - 2020</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-1 text-sm">
                    Gestión de operaciones de almacén e inventario, optimización de manejo de materiales y contribución a la mejora de la eficiencia logística.
                  </p>
                </div>

                <div className="border-l-2 border-gray-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-800">Especialista en Logística de Transporte</h4>
                      <div className="text-gray-600">PAM Transport / Autotransportes Varela Dávila</div>
                    </div>
                    <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">
                      <Calendar size={14} className="mr-1" />
                      <span>2020 - 2024</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-1 text-sm">
                    Desarrollé habilidades avanzadas en planificación logística, optimización de rutas, diagnóstico de problemas técnicos y mantenimiento preventivo aplicando metodologías de análisis y solución de problemas.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-800 mb-3">PROYECTOS DESTACADOS</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-700">
                  <h4 className="font-semibold text-gray-800">Optimización del Proceso de Soldadura de Radiadores Tesla Model X</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Lideré el análisis y mejora del proceso de soldadura, estableciendo perfiles óptimos de temperatura y desarrollando planes de control para asegurar calidad consistente, reduciendo defectos en un 37%.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-700">
                  <h4 className="font-semibold text-gray-800">Implementación de Sistema de Monitoreo de Parámetros Críticos</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Diseñé e implementé un sistema para monitorear parámetros críticos en equipos de soldadura, similar a hornos de reflujo, generando documentación técnica detallada que redujo variaciones de proceso y mejoró la consistencia.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-700">
                  <h4 className="font-semibold text-gray-800">Desarrollo de Fixtures para Optimización de Manufactura</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Utilicé Solid Edge para diseñar fixtures especializados que mejoraron la precisión y eficiencia en procesos de manufactura, reduciendo tiempos de ciclo en un 18% y mejorando la ergonomía para operadores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Timeline Page
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">HISTORIAL LABORAL CRONOLÓGICO</h3>
          <p className="text-gray-600 mb-6">Historial completo de experiencia profesional en orden cronológico descendente.</p>
          
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
                      <h4 className="font-bold text-gray-800">Especialista en Logística de Transporte</h4>
                      <span className="text-sm text-gray-600">2020 - 2024</span>
                    </div>
                    <p className="text-blue-700 font-semibold mb-2">PAM Transport / Autotransportes Varela Dávila</p>
                    <p className="text-gray-700 text-sm">
                      Desarrollé habilidades avanzadas en planificación logística, optimización de rutas, diagnóstico de problemas técnicos y mantenimiento preventivo aplicando metodologías de análisis y solución de problemas.
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
                      <h4 className="font-bold text-gray-800">Operador Logístico</h4>
                      <span className="text-sm text-gray-600">2019 - 2020</span>
                    </div>
                    <p className="text-blue-700 font-semibold mb-2">Integra Solution</p>
                    <p className="text-gray-700 text-sm">
                      Gestión de operaciones de almacén e inventario, optimización de manejo de materiales y contribución a la mejora de la eficiencia logística.
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
                      <h4 className="font-bold text-gray-800">Supervisor de Operaciones</h4>
                      <span className="text-sm text-gray-600">2018</span>
                    </div>
                    <p className="text-blue-700 font-semibold mb-2">Instituto Nacional Electoral</p>
                    <p className="text-gray-700 text-sm">
                      Coordinación de logística, capacitación de personal y supervisión de operaciones críticas, asegurando el cumplimiento de especificaciones técnicas y estándares de calidad.
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
                      <h4 className="font-bold text-gray-800">Ingeniero de Proceso</h4>
                      <span className="text-sm text-gray-600">2015 - 2018</span>
                    </div>
                    <p className="text-blue-700 font-semibold mb-2">Modine Transferencia de Calor</p>
                    <p className="text-gray-700 text-sm">
                      Lideré la optimización y documentación de procesos de manufactura para radiadores de alta precisión destinados a clientes premium (John Deere, Caterpillar, Tesla). Especializado en análisis de procesos, control de calidad y documentación técnica.
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
        Profesional comprometido con la mejora continua y excelencia técnica | Disponibilidad inmediata
      </div>
    </div>
  );
} 