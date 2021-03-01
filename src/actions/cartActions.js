import {ADD_TO_CART, REPLACE_PRODUCT, REMOVE_FROM_CART} from "./types";

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
    dispatch({ type: ADD_TO_CART, payload: { cartItems } });
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


export const sortSelectedProducts = (items, itemToBeReplaced) => (dispatch) => {

    /*The way to “tell” Redux that the state has changed is to create a new object -
      which will have a new reference. We do that by cloning the old state, and adding
      our changes on top of the new object*/
    // let cartItems = Object.assign(items.slice(), items, { modalOpen: true })
    let cartItems = items.slice()
    let foundItem = cartItems.find((item) => item.id === itemToBeReplaced.id)
    let itemAddedEndOfList

    if (foundItem.id === itemToBeReplaced.id) {
        cartItems.splice(foundItem, 1)
        itemAddedEndOfList = {...cartItems, foundItem}
    }
    // console.log(cartItems === items)
    console.log(itemAddedEndOfList)
    //localStorage.setItem("cartItems", JSON.stringify(itemAddedEndOfList));
    dispatch({
        type: REPLACE_PRODUCT,
        payload: {
            items: itemAddedEndOfList,
            item: foundItem,
        },
    })
}
