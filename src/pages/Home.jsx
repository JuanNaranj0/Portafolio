import React from 'react'
import ProjectList from '../components/ProjectList'
import projects from '../data/projects'
import profile from '../data/profile'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden pt-16 md:pt-20">
      {/* Blue-Purple Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-purple-950 via-indigo-950 to-blue-950 z-0" />
      
      {/* Animated gradient orbs - Dark theme */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[900px] h-[900px] bg-gradient-to-br from-blue-600/30 via-indigo-600/25 to-purple-600/20 rounded-full blur-3xl opacity-80 animate-float-slow" />
        <div className="absolute top-1/3 -right-32 w-[800px] h-[800px] bg-gradient-to-bl from-purple-600/30 via-indigo-600/25 to-blue-600/20 rounded-full blur-3xl opacity-80 animate-float" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-indigo-500/25 via-blue-500/20 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute top-1/2 left-0 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-0 w-[750px] h-[750px] bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl opacity-60" />
      </div>
      
      {/* Enhanced grid pattern overlay - Dark theme */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#6366f120_1px,transparent_1px),linear-gradient(to_bottom,#6366f120_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 z-0" />

      <div className="relative z-10">
        <div className="section-divider" />

        {/* Hero Section - Mejorada y Responsive */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
            <div className="space-y-6 sm:space-y-8 slide-down">
              {/* Badge de bienvenida - Mejorado con animación espectacular */}
              <div className="flex justify-center md:justify-start">
                <div className="relative group">
                  {/* Glow effect de fondo con múltiples capas */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" style={{animation: 'gradient-rotate 4s linear infinite'}}></div>
                  
                  {/* Badge principal con animación */}
                  <div className="relative px-7 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 backdrop-blur-xl border-2 border-purple-300/50 rounded-full hover:border-purple-300/90 hover:shadow-[0_0_40px_rgba(147,51,234,0.8),0_0_60px_rgba(59,130,246,0.5)] transition-all duration-500 shadow-[0_0_25px_rgba(124,58,237,0.6)] cursor-default overflow-hidden group-hover:scale-105" style={{backgroundSize: '200% 200%', animation: 'gradient-rotate 3s ease infinite'}}>
                    {/* Efecto de brillo interno */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-700" style={{animation: 'badge-shine 3s ease-in-out infinite'}}></span>
                    
                    <span className="relative text-white text-xs font-black uppercase tracking-wider drop-shadow-lg flex items-center gap-2">
                      <span className="text-base" style={{animation: 'icon-bounce 2s ease-in-out infinite'}}>✨</span>
                      <span>Bienvenido a Mi Portafolio</span>
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Título principal */}
              <div className="space-y-4">
                <h1 className="text-white leading-[1.1] tracking-tight font-display">
                  Transformo <span className="gradient-text-primary">Ideas en</span> Realidad
                </h1>
              </div>
              
              {/* Descripción */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-xl">
                Soy Tecnólogo e Ingeniero en Desarrollo de Software, graduado de la Universidad de Caldas y la Universidad Surcolombiana. Especializado en crear interfaces modernas, intuitivas y altamente funcionales que transforman la forma en que los usuarios interactúan con el mundo digital.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-6">
                <a 
                  href="#projects"
                  className="btn-secondary inline-flex items-center justify-center space-x-3 px-9 py-4 uppercase text-sm tracking-wide group"
                >
                  <span>Explorar Proyectos</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Stats - Elegantes y Responsive */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 md:pt-10 mt-4 border-t border-slate-700/50">
                {[
                  { value: '4+', label: 'Proyectos', icon: '🚀' },
                  { value: 'Auto', label: 'Aprendizaje', icon: '📚' },
                  { value: '100%', label: 'Dedicación', icon: '💪' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center group cursor-default hover:transform hover:-translate-y-1 transition-all duration-300">
                    <div className="mb-1 sm:mb-2 text-xl sm:text-2xl group-hover:scale-110 transition-all duration-300">
                      {stat.icon}
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                      {stat.value}
                    </p>
                    <p className="text-[0.65rem] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-0.5 sm:mt-1 group-hover:text-slate-300 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image - Con gradiente colorido */}
            <div className="relative slide-up">
              {/* Glow effect de fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-cyan-500/40 rounded-3xl blur-3xl opacity-60 animate-float-slow" />
              
              {/* Contenedor principal con gradiente colorido */}
              <div className="relative rounded-3xl p-12 flex items-center justify-center min-h-96 overflow-visible group bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 backdrop-blur-xl border-4 border-purple-500/30 shadow-[0_20px_60px_rgba(99,102,241,0.4)]">
                
                {/* Overlay decorativo con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl" />
                
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer" 
                       style={{ animation: 'shimmer 3s ease-in-out infinite' }} />
                </div>
                
                {/* Foto profesional */}
                <div className="relative z-10">
                  {profile.photo ? (
                    <div className="profile-photo-wrapper">
                      <div className="photo-ring" aria-hidden="true" />
                      <img
                        src={`/assets/photos/${profile.photo}`}
                        alt="Foto profesional"
                        className="profile-photo"
                        onError={(e) => { 
                          e.currentTarget.style.display = 'none';
                          console.error('Error loading photo:', e.currentTarget.src);
                        }}
                        onLoad={() => console.log('Photo loaded successfully')}
                      />
                    </div>
                  ) : (
                    <div className="text-9xl animate-float">👨‍💻</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Languages Section - Mejorada */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
          <div className="section-divider mb-16" />
          
          <div className="bg-gradient-blue-purple-light backdrop-blur-xl gradient-border-blue rounded-3xl p-8 md:p-16 lg:p-20 transition-all duration-500">
            {/* Header de sección */}
            <div className="text-center mb-16 space-y-6">
              <div className="inline-block">
                <span className="section-badge section-badge-icon">
                  <span>🚀</span>
                  <span>Habilidades & Idiomas</span>
                </span>
              </div>
              
              <h2 className="text-white font-display">
                Tecnologías, Herramientas <span className="gradient-text-primary">e Idiomas</span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                Stack tecnológico y habilidades lingüísticas que domino y utilizo en mis proyectos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                {
                  icon: '💻',
                  title: 'Frontend',
                  skills: 'React, Vue, Tailwind CSS, HTML5, CSS3, JavaScript ES6+'
                },
                {
                  icon: '🛠️',
                  title: 'Backend',
                  skills: 'Node.js, Express, Python, Java, C++'
                },
                {
                  icon: '⚙️',
                  title: 'Herramientas',
                  skills: 'Git, Figma, Docker, Azure, Vite, Webpack'
                }
              ].map((cat, idx) => (
                <div key={idx} className="bg-gradient-blue-purple backdrop-blur-xl p-8 md:p-10 rounded-2xl gradient-border-blue hover:bg-gradient-blue-purple-dark transition-all duration-400 group hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-slate-700/50 rounded-xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{cat.title}</h3>
                  </div>
                  <p className="text-slate-300 font-medium text-base md:text-lg leading-relaxed text-center mx-auto">{cat.skills}</p>
                </div>
              ))}
            </div>

            {/* Idiomas organizados visualmente */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Idiomas</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {profile.languages.map((lang, idx) => (
                  <div key={idx} className="group relative bg-gradient-blue-purple backdrop-blur-xl gradient-border-blue-subtle rounded-xl px-8 py-5 flex flex-col items-center min-w-[140px] hover:bg-gradient-blue-purple-dark hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{lang.flag}</span>
                    <span className="font-bold text-white text-lg">{lang.name}</span>
                    <span className="text-sm text-slate-400 font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Mejorada */}
        <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 scroll-mt-20 mb-20">
          <div className="section-divider mb-16" />
          
          {/* Header de sección */}
          <div className="mb-16 space-y-6 text-center">
            <div className="inline-block">
              <span className="section-badge section-badge-icon">
                <span>🎯</span>
                <span>Portafolio</span>
              </span>
            </div>
            
            <h2 className="text-white font-display">
              Proyectos <span className="gradient-text-primary">Destacados</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
              Una selección de mis trabajos más recientes, mostrando diferentes tecnologías y desafíos resueltos.
            </p>
          </div>
          
          {/* Lista de proyectos */}
          <div className="animate-fade-in">
            <ProjectList projects={projects} />
          </div>
        </section>
      </div>
    </main>
  )
}

