import {ADD_TO_CART,
       REPLACE_PRODUCT,
       REMOVE_FROM_CART} from "../actions/types";

const initialState = { items:[], filteredItems:[], 'item': '' };
export default function (state = initialState, action){
    switch (action.type){
        case ADD_TO_CART:
            return { items: action.payload.cartItems };
        case REMOVE_FROM_CART:
            return { items: action.payload.cartItems};
        case REPLACE_PRODUCT:
            return {
                ...state,
                filteredItems: action.payload.items,
                item: action.payload.sort
            };
        default:
            return state;
    }
}