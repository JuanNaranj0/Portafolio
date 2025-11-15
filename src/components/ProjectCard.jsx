import React, { useState } from 'react'

export default function ProjectCard({ title, description, href, tech = [] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-cyan-900/40 backdrop-blur-xl rounded-2xl gradient-border-blue overflow-hidden
                 hover:shadow-[0_0_40px_rgba(124,58,237,0.4),0_0_60px_rgba(59,130,246,0.3),0_0_80px_rgba(6,182,212,0.2)]
                 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer shadow-[0_8px_32px_rgba(124,58,237,0.2)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Glow effect de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-blue-600/20 to-cyan-600/0 
                     opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
      
      {/* Top accent bar con gradiente morado-azul-cyan */}
      <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500
                     shadow-[0_0_10px_rgba(124,58,237,0.5)] group-hover:h-2 transition-all duration-400" />
      
      <div className="relative p-8 md:p-10 z-10">
        {/* Header with title and icon */}
        <div className="flex items-start justify-between mb-6 md:mb-7">
          <h3 className="text-xl md:text-2xl font-black text-white group-hover:gradient-text-primary 
                        transition-all duration-400 flex-1 leading-tight font-display">
            {title}
          </h3>
          <div className="text-3xl md:text-4xl group-hover:scale-125 group-hover:rotate-12 
                        transition-all duration-400 ml-3 flex-shrink-0">
            🚀
          </div>
        </div>
        
        {/* Description */}
        <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed font-semibold
                     group-hover:text-slate-200 transition-colors duration-400 line-clamp-3">
          {description}
        </p>
        
        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {tech.map((t, idx) => (
            <span 
              key={t}
              className="inline-block bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-cyan-600/30 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-lg 
                        border border-purple-500/40 hover:border-purple-400/70 hover:from-purple-600/50 hover:via-blue-600/50 hover:to-cyan-600/50 hover:shadow-[0_0_10px_rgba(124,58,237,0.3)]
                        transition-all duration-300 hover:scale-110"
              style={{ transitionDelay: `${idx * 30}ms` }}
            >
              {t}
            </span>
          ))}
        </div>
        
        {/* CTA Link */}
        {href && href !== '#' ? (
          <a 
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-bold text-sm
                      group-hover:translate-x-2 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
          >
            <span>Ver proyecto</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center space-x-2 text-slate-500 font-semibold text-sm">
            <span>Próximamente</span>
          </span>
        )}
      </div>
    </div>
  )
}
