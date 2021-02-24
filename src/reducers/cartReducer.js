import {ADD_TO_CART, EXCLUDE_PRODUCT, REMOVE_FROM_CART} from "../actions/types";

const initialState = { items:[], filteredItems:[], sort: '' };
export default function (state = initialState, action){
    switch (action.type){
        case ADD_TO_CART:
            return { items: action.payload.cartItems };
        case REMOVE_FROM_CART:
            return { items: action.payload.cartItems};
        case EXCLUDE_PRODUCT:
            return {
                ...state,
                filteredItems: action.payload.items,
                sort: action.payload.sort
            };
        default:
            return state;
    }
}