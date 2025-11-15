import React from 'react'
import ProjectList from '../components/ProjectList'
import projects from '../data/projects'
import profile from '../data/profile'

export default function Projects() {
  return (
    <main className="min-h-screen relative overflow-hidden pt-16 md:pt-20">
      {/* Blue-Purple Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-purple-950 via-indigo-950 to-blue-950 z-0" />
      
      {/* Animated gradient orbs - Dark theme */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Large primary orb */}
        <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-gradient-to-br from-indigo-600/30 via-purple-600/25 to-blue-600/20 rounded-full blur-3xl opacity-80 animate-float-slow" />
        
        {/* Secondary orb */}
        <div className="absolute top-1/2 right-0 w-[850px] h-[850px] bg-gradient-to-bl from-blue-600/30 via-indigo-600/25 to-purple-600/20 rounded-full blur-3xl opacity-80 animate-float" />
        
        {/* Center accent orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-purple-500/25 via-indigo-500/20 to-transparent rounded-full blur-3xl opacity-70" />
        
        {/* Additional accent orbs */}
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-t from-indigo-500/20 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-0 right-1/3 w-[750px] h-[750px] bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-3xl opacity-60" />
      </div>
      
      {/* Enhanced grid pattern overlay - Dark theme */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#6366f120_1px,transparent_1px),linear-gradient(to_bottom,#6366f120_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 z-0" />

      <div className="relative z-10">
        {/* Section Divider */}
        <div className="section-divider" />

        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">
          <div className="text-center md:text-left">
            <span className="section-badge section-badge-icon">
              <span>📁</span>
              <span>Portafolio</span>
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mt-4 mb-8 leading-tight tracking-tight font-display">
              Mis <span className="gradient-text-primary">Proyectos</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-semibold mx-auto md:mx-0">
              Aquí encontrarás una selección de mis proyectos más destacados. Cada uno representa diferentes desafíos técnicos, tecnologías y soluciones creativas.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20">
          <div className="section-divider mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center bg-gradient-blue-purple backdrop-blur-xl rounded-2xl p-10 gradient-border-blue-subtle hover:bg-gradient-blue-purple-dark transition-all duration-400 hover:-translate-y-1 group cursor-default">
              <div className="text-6xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">4+</div>
              <p className="text-slate-300 font-semibold uppercase tracking-wide text-sm">Proyectos</p>
            </div>
            <div className="text-center bg-gradient-blue-purple backdrop-blur-xl rounded-2xl p-10 gradient-border-blue-subtle hover:bg-gradient-blue-purple-dark transition-all duration-400 hover:-translate-y-1 group cursor-default">
              <div className="text-6xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">2024</div>
              <p className="text-slate-300 font-semibold uppercase tracking-wide text-sm">Graduado</p>
            </div>
            <div className="text-center bg-gradient-blue-purple backdrop-blur-xl rounded-2xl p-10 gradient-border-blue-subtle hover:bg-gradient-blue-purple-dark transition-all duration-400 hover:-translate-y-1 group cursor-default">
              <div className="text-6xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">100%</div>
              <p className="text-slate-300 font-semibold uppercase tracking-wide text-sm">Dedicación</p>
            </div>
            <div className="text-center bg-gradient-blue-purple backdrop-blur-xl rounded-2xl p-10 gradient-border-blue-subtle hover:bg-gradient-blue-purple-dark transition-all duration-400 hover:-translate-y-1 group cursor-default">
              <div className="text-6xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">∞</div>
              <p className="text-slate-300 font-semibold uppercase tracking-wide text-sm">Aprendizaje</p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="section-divider mb-12" />
          <div className="mb-20 px-4 md:px-6 text-center">
            <span className="section-badge-simple">Portafolio</span>
            <h2 className="text-5xl font-black text-white mt-6 mb-6 font-display">
              Proyectos <span className="gradient-text-primary">Destacados</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-semibold leading-relaxed max-w-2xl mx-auto">Casos de éxito y soluciones innovadoras</p>
          </div>
          <div className="animate-fade-in">
            <ProjectList projects={projects} />
          </div>
        </section>

        {/* Process Section - Con fondo colorido */}
        <section className="relative py-20">
          {/* Fondo con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-pink-900/30 backdrop-blur-sm" />
          
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="section-divider mb-12" />
          <div className="mb-20 text-center">
            <span className="section-badge section-badge-icon">
              <span>⚙️</span>
              <span>Metodología</span>
            </span>
            <h2 className="text-5xl font-black text-white mt-4 mb-6 font-display">
              Mi <span className="gradient-text-primary">Proceso</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-semibold leading-relaxed max-w-2xl mx-auto">Cómo transformo ideas en realidad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="bg-slate-800/50 backdrop-blur-xl gradient-border-blue-subtle rounded-2xl p-10 md:p-12 h-full hover:bg-slate-800/70 transition-all duration-400 hover:-translate-y-1 text-center">
                {/* Número y emoji juntos */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-black text-xl border-4 border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300">
                    1
                  </div>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">💡</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ideación</h3>
                <p className="text-slate-400 leading-relaxed font-medium text-base md:text-lg mx-auto">Entiendo tu visión, identifico oportunidades y diseño la mejor solución para tu proyecto.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-slate-800/50 backdrop-blur-xl gradient-border-blue-subtle rounded-2xl p-10 md:p-12 h-full hover:bg-slate-800/70 transition-all duration-400 hover:-translate-y-1 text-center">
                {/* Número y emoji juntos */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-black text-xl border-4 border-purple-400/30 shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform duration-300">
                    2
                  </div>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">⚙️</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Desarrollo</h3>
                <p className="text-slate-400 leading-relaxed font-medium text-base md:text-lg mx-auto">Escribo código limpio, escalable y funcional siguiendo las mejores prácticas de la industria.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="bg-slate-800/50 backdrop-blur-xl gradient-border-blue-subtle rounded-2xl p-10 md:p-12 h-full hover:bg-slate-800/70 transition-all duration-400 hover:-translate-y-1 text-center">
                {/* Número y emoji juntos */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-black text-xl border-4 border-indigo-400/30 shadow-[0_0_20px_rgba(99,102,241,0.5)] group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">🚀</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Despliegue</h3>
                <p className="text-slate-400 leading-relaxed font-medium text-base md:text-lg mx-auto">Lanzo tu proyecto a producción con soporte continuo y actualizaciones regulares.</p>
              </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}

