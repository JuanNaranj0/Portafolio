export default function TestHeader() {
  return (
    <header className="bg-white border-b border-gray-200 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">JN</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Juan Naranj0</span>
        </div>
        <nav className="flex items-center space-x-4">
          <a href="/" className="text-gray-600">Inicio</a>
          <a href="/about" className="text-gray-600">Sobre</a>
          <a href="/projects" className="text-gray-600">Proyectos</a>
        </nav>
      </div>
    </header>
  )
}
