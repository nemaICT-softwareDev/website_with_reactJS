import React, {Component} from 'react';
import util from "../util";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";

class Basket extends Component {
    render() {
        const {cartItems} = this.props;

        return (
            <div className="alert alert-info">
                { cartItems.length === 0 ? "Your cart is empty":
                <div>
                    You have {cartItems.length} products in your shopping cart<hr/>
                </div>}
                {cartItems.length > 0 &&
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <b>{item.title}</b>
                                <button
                                    className="btn btn-warning btn-xs float-right"
                                    onClick={() => {
                                        this.props.removeFromCart(this.props.cartItems, item);
                                    }}>X
                                </button>
                                <br />
                                {item.count} X {util.formatCurrency(item.price)}
                            </li>
                        ))}
                    </ul>
                    <hr />
                    <div className="text-right">
                        <p className="totalPrice">Total: {util.formatCurrency(
                            cartItems.reduce((a,c) => a + c.price * c.count, 0)
                        )}</p>
                          <button className="btn btn-primary btn-info" onClick={( ) =>
                              alert("Checkout still needs to implement, not in the scope of this POC...")}>
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