import React, { Component } from "react";
import util from '../util';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions';
import {addToCart, handleSingleRemove} from "../actions/cartActions";

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        /**
         * Here we use the map to convert the json products file into JSX elements
         */
        const productItems = this.props.products.map( (product) => (
                <div className="col-md-4" key={product.id}>
                     <div className="thumbnail">
                               <a>
                                   <div className={"container-fluid prodDescription"}>
                                       {product.title}
                                   </div>
                                         <img className={"image"} src={`products/${product.sku}.jpg`} alt={product.title} title={product.description}/>
                                   <div className={"fluid pPrice"}>
                                          <span className="glyphicon glyphicon-euro"/>
                                          &nbsp;{util.formatCurrency(product.price)}
                                   </div>
                               </a><hr/>
                        <div className="btn-group btn-group-md btn-group-justified">
                            <button type="button"
                                    className="btn btn-outline-warning pButtons"
                                    onClick={() => {this.props.addToCart(this.props.cartItems, product)}}>Add&nbsp;
                               <span
                                   className="glyphicon glyphicon-shopping-cart"></span>
                            </button>
                            <button type="button"
                                    className="btn btn-outline-warning"
                                    datatype="minus" data-field=""
                                    onClick={() =>{
                                    this.props.handleSingleRemove(this.props.cartItems, product)}}>
                                <span
                                    className="glyphicon glyphicon-minus">
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-warning pButtons"
                                        datatype="plus" data-field=""
                                        onClick={() => {this.props.addToCart(this.props.cartItems, product)}}>
                                 <span
                                        className="glyphicon glyphicon-plus">
                                 </span>
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
export default connect(mapStateToProps, {fetchProducts, addToCart, handleSingleRemove })(Products);