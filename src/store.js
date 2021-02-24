import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// The rootReducer is the index.js file that uses the combineReducers coming from the redux framework
import rootReducer from './reducers';

// Here we define an empty object to initialize the state of the app as an empty state
const initialState = {};
if(localStorage.getItem('cartItems')){
    initialState.cart = {items: JSON.parse(localStorage.getItem('cartItems'))};
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;