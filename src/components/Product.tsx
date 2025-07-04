import React, { useState } from 'react';
import { ShoppingCart, Check, Star, Zap, Leaf, Award } from 'lucide-react';

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const benefits = [
    "Energía sostenida durante todo el día",
    "Rico en vitaminas B12 y D",
    "Contiene hierro y magnesio",
    "100% ingredientes naturales",
    "Sin aditivos artificiales",
    "Sin conservantes",
    "Preparación en segundos",
    "Sabor delicioso y natural"
  ];

  const ingredients = [
    { name: "Cacao Orgánico", benefit: "Antioxidantes y energía" },
    { name: "Maca Peruana", benefit: "Resistencia y vitalidad" },
    { name: "Avena Integral", benefit: "Fibra y saciedad" },
    { name: "Plátano Deshidratado", benefit: "Potasio y dulzor natural" },
    { name: "Canela", benefit: "Regulación del azúcar" }
  ];

  return (
    <section id="producto" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nuestro Producto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre el poder de los superalimentos en cada sorbo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <img 
                src="/productonuevo.png" 
                alt="Nutriblitz Superfood Shake" 
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                100% Orgánico
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Superfood Nutritional Shake
              </h3>
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
                <span className="text-gray-600 ml-2">(4.9/5 - 127 reseñas)</span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Mezcla premium de cacao, maca, avena y plátano deshidratado, enriquecida con 
                vitaminas y minerales esenciales. La solución perfecta para profesionales activos.
              </p>
            </div>

            {/* Price and Purchase */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-4xl font-bold text-green-600">S/ 25</span>
                  <span className="text-gray-500 ml-2">por bolsa (250g)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="text-gray-600">Cantidad:</label>
                  <select 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-gray-300 rounded-lg px-3 py-2"
                  >
                    {[1,2,3,4,5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg">
                <ShoppingCart size={24} />
                <span>Agregar al Carrito - S/ {25 * quantity}</span>
              </button>
              
              <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                <div className="flex flex-col items-center">
                  <Zap className="text-yellow-500 mb-2" size={24} />
                  <span className="text-sm text-gray-600">Energía Instantánea</span>
                </div>
                <div className="flex flex-col items-center">
                  <Leaf className="text-green-500 mb-2" size={24} />
                  <span className="text-sm text-gray-600">100% Natural</span>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="text-purple-500 mb-2" size={24} />
                  <span className="text-sm text-gray-600">Calidad Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits and Ingredients */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-800 mb-6">Beneficios</h4>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-800 mb-6">Ingredientes Premium</h4>
            <div className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-semibold text-gray-800">{ingredient.name}</h5>
                  <p className="text-gray-600 text-sm">{ingredient.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;