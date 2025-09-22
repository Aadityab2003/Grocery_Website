import React from 'react'
import Grocery from '../../assets/Grocery.jpg';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section>
        <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex items-center pt-25'>
           { /*HERO CONTENT*/}
           <div className='flex-1 mt-10'>
            <span className='bg-orange-100 text-orange-500 text-lg px-5 rounded-full'>
                Export Best Quality...</span>

            <h1 className="text-7xl/20 font-bold">
                Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-green-800'>Vegetables</span> <br/>In Town
            </h1>
            <p className="text-zinc-600 text-lg max-w-[530px] mt-5 mb-10    ">Bred for a high content of beneficial substances. Our products are all fresh and healthy. 

            </p>
            <Button content="Shop Now" />

           </div>

           { /*HERO IMAGE*/}
           <div className="flex-1 mt-10 w-fit ml-10" >
            <img className="rounded-lg" src={Grocery} alt="Hero Image"  />
           </div>
        

        </div>
    </section>
  )
}

export default Hero