import React from "react";
import Heading from "../Heading/Heading";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight, FaStar } from "react-icons/fa";
import Pm from "../../assets/Pm.jpeg";
import Chef from "../../assets/Chef.jpeg";
import Fitness from "../../assets/Fitness.jpeg";
import Model from "../../assets/Model.jpeg";
import Nutri from "../../assets/Nutri.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const review = [

   {
    id: 1,
    name: "Narendra Modi",
    profession: "Prime Minister",
    rating: 5,
    para: "ApnaRation is my go-to store for all grocery needs, There produce is always fresh , andthe delivery is super fast, I love the user-friendly interface and variety of organic options!!",
    image: Pm,
  },
  
  {
    id: 2,
    name: "Kiara Advani",
    profession: "Model",
    rating: 4,
    para: "Shopping Online with ApnaRation has saved me so much time ,I trust them my family weekly groceries-fresh, affordable and reliable,",
    image: Model,
  },
 

  {
    id: 3,
    name: "Sanjeev Kapoor",
    profession: "Chef",
    rating: 4,
    para: "A  chef ,Quality ingredient are everything . ApnaRation Consitently delivers thet best vegetable, herbs and pantry staples.",
    image: Chef,
  },
  {
    id: 4,
    name: "Carlos Mendes ",
    profession: "Fitness Coach",
    rating: 3,
    para: "I appreciate the selection of healthy foods and clean-label products, ApnaRation Has been a great partenr in my wellness journey!!!",
    image: Fitness,
  },

  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 5,
    para: "Fresh offers high quality grocery at resonable prices. Their organi section is impressive and thier customer service is top-notch. ",
    image: Nutri,
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-10">
        <Heading highlight="Customers" heading="Saying" />

        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide key={item.id} className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4">
                    <img className='w-full h-full object-cover rounded-full' src ={item.image}/>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <div className="flex text-yellow-500 mt-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="text-zinc-600">
                    {item.para}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
