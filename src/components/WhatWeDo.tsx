import React from 'react';
import { Target, Zap, Heart, Clock } from 'lucide-react';

const WhatWeDo = () => {
  const features = [
    {
      icon: Target,
      title: "Enfoque Profesional",
      description: "Diseñado para profesionales y personas activas que priorizan su salud sin sacrificar tiempo."
    },
    {
      icon: Zap,
      title: "Energía Sostenida",
      description: "Fórmula con maca, cacao y avena que proporciona energía duradera y claridad mental."
    },
    {
      icon: Heart,
      title: "Nutrición Completa",
      description: "Enriquecido con vitaminas B12, D y minerales como hierro y magnesio para bienestar integral."
    },
    {
      icon: Clock,
      title: "Preparación Rápida",
      description: "Listo en segundos. Solo mezcla 1-2 cucharadas con tu líquido favorito."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            ¿Qué Hacemos?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-green-700">NUTRIBLITZ</span> se especializa en la creación de suplementos nutricionales 
            de calidad premium que transforman las comidas rápidas en rutinas energéticas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Eleva tu Experiencia Nutricional
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Combinamos superalimentos como maca, avena, cacao y plátano rico en potasio para 
                entregar polvos listos para mezclar que proporcionan energía, sacian el hambre y 
                apoyan el bienestar a largo plazo.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Desde impulsar la productividad matutina hasta la recuperación post-entrenamiento, 
                te ayudamos a conquistar tu día con eficacia comprobada del producto.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-yellow-400/20 rounded-3xl blur-2xl"></div>
              <img 
                src="/principal.png" 
                alt="Nutriblitz Experience" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;