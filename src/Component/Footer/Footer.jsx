import React from "react";
import icon from "../../assets/Icon.png";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-200 py-20">
      <div className="flex flex-wrap gap-y-10 max-w-[1400px] mx-auto px-4 md:px-10">
        {/* Logo and Description */}
        <div className="flex-1 basis-full sm:basis-[300px]">
          <img className="w-40 sm:w-30 object-contain" src={icon} alt="" />

          <p className="text-zinc-600 mt-6 max-w-full sm:max-w-[350px] text-sm sm:text-base">
            Bred for a high content of beneficial substances, our products are all fresh and healthy
          </p>

          <p className="text-zinc-800 mt-6 text-sm sm:text-base">
            2025 &copy; All Rights Reserved
          </p>
        </div>

        {/* Company Links */}
        <ul className="flex-1 basis-full sm:basis-[200px] mt-10 sm:mt-0">
          <li>
            <h5 className="text-zinc-600 text-xl sm:text-2xl font-bold">Company</h5>
          </li>
          <li className="mt-4 sm:mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500 text-sm sm:text-base">About</a>
          </li>
          <li className="mt-4 sm:mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500 text-sm sm:text-base">FAQ's</a>
          </li>
        </ul>

        {/* Support Links */}
        <ul className="flex-1 basis-full sm:basis-[200px] mt-10 sm:mt-0">
          <li>
            <h5 className="text-zinc-600 text-xl sm:text-2xl font-bold">Support</h5>
          </li>
          <li className="mt-4 sm:mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500 text-sm sm:text-base">Support Center</a>
          </li>
          <li className="mt-4 sm:mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500 text-sm sm:text-base">Feedback</a>
          </li>
          <li className="mt-4 sm:mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500 text-sm sm:text-base">Contact Us</a>
          </li>
        </ul>

        {/* Stay Connected */}
        <div className="flex-1 basis-full sm:basis-[300px] mt-10 sm:mt-0">
          <h5 className="text-zinc-600 text-xl sm:text-2xl font-bold">Stay Connected</h5>

          <p className="mt-4 sm:mt-6 text-zinc-600 text-sm sm:text-base">
            Questions or Feedback? <br />
            We'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row bg-white p-1 rounded-lg mt-4 sm:mt-6">
            <input className="h-[5vh] pl-4 flex-1 focus:outline-none text-sm sm:text-base mb-2 sm:mb-0" type="email" name="email" id="email" autoComplete="off" placeholder="Email Address.."/>
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer sm:ml-2">
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
