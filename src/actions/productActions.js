import {
        FETCH_PRODUCTS,
        FILTER_PRODUCTS_BY_SIZE,
        ORDER_PRODUCTS_BY_PRICE,
} from "./types";

// Get the list of products from the json API and return it via the payload
export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:8000/products")
        .then((res) => res.json())
        .catch((err) =>
            fetch("db.json")
                .then((res) => res.json())
                .then((data) => data.products)
        )
        .then((data) => {
            dispatch({ type: FETCH_PRODUCTS, payload: data });
        });
};
// this function wilt filter the products list by the size its product
export const filterProducts = (products, size) => (dispatch) => {
    return dispatch({
        type:FILTER_PRODUCTS_BY_SIZE,
        payload:{
            items:size === '' ? products
                              : products.filter(a => a.availableSizes.indexOf(size.toUpperCase()) >= 0),
        },
    });
};

// this function will filter the products list by ascending or descending order
export const sortProducts = (items, sort) => (dispatch) => {
   const products = items.slice();
    if(sort !== ''){
        products.sort(
            (a,b) => (sort ==='asc')?
                // (a.price > b.price ? 1: -1):
                // (a.price < b.price ? 1 : -1))
                 a.price - b.price: b.price - a.price)

    }else{
        products.sort(
            (a,b) =>
                (a.id > b.id ? 1 : -1));
                // a.id > b.id);
    }
      dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: products,
        },
    });
};