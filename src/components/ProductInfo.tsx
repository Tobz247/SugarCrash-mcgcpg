import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProductInfo: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8" id="product">Introducing Sugar Crash for Diabetes</h2>
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={images[0]} alt="Sugar Crash Product" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-2xl font-semibold mb-4">Revolutionary Diabetes Management</h3>
          <p className="mb-4">Sugar Crash is a groundbreaking supplement designed to help manage blood sugar levels effectively. Our unique formula combines natural ingredients to support your body's insulin response and promote overall health.</p>
          <ul className="space-y-2">
            {['Clinically Proven', 'All-Natural Ingredients', 'Easy to Use', 'No Side Effects'].map((benefit, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {images.slice(1).map((img, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img src={img} alt={`Sugar Crash Benefit ${index + 1}`} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center font-semibold px-4">
                {index === 0 ? "Effective Blood Sugar Control" : 
                 index === 1 ? "Natural Ingredients for Better Health" : 
                 "Improved Quality of Life"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div id="benefits">
        <h3 className="text-2xl font-semibold mb-4 text-center">Key Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Blood Sugar Control', description: 'Helps maintain healthy blood sugar levels throughout the day.' },
            { title: 'Improved Energy', description: 'Supports steady energy levels, reducing fatigue and crashes.' },
            { title: 'Weight Management', description: 'Aids in maintaining a healthy weight by regulating glucose metabolism.' }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;