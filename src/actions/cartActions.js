import {ADD_TO_CART, EXCLUDE_PRODUCT, REMOVE_FROM_CART} from "./types";
import update from "immutability-helper";

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

export const singleRemoveFromCart = (items, product) => (dispatch) => {

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


export const sortSelectedProducts = (items, itemToBeMoved) => {
    return (dispatch) => {

        let cartItems = items.slice();
        let index = cartItems.find((item) => item.id === itemToBeMoved.id)
        let removedItemList = null
        let newListWithAddedItem = null

        if (itemToBeMoved !== '') {
            // remove item and return new list without it
            removedItemList = update(cartItems, {$splice: [[index, 1]]})
            // insert item at the end of the array
            newListWithAddedItem = update(removedItemList, {$push: [index]})
            // update cartItems with new state
            cartItems = update(newListWithAddedItem, {$splice: [[index, 0]]})

           //cartItems.sort((a,b) => { return a.title < b.title ? 1 : -1})
           console.log(cartItems);

        }
        dispatch({
            type: EXCLUDE_PRODUCT,
            payload: {
                sort: itemToBeMoved,
                items: cartItems,
            },
        })
    };
}
