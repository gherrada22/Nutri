import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Music } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-green-800 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            ¿Tienes preguntas sobre nuestros productos? ¡Estamos aquí para ayudarte!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-8">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 rounded-full p-3">
                    <Mail className="text-green-800" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-green-100">comercial@nutriblitz.com.pe</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 rounded-full p-3">
                    <Phone className="text-green-800" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Teléfono</h4>
                    <p className="text-green-100">+51 985 443 209</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 rounded-full p-3">
                    <MapPin className="text-green-800" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Dirección</h4>
                    <p className="text-green-100">Calle Los Álamos 173, Chorrillos<br />Lima, Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Síguenos en Redes Sociales</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-4 hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a 
                  href="#" 
                  className="bg-gradient-to-r from-gray-800 to-black rounded-full p-4 hover:scale-110 transition-transform duration-300"
                >
                  <Music className="text-white" size={24} />
                </a>
              </div>
              <div className="mt-4 space-y-2 text-green-100">
                <p>@nutriblitz_oficial</p>
                <p>@nutriblitz.pe</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">Horarios de Atención</h4>
              <div className="space-y-2 text-green-100">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-green-800 py-4 rounded-lg font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Por qué elegir NUTRIBLITZ?</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-3xl mb-2">🚚</div>
              <h4 className="font-semibold mb-2">Envío Rápido</h4>
              <p className="text-green-100 text-sm">Entrega en 24-48 horas en Lima</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💯</div>
              <h4 className="font-semibold mb-2">Garantía de Calidad</h4>
              <p className="text-green-100 text-sm">100% satisfacción garantizada</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="font-semibold mb-2">Ingredientes Premium</h4>
              <p className="text-green-100 text-sm">Solo los mejores superalimentos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;