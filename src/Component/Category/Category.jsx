import React from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/FruitsVeggies.jpeg";
import DairyCat from "../../assets/DairyEggs.jpeg";
import SeafoodCat from "../../assets/Seafood.jpeg";
import {Link} from 'react-router-dom'
// ✅ Moved category array above component
const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
    path:'/Fruits'
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
    path:'/Dairy'
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: SeafoodCat,
    path:'/Seafood'
  },
];

const Category = () => {
  const rendercards = category.map((card) => {
    return (
      <div
        key={card.id}
        className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden w-full sm:w-[300px] transition-all duration-300 flex flex-col items-center text-center"
      >
        {/* Image */}
        <div className="w-full h-52 flex items-center justify-center bg-gray-50">
          <img
            src={card.image}
            alt={card.title}
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Text */}
        <div className="px-6 pb-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mt-4 mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{card.description}</p>
          </div>
          <div className="flex justify-center">
            <Link
              to={card.path}
              className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
            >
              See All
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <Heading highlight="Shop" heading="by Category" />

        {/* Category Cards */}
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {rendercards}
        </div>
      </div>
    </section>
  );
};

export default Category;
