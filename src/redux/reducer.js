import { OPEN_MODAL, CLOSE_MODAL, OPEN_MODAL_EDIT, CLOSE_MODAL_EDIT, SET_PRODUCTS, SEARCH_PRODUCT } from "./types";

const initialState = {
    list: [],
    modal: false,
    modalEdit: false,
    filter: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_MODAL:
            return {
                ...state,
                modal: action.payload
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modal: action.payload
            }
        case OPEN_MODAL_EDIT:
            return {
                ...state,
                modalEdit: action.payload
            }
        case CLOSE_MODAL_EDIT:
            return {
                ...state,
                modalEdit: action.payload
            }
        case SET_PRODUCTS:
            return {
                ...state,
                list: action.payload
            }
        case SEARCH_PRODUCT:
            return {
                ...state,
                list: action.payload
            }
        default:
            return { ...state } 
    }
}