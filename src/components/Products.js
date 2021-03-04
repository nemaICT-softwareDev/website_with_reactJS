import React, { Component } from "react";
import util from '../util';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/productActions';
import {addToCart, handleSingleRemove} from "../actions/cartActions";

const prodDescriptionStyle = {
    fontFamily: 'Apple Color Emoji", "Font Awesome\ 5 Free", "serif',
    paddingTop: '5px',
    paddingBottom: '2px',
    position: 'relative',
    marginBottom: '2%',
    textDecorationColor: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    /*text-shadow:  0 1px 0 #777, 0 -1px 0 #000;*/
    textTransform: 'uppercase'
}

const imageStyle = {
    borderRadius: '.75rem'
}

const pPriceStyle = {
    fontSize: '1.5em',
    textAlign: 'center',
    marginTop: '6%',
    color: 'black',
    textShadow: '-2px 2px 2px #BBB'
}

const thumbnailStyle = {
    backgroundColor: '#faf4d2',
    boxShadow: '4px 4px 3px #666',
    border: '1px solid #6c757d',
    borderRadius: '.75rem'
}

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
         //Here we use the map to convert the json products file into JSX elements
        const productItems = this.props.products.map( (product) => (
                <div className="col-md-4" key={product.id}>
                     <div style={thumbnailStyle} className="thumbnail">
                               <a>
                                 <div style={prodDescriptionStyle}>{product.title}</div>
                                   <img style={imageStyle} src={`products/${product.sku}.jpg`} alt={product.title} title={product.description}/>
                                 <div style={pPriceStyle}>{util.formatCurrency(product.price)}</div>
                               </a><hr/>
                        <div className="btn-group btn-group-md btn-group-justified">
                            <button type="button" className="btn btn-outline-success glyphicon glyphicon-shopping-cart"
                                    onClick={() => {this.props.addToCart(this.props.cartItems, product)}}/>
                            <button type="button" className="btn btn-outline-success glyphicon glyphicon-minus"
                                    onClick={() =>{this.props.handleSingleRemove(this.props.cartItems, product)}}/>
                            <button type="button" className="btn btn-outline-success glyphicon glyphicon-plus"
                                    onClick={() => {this.props.addToCart(this.props.cartItems, product)}}/>
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
// start browser with default state
const mapStateToProps = (state) => ({
    products: state.products.filteredItems,
    cartItems: state.cart.items
});
                                                        // here we use the fetchProducts action and return the new browser state
export default connect(mapStateToProps, {fetchProducts, addToCart, handleSingleRemove })(Products);