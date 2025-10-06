import React , {useState} from 'react'
import icon from '../../assets/Icon.png';
import { FaHeart } from "react-icons/fa6";
import { IoBagAdd } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";


const Navbar = () => {

    const [showMenu , setshowMenu] = useState(false);

    const toggleMenu = ()=>{
        setshowMenu(!showMenu);
    }  
  return (
    <header className="bg-white shadow-md fixed top-0 right-0 left-0">
        <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] items-center flex justify-between">
           
            <img className='h-20 w-20 object-contain' src={icon} alt="" />
            {/*Desktop Menu*/}
            <ul className="md:flex items-center gap-x-15 hidden ">
                <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500 '>About Us</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a></li>
            </ul>

            {/*Nav Actions*/}
            <div className="flex items-center gap-x-5">
               
             {/* input field */}
                <div className="md:flex  p-1 border-2 border--500 rounded-full hidden">
                    <input type="text" name="text" id="text" placeholder="Search Items..." autoComplete='off' className="flex-1  h-[5vh] px-3 focus:outline-none" />
                    <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl"><FiSearch /></button> 
                </div>
                 <a href="#" className="text-zinc-800 text-2xl"><FaHeart /></a>
                 <a href="#" className="text-zinc-800 text-2xl"><IoBagAdd /></a>

                {/** Hamburger Menu */}
                 < a href="#" className="text-zinc-800 text-2xl md:hidden onclick" onClick={toggleMenu}> <RiMenu3Fill />

                 </a>
            </div>

            {/*Mobile Menu*/}
             <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-lg rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-1200 ${showMenu ? 'left-1/2':""}`}>
                <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500 '>About Us</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
                <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a></li>
                
                 <li className="flex  p-1 border-2 border--500 rounded-full md:hidden">
                    <input type="text" name="text" id="text" placeholder="Search Items..." autoComplete='off' className="flex-1  h-[5vh] px-3 focus:outline-none" />
                    <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl"><FiSearch /></button> 
                </li>
            </ul>



        </nav>
    
    </header>
   
  )
}

export default Navbar