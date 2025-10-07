import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/Basket.jpeg";

const Values = () => {

   const leftValues = value.map(item=>{
      return(
         <div>
            <div>
               <span>{item.icon}</span>
            </div>

            <div>
               <h3>{item.title}</h3>
               <p>{item.para}</p>
            </div>
         </div>
      )
   })
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Value" />

        <div className="flex">
          {/*left Values*/}
          <div>
            {leftValues}
          </div>
          <div>
            <img src={Basket} />
          </div>

          {/*Right Values*/}

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established Fact that a reader will be distracted by the readable",
    icon: <FaHeart />,
  },

  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established Fact that a reader will be distracted by the readable",
    icon: <FaLeaf />,
  },

  {
    id: 3,
    title: "Food Safty",
    para: "It is a long established Fact that a reader will be distracted by the readable",
    icon: <FaShieldAlt />,
  },

  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established Fact that a reader will be distracted by the readable",
    icon: <FaSeedling />,
  },
];
