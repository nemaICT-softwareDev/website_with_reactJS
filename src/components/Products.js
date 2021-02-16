import React, { Component } from "react";
import util from '../util';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions';
import {addToCart, removeFromCart} from "../actions/cartActions";

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
        this.state={
            count:0
        }
    }
    render() {
        /**
         * Here we use the map to convert the array products into JSX elements
         */
        const productItems = this.props.products.map( (product) => (
                <div className="col-md-4" key={product.id}>
                    <div className="thumbnail text-center">
                           <div className="form-check text-left">
                               <input className="form-check-input" type="checkbox"  />
                               <label className="form-check-label text-info checkboxLabel" >Exclude product</label>
                           </div>
                        <a href={`#${product.id}`}
                           onClick={() => this.props.addToCart(this.props.cartItems, product)}>
                            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                            <p className="text-info">{product.title}</p>
                        </a>
                             <div className="col-col-2 ">
                                <div className="input-group plusMinus text-right">
                                    <button type="button" className="btn btn-info btn-number"
                                            datatype="minus" data-field=""
                                            onClick={() =>{
                                                this.props.removeFromCart(this.props.cartItems, product)}}>-</button>
                                <button type="button" className="btn btn-info btn-number"
                                        datatype="plus" data-field=""
                                        onClick={() => {this.props.addToCart(this.props.cartItems, product)}}>+</button>
                                </div>
                                 <b>{util.formatCurrency(product.price)}</b>
                                 <button type="button"
                                         className="btn btn-primary btn btn-info"
                                         onClick={() => {this.props.addToCart(this.props.cartItems, product)}}>
                                     Add To Cart
                                 </button>
                                </div>
                           </div>
                    </div>

            )
        )
        return (
            <div className="row">{productItems} <br/></div>

        );
    }
}
// here we get default state
const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items
});
// here we use the fetchProducts action and return the new state
export default connect(mapStateToProps, {fetchProducts, addToCart, removeFromCart })(Products);