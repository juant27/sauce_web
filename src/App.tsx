import { useState, useEffect } from 'react';
import { Menu, X, Code, Lightbulb, Smartphone, BarChart3, ChevronDown, Mail, Phone, MapPin, Check } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado. Nos contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0D1B2A]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection('inicio')} className="flex items-center space-x-3">
              <img
                src="/WhatsApp Image 2025-09-24 at 13.48.48.jpeg"
                alt="Sauce Logo"
                className="h-12 w-auto"
              />
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-[#5DADE2] transition">Inicio</button>
              <button onClick={() => scrollToSection('servicios')} className="hover:text-[#5DADE2] transition">Servicios</button>
              <button onClick={() => scrollToSection('nosotros')} className="hover:text-[#5DADE2] transition">Nosotros</button>
              <button onClick={() => scrollToSection('proyectos')} className="hover:text-[#5DADE2] transition">Proyectos</button>
              <button onClick={() => scrollToSection('contacto')} className="bg-[#5DADE2] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#3498DB] transition transform hover:scale-105">
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              <button onClick={() => scrollToSection('inicio')} className="block hover:text-[#5DADE2] transition">Inicio</button>
              <button onClick={() => scrollToSection('servicios')} className="block hover:text-[#5DADE2] transition">Servicios</button>
              <button onClick={() => scrollToSection('nosotros')} className="block hover:text-[#5DADE2] transition">Nosotros</button>
              <button onClick={() => scrollToSection('proyectos')} className="block hover:text-[#5DADE2] transition">Proyectos</button>
              <button onClick={() => scrollToSection('contacto')} className="block bg-[#5DADE2] text-white px-6 py-2 rounded-lg font-semibold w-full">
                Contacto
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(90deg, #75AADB 1px, transparent 1px), linear-gradient(#75AADB 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8 inline-block">
              <img
                src="/WhatsApp Image 2025-09-24 at 13.48.48.jpeg"
                alt="Sauce Logo"
                className="h-32 w-auto mx-auto"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transformamos Ideas en<br />
              <span className="bg-gradient-to-r from-[#5DADE2] to-[#3498DB] bg-clip-text text-transparent">
                Soluciones Tecnológicas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Desarrollo de software y consultoría IT para potenciar tu negocio
            </p>
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-[#5DADE2] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#3498DB] transition transform hover:scale-105 shadow-xl"
            >
              Solicitá una consulta
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="ml-6 animate-bounce"
              aria-label="Scroll down"
            >
              <ChevronDown size={32} className="text-[#5DADE2]" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-[#1B263B]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Soluciones</h2>
            <div className="w-20 h-1 bg-[#5DADE2] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#0D1B2A] p-8 rounded-xl hover:transform hover:scale-105 transition duration-300 border border-[#5DADE2]/20 hover:border-[#5DADE2]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5DADE2] to-[#3498DB] rounded-lg flex items-center justify-center mb-6">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Desarrollo de Software a Medida</h3>
              <p className="text-gray-300">
                Creamos aplicaciones y sistemas personalizados para optimizar tus operaciones.
              </p>
            </div>

            <div className="bg-[#0D1B2A] p-8 rounded-xl hover:transform hover:scale-105 transition duration-300 border border-[#5DADE2]/20 hover:border-[#5DADE2]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5DADE2] to-[#3498DB] rounded-lg flex items-center justify-center mb-6">
                <Lightbulb size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultoría IT Estratégica</h3>
              <p className="text-gray-300">
                Te guiamos en la adopción de nuevas tecnologías para que tomes las mejores decisiones de negocio.
              </p>
            </div>

            <div className="bg-[#0D1B2A] p-8 rounded-xl hover:transform hover:scale-105 transition duration-300 border border-[#5DADE2]/20 hover:border-[#5DADE2]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5DADE2] to-[#3498DB] rounded-lg flex items-center justify-center mb-6">
                <Smartphone size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Desarrollo Web y Apps Móviles</h3>
              <p className="text-gray-300">
                Diseñamos y desarrollamos plataformas web y apps intuitivas y de alto rendimiento.
              </p>
            </div>

            <div className="bg-[#0D1B2A] p-8 rounded-xl hover:transform hover:scale-105 transition duration-300 border border-[#5DADE2]/20 hover:border-[#5DADE2]">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5DADE2] to-[#3498DB] rounded-lg flex items-center justify-center mb-6">
                <BarChart3 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Análisis de Datos e Inteligencia de Negocio</h3>
              <p className="text-gray-300">
                Transformamos tus datos en información valiosa para potenciar tu estrategia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-[#0D1B2A]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Somos Sauce</h2>
              <div className="w-20 h-1 bg-[#5DADE2] mx-auto mb-8"></div>
            </div>

            <div className="bg-[#1B263B] p-10 rounded-xl border border-[#5DADE2]/20">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Somos una empresa argentina apasionada por la tecnología. Convertimos ideas complejas en soluciones digitales eficientes, robustas y escalables que impulsan el crecimiento de nuestros clientes.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Check className="text-[#5DADE2] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Compromiso</h4>
                    <p className="text-gray-400">Dedicación total a cada proyecto</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="text-[#5DADE2] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Innovación</h4>
                    <p className="text-gray-400">Tecnología de vanguardia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="text-[#5DADE2] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Calidad</h4>
                    <p className="text-gray-400">Excelencia en cada línea de código</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Check className="text-[#5DADE2] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Colaboración</h4>
                    <p className="text-gray-400">Trabajo en equipo con nuestros clientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-[#1B263B]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
            <div className="w-20 h-1 bg-[#5DADE2] mx-auto"></div>
          </div>

          <div className="space-y-16">
            {/* Project 1 */}
            <div className="bg-[#0D1B2A] rounded-xl overflow-hidden border border-[#5DADE2]/20">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6 text-[#5DADE2]">Sistema de Gestión Empresarial</h3>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="text-[#F7B731] font-semibold text-lg mb-3">El Desafío</h4>
                    <p className="text-gray-300">
                      Una empresa de logística necesitaba centralizar sus operaciones dispersas en múltiples sistemas y planillas de Excel.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#F7B731] font-semibold text-lg mb-3">Nuestra Solución</h4>
                    <p className="text-gray-300">
                      Desarrollamos una plataforma web integral que unifica la gestión de inventario, facturación y tracking de envíos en tiempo real.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#F7B731] font-semibold text-lg mb-3">Resultados</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><Check className="text-[#5DADE2] mr-2" size={20} /> +45% en eficiencia operativa</li>
                      <li className="flex items-center"><Check className="text-[#F9B422] mr-2" size={20} /> -60% en errores de proceso</li>
                      <li className="flex items-center"><Check className="text-[#F9B422] mr-2" size={20} /> ROI en 6 meses</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-[#5DADE2]/20">
                  <span className="px-4 py-2 bg-[#5DADE2]/20 rounded-lg text-sm">React</span>
                  <span className="px-4 py-2 bg-[#75AADB]/20 rounded-lg text-sm">Node.js</span>
                  <span className="px-4 py-2 bg-[#75AADB]/20 rounded-lg text-sm">PostgreSQL</span>
                  <span className="px-4 py-2 bg-[#75AADB]/20 rounded-lg text-sm">AWS</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#0D1B2A] rounded-xl overflow-hidden border border-[#5DADE2]/20">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6 text-[#5DADE2]">App Móvil de E-commerce</h3>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="text-[#F7B731] font-semibold text-lg mb-3">El Desafío</h4>
                    <p className="text-gray-300">
                      Una startup retail necesitaba lanzar su aplicación móvil en tiempo récord para competir en un mercado exigente.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#F7B731] font-semibold text-lg mb-3">Nuestra Solución</h4>
                    <p className="text-gray-300">
                      Creamos una app nativa para iOS y Android con carrito de compras, pagos integrados y notificaciones push personalizadas.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#F7B731] font-semibold text-lg mb-3">Resultados</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><Check className="text-[#5DADE2] mr-2" size={20} /> Lanzamiento en 8 semanas</li>
                      <li className="flex items-center"><Check className="text-[#F9B422] mr-2" size={20} /> +10K descargas en el primer mes</li>
                      <li className="flex items-center"><Check className="text-[#F9B422] mr-2" size={20} /> 4.8 estrellas en tiendas</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-[#5DADE2]/20">
                  <span className="px-4 py-2 bg-[#5DADE2]/20 rounded-lg text-sm">React Native</span>
                  <span className="px-4 py-2 bg-[#75AADB]/20 rounded-lg text-sm">Firebase</span>
                  <span className="px-4 py-2 bg-[#75AADB]/20 rounded-lg text-sm">Stripe</span>
                  <span className="px-4 py-2 bg-[#75AADB]/20 rounded-lg text-sm">Push Notifications</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-[#0D1B2A] rounded-xl overflow-hidden border border-[#5DADE2]/20">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6 text-[#5DADE2]">Dashboard de Business Intelligence</h3>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="text-[#F7B731] font-semibold text-lg mb-3">El Desafío</h4>
                    <p className="text-gray-300">
                      Una empresa de servicios financieros tenía datos valiosos pero sin herramientas para visualizarlos y tomar decisiones estratégicas.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#F7B731] font-semibold text-lg mb-3">Nuestra Solución</h4>
                    <p className="text-gray-300">
                      Implementamos un dashboard interactivo con KPIs en tiempo real, reportes automatizados y predicciones con machine learning.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[#F7B731] font-semibold text-lg mb-3">Resultados</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><Check className="text-[#5DADE2] mr-2" size={20} /> +30% en toma de decisiones ágil</li>
                      <li className="flex items-center"><Check className="text-[#F9B422] mr-2" size={20} /> Reportes en 5 minutos vs 2 días</li>
                      <li className="flex items-center"><Check className="text-[#F9B422] mr-2" size={20} /> +25% en revenue detectado</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-[#5DADE2]/20">
                  <span className="px-4 py-2 bg-[#5DADE2]/20 rounded-lg text-sm">Python</span>
                  <span className="px-4 py-2 bg-[#75AADB]/20 rounded-lg text-sm">Power BI</span>
                  <span className="px-4 py-2 bg-[#75AADB]/20 rounded-lg text-sm">TensorFlow</span>
                  <span className="px-4 py-2 bg-[#75AADB]/20 rounded-lg text-sm">SQL Server</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-[#0D1B2A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hablemos de tu Proyecto</h2>
            <div className="w-20 h-1 bg-[#5DADE2] mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">Estamos listos para convertir tu idea en realidad</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1B263B] border border-[#5DADE2]/20 rounded-lg focus:outline-none focus:border-[#5DADE2] transition"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1B263B] border border-[#5DADE2]/20 rounded-lg focus:outline-none focus:border-[#5DADE2] transition"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1B263B] border border-[#75AADB]/20 rounded-lg focus:outline-none focus:border-[#F9B422] transition resize-none"
                    placeholder="Contanos sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#5DADE2] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#3498DB] transition transform hover:scale-105 shadow-xl"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-[#1B263B] p-6 rounded-xl border border-[#5DADE2]/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5DADE2] to-[#3498DB] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Email</h4>
                    <a href="mailto:contacto@sauce-tech.com" className="text-gray-300 hover:text-[#5DADE2] transition">
                      contacto@sauce-tech.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#1B263B] p-6 rounded-xl border border-[#5DADE2]/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5DADE2] to-[#3498DB] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Teléfono</h4>
                    <a href="tel:+5491112345678" className="text-gray-300 hover:text-[#5DADE2] transition">
                      +54 9 11 1234-5678
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#1B263B] p-6 rounded-xl border border-[#5DADE2]/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5DADE2] to-[#3498DB] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Ubicación</h4>
                    <p className="text-gray-300">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B263B] py-8 border-t border-[#5DADE2]/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="/WhatsApp Image 2025-09-24 at 13.48.48.jpeg"
                alt="Sauce Logo"
                className="h-10 w-auto"
              />
              <span className="font-bold">Sauce Soluciones Tecnológicas</span>
            </div>
            <p className="text-gray-400 text-sm">
              2025 Sauce. Innovación y desarrollo a tu medida.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
