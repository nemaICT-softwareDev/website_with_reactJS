import React, {Component} from 'react';
import util from "../util";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";


class Basket extends Component {
    render() {
        const {cartItems} = this.props;
         return (
            <div className="alert alert-info">
                { !cartItems.length ?
                <div className="welcomeMsgBasket">Empty Shopping <span className="glyphicon glyphicon-shopping-cart basket"/></div> :
                <div className="infoBasket">
                    You have {cartItems.length} products in your shopping&nbsp;
                    <span className="glyphicon glyphicon-shopping-cart basket"/><hr/>
                </div>}
                {cartItems.length > 0 &&
                <div>
                    <ul className="dotFree">
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <div className="form-check">
                                    <input className="form-check-input basketCheckBox" type="checkbox" id="basketCheckBox"
                                     />
                                    <label className="labelProductTitle" htmlFor="basketCheckBox">&nbsp;{item.title}</label>
                                    <span className="pull-right">
                                         {item.count} X {util.formatCurrency(item.price)}
                                    </span>
                                </div>
                            </li>

                        ))}
                    </ul>
                    <hr />
                    <div className="text-right">
                        <p className="totalPrice"><span className="glyphicon glyphicon-euro"/> {util.formatCurrency(
                            cartItems.reduce((a,c) => a + c.price * c.count, 0)
                        )}</p>
                          <button className="btn btn-primary btn-info" onClick={( ) =>
                              alert("Checkout still needs to be implemented, not in the scope of this POC...")}>
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
export default connect(mapStateToProps, { addToCart , removeFromCart})(Basket);