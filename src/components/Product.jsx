import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { openModalEdit, openModal, deleteProduct, getCollectionProducts } from '../redux/actions';
import EditProduct from './EditProduct';
import { deleteDoc, doc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Product = ({ id, name, description, price }) => {
  const modalEdit = useSelector(state => state.modalEdit);
  const dispatch = useDispatch();
  const productsCollection = collection(db,"products");

  const handleOpenModalEdit = () => {
    dispatch(openModalEdit(true))
  }

  const clearProductList = async id => {
    const productDoc = doc(db, 'products', id);
    return await deleteDoc(productDoc);
  }

  const handleDeleteProduct = (id) => {
    MySwal.fire({
      title: '¿Estas seguro de eliminar el producto?',
      text: "No podras revertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(clearProductList(id)));
        dispatch(getCollectionProducts(productsCollection));
        MySwal.fire(
          'Eliminado!',
          'El producto ha sido eliminado.',
          'success'
        )
      }
    })
  }

  return (
    <section className='w-11/12 p-3 bg-white my-5 flex justify-between rounded-md shadow-md'>
      <div className=''>
        <p className='text-xl font-semibold'>{name}</p>
        <p className='my-2'>{description}</p>
        <p className='text-xl text-[#115BE0]'>${price}</p>
      </div>
      <div className='flex'>
        <button onClick={handleOpenModalEdit} className='mx-6'><AiFillEdit size={20}/></button>
        <button onClick={() => handleDeleteProduct(id)}><AiOutlineDelete size={20}/></button>
      </div>
      
    </section>
  )
}

export default Product