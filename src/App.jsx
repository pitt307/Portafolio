import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  ExternalLink, 
  ChevronDown, 
  Github, 
  Linkedin, 
  FileText,
  Code,
  Download,
  Copy,
  Check
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // --- DATOS DEL PERFIL (EDITA AQUÍ TUS DATOS) ---
  const initialProfile = {
    name: "Daniel Lope",
    role: "profesional en formación en Desarrollo de Sistemas y asistente de almacén",
    tagline: "enfocado en optimizar procesos logísticos y operativos mediante el uso de herramientas digitales.",
    defaultAbout: `Estimado/a Responsable de Selección,

Soy un profesional en formación en Desarrollo de Sistemas con experiencia en logística, control de calidad y análisis de datos. Me especializo en optimizar procesos mediante el uso de herramientas tecnológicas como Python, SQL y Excel, aportando soluciones eficientes en entornos operativos dinámicos.

A lo largo de mi experiencia en empresas como Maersk, Crepier y Adecco, he desarrollado habilidades en supervisión, auditoría de procesos, gestión de inventarios y cumplimiento de estándares operativos. Mi perfil combina disciplina, organización y pensamiento analítico, orientado siempre a la mejora continua.

Busco integrarme a un equipo donde pueda seguir creciendo profesionalmente, aportar valor mediante la tecnología y contribuir al desarrollo de soluciones eficientes. Me encuentro motivado para asumir nuevos retos y generar impacto positivo en la organización.`,
    email: "daniel.looper57@gmail.com",
    linkedin: "https://www.linkedin.com/in/daniel-lope-sonco-912929327/",
    github: "https://github.com/pitt307"
  };

  const skills = [
    { name: "Supervisión Operativa", level: 75 },
    { name: "Gestión de calidad", level: 85 },
    { name: "excel", level: 75 },
    { name: "SQL", level: 80 },
    { name: "Control documental", level: 70 },
    { name: "Comunicación", level: 80 },
    { name: "control de inventarios", level: 80 },
    { name: "desarrollo web", level: 60 },
  ];

  const experience = [
    {
      role: "Calidad de producción Senior",
      company: "Crepier",
      period: "01/25 - 06/25",
      description: "Coordiné la recepción de productos, supervisé procesos operativos y realicé auditorías de cumplimiento, garantizando la calidad, el control de inventarios y la eficiencia en producción."
    },
    {
      role: "Auxiliar de Almacén",
      company: " A.P. Moller - Maersk",
      period: "06/22 - 06/23",
      description: "Gestioné inventarios, no conformidades, inspección de productos, reportes operativos y coordinación logística bajo estándares internacionales."
    },
    {
      role: "Auxiliar de Picking",
      company: "Adecco",
      period: "01/22 - 03/22",
      description: "Preparé pedidos, controlé calidad, apoyé en embalaje y procesos operativos en cámaras de frío, cumpliendo objetivos diarios."
    }
  ];

  const projects = [
    {
      title: "E-Commerce Dashboard",
      tags: ["React", "Tailwind", "Firebase"],
      description: "Panel de administración para tiendas online con análisis de datos en tiempo real."
    },
    {
      title: "App de Finanzas Personales",
      tags: ["Mobile First", "PWA", "ChartJS"],
      description: "Aplicación progresiva para control de gastos con visualización gráfica intuitiva."
    },
    {
      title: "Sistema de Gestión Hospitalaria",
      tags: ["Node.js", "MongoDB", "Socket.io"],
      description: "Plataforma para gestión de citas y expedientes médicos con notificaciones en vivo."
    }
  ];

  // --- FUNCIONES DE NAVEGACIÓN ---
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(initialProfile.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv.pdf';
    link.download = 'CV-' + initialProfile.name.replace(' ', '-') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-blue-600 tracking-tighter cursor-pointer" onClick={() => scrollTo('hero')}>
              DL<span className="text-slate-800"></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Sobre Mí', 'Habilidades', 'Trayectoria', 'Proyectos'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('contacto')}
                className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm"
              >
                Contáctame
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {['Sobre Mí', 'Habilidades', 'Trayectoria', 'Proyectos', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Background Decorative Elements - Tailwind v3 */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 font-semibold rounded-full text-sm mb-6 border border-blue-100">
            Disponible para nuevas oportunidades
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Hola, soy {initialProfile.name}.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {initialProfile.role}
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {initialProfile.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              <Download size={20} /> Descargar CV
            </button>
            <button 
              onClick={() => scrollTo('sobre-mí')}
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center justify-center gap-2"
            >
              <User size={20} /> Ver Perfil
            </button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollTo('sobre-mí')}>
             <ChevronDown className="text-slate-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mí" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <div className="sticky top-24">
                <div className="aspect-square rounded-2xl bg-slate-200 overflow-hidden mb-6 shadow-xl relative">

                   <img 
                     src="/assets/foto-perfil.png" 
                     alt={initialProfile.name}
                     className="w-full h-full object-cover"
                   />
                 {/* FOTO */}  
                </div>
                <div className="flex gap-4 justify-center">
                  <a href={initialProfile.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={initialProfile.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={`mailto:${initialProfile.email}`} className="p-3 bg-slate-100 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-8">
              <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3 mb-6">
                <FileText className="text-blue-600" /> Carta de Presentación
              </h2>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative transition-all duration-500 shadow-sm">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 rounded-l-2xl"></div>
                
                <p className="text-slate-600 whitespace-pre-line leading-relaxed text-lg">
                  {initialProfile.defaultAbout}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{initialProfile.name}</p>
                    <p className="text-slate-500">{initialProfile.role}</p>
                  </div>
                  <div className="font-cursive text-2xl text-blue-600 opacity-80 -rotate-6">
                    {initialProfile.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mis Habilidades</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Un conjunto de habilidades técnicas desarrolladas a través de mi formación en sistemas y mi experiencia en entornos operativos, orientadas a la optimización de procesos, el análisis de datos y la mejora continua..
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-800">{skill.name}</span>
                  <span className="text-blue-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center mt-12">
            {["organización", "Adaptabilidad", "Proactividad", "Trabajo en Equipo", "Responsabilidad","comucación efectiva", "gestion de tiempo", "resolucion de problemas"].map((s, i) => (
              <span key={i} className="px-4 py-2 bg-white text-slate-600 rounded-full border border-slate-200 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="trayectoria" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Trayectoria Profesional</h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>
                
                <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm -translate-x-1.5 md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 group-hover:scale-125 transition-transform"></div>
                  
                  <div className="md:w-[45%] mb-2 md:mb-0">
                    <div className={`bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-3">
                        {job.period}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                      <p className="text-blue-600 font-medium mb-3">{job.company}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-[45%]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="proyectos" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Proyectos Destacados</h2>
              <p className="text-slate-600">Una selección de mis trabajos recientes.</p>
            </div>
            <a href={initialProfile.github} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
              Ver GitHub <ExternalLink size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/0 transition-colors"></div>
                  {/* OPCIÓN 1: Sin imagen (ícono placeholder) */}
                  <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                     <Code size={48} className="opacity-20" />
                  </div>
                  
                  {/* OPCIÓN 2: Con imagen del proyecto (descomenta y comenta lo de arriba)
                  <img 
                    src={`/assets/proyectos/proyecto${index + 1}.png`} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm h-12 overflow-hidden">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-2 border-t border-slate-100 text-blue-600 font-semibold text-sm hover:bg-blue-50 flex items-center justify-center gap-2 transition-colors">
                    Ver Detalles <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contacto" className="py-24 bg-slate-900 text-white relative overflow-hidden">
         {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay blur-3xl opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">¿Trabajamos juntos?</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Estoy buscando activamente oportunidades para aportar valor. Si crees que mi perfil encaja con lo que buscas, hablemos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={`mailto:${initialProfile.email}`}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <Mail /> Enviar Correo
            </a>
            <button 
              onClick={handleCopyEmail}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3 w-full sm:w-auto relative"
            >
              {emailCopied ? <Check className="text-green-400" /> : <Copy />} 
              {emailCopied ? "¡Copiado!" : "Copiar Email"}
            </button>
            <a 
              href={initialProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border border-slate-700 hover:bg-slate-800 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <Linkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} {initialProfile.name}. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span>Diseñado con React & Tailwind CSS v3</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
