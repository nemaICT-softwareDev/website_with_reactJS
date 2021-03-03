import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_TYPE,
    ORDER_PRODUCTS_BY_PRICE,
} from "./types";

// Get the list of products from the json API and return it via the payload
export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:3000/products")
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
// this function wilt filter the products list by the type its product
export const filterProducts = (products, type) => (dispatch) => {
    return dispatch({
        type:FILTER_PRODUCTS_BY_TYPE,
        payload:{
            items:type === '' ? products
                              : products.filter(a => a.availableTypes.indexOf(type.toUpperCase()) >= 0),
        },
    });
};

// this function will filter the products list by ascending or descending order
export const sortProducts = (items, sort) => (dispatch) => {
   const products = items.slice();
    if(sort !== ''){
        products.sort(
            (a,b) => (sort ==='asc') ? a.price - b.price : b.price - a.price)
                // (a.price > b.price ? 1: -1):
    }else{
        products.sort(
            (a,b) =>
                (a.id > b.id ? 1 : -1));//display product by id asc
    }
      dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: products,
        },
    });
};
