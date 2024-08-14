import React from 'react';
import ppheadquarterspic from '../assets/ppheadquarters.jpg';


const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">About Pizza Palace</h1>
        <p className="text-lg text-gray-700 mb-6">
          At Pizza Palace, we are passionate about serving the best pizzas in town. Our journey started with a simple
          mission: to provide our customers with an unforgettable dining experience, where every slice tells a story.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              From our humble beginnings as a small family-run business, we've grown into a beloved pizza destination.
              Our secret? A commitment to using only the freshest ingredients and a dedication to perfecting every recipe.
            </p>
            <p className="text-gray-700">
              Whether you're a fan of classic margherita or adventurous gourmet toppings, we have something to satisfy
              every pizza lover's cravings. Come and taste the passion in every bite!
            </p>
          </div>

          <div>
            <img
              src={ppheadquarterspic}
              alt="Pizza Palace interior"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Our Values</h2>
          <p className="text-gray-700">
            At Pizza Palace, we believe in quality, authenticity, and community. We take pride in crafting pizzas that not only taste amazing but also bring people together. Our customers are at the heart of everything we do, and we strive to create a welcoming atmosphere where everyone feels like part of the family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
