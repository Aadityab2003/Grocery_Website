import React from "react";
import Heading from "../Heading/Heading";

const Products = () => {
  const category = ["All", "Fruits", "Vegetable", "Dairy", "Seafood"];
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/*Tabes*/}
        <div>
          {category.map((category) => {
            return <button key={category}>
              {category}
              </button>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
