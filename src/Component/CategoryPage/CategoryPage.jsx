import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";

const CategoryPage = ({title}) => {
  return (
    <div>
      <Banner title={title} />

      {/*<div className="grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10">
        {ProductList.map((product, index) => (
          <Cards key={index} product={product} />
        ))}
      </div>*/}
    </div>
  );
};

export default CategoryPage;
