import React from 'react'
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai"

const Product = ({name, description, price}) => {
  return (
    <section className='w-11/12 p-3 bg-white my-5 flex justify-between rounded-md shadow-md'>
      <div className=''>
        <p className='text-xl font-semibold'>{name}</p>
        <p className='my-2'>{description}</p>
        <p className='text-xl text-[#115BE0]'>${price}</p>
      </div>
      <div className='flex'>
        <button className='mx-6'><AiFillEdit size={20}/></button>
        <button ><AiOutlineDelete size={20}/></button>
      </div>
    </section>
  )
}

export default Product