import React from 'react';
import { Leaf, Users, Globe, Heart } from 'lucide-react';

const SocialResponsibility = () => {
  const initiatives = [
    {
      icon: Leaf,
      title: "Sostenibilidad Ambiental",
      description: "Utilizamos ingredientes orgánicos y empaques eco-friendly para minimizar nuestro impacto ambiental."
    },
    {
      icon: Users,
      title: "Comercio Justo",
      description: "Trabajamos directamente con productores locales de maca y cacao, garantizando precios justos."
    },
    {
      icon: Globe,
      title: "Comunidad Saludable",
      description: "Promovemos estilos de vida saludables a través de educación nutricional en comunidades."
    },
    {
      icon: Heart,
      title: "Bienestar Social",
      description: "Donamos un porcentaje de nuestras ventas a programas de nutrición infantil."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-800 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Responsabilidad Social
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            En NUTRIBLITZ creemos que una empresa exitosa debe contribuir positivamente 
            a la sociedad y al medio ambiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <initiative.icon className="text-green-800" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{initiative.title}</h3>
              <p className="text-green-100 leading-relaxed">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Nuestro Compromiso</h3>
            <p className="text-xl text-green-100 leading-relaxed max-w-4xl mx-auto">
              Cada producto NUTRIBLITZ no solo nutre tu cuerpo, sino que también contribuye 
              a un futuro más sostenible y equitativo. Juntos construimos un mundo más saludable, 
              una mezcla a la vez.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibility;