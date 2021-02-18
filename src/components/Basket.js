import React, {Component} from 'react';
import util from "../util";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";


class Basket extends Component {
    render() {
        const {cartItems} = this.props;
         return (
            <div className="alert alert-info">
                { !cartItems.length?
                <div className="welcomeMsgBasket">Your <span className="glyphicon glyphicon-shopping-cart basket"/>&nbsp; is empty</div>:
                <div className="infoBasket">
                    Lucky bird! you have {cartItems.length}{cartItems.length === 1? " product":" products"} in your&nbsp;
                    <span className="glyphicon glyphicon-shopping-cart basket"/><hr/>
                </div>}
                {cartItems.length > 0 &&
                <div>
                    <ul className="dotFreeList">
                        {cartItems.map((item) => (
                            <li key={item.id}  className="list-unstyled">
                                <div className="form-check">
                                    <input className="form-check-input productTitle" type="checkbox" id="productTitleCkbx"/>
                                    <label className="productTitle" htmlFor="productTitleCkbx">&nbsp;{item.title}</label>
                                    <span className="pull-right">
                                        <b>{item.count} X {util.formatCurrency(item.price)}</b>
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
export default connect(mapStateToProps, { addToCart , removeFromCart})(Basket);