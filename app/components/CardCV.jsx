"use client";

import { useState } from 'react';
import { 
  Briefcase, Award, Book, Calendar, MapPin, Mail, Phone, 
  Languages, Shield, User, CheckCircle, FileText, Wrench, 
  ChevronRight, Clock
} from 'lucide-react';

export default function CardCV() {
  const [activePage, setActivePage] = useState('principal');
  
  return (
    <div className="max-w-4xl mx-auto bg-base-100 shadow-2xl rounded-lg overflow-hidden border-2 border-base-300">
      {/* Header Section */}
      <div className="bg-primary text-primary-content p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">ROLANDO AHUJA MARTÍNEZ</h1>
            <h2 className="text-xl mt-1 opacity-90 font-semibold">Ingeniero Mecatrónico | Especialista en Optimización de Procesos</h2>
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
      <div className="tabs tabs-boxed bg-base-200 rounded-none">
        <button 
          onClick={() => setActivePage('principal')}
          className={`tab tab-lg ${activePage === 'principal' ? 'tab-active' : ''}`}
        >
          Perfil Profesional
        </button>
        <button 
          onClick={() => setActivePage('historial')}
          className={`tab tab-lg ${activePage === 'historial' ? 'tab-active' : ''}`}
        >
          Historial Cronológico
        </button>
      </div>

      {activePage === 'principal' ? (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-1">
            {/* Professional Summary */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <User size={20} className="text-primary mr-2" />
                <h3 className="text-lg font-bold">PERFIL PROFESIONAL</h3>
              </div>
              <p className="text-base-content/80">
                Ingeniero Mecatrónico con sólida experiencia en <span className="font-semibold text-base-content">optimización de procesos de manufactura</span> y <span className="font-semibold text-base-content">análisis de sistemas de producción</span>. Especializado en aplicación de técnicas de calidad y solución de problemas para mejorar eficiencia operativa.
              </p>
            </div>

            {/* Technical Expertise */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <Wrench size={20} className="text-primary mr-2" />
                <h3 className="text-lg font-bold">COMPETENCIAS TÉCNICAS</h3>
              </div>
              <div className="space-y-1">
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-primary mr-1" />
                    <span className="font-semibold">Procesos de Manufactura</span>
                  </div>
                  <p className="text-sm text-base-content/70 ml-6">Análisis y optimización de procesos, mapeo de flujo de valor, control de parámetros</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-primary mr-1" />
                    <span className="font-semibold">Sistemas de Calidad</span>
                  </div>
                  <p className="text-sm text-base-content/70 ml-6">Herramientas Core (PFMEA, Control Plan, Flow Chart), 8D's, Ishikawa, 5 Why's</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-primary mr-1" />
                    <span className="font-semibold">Diseño Técnico</span>
                  </div>
                  <p className="text-sm text-base-content/70 ml-6">Solid Edge, diseño de piezas 3D, GD&T, fixtures y adaptaciones</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-primary mr-1" />
                    <span className="font-semibold">Monitoreo de Sistemas</span>
                  </div>
                  <p className="text-sm text-base-content/70 ml-6">Análisis de parámetros críticos, perfiles de temperatura, documentación técnica</p>
                </div>
                <div>
                  <div className="flex items-center">
                    <ChevronRight size={16} className="text-primary mr-1" />
                    <span className="font-semibold">Sistemas Computacionales</span>
                  </div>
                  <p className="text-sm text-base-content/70 ml-6">Soporte técnico, configuración de redes, administración de usuarios</p>
                </div>
              </div>
            </div>

            {/* Education & Languages */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              {/* Education */}
              <div>
                <div className="flex items-center mb-2">
                  <Book size={20} className="text-primary mr-2" />
                  <h3 className="text-lg font-bold">EDUCACIÓN</h3>
                </div>
                <div>
                  <div className="font-semibold">Ingeniería en Mecatrónica</div>
                  <div className="text-base-content/70 text-sm">Instituto Tecnológico de Nuevo Laredo</div>
                  <div className="text-base-content/60 text-sm italic">Cédula: 11716565</div>
                </div>
              </div>
              
              {/* Language Skills */}
              <div>
                <div className="flex items-center mb-2">
                  <Languages size={20} className="text-primary mr-2" />
                  <h3 className="text-lg font-bold">IDIOMAS</h3>
                </div>
                <div>
                  <div className="font-semibold">Español</div>
                  <div className="text-base-content/70 text-sm">Nativo</div>
                </div>
                <div className="mt-1">
                  <div className="font-semibold">Inglés</div>
                  <div className="text-base-content/70 text-sm">Conversacional</div>
                </div>
              </div>
            </div>
            
            {/* Professional Competencies */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <Award size={20} className="text-primary mr-2" />
                <h3 className="text-lg font-bold">COMPETENCIAS PROFESIONALES</h3>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="flex items-center">
                  <CheckCircle size={14} className="text-primary mr-1" />
                  <span>Resolución de problemas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={14} className="text-primary mr-1" />
                  <span>Análisis crítico</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={14} className="text-primary mr-1" />
                  <span>Adaptabilidad</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={14} className="text-primary mr-1" />
                  <span>Trabajo bajo presión</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={14} className="text-primary mr-1" />
                  <span>Comunicación efectiva</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={14} className="text-primary mr-1" />
                  <span>Mejora continua</span>
                </div>
              </div>
            </div>
            
            {/* Objective */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <FileText size={20} className="text-primary mr-2" />
                <h3 className="text-lg font-bold">OBJETIVO PROFESIONAL</h3>
              </div>
              <div className="alert alert-info text-sm">
                <p>
                  Aportar mi experiencia en ingeniería y optimización de procesos al puesto de <span className="font-bold">Ingeniero de Manufactura EMS</span> en TKR, aplicando mis conocimientos en análisis y mejora de procesos para contribuir al desarrollo e implementación de soluciones que incrementen la eficiencia operativa y la calidad del producto.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-3">
              <Briefcase size={20} className="text-primary mr-2" />
              <h3 className="text-lg font-bold">EXPERIENCIA PROFESIONAL RELEVANTE</h3>
            </div>

            {/* Primary Experience */}
            <div className="card bg-base-200 mb-5">
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold">Ingeniero de Proceso</h4>
                    <div className="text-primary font-semibold">Modine Transferencia de Calor</div>
                  </div>
                  <div className="badge badge-primary">
                    <Calendar size={14} className="mr-1" />
                    <span>2015 - 2018</span>
                  </div>
                </div>
                <p className="my-2">
                  Lideré la optimización y documentación de procesos de manufactura para radiadores de alta precisión destinados a clientes premium (John Deere, Caterpillar, Tesla). Mis principales responsabilidades incluían:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Desarrollo e implementación de documentación técnica crítica: diagramas de flujo, análisis de modos de falla (PFMEA) y planes de control para cada proceso productivo.</li>
                  <li>Monitoreo y análisis de parámetros críticos para asegurar el cumplimiento de especificaciones técnicas y estándares de calidad.</li>
                  <li>Diseño de fixtures y adaptaciones utilizando Solid Edge para optimizar procesos de manufactura y facilitar operaciones de retrabajo.</li>
                  <li>Implementación de mejoras en seguridad, eficiencia y ergonomía en múltiples estaciones de trabajo.</li>
                  <li>Análisis y solución de problemas técnicos aplicando metodologías estructuradas (8D's, Ishikawa, 5 Why's).</li>
                </ul>
              </div>
            </div>

            {/* Additional Experience */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <Briefcase size={20} className="text-primary mr-2" />
                <h3 className="text-lg font-bold">EXPERIENCIA PROFESIONAL ADICIONAL</h3>
              </div>

              <div className="timeline timeline-vertical">
                <div className="timeline-start timeline-box">
                  <div className="text-sm font-semibold">Supervisor de Operaciones</div>
                  <div className="text-primary text-xs">Instituto Nacional Electoral</div>
                  <div className="text-xs opacity-70">2018</div>
                  <p className="text-xs mt-1">
                    Coordinación de logística, capacitación de personal y supervisión de operaciones críticas.
                  </p>
                </div>
                <hr className="bg-primary" />
                
                <div className="timeline-start timeline-box">
                  <div className="text-sm font-semibold">Operador Logístico</div>
                  <div className="text-primary text-xs">Integra Solution</div>
                  <div className="text-xs opacity-70">2019 - 2020</div>
                  <p className="text-xs mt-1">
                    Gestión de operaciones de almacén e inventario, optimización de manejo de materiales.
                  </p>
                </div>
                <hr className="bg-primary" />
                
                <div className="timeline-start timeline-box">
                  <div className="text-sm font-semibold">Especialista en Logística de Transporte</div>
                  <div className="text-primary text-xs">PAM Transport / Autotransportes Varela Dávila</div>
                  <div className="text-xs opacity-70">2020 - 2024</div>
                  <p className="text-xs mt-1">
                    Desarrollé habilidades en planificación logística y diagnóstico de problemas técnicos.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="mb-5">
              <div className="flex items-center mb-2">
                <Shield size={20} className="text-primary mr-2" />
                <h3 className="text-lg font-bold">PROYECTOS DESTACADOS</h3>
              </div>

              <div className="space-y-2">
                <div className="card bg-base-200 compact">
                  <div className="card-body">
                    <h4 className="font-semibold text-primary">Optimización de Proceso de Soldadura para Radiadores Tesla Model X</h4>
                    <p className="text-sm">
                      Lideré el análisis y mejora del proceso de soldadura, estableciendo perfiles de temperatura óptimos y desarrollando planes de control para asegurar la calidad consistente, reduciendo defectos en un 37%.
                    </p>
                  </div>
                </div>
                
                <div className="card bg-base-200 compact">
                  <div className="card-body">
                    <h4 className="font-semibold text-primary">Implementación de Sistema de Monitoreo de Parámetros Críticos</h4>
                    <p className="text-sm">
                      Diseñé e implementé un sistema para monitorear parámetros críticos en equipos de soldadura, similar a hornos de reflujo, generando documentación técnica detallada que redujo variaciones en el proceso.
                    </p>
                  </div>
                </div>
                
                <div className="card bg-base-200 compact">
                  <div className="card-body">
                    <h4 className="font-semibold text-primary">Desarrollo de Fixtures para Optimización de Manufactura</h4>
                    <p className="text-sm">
                      Utilicé Solid Edge para diseñar fixtures especializados que mejoraron la precisión y eficiencia en procesos de manufactura, reduciendo tiempos de ciclo en un 18%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Clock size={20} className="text-primary mr-2" />
              <h3 className="text-xl font-bold">HISTORIAL LABORAL CRONOLÓGICO</h3>
            </div>
            <p className="text-base-content/80 mb-6">
              Historial completo de experiencia profesional en orden cronológico descendente.
            </p>
            
            {/* Chronological Work History */}
            <div className="space-y-6">
              <div className="card bg-base-200">
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">Especialista en Logística de Transporte</h4>
                      <div className="text-primary font-semibold">PAM Transport</div>
                    </div>
                    <div className="badge badge-primary">
                      <Calendar size={14} className="mr-1" />
                      <span>Ago 2021 - Ene 2024</span>
                    </div>
                  </div>
                  <p className="my-2">
                    Operación de vehículos comerciales para transporte de mercancías entre puntos de distribución y centros de manufactura.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Planificación de rutas optimizadas para maximizar eficiencia y cumplir con plazos de entrega.</li>
                    <li>Aplicación de técnicas de análisis y solución de problemas para diagnosticar y resolver cuestiones mecánicas.</li>
                    <li>Implementación de protocolos de mantenimiento preventivo para garantizar operaciones seguras y eficientes.</li>
                    <li>Gestión de documentación técnica relacionada con cargas y entregas.</li>
                  </ul>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">Especialista en Logística de Transporte</h4>
                      <div className="text-primary font-semibold">Autotransportes Varela Davila</div>
                    </div>
                    <div className="badge badge-primary">
                      <Calendar size={14} className="mr-1" />
                      <span>Feb 2020 - Mar 2021</span>
                    </div>
                  </div>
                  <p className="my-2">
                    Transporte de bienes por tierra a plantas de manufactura y centros de distribución.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Inspección de vehículos para detectar problemas de seguridad y mecánicos.</li>
                    <li>Implementación de mantenimiento preventivo y diagnóstico de fallas.</li>
                    <li>Planificación de rutas y cumplimiento con fechas de entrega establecidas.</li>
                    <li>Optimización de tiempos de carga y descarga.</li>
                  </ul>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">Operador Logístico</h4>
                      <div className="text-primary font-semibold">Integra Solution</div>
                    </div>
                    <div className="badge badge-primary">
                      <Calendar size={14} className="mr-1" />
                      <span>Ene 2019 - Ene 2020</span>
                    </div>
                  </div>
                  <p className="my-2">
                    Gestión de operaciones de almacén, control de inventario y operación de montacargas.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Optimización de procesos de manejo de materiales y contribución a la logística eficiente.</li>
                    <li>Implementación de sistemas de control de inventario para mejorar la precisión y reducir pérdidas.</li>
                    <li>Coordinación con equipos de transporte para agilizar entregas y recepciones.</li>
                  </ul>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">Supervisor de Operaciones</h4>
                      <div className="text-primary font-semibold">Instituto Nacional Electoral</div>
                    </div>
                    <div className="badge badge-primary">
                      <Calendar size={14} className="mr-1" />
                      <span>Feb - Jul 2018</span>
                    </div>
                  </div>
                  <p className="my-2">
                    Planificación logística, capacitación y supervisión de personal electoral.
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Coordinación de instalación y funcionamiento de mesas de votación.</li>
                    <li>Gestión de operaciones durante el día de elecciones, priorizando la seguridad.</li>
                    <li>Manejo de materiales electorales, garantizando su seguridad e integridad.</li>
                    <li>Cumplimiento con regulaciones y protocolos legales del proceso electoral.</li>
                  </ul>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold">Ingeniero de Proceso</h4>
                      <div className="text-primary font-semibold">Modine Transferencia de Calor</div>
                    </div>
                    <div className="badge badge-primary">
                      <Calendar size={14} className="mr-1" />
                      <span>May 2015 - Feb 2018</span>
                    </div>
                  </div>
                  <p className="my-2">
                    Gestión de procesos de manufactura para radiadores de alta precisión (John Deere, Caterpillar, Tesla).
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Creación y gestión de documentación técnica: diagramas de flujo, análisis de modos de falla y planes de control.</li>
                    <li>Implementación de mejoras en seguridad, eficiencia y ergonomía en estaciones de trabajo.</li>
                    <li>Diseño de fixtures utilizando Solid Edge para optimizar procesos y facilitar retrabajos.</li>
                    <li>Análisis y solución de problemas técnicos usando metodologías estructuradas (8D's, Ishikawa, 5 Why's).</li>
                    <li>Monitoreo de parámetros críticos y optimización de perfiles de temperatura en procesos de soldadura.</li>
                  </ul>
                </div>
              </div>
              
              <div className="card bg-base-200 opacity-70">
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Agente de Call Center</h4>
                      <div className="text-primary">Telecable</div>
                    </div>
                    <div className="badge badge-neutral">
                      <Calendar size={14} className="mr-1" />
                      <span>2010 - 2013</span>
                    </div>
                  </div>
                  <p className="text-sm">
                    Soporte técnico para clientes, guía para instalación de drivers, hardware, aplicaciones y configuración de equipos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-base-200 p-4 text-center text-sm">
        <p className="font-semibold">Profesional comprometido con la mejora continua y la excelencia técnica | Disponibilidad inmediata</p>
      </div>
    </div>
  );
}
