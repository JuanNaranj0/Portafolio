import React from 'react'
import profile from '../data/profile'

export default function About() {
  const education = [
    {
      period: "2024",
      title: "Ingeniero y Tecnólogo en Desarrollo de Software",
      company: "Universidad de Caldas",
      description: "Formación completa en desarrollo de software, adquiriendo conocimientos avanzados en programación, arquitectura de software y mejores prácticas de la industria."
    },
    {
      period: "2021 - 2023",
      title: "Tecnólogo en Desarrollo de Software",
      company: "Universidad Surcolombiana",
      description: "Formación académica en Tecnología e Ingeniería en Desarrollo de Software. Desarrollo de proyectos académicos y personales, adquiriendo experiencia en programación web y mejores prácticas."
    }
  ]

  const experience = [
    {
      period: "2024 - Presente",
      title: "Desarrollador de Software",
      company: "Freelance / Proyectos Personales",
      description: "Desarrollo de aplicaciones web y proyectos personales utilizando React, JavaScript, HTML5 y CSS3. Enfocado en crear soluciones funcionales y aprender nuevas tecnologías. Experiencia autodidacta construyendo proyectos desde cero."
    }
  ]

  // Certifications metadata (textual). We also allow rendering certificate images
  // from the public folder (see src/data/profile.js -> certImages).
  const certifications = [
    {
      title: "Bootcamp Internet de las Cosas (IoT) en la Nube",
      issuer: "Compañía Pedagógica",
      year: "2022",
      hours: "44 horas",
      description: "Utilizando servicios de Microsoft Azure. Realizado en Neiva, Diciembre 2022."
    },
    {
      title: "Aplicación de la Calidad del Software en el Proceso de Desarrollo",
      issuer: "SENA - Centro de Biotecnología Industrial",
      year: "2023",
      hours: "40 horas",
      description: "Evaluación: Apto (A) - Equivalencia 4.5. Realizado en Palmira, Septiembre 2023."
    },
    {
      title: "Manejo de Pruebas de Software",
      issuer: "SENA - Centro de Biotecnología Industrial",
      year: "2023",
      hours: "40 horas",
      description: "Evaluación: Apto (A) - Equivalencia 4.5. Realizado en Palmira, Octubre 2023."
    },
    {
      title: "Despliegue de Aplicaciones y Servicios en Contenedores Docker",
      issuer: "SENA - Centro Industrial y de Energías Alternativas",
      year: "2023",
      hours: "48 horas",
      description: "Evaluación: Apto (A) - Equivalencia 4.5. Realizado en Riohacha, Diciembre 2023."
    },
    {
      title: "Variables y Estructuras de Control en Python",
      issuer: "SENA - Centro de Industria y Construcción",
      year: "2023",
      hours: "48 horas",
      description: "Evaluación: Apto (A) - Equivalencia 4.5. Realizado en Ibagué, Octubre 2023."
    }
  ]

  // Prefer languages defined in profile.js but fallback to the pre-existing set
  const languages = profile.languages ?? [
    { name: "Español", level: "Nativo", flag: "🇨🇴" },
    { name: "Inglés", level: "B1", flag: "🇬🇧" }
  ]

  const skills = {
    "Lenguajes": ["JavaScript", "HTML5", "CSS3", "TypeScript", "Python", "Java", "C++"],
    "Frameworks": ["React", "Vue.js", "Next.js"],
    "Herramientas": ["Tailwind CSS", "Vite", "Webpack", "Git", "Figma", "Docker", "Microsoft Azure"]
  }

  return (
    <main className="min-h-screen relative overflow-hidden pt-16 md:pt-20">
      {/* Blue-Purple Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-purple-950 via-indigo-950 to-blue-950 z-0" />
      
      {/* Animated gradient orbs - Dark theme */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Large primary orb */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-bl from-blue-600/30 via-indigo-600/25 to-purple-600/20 rounded-full blur-3xl opacity-80 animate-float-slow" />
        
        {/* Secondary orb */}
        <div className="absolute bottom-0 left-1/4 w-[850px] h-[850px] bg-gradient-to-tr from-purple-600/30 via-indigo-600/25 to-blue-600/20 rounded-full blur-3xl opacity-80 animate-float" />
        
        {/* Center accent orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-indigo-500/25 via-blue-500/20 to-transparent rounded-full blur-3xl opacity-70" />
        
        {/* Additional accent orbs */}
        <div className="absolute top-1/3 left-0 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[750px] h-[750px] bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl opacity-60" />
      </div>
      
      {/* Enhanced grid pattern overlay - Dark theme */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#6366f120_1px,transparent_1px),linear-gradient(to_bottom,#6366f120_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 z-0" />

      <div className="relative z-10">
        {/* Section Divider */}
        <div className="section-divider" />

        {/* Header with Professional Photo - Mejorado */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Text content */}
            <div className="order-2 md:order-1 space-y-6">
              {/* Badge */}
              <div className="inline-block">
                <span className="section-badge-simple">
                  Sobre Mí
                </span>
              </div>
              
              {/* Título */}
              <h1 className="text-white leading-[1.1] tracking-tight font-display">
                Código, <span className="gradient-text-primary">Diseño e</span> Innovación
              </h1>
              
              {/* Descripción */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-xl">
                Soy Tecnólogo e Ingeniero en Desarrollo de Software, graduado de la Universidad de Caldas y la Universidad Surcolombiana de Colombia. Me especializo en crear interfaces intuitivas y funcionales que solucionan problemas reales.
              </p>
              
              {/* Years of experience badge */}
              <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-xl gradient-border-blue-subtle rounded-2xl px-8 py-5 hover:bg-slate-800/70 transition-all duration-300 cursor-default">
                <div className="text-5xl font-black text-white mr-5">
                  {profile.yearsSolo}+
                </div>
                <div className="text-sm text-slate-200 font-semibold leading-tight">
                  Años de experiencia<br/>
                  <span className="text-xs text-slate-400">(proyectos personales)</span>
                </div>
              </div>

              {/* Info adicional - Mejorada con degradados */}
              <div className="flex flex-wrap gap-4 pt-4">
                {/* Location Card */}
                <div className="relative flex items-center space-x-3 px-5 py-3 rounded-xl
                              bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20
                              backdrop-blur-xl gradient-border-blue-subtle
                              text-slate-200 font-bold text-sm
                              transition-all duration-400 group cursor-default
                              hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                              hover:-translate-y-1 overflow-hidden">
                  {/* Efecto de brillo */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-700" />
                  
                  <span className="relative text-xl group-hover:scale-110 transition-transform duration-300">📍</span>
                  <span className="relative">Manizales, Caldas</span>
                </div>
                
                {/* GitHub Card */}
                <a href="https://github.com/JuanNaranj0" 
                   target="_blank" 
                   rel="noreferrer" 
                   className="relative flex items-center space-x-3 px-5 py-3 rounded-xl
                              bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-blue-600/20
                              backdrop-blur-xl gradient-border-blue-subtle
                              text-slate-200 hover:text-white font-bold text-sm
                              transition-all duration-400 group
                              hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]
                              hover:-translate-y-1 overflow-hidden">
                  {/* Efecto de brillo */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
                  
                  <span className="relative text-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">🐙</span>
                  <span className="relative">GitHub</span>
                </a>
              </div>
              

            </div>

            {/* Right side - Professional Photo Mejorada */}
            <div className="relative group order-1 md:order-2 flex justify-center md:justify-end">
              {/* Glow background mejorado con múltiples capas */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-cyan-500/40 rounded-full blur-3xl opacity-70 group-hover:opacity-90 transition-all duration-500 animate-float-slow" 
                   style={{width: '360px', height: '360px', margin: '0 auto'}} />
              
              <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/30 via-purple-500/20 to-blue-500/30 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500 animate-float" 
                   style={{width: '340px', height: '340px', margin: '0 auto', animationDelay: '1s'}} />
              
              {/* Photo container con fondo decorativo */}
              <div className="relative z-10">
                {profile.photo ? (
                  <div className="relative">
                    {/* Círculo decorativo de fondo */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-blue-50/20 to-purple-50/10 transform scale-110 blur-sm" />
                    
                    {/* Foto profesional */}
                    <div className="profile-photo-wrapper">
                      <div className="photo-ring" aria-hidden="true" />
                      <img
                        src={`/assets/photos/${profile.photo}`}
                        alt="Foto profesional de Juan"
                        className="profile-photo"
                        onError={(e) => { 
                          e.currentTarget.style.display = 'none';
                          console.error('Error loading photo in About:', e.currentTarget.src);
                        }}
                        onLoad={() => console.log('Photo loaded in About successfully')}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl bg-gradient-to-br from-slate-700 via-blue-800 to-indigo-800 flex items-center justify-center">
                    <div className="text-center text-white/80">
                      <div className="text-6xl mb-4">👨‍💻</div>
                      <p className="text-sm font-semibold">Foto Profesional</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Languages & Skills Section - Mejorada */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
          <div className="section-divider mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Languages - Elegante */}
            <div className="space-y-6">
              <h3 className="text-white font-display text-center md:text-left">Idiomas</h3>
              <div className="space-y-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="group bg-slate-800/50 backdrop-blur-xl gradient-border-blue-subtle rounded-2xl px-6 py-5 hover:bg-slate-800/70 transition-all duration-300 cursor-default">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{lang.flag}</span>
                      <div>
                        <p className="font-bold text-white text-xl">{lang.name}</p>
                        <p className="text-sm text-slate-400 font-medium mt-1">{lang.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills - Elegante */}
            <div className="space-y-6">
              <h3 className="text-white font-display text-center md:text-left">Habilidades</h3>
              <div className="space-y-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="space-y-4">
                    <h4 className="font-bold text-blue-400 text-xl uppercase tracking-wide">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {skillList.map((skill, idx) => (
                        <span key={idx} className="bg-slate-700/50 backdrop-blur-sm gradient-border-blue-subtle text-slate-200 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-700/70 hover:text-white hover:scale-105 transition-all duration-300 cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Timeline - Con fondo colorido */}
        <section className="relative py-16 md:py-24">
          {/* Fondo con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-purple-900/30 backdrop-blur-sm" />
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="section-divider mb-16" />
          
          {/* Header */}
          <div className="mb-16 space-y-6 text-center">
            <div className="inline-block">
              <span className="section-badge-simple">
                Formación
              </span>
            </div>
            
            <h2 className="text-white font-display">
              Educación <span className="gradient-text-primary">Académica</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
              Mi trayectoria educativa y formación profesional
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative group">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                
                <div className="bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-cyan-900/40 backdrop-blur-xl gradient-border-blue rounded-2xl p-10 md:p-12 ml-10 hover:shadow-[0_0_40px_rgba(124,58,237,0.4),0_0_60px_rgba(59,130,246,0.3)] transition-all duration-400 hover:-translate-y-1">
                  <div className="absolute left-0 top-10 w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900 shadow-[0_0_15px_rgba(124,58,237,0.6)] transform -translate-x-3" />
                  
                  <div className="mb-4">
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{edu.period}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{edu.title}</h3>
                  <p className="text-lg md:text-xl text-slate-200 font-semibold mb-4">{edu.company}</p>
                  <p className="text-slate-300 leading-relaxed font-medium text-base md:text-lg">{edu.description}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline - Con fondo colorido */}
        <section className="relative py-20">
          {/* Fondo con gradiente diferente */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-indigo-900/30 backdrop-blur-sm" />
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="section-divider mb-12" />
          <div className="mb-20 text-center">
            <span className="section-badge section-badge-icon">
              <span>💼</span>
              <span>Trayectoria</span>
            </span>
            <h2 className="text-5xl font-black text-white mt-4 mb-6 font-display">
              Experiencia <span className="gradient-text-primary">Profesional</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-semibold leading-relaxed max-w-2xl mx-auto">Mi experiencia laboral y proyectos</p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                
                <div className="bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-cyan-900/40 backdrop-blur-xl gradient-border-blue rounded-2xl p-10 md:p-12 ml-10 hover:shadow-[0_0_40px_rgba(124,58,237,0.4),0_0_60px_rgba(59,130,246,0.3)] transition-all duration-400 hover:-translate-y-1">
                  <div className="absolute left-0 top-10 w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full border-4 border-slate-900 shadow-[0_0_15px_rgba(124,58,237,0.6)] transform -translate-x-3" />
                  
                  <div className="mb-4">
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{exp.title}</h3>
                  <p className="text-lg md:text-xl text-slate-200 font-semibold mb-4">{exp.company}</p>
                  <p className="text-slate-300 leading-relaxed font-medium text-base md:text-lg">{exp.description}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Certifications Section - Con fondo colorido */}
        <section className="relative py-20">
          {/* Fondo con gradiente cyan-blue */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-blue-900/20 to-indigo-900/30 backdrop-blur-sm" />
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="section-divider mb-12" />
          <div className="mb-20 text-center">
            <span className="section-badge section-badge-icon">
              <span>🏆</span>
              <span>Certificaciones</span>
            </span>
            <h2 className="text-5xl font-black text-white mt-4 mb-6 font-display">
              Certificaciones y <span className="gradient-text-primary">Cursos</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-semibold leading-relaxed max-w-2xl mx-auto">Formación continua y especialización profesional</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-cyan-900/40 backdrop-blur-xl gradient-border-blue rounded-2xl p-8 h-full hover:shadow-[0_0_40px_rgba(124,58,237,0.4),0_0_60px_rgba(59,130,246,0.3)] transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600/50 to-cyan-600/50 rounded-xl flex items-center justify-center text-xl shadow-[0_0_10px_rgba(124,58,237,0.4)]">
                      🏆
                    </div>
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{cert.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">{cert.title}</h3>
                  <p className="text-sm text-slate-200 font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-xs text-purple-400 font-medium mb-3">{cert.hours}</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{cert.description}</p>

                  {/* If images were added to public/assets/certs/, render them below */}
                  {profile.certImages && profile.certImages[index] && (
                    <div className="mt-4 flex justify-center">
                      <img
                        src={`/assets/certs/${profile.certImages[index]}`}
                        alt={`Cert ${index + 1}`}
                        className="w-auto h-36 object-contain rounded-lg border-2 border-purple-500/30 bg-slate-900/50 p-2 shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Skills Grid - Con fondo colorido */}
        <section className="relative py-20">
          {/* Fondo con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-fuchsia-900/30 backdrop-blur-sm" />
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="section-divider mb-12" />
          <div className="mb-20 text-center">
            <span className="section-badge section-badge-icon">
              <span>💻</span>
              <span>Competencias</span>
            </span>
            <h2 className="text-5xl font-black text-white mt-4 mb-6 font-display">
              Habilidades y <span className="gradient-text-primary">Tecnologías</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-semibold leading-relaxed max-w-2xl mx-auto">Herramientas y tecnologías que domino</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-cyan-900/40 backdrop-blur-xl gradient-border-blue rounded-2xl p-10 md:p-12 h-full hover:shadow-[0_0_40px_rgba(124,58,237,0.4),0_0_60px_rgba(59,130,246,0.3)] transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02]">
                  <div className="flex flex-col items-center text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600/50 to-cyan-600/50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_10px_rgba(124,58,237,0.4)]">
                      {index === 0 ? "💻" : index === 1 ? "⚙️" : "🛠️"}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    {items.map((skill, i) => (
                      <span key={i} className="inline-block px-5 py-2.5 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-cyan-600/30 backdrop-blur-sm border border-purple-500/40 text-white font-semibold text-sm rounded-lg hover:border-purple-400/70 hover:from-purple-600/50 hover:via-blue-600/50 hover:to-cyan-600/50 hover:shadow-[0_0_10px_rgba(124,58,237,0.3)] transition-all duration-300 hover:scale-110">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Stats Section - Con fondo colorido */}
        <section className="relative py-20 mb-8">
          {/* Fondo con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-purple-900/30 backdrop-blur-sm" />
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="section-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center bg-slate-800/50 backdrop-blur-xl rounded-2xl p-10 gradient-border-blue-subtle hover:bg-slate-800/70 transition-all duration-400 hover:-translate-y-1 group cursor-default">
              <div className="text-6xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">4+</div>
              <p className="text-slate-400 font-semibold uppercase tracking-wide text-sm">Proyectos</p>
            </div>
            
            <div className="text-center bg-slate-800/50 backdrop-blur-xl rounded-2xl p-10 gradient-border-blue-subtle hover:bg-slate-800/70 transition-all duration-400 hover:-translate-y-1 group cursor-default">
              <div className="text-6xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">2024</div>
              <p className="text-slate-400 font-semibold uppercase tracking-wide text-sm">Graduado</p>
            </div>
            
            <div className="text-center bg-slate-800/50 backdrop-blur-xl rounded-2xl p-10 gradient-border-blue-subtle hover:bg-slate-800/70 transition-all duration-400 hover:-translate-y-1 group cursor-default">
              <div className="text-6xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">100%</div>
              <p className="text-slate-400 font-semibold uppercase tracking-wide text-sm">Dedicación</p>
            </div>
            
            <div className="text-center bg-slate-800/50 backdrop-blur-xl rounded-2xl p-10 gradient-border-blue-subtle hover:bg-slate-800/70 transition-all duration-400 hover:-translate-y-1 group cursor-default">
              <div className="text-6xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">∞</div>
              <p className="text-slate-400 font-semibold uppercase tracking-wide text-sm">Aprendizaje</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

