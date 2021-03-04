import {ADD_TO_CART,
       PLACE_PRODUCT_AT_END_OF_LIST,
       REMOVE_FROM_CART} from "../actions/types";

    // Create a "reducer" function that determines what the new state
    // should be when something happens in the app
const initialState = { items:[], replacedItem: '' }
export default function(state = initialState, action){
    // Reducers usually look at the type of action that happened
    // to decide how to update the state
    switch (action.type){
        case ADD_TO_CART:
            return {
                items: action.payload.cartItems
            };
        case REMOVE_FROM_CART:
            return {
                items: action.payload.cartItems
            }
        case PLACE_PRODUCT_AT_END_OF_LIST:
              return {
                         ...state,
                        items: action.payload.items,
                        replacedItem: action.payload.item,
                    }
        default:
            return state;
    }
}