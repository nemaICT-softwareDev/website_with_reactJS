import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "../actions/types";

// The reducer evaluates the current state and return a up to dated state of the App
// In the productReducer by default we initialize the state of all objects as empty
const initialState = { items:[], filteredItems:[], size: '', sort: '' };
export default function(state = initialState,action){
    switch(action.type){
        case FETCH_PRODUCTS:
            // fill in the items array with the list of products from the json api
            // and return the new state
            return{ ...state,
                    items: action.payload,
                    filteredItems: action.payload
            };
        case FILTER_PRODUCTS_BY_SIZE:
            // here we get the payload items and size coming from the productActions(filterProducts. Function)
            return {...state,
                        filteredItems: action.payload.items,
                        size: action.payload.size
            };
        case ORDER_PRODUCTS_BY_PRICE:
            // here we get the payload items and price coming from the productActions(filterProducts. Function)
            return {...state,
                        filteredItems: action.payload.items,
                        sort: action.payload.sort
            };
         default:
            return state;
    }
}
