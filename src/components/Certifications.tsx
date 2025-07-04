import React from 'react';
import { Award, Shield, Leaf } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "Certificación USDA Orgánico",
      description: "Nuestros productos cumplen con los más altos estándares de agricultura orgánica certificados por USDA.",
      badge: "USDA ORGANIC",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "ISO 22000 - Seguridad Alimentaria",
      description: "Sistema de gestión de seguridad alimentaria que garantiza la calidad desde la producción hasta el consumo.",
      badge: "ISO 22000",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Leaf,
      title: "Certificación BioSuisse",
      description: "Estándar suizo que certifica la producción orgánica sostenible y el comercio justo de nuestros ingredientes.",
      badge: "BIO SUISSE",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Certificaciones de Calidad
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro compromiso con la excelencia está respaldado por las certificaciones más prestigiosas de la industria
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <cert.icon size={128} className="text-gray-400" />
              </div>

              {/* Certification Badge */}
              <div className={`inline-block bg-gradient-to-r ${cert.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-6`}>
                {cert.badge}
              </div>

              {/* Icon */}
              <div className={`bg-gradient-to-r ${cert.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <cert.icon className="text-white" size={32} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">{cert.title}</h3>
              <p className="text-gray-600 leading-relaxed">{cert.description}</p>

              {/* Verification Badge */}
              <div className="mt-6 flex items-center space-x-2 text-green-600">
                <Shield size={20} />
                <span className="font-medium">Verificado y Certificado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Tu Confianza, Nuestra Prioridad
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              Cada certificación representa nuestro compromiso inquebrantable con la calidad, 
              la sostenibilidad y la transparencia. Cuando eliges NUTRIBLITZ, eliges productos 
              que han pasado por los controles de calidad más rigurosos del mundo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
                ✓ 100% Trazabilidad
              </div>
              <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold">
                ✓ Controles Rigurosos
              </div>
              <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-semibold">
                ✓ Sostenibilidad Certificada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;