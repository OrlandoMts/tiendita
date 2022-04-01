import React from 'react'
import Product from './Product'
import { useSelector, useDispatch } from 'react-redux'
import { openModal, getCollectionProducts } from '../redux/actions'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import { collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebase/index'

const ListProducts = () => {

  const filter = useSelector(state => state.filter);
  const modal = useSelector(state => state.modal);
  const modalEdit =useSelector(state => state.modalEdit);

  const dispatch = useDispatch();
// Aqui empieza el video
  
  const productsCollection = collection(db,"products");

  React.useEffect(() => {
    dispatch(getCollectionProducts(productsCollection))
  },[])
  
  const handleOpenModal = () => {
    dispatch(openModal(true))
  }

  return (
    <section className='w-100 h-100 flex flex-col items-center my-7'>
      <div className='w-100 h-9 bg-green-400 rounded-md'>
        <button onClick={handleOpenModal} className='text-white w-[100px] inline-block align-middle'>Agregar +</button>  
      </div>
      <div className='w-full my-5 flex justify-center relative'>
          {modal && <AddProduct />}
          {modalEdit && <EditProduct />}
      </div>
      {
        (!modal & !modalEdit) && 
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center'>
        {filter.map((ele,index) => (
          <Product key={index} id={ele.id} name={ele.name} description={ele.description} price={ele.price} />
        ))}
      </div>
      }
    </section>
  )
}

export default ListProducts