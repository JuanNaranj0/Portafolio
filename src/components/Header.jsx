import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import profile from '../data/profile'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { to: '/', label: 'Inicio', icon: '🏠' },
    { to: '/about', label: 'Sobre Mí', icon: '👨‍💻' },
    { to: '/projects', label: 'Proyectos', icon: '🚀' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-2' 
        : 'py-3'
    }`}>
      {/* Contenedor con borde degradado y glassmorphism */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'bg-gradient-to-r from-slate-900/95 via-blue-950/95 to-purple-950/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(124,58,237,0.4),0_0_60px_rgba(59,130,246,0.3)] border-2'
            : 'bg-gradient-to-r from-slate-900/40 via-blue-950/40 to-purple-950/40 backdrop-blur-xl border-2 border-purple-500/20'
        }`}
        style={scrolled ? {
          borderImage: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #6366f1, #06b6d4) 1',
          boxShadow: '0 8px 32px rgba(124, 58, 237, 0.4), 0 0 60px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(139, 92, 246, 0.3)'
        } : {}}>
        <div className="flex items-center justify-between h-16 md:h-18 px-4 md:px-6">
          
          {/* Logo - Mejorado */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="relative">
              {/* Múltiples capas de glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500 animate-pulse" />
              
              {/* Logo container mejorado */}
              <div className="relative w-11 h-11 md:w-13 md:h-13 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(124,58,237,0.6)] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-400 border-2 border-purple-400/30 group-hover:border-purple-300/60 overflow-hidden">
                {/* Efecto de brillo interno */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
                
                <span className="relative text-white font-black text-lg md:text-xl drop-shadow-lg">JN</span>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <span className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 group-hover:from-purple-300 group-hover:via-blue-300 group-hover:to-cyan-300 transition-all duration-300 drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                Juan Naranjo
              </span>
              <p className="text-xs text-slate-400 font-semibold group-hover:text-slate-200 transition-colors duration-300">Desarrollador Full Stack</p>
            </div>
          </Link>

          {/* Desktop Navigation - Mejorado */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item, idx) => (
              <Link 
                key={item.to}
                to={item.to}
                className={`group relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-400 overflow-hidden ${
                  isActive(item.to)
                    ? 'text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 shadow-[0_0_25px_rgba(124,58,237,0.6),0_0_35px_rgba(59,130,246,0.4)] scale-105'
                    : 'text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/25 hover:via-blue-600/25 hover:to-cyan-600/25 hover:scale-105'
                }`}
                style={{
                  border: isActive(item.to) 
                    ? '2px solid transparent'
                    : '2px solid rgba(139, 92, 246, 0.2)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: isActive(item.to) ? 'padding-box, border-box' : 'padding-box',
                  backgroundImage: isActive(item.to)
                    ? 'linear-gradient(135deg, rgb(147 51 234) 0%, rgb(59 130 246) 50%, rgb(6 182 212) 100%), linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4)'
                    : undefined,
                  transitionDelay: `${idx * 50}ms`
                }}
              >
                {/* Efecto de brillo en hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
                
                {/* Partículas decorativas en activo */}
                {isActive(item.to) && (
                  <>
                    <span className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-60 animate-ping" />
                    <span className="absolute bottom-1 right-1 w-1 h-1 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '0.5s'}} />
                  </>
                )}
                
                <span className="relative flex items-center gap-2.5">
                  <span className="text-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{item.icon}</span>
                  <span className="font-black tracking-wide">{item.label}</span>
                </span>
                
                {/* Underline effect mejorado */}
                {!isActive(item.to) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 group-hover:w-[calc(100%-1rem)] transition-all duration-500 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.9)]" />
                )}
              </Link>
            ))}
            
            {/* WhatsApp Button - Espectacular */}
            <a 
              href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent('Hola! Me gustaría contactarte.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative ml-2 px-6 py-3 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white font-black text-sm rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:shadow-[0_0_35px_rgba(34,197,94,0.7),0_0_50px_rgba(16,185,129,0.5)] transform hover:scale-110 transition-all duration-400 flex items-center gap-2.5 border-2 border-green-400/40 hover:border-green-300/70 overflow-hidden group"
            >
              {/* Glow de fondo */}
              <span className="absolute inset-0 bg-green-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              
              {/* Efecto de brillo */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
              
              {/* Partículas decorativas */}
              <span className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-70 animate-ping" />
              
              <svg className="relative w-5 h-5 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="relative tracking-wide">Contactar</span>
            </a>
          </nav>

          {/* Mobile Menu Button - Espectacular */}
          <button 
            className="md:hidden relative p-3 rounded-xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 hover:from-purple-600/50 hover:to-blue-600/50 border-2 border-purple-500/40 hover:border-purple-400/70 transition-all duration-400 text-slate-100 hover:text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-110 overflow-hidden group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* Efecto de brillo */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-500" />
            
            {/* Partícula decorativa */}
            {menuOpen && (
              <span className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-70 animate-ping" />
            )}
            
            <svg className={`relative w-6 h-6 transition-all duration-400 ${menuOpen ? 'rotate-180 scale-110' : 'scale-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        </div>
        
        {/* Mobile Navigation - Espectacular */}
        {menuOpen && (
          <nav className="md:hidden mt-3 py-5 px-4 space-y-3 rounded-2xl bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-purple-950/95 backdrop-blur-2xl border-2 animate-slide-down shadow-[0_8px_32px_rgba(124,58,237,0.4)]" style={{
            borderImage: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #6366f1, #06b6d4) 1'
          }}>
            {navItems.map((item, idx) => (
              <Link 
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={`relative flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-base transition-all duration-400 overflow-hidden group ${
                  isActive(item.to)
                    ? 'text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 shadow-[0_0_25px_rgba(124,58,237,0.5)] scale-105'
                    : 'text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/25 hover:via-blue-600/25 hover:to-cyan-600/25 hover:scale-105 border-2 border-purple-500/20 hover:border-purple-400/40'
                }`}
                style={{
                  transitionDelay: `${idx * 50}ms`
                }}
              >
                {/* Efecto de brillo */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
                
                {/* Partículas en activo */}
                {isActive(item.to) && (
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-ping" />
                )}
                
                <span className="relative text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{item.icon}</span>
                <span className="relative font-black tracking-wide">{item.label}</span>
              </Link>
            ))}
            
            {/* WhatsApp Button Mobile - Espectacular */}
            <a 
              href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent('Hola! Me gustaría contactarte.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-black text-base rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.5)] border-2 border-green-400/40 overflow-hidden group mt-2 hover:scale-105 transition-all duration-400"
            >
              {/* Glow de fondo */}
              <span className="absolute inset-0 bg-green-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              
              {/* Efecto de brillo */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
              
              {/* Partícula decorativa */}
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full opacity-70 animate-ping" />
              
              <svg className="relative w-6 h-6 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="relative tracking-wide">Contactar por WhatsApp</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
