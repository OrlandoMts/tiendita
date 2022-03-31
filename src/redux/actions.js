import { getDocs } from 'firebase/firestore'
import { OPEN_MODAL, CLOSE_MODAL, CLOSE_MODAL_EDIT, OPEN_MODAL_EDIT, SET_PRODUCTS, SEARCH_PRODUCT} from './types'

export const openModal = payload => ({
    type: OPEN_MODAL,
    payload
})

export const closeModal = payload => ({
    type: CLOSE_MODAL,
    payload
})

export const openModalEdit = payload => ({
    type: OPEN_MODAL_EDIT,
    payload
})

export const closeModalEdit = payload => ({
    type: CLOSE_MODAL_EDIT,
    payload
})


// Acciones referentes a los productos
export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
})

export const getCollectionProducts = payload => async distpach => {
    try {
       const data = await getDocs(payload);
       const res = data.docs;
       const products = res.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        distpach(setProducts(products))
    } catch (error) {
        console.error("ERROR CONECTION ", error)
    }
}

//Acciones para buscar productos
export const searchProduct = payload => ({
    type: SEARCH_PRODUCT,
    payload
})

export const filterProducts = (payload, input) => dispatch => {
    let searchedProducts = payload.filter(product => {
        const searchText = input.toLowerCase();
        const productText = product.name.toLowerCase();

        return productText.includes(searchText);
    })

    console.log(searchedProducts)

    dispatch(searchProduct(searchedProducts))
}

// const newArray = state.cart.filter(product => product != payload);
//         setState({
//             ...state,
//             cart: [...newArray],
//             total: (state.total - payload.price ),
//         })