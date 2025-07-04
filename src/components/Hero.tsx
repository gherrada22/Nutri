import React from 'react';
import { ArrowRight, Zap, Leaf, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-amber-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-green-300/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                  Energía
                </span>
                <span className="block">Natural</span>
                <span className="block text-3xl lg:text-4xl font-normal text-green-300">
                  para tu día
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-lg">
                Suplementos nutricionales premium con superalimentos naturales. 
                Listo en segundos, energía para horas.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Zap className="text-yellow-400" size={24} />
                <span className="font-medium">Energía Instantánea</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Leaf className="text-green-400" size={24} />
                <span className="font-medium">100% Natural</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="text-blue-400" size={24} />
                <span className="font-medium">Listo en Segundos</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl">
                <span>Comprar Ahora - S/ 25</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('producto')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-800 transition-all duration-300 transform hover:scale-105"
              >
                Conocer Más
              </button>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-yellow-400/20 rounded-full blur-3xl scale-150"></div>
              <img 
                src="/productonuevo.png" 
                alt="Nutriblitz Superfood Shake" 
                className="relative z-10 w-80 lg:w-96 h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;