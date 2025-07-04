import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Ejecutiva de Marketing",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 5,
      text: "Nutriblitz ha transformado mis mañanas. Como ejecutiva, necesito energía constante y este producto me la da sin los picos y caídas del café. ¡Lo recomiendo totalmente!"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      role: "Entrenador Personal",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      rating: 5,
      text: "Uso Nutriblitz antes y después de mis entrenamientos. La combinación de maca y cacao me da la energía perfecta. Mis clientes también han notado la diferencia."
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      role: "Médica",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
      rating: 5,
      text: "Como médica, valoro los ingredientes naturales y la calidad nutricional. Nutriblitz cumple con mis estándares más altos. Es mi desayuno diario desde hace 6 meses."
    },
    {
      id: 4,
      name: "Roberto Silva",
      role: "Estudiante de Ingeniería",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      rating: 5,
      text: "Durante mis largas sesiones de estudio, Nutriblitz me mantiene concentrado y con energía. El sabor es increíble y la preparación súper rápida."
    },
    {
      id: 5,
      name: "Lucía Vargas",
      role: "Emprendedora",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      rating: 5,
      text: "Manejar mi startup requiere mucha energía mental. Nutriblitz se ha convertido en mi aliado perfecto. ¡No puedo imaginar mi día sin él!"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 1,000 clientes satisfechos han transformado su rutina diaria con Nutriblitz
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            <Quote className="absolute top-6 right-6 text-blue-200" size={48} />
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Customer Image */}
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg"
                />
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Stars */}
                <div className="flex justify-center lg:justify-start items-center space-x-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={24} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Customer Info */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="text-gray-600" size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="text-gray-600" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Clientes Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">4.9</div>
            <div className="text-gray-600">Calificación Promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Recomprarían</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">24h</div>
            <div className="text-gray-600">Envío Rápido</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;