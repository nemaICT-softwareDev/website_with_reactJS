import {ADD_TO_CART, EXCLUDE_PRODUCT, REMOVE_FROM_CART} from "./types";

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let productAlreadyInCart = false;

    cartItems.forEach((cp) => {
        if (cp.id === product.id) {
            cp.count += 1;
            productAlreadyInCart = true;
        }
    });

    if (!productAlreadyInCart) {
        cartItems.push({...product, count: 1 });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {

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

// this function will filter the products list by ascending or descending order
export const sortSelectedProducts = (itemsInCart, sort) => {

    const cartItems = itemsInCart.slice();

    if(sort !== ''){
      cartItems.sort(
            (a,b) => a.title > b.title? 1 : -1)
    }else{
       cartItems.sort(
            (a,b) => a.title < b.title? 1 : -1)
    }
    return cartItems;
};