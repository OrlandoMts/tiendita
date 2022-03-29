import { OPEN_MODAL, CLOSE_MODAL } from "./types";

const initialState = {
    list: [],
    modal: false
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
        default:
            return { ...state } 
    }
}