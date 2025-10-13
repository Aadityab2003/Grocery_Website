import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";

const Cards = ({ product }) => {
  // destructure from product
  const { image, name, price } = product;

  return (
    <div className="relative border rounded-2xl p-4 shadow-md hover:shadow-lg transition duration-300 bg-white">
      {/* Icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <FaHeart className="text-red-500" />
        </button>
        <button className="p-2 bg-orange-100 rounded-full hover:bg-orange-200">
          <FaPlus className="text-orange-500" />
        </button>
      </div>

      {/* Product Image */}
      <div className="flex justify-center mb-4">
        <img src={image} alt={name} className="w-32 h-32 object-contain" />
      </div>

      {/* Product Content */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500">₹{price ? price.toFixed(2) : "N/A"}</p>
        <button className="mt-3 px-4 py-2 bg-gradient-to-b from-orange-400 to-orange-500 text-white rounded-xl hover:from-orange-500 hover:to-orange-600 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Cards;
