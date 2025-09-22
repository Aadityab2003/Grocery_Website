import React from 'react'
import icon from '../../assets/Icon.png';
import { FaHeart } from "react-icons/fa6";
import { IoBagAdd } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";


const Navbar = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 right-0 left-0">
        <nav className="max-w-[1400px] mx-auto px-10 h-[17vh] items-center flex justify-between">
           
            <img className='h-20 w-20 object-contain' src={icon} alt="" />
            {/*Desktop Menu*/}
            <ul className="flex items-center gap-x-15 ">
                <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500 '>About Us</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a></li>
            </ul>

            {/*Nav Actions*/}
            <div className="flex items-center gap-x-5">
                {/* input field */}
                <div className="flex  p-1 border-2 border--500 rounded-full">
                    <input type="text" name="text" id="text" placeholder="Search Items..." autoComplete='off' className="flex-1  h-[5vh] px-3 focus:outline-none" />
                    <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl"><FiSearch /></button> 
                </div>
                 <a href="#" className="text-zinc-800 text-2xl"><FaHeart /></a>
                 <a href="#" className="text-zinc-800 text-2xl"><IoBagAdd /></a>
            </div>
        </nav>
    
    </header>
   
  )
}

export default Navbar