import React from 'react';
import { Instagram, Music, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo.png" alt="Nutriblitz" className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Energía natural para tu día. Fundada en 2025, NUTRIBLITZ ofrece suplementos 
              nutricionales premium con superalimentos naturales para profesionales activos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-3 hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gradient-to-r from-gray-700 to-black rounded-full p-3 hover:scale-110 transition-transform duration-300"
              >
                <Music size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Producto', 'Recetas', 'Testimonios', 'Contacto'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-green-400" />
                <span className="text-gray-300 text-sm">comercial@nutriblitz.com.pe</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-green-400" />
                <span className="text-gray-300 text-sm">+51 985 443 209</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-green-400 mt-1" />
                <span className="text-gray-300 text-sm">Calle Los Álamos 173<br />Chorrillos, Lima</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 NUTRIBLITZ. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;