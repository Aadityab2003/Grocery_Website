import React from 'react'
import icon from '../../assets/Icon.png';
import { FaHeart } from "react-icons/fa6";
import { IoBagAdd } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
        <nav className="max-w-[1150px] mx-auto px-10 h-[14vh] items-center flex justify-between">
           
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
                <div>
                    <input type="text" name="text" id="text" placeholder="Search Items..." autoComplete='off' /> 
                </div>
                 <a href="#" className="text-zinc-800 text-2xl"><FaHeart /></a>
                 <a href="#" className="text-zinc-800 text-2xl"><IoBagAdd /></a>
            </div>
        </nav>
    
    </header>
   
  )
}

export default Navbar