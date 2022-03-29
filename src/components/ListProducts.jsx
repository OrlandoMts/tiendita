import React from 'react'
import Product from './Product'
import { BiPlus } from "react-icons/bi";

const ListProducts = () => {
  const products = [
    {
      'id': 1,
      'name': 'coca 2lt',
      'description': 'Es retornable',
      'price': 27
    },
    {
      'id': 2,
      'name': 'coca 2lt',
      'description': 'Es retornable',
      'price': 27
    },
    {
      'id': 3,
      'name': 'coca 2lt',
      'description': 'Es retornable',
      'price': 27
    },
    {
      'id': 1,
      'name': 'coca 2lt',
      'description': 'Es retornable',
      'price': 27
    },
    {
      'id': 2,
      'name': 'coca 2lt',
      'description': 'Es retornable',
      'price': 27
    },
    {
      'id': 3,
      'name': 'coca 2lt',
      'description': 'Es retornable',
      'price': 27
    },
    {
      'id': 1,
      'name': 'coca 2lt',
      'description': 'Es retornable',
      'price': 27
    },
    {
      'id': 2,
      'name': 'coca 2lt',
      'description': 'Es retornable',
      'price': 27
    },
    {
      'id': 3,
      'name': 'coca 2lt',
      'description': 'Es retornable',
      'price': 27
    }
  ]

  return (
    <section className='w-100 h-100 flex flex-col items-center my-7'>
      <div className='w-100 h-9 bg-green-400 rounded-md'>
        <button className='text-white w-[100px] inline-block align-middle'>Agregar +</button>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center'>
        {products.map((ele,index) => (
          <Product key={index} name={ele.name} description={ele.description} price={ele.price}/>
        ))}
      </div>
    </section>
  )
}

export default ListProducts