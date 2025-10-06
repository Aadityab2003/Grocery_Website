import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/Fruits&Veggies'
import DairyCat from '../../assets/Dairy&Eggs'
import SeafoodCat from '../../assets/Seafood'

const Category = () => {
  return (
    <section>
        <div className='py-20 '>
           <Heading highlight='Shop' heading='by Category' />

        </div>

    </section>
  )
}

export default Category


const category = [
    {
       id:1,
       title: 'Fruits & Veggies' ,
       description:'Fresh, Organic produce sourced daily from local farms. Explaore a wide seasonal fruits and crisp vegetables.  ',
       image: FruitsCat
    },

    {
       id:2,
       title: 'Dairy & Egg' ,
       description:'Wholesome dairy product and free-range eggs ,from milk and yogurt to artisanal cheeses.  ',
       image: DairyCat
    },

    {
       id:3,
       title: 'Meat & Seafood' ,
       description:'Fresh, Organic produce sourced daily from local  ',
       image:SeafoodCat
    }
]