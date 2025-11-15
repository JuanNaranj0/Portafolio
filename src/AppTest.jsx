import TestHeader from './components/TestHeader'

export default function AppTest() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <TestHeader />
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">¡Hola! 👋</h1>
        <p className="text-xl text-gray-600">Este es un portafolio de prueba</p>
      </main>
    </div>
  )
}
