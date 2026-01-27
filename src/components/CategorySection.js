
import React from 'react';
import { FaCar, FaMotorcycle, FaTruck } from 'react-icons/fa';

const CategorySection = () => {
  const categories = [
    { icon: <FaCar className="text-5xl" />, title: 'Cars', count: '1000+' },
    { icon: <FaMotorcycle className="text-5xl" />, title: 'Bikes', count: '500+' },
    { icon: <FaTruck className="text-5xl" />, title: 'Commercial', count: '300+' },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Vehicle Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-yellow-600 mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.count} Registered</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;