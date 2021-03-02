import {ADD_TO_CART, REPLACE_PRODUCT, REMOVE_FROM_CART} from "./types";

// In the following functions we handle user inputs by "dispatching" action objects,
// which should describe "what happened" in the app
export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let productAlreadyInCart = false;

    cartItems.forEach((cartItem) => {
        if (cartItem.id === product.id) {
            cartItem.count += 1;
            productAlreadyInCart = true;
        }
    });

    if (!productAlreadyInCart) {
        cartItems.push({...product, count: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({
        type: ADD_TO_CART,
        payload: { cartItems }
    });
};

export const handleSingleRemove = (items, product) => (dispatch) => {

    const cartItems = items.slice();
    let toRemove = null;
    let itemFound = false;

    cartItems.forEach((cartItem) => {
        if (cartItem.id === product.id) {
            cartItem.count -= 1;
            toRemove = cartItems.indexOf(cartItem);
          if(cartItem.count > 0){
                itemFound = true;
            }
            if(!itemFound){
              cartItems.splice(toRemove,1);
              itemFound = false;
            }
        }});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItems } });
};

export const handleTotalRemove = (items, item) => (dispatch) =>{

    const cartItems = items.slice();
    let toRemove = null;

    cartItems.forEach((cartItem) => {
        if (cartItem.id === item.id) {
            toRemove = cartItems.indexOf(cartItem)
            cartItems.splice(toRemove,1)
        }})

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({
        type: REMOVE_FROM_CART,
        payload: { cartItems } });
    }

export const sortSelectedProducts = (items, item) => (dispatch) => {

    let cartItems = items.slice()
    let index = cartItems.indexOf(item)

        if (cartItems[index].id === item.id) {
            cartItems.splice(index, 1)
            cartItems.push(item)
        }

    // store new state of cartItems in the Virtual DOM
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({
        type: REPLACE_PRODUCT,
        payload: {
            items: cartItems,
            item: item,
        },
    })
}
