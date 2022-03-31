import React from 'react'
import Product from './Product'
import { useSelector, useDispatch } from 'react-redux'
import { openModal, getCollectionProducts } from '../redux/actions'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import { collection, getDocs, getDoc, deleteDoc} from 'firebase/firestore'
import { db } from '../firebase/index'

const ListProducts = () => {

  const list = useSelector(state => state.list);
  const modal = useSelector(state => state.modal);
  const modalEdit =useSelector(state => state.modalEdit);

  const dispatch = useDispatch();
// Aqui empieza el video
  // const [product2, setProduct2] = React.useState([]);
  const productsCollection = collection(db,"products");

  // const getProducts = async () => {
  //   const data = await getDocs(productsCollection);
  //   // console.log(data.docs);
  //   const res = data.docs;
  //   setProduct2(
  //     res.map(doc => ({
  //       ...doc.data(),
  //       id: doc.id
  //     }))
  //   );
  // }

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
        {list.map((ele,index) => (
          <Product key={index} name={ele.name} description={ele.description} price={ele.price}/>
        ))}
      </div>
      }
    </section>
  )
}

export default ListProducts