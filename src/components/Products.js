import React, { Component } from "react";
import util from '../util';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions';
import {addToCart, removeFromCart} from "../actions/cartActions";
import {changeBackground} from "../actions/ChangeColor";

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        /**
         * Here we use the map to convert the array products into JSX elements
         */
        const productItems = this.props.products.map( (product) => (
                <div className="col-md-4" key={product.id}>
                     <div className="thumbnail">
                               <a>
                                   <div>
                                        <p className="prodDescription">{product.title}</p>
                                   </div>
                                   <img src={`products/${product.sku}.jpg`} alt={product.title} title={product.description}/>
                                   <div className={"pPrice"}>
                                         <p>
                                             <span className="glyphicon glyphicon-euro"/>
                                             &nbsp;{util.formatCurrency(product.price)}
                                         </p>
                                   </div>
                               </a><hr/>
                        <div className="btn-group btn-group-justified ">
                            <button type="button"
                                    className="btn btn-outline-dark"
                                    onClick={() => {this.props.addToCart(this.props.cartItems, product)}}>Add to&nbsp;
                               <span
                                   className="glyphicon glyphicon-shopping-cart"></span>
                            </button>
                                <button type="button" className="btn btn-outline-dark"
                                            datatype="minus" data-field=""
                                            onClick={() =>{
                                                this.props.removeFromCart(this.props.cartItems, product)}}><span
                                    className="glyphicon glyphicon-minus"></span>
                                </button>
                                <button type="button" className="btn btn-outline-dark"
                                        datatype="plus" data-field=""
                                        onClick={() => {this.props.addToCart(this.props.cartItems, product)}}>
                                    <span
                                        className="glyphicon glyphicon-plus"></span>
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