import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { icon: '🏠', label: 'Inicio', href: '/' },
    { icon: '👤', label: 'Sobre Mí', href: '/about' },
    { icon: '🎯', label: 'Proyectos', href: '/projects' },
  ]

  const socials = [
    { icon: '🐙', label: 'GitHub', href: 'https://github.com/JuanNaranj0', username: '@JuanNaranj0' },
    { icon: '💼', label: 'LinkedIn', href: '#', username: 'LinkedIn' },
    { icon: '📧', label: 'Email', href: 'mailto:naranjoverdugo08@gmail.com', username: 'Email' },
  ]

  return (
    <footer className="bg-gradient-dark text-white mt-32 relative overflow-hidden border-t border-blue-500/30 shadow-elegant-lg">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 bg-gradient-blue rounded-2xl opacity-20" />
                <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-blue-600 to-slate-950 
                              rounded-2xl flex items-center justify-center glow-effect-cyan shadow-lg">
                  <span className="text-white font-black text-lg">JN</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-white font-display">Juan Naranjo</h3>
                <p className="text-xs text-sky-300 font-bold font-display">Tecnólogo e Ingeniero en Desarrollo de Software</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed font-medium">
              Desarrollador de Software graduado de la Universidad de Caldas y la Universidad Surcolombiana. Transformo ideas en experiencias digitales modernas y funcionales. Especializado en React, JavaScript y tecnologías web modernas.
            </p>
            <p className="text-blue-200 text-xs mt-2 font-medium">
              📍 Manizales, Caldas - Colombia
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs flex items-center space-x-3 font-display">
              <div className="w-1 h-4 bg-gradient-blue rounded-full shadow-glow" />
              <span>Navegación</span>
            </h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-blue-100 hover:text-white hover:translate-x-2 transition-all duration-300 
                             font-semibold text-sm flex items-center space-x-2 group"
                  >
                    <span className="group-hover:scale-125 transition-transform duration-300">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tech Stack */}
          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs flex items-center space-x-3">
              <div className="w-1 h-4 bg-gradient-blue rounded-full" />
              <span>Tecnologías</span>
            </h4>
            <ul className="space-y-3">
              {[
                { icon: '⚛️', name: 'React 19+' },
                { icon: '🎨', name: 'Tailwind CSS' },
                { icon: '⚡', name: 'Vite' },
              ].map((tech) => (
                <li key={tech.name} className="text-blue-100 font-semibold text-sm flex items-center space-x-2 group hover:text-white transition-colors duration-300">
                  <span className="text-lg group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="font-black text-white mb-8 uppercase tracking-widest text-xs flex items-center space-x-3">
              <div className="w-1 h-4 bg-gradient-blue rounded-full" />
              <span>Contacto</span>
            </h4>
            <div className="space-y-6">
              {/* Email Card con degradado */}
              <a 
                href="mailto:naranjoverdugo08@gmail.com"
                className="relative inline-flex items-center space-x-3 px-6 py-4 rounded-xl
                         bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-indigo-600/30
                         backdrop-blur-xl gradient-border-blue-subtle
                         text-white hover:text-white font-bold text-sm
                         transition-all duration-400 group w-full justify-center
                         hover:shadow-[0_0_30px_rgba(59,130,246,0.4),0_0_40px_rgba(139,92,246,0.3)]
                         hover:-translate-y-1 overflow-hidden"
              >
                {/* Efecto de brillo */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
                
                <span className="relative text-xl group-hover:scale-110 transition-transform duration-300">📧</span>
                <span className="relative">naranjoverdugo08@gmail.com</span>
              </a>
              
              {/* Phone Card con degradado */}
              <a 
                href="tel:+573103478617"
                className="relative inline-flex items-center space-x-3 px-6 py-4 rounded-xl
                         bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-blue-600/30
                         backdrop-blur-xl gradient-border-blue-subtle
                         text-white hover:text-white font-bold text-sm
                         transition-all duration-400 group w-full justify-center
                         hover:shadow-[0_0_30px_rgba(139,92,246,0.4),0_0_40px_rgba(99,102,241,0.3)]
                         hover:-translate-y-1 overflow-hidden"
              >
                {/* Efecto de brillo */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
                
                <span className="relative text-xl group-hover:scale-110 transition-transform duration-300">📱</span>
                <span className="relative">+57 310 347 8617</span>
              </a>
              
              {/* Social Icons con degradado */}
              <div className="flex gap-3">
                {socials.map((social, idx) => (
                  <a
                    key={social.label}
                    href={social.href}
                    title={social.username}
                    className={`relative flex-1 inline-flex items-center justify-center py-4 rounded-xl
                             backdrop-blur-xl gradient-border-blue-subtle
                             text-white font-bold transition-all duration-400 group text-2xl
                             hover:shadow-[0_0_25px_rgba(124,58,237,0.4)]
                             hover:-translate-y-2 hover:scale-105 overflow-hidden
                             ${idx === 0 ? 'bg-gradient-to-br from-purple-600/30 to-blue-600/30' : 
                               idx === 1 ? 'bg-gradient-to-br from-blue-600/30 to-cyan-600/30' : 
                               'bg-gradient-to-br from-indigo-600/30 to-purple-600/30'}`}
                  >
                    {/* Efecto de brillo */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
                    
                    <span className="relative group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-blue-500/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-blue-100 text-xs md:text-sm text-center md:text-left font-medium">
              © {currentYear} <span className="text-white font-black">Juan Sebastián Naranjo Verdugo</span>. 
              Desarrollador de <span className="text-cyan-400 font-bold">software</span> 
              <span className="text-blue-400 font-bold"> apasionado</span>
            </p>
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-blue-100">Made </span>
              <span className="text-red-500 text-lg animate-float">⚡</span>
              <span className="text-blue-100">in Manizales</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
