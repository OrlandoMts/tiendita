import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../redux/actions';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = useRef(null);
  
  const onSubmit = data => console.log(data);

  const handleCloseModal = () => {
    dispatch(closeModal(false))
  }
  return (
    <section className='w-3/4 p-4 bg-[#CCDBF6] rounded-lg shadow-sm absolute top-0'>
      <form onSubmit={handleSubmit(onSubmit)} ref={form}>
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700">Producto</label>
            <input
                type="text"
                name="product"
                maxLength="80"
                id="product"
                autoComplete=""
                className="mt-1 h-8 p-2 w-10/12 focus:outline outline-offset-2 focus:outline-blue-500 block shadow-lg sm:text-sm border-gray-300 rounded-md"
                {...register("product", {
                    required: {
                        value: true,
                        message: "Campo requerido"
                    }
                })}
            />
            {errors.product && <span className="text-red-600 font-semibold text-xs">{errors.product.message}</span>}
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
              <input
                  type="text"
                  name="description"
                  maxLength="80"
                  id="description"
                  autoComplete=""
                  className="mt-1 h-8 p-2 w-10/12 focus:outline outline-offset-2 focus:outline-blue-500 block shadow-lg sm:text-sm border-gray-300 rounded-md"
                  {...register("description", {
                      required: {
                          value: true,
                          message: "Campo requerido"
                      }
                  })}
              />
              {errors.description && <span className="text-red-600 font-semibold text-xs">{errors.description.message}</span>}
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
              <input
                  type="number"
                  name="price"
                  id="price"
                  autoComplete=""
                  className="mt-1 h-8 p-2 w-10/12 focus:outline outline-offset-2 focus:outline-blue-500 block shadow-lg sm:text-sm border-gray-300 rounded-md"
                  {...register("price", {
                      required: {
                          value: true,
                          message: "Campo requerido"
                      }
                  })}
              />
              {errors.price && <span className="text-red-600 font-semibold text-xs">{errors.price.message}</span>}
        </div>
        <div className='my-4'>
          <button type='submit' className='cursor-pointer bg-blue-500 rounded-md text-white w-15 h-8 pl-2 pr-2'>Registrar</button>
          <button type='button' className='cursor-pointer bg-red-500 rounded-md text-white w-15 h-8 ml-5 pl-2 pr-2' onClick={handleCloseModal}>Cancelar</button>
        </div>
      </form>
    </section>
  )
}

export default AddProduct