import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../Products/Products.jsx";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
       
      <Hero />
      <Category />
      <Values />
      <Products />
      <Testimonials />
      
    </div>
  );
};

export default Home;
