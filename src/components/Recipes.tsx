import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Bowl Energético de Chocolate",
      description: "Perfecto para el desayuno o post-entrenamiento",
      image: "/receta1.png",
      time: "5 min",
      servings: "1 persona",
      difficulty: "Fácil",
      ingredients: [
        "2 cucharadas de Nutriblitz",
        "1 taza de leche de almendras",
        "Frambuesas frescas",
        "Semillas de chía",
        "Rodajas de plátano"
      ],
      instructions: [
        "Mezcla Nutriblitz con leche de almendras hasta obtener consistencia cremosa",
        "Vierte en un bowl",
        "Decora con frambuesas, plátano y semillas de chía",
        "¡Disfruta tu bowl energético!"
      ]
    },
    {
      id: 2,
      title: "Smoothie Bowl de Manzana y Canela",
      description: "Sabor otoñal lleno de nutrientes",
      image: "/receta2.png",
      time: "7 min",
      servings: "1 persona",
      difficulty: "Fácil",
      ingredients: [
        "2 cucharadas de Nutriblitz",
        "1 manzana en rodajas",
        "Yogurt griego",
        "Nueces picadas",
        "Canela en polvo",
        "Miel (opcional)"
      ],
      instructions: [
        "Mezcla Nutriblitz con yogurt griego",
        "Añade una pizca de canela extra",
        "Sirve en bowl y decora con rodajas de manzana",
        "Espolvorea nueces y canela",
        "Endulza con miel si deseas"
      ]
    },
    {
      id: 3,
      title: "Power Bowl Verde",
      description: "Máxima nutrición con semillas y superalimentos",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      time: "6 min",
      servings: "1 persona",
      difficulty: "Intermedio",
      ingredients: [
        "2 cucharadas de Nutriblitz",
        "Leche de coco",
        "Semillas de calabaza",
        "Rodajas de plátano",
        "Semillas de sésamo",
        "Coco rallado"
      ],
      instructions: [
        "Prepara la base mezclando Nutriblitz con leche de coco",
        "Logra una textura espesa y cremosa",
        "Decora con semillas de calabaza en línea",
        "Añade rodajas de plátano al lado",
        "Finaliza con semillas de sésamo y coco"
      ]
    }
  ];

  return (
    <section id="recetas" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Recetas Deliciosas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre formas creativas de disfrutar tu Nutriblitz con estas recetas nutritivas y fáciles
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Recipe Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                  {recipe.difficulty}
                </div>
              </div>

              {/* Recipe Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>

                {/* Recipe Stats */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{recipe.servings}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ChefHat size={16} />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Ingredientes:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Preparación:</h4>
                  <ol className="space-y-2 text-sm text-gray-600">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
            Ver Más Recetas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Recipes;