import React from 'react'

const Navbar = () => {
  return (
    <div className="w-100 h-60 bg-[#6C9BF0] flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-12 mb-6">Precios 💲</h1>
      <div >
        <input className='w-[300px] md:w-[500px] p-[10px] rounded-lg shadow-xl focus:outline-[#115BE0]' 
          type="text" placeholder='Buscar producto'/>
      </div>
    </div>
  )
}

export default Navbar