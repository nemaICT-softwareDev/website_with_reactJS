import React, {Component} from 'react';
import util from "../util";
import { connect } from "react-redux";
import { addToCart, singleRemoveFromCart, handleTotalRemove, sortSelectedProducts} from "../actions/cartActions";


class Basket extends Component {

        checkChange = (e) => {

            this.setState({[e.target.name]: e.target.checked});
        }
        uncheckChange = (e) => {
            this.setState({[this.state]: e.target.value})
        }
    render() {

        const {cartItems} = this.props;
         return (
            <div className="cart">
                { !cartItems.length?
                <div className="welcomeMsgBasket"><p className={"basketEmptyMsg"}>Your&nbsp;
                    <span className="glyphicon glyphicon-shopping-cart basket"/> is empty</p></div>:
                <div className="infoBasket">
                    <p className={"userBasketInfo"}>Lucky bird! you have&nbsp;
                        {cartItems.length}{cartItems.length === 1? " product":" products"} in your&nbsp;
                        <span className="glyphicon glyphicon-shopping-cart basket"/></p><hr/>
                </div>}
                {cartItems.length > 0 &&
                <div>
                    <ul className="dotFreeList">
                        {cartItems.map((item) => <li key={item.id}  className="list-unstyled">
                            <div className="form-group-sm" >
                               <button type={"button"} className={"btn btn-outline-dark"} value={"Delete"}
                                   onClick={() => {this.props.handleRemove(this.props.cartItems, item)}}
                                   onChange={this.uncheckChange}>
                                   Delete</button>&nbsp;&nbsp;&nbsp;
                                <input className="custom-checkbox productTitle"
                                       type="checkbox"
                                       id={item.title}
                                       name={item.title}
                                       value={item.title}
                                       onChange={this.checkChange}
                                       onClick={(e) => {
                                       this.props.sortSelectedProducts(this.props.cartItems, item)}}

                                />
                                 <label className="productTitleLabel" htmlFor={item.title}>&nbsp;{item.title}
                                 <span className="priceXProduct">
                                 {item.count + " X " + util.formatCurrency(item.price)}
                                 </span>&nbsp; </label>
                            </div>
                        </li>)}
                    </ul>
                    <hr />
                    <div className="text-right">
                        <p className="totalPrice"><span className="glyphicon glyphicon-euro"/> {util.formatCurrency(
                            cartItems.reduce((a,c) => a + c.count * c.price, 0)
                        )}</p>
                          <button className="btn btn-outline-dark" onClick={( ) =>
                              alert("Deze knop is niet geïmplementeerd omdat deze niet binnen het scope van dit project valt, " +
                                  "de aanwezigheid van deze knop hier is slechts figuurlijk.")}>
                            Checkout
                        </button>
                    </div>
                </div>
                    }
            </div>
        );
    }
}
const mapStateToProps = (state) =>({
    cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart , removeFromCart: singleRemoveFromCart, handleRemove: handleTotalRemove, sortSelectedProducts})(Basket);