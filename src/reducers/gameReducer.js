import {FETCH_GAMES, FILTER_GAMES_BY_GENRE} from "../actions/types";

// The reducer evaluates the current state and return a up to dated state of the App
// In the productReducer by default we initialize the state of all objects as empty
const initialState = { items:[], filteredItems:[], type: '', sort: '' };
export default function(state = initialState,action){
    switch(action.type){
        case FETCH_GAMES:
            // fill in the items array with the list of pics from the db.json api
            return{
                    ...state,
                    items: action.payload,
                    filteredItems: action.payload
            };
        case FILTER_GAMES_BY_GENRE:
            // here we get the payload items and type coming from the productActions(filterProducts. Function)
            return {
                        ...state,
                        filteredItems: action.payload.items,
                        type: action.payload.genre
            };
         default:
            return state;
    }
}
