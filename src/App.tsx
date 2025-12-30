import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Barra de navegación */}
      <nav className="bg-black bg-opacity-80 backdrop-blur-sm p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            DANNYCELL
          </h1>
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-cyan-300 transition-colors">Inicio</a>
            <a href="#productos" className="hover:text-cyan-300 transition-colors">Productos</a>
            <a href="#servicios" className="hover:text-cyan-300 transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-cyan-300 transition-colors">Contacto</a>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded-full transition-colors">
            Iniciar Sesión
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Tecnología a tu <span className="text-cyan-400">alcance</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Los mejores dispositivos y accesorios tecnológicos con la mejor calidad y al mejor precio del mercado.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-8 rounded-full transition-colors">
              Ver Productos
            </button>
            <button className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:bg-opacity-10 font-bold py-3 px-8 rounded-full transition-colors">
              Saber más
            </button>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Envío Rápido',
                description: 'Entregas rápidas y seguras a todo el país.'
              },
              {
                icon: '💳',
                title: 'Pago Seguro',
                description: 'Múltiples métodos de pago y máxima seguridad.'
              },
              {
                icon: '🔧',
                title: 'Soporte Técnico',
                description: 'Asistencia técnica especializada 24/7.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">DANNYCELL</h2>
            <p className="text-gray-400 mb-6">Tecnología de vanguardia para todos</p>
            <div className="flex justify-center space-x-4 mb-6">
              {['📱', '💻', '⌚', '🎧'].map((icon, i) => (
                <span key={i} className="text-2xl hover:text-cyan-400 cursor-pointer">
                  {icon}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Dannycell. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;