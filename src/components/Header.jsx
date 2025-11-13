export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Juan Naranj0 — Portafolio</h1>
        <nav className="space-x-4 text-sm">
          <a className="text-gray-600 hover:text-gray-900" href="#about">Sobre mí</a>
          <a className="text-gray-600 hover:text-gray-900" href="#projects">Proyectos</a>
          <a className="text-gray-600 hover:text-gray-900" href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
