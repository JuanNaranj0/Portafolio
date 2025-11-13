export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
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

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="text-center py-12">
          <h2 className="text-4xl font-extrabold mb-4">Hola, soy Juan 👋</h2>
          <p className="text-lg text-gray-700">Desarrollador frontend — Construyo interfaces limpias y accesibles con React y Tailwind.</p>
        </section>

        <section id="about" className="py-8">
          <h3 className="text-2xl font-semibold mb-3">Sobre mí</h3>
          <p className="text-gray-700">Breve descripción: experiencia, tecnologías favoritas y objetivos profesionales.</p>
        </section>

        <section id="projects" className="py-8">
          <h3 className="text-2xl font-semibold mb-3">Proyectos</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Proyecto A</h4>
              <p className="text-sm text-gray-600">Descripción corta del proyecto.</p>
            </article>
            <article className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Proyecto B</h4>
              <p className="text-sm text-gray-600">Descripción corta del proyecto.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="py-8">
          <h3 className="text-2xl font-semibold mb-3">Contacto</h3>
          <p className="text-gray-700">Correo: <a className="text-blue-600" href="mailto:tu-email@example.com">tu-email@example.com</a></p>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-4xl mx-auto px-6 py-6 text-sm text-gray-600">© {new Date().getFullYear()} Juan Naranj0</div>
      </footer>
    </div>
  )
}
