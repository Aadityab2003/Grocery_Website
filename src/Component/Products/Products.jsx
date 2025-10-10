import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";

const Products = () => {
  const categories = ["All", "Fruits", "Vegetable", "Dairy", "Seafood"];
  const [activeTab, setActiveTab] = useState("All");

  // Filter products based on active category
  const filteredProducts =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((product) => product.category === activeTab);

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex gap-3 justify-center mt-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 text-lg rounded-xl ${
                activeTab === category
                  ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                  : "bg-zinc-100"
              } cursor-pointer`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Listing */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-10">
          {filteredProducts.map((product, index) => (
            <Cards key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
