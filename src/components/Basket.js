import React, {Component} from 'react';
import util from "../util";
import { connect } from "react-redux";
import { addToCart, removeFromCart} from "../actions/cartActions";
import update from 'immutability-helper';

class Basket extends Component {

        state = {
            chBxIsSelected : false,
            itemsCart : []
        };

        handleChange = (e) => {
                    this.setState({[e.target.name]: e.target.checked});
                    this.setState([this.state.chBxIsSelected] = true);
        }

    // sortSelectedProducts = (itemInCart) => {
    //
    //     //let cartItems = itemsInCart.slice();
    //   //
    //   //   itemsInCart.sort((a,b) => {
    //   //   if(this.state.chBxIsSelected === true && a.title > b.title){
    //   //       return 1;
    //   //   }else{
    //   //      return -1;
    //   //   }
    //   // });
    //
    //     const index = itemInCart.findIndex((item) => item.id === item.id);
    //     const updatedItems = update(itemInCart, {$splice: [[index, 1, itemInCart]]});  // array.splice(start, deleteCount, item1)
    //     this.setState({employees: updatedItems});
    //     return updatedItems;
    //
    // }

    // twoCalls = e => {
    //     this.handleChange(e);
    //     this.sortSelectedProducts(e);
    //     }

    render() {
        const {cartItems} = this.props;
        const {chBxIsSelected} = this.state;
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
                        {cartItems.map((item) => (
                            <li key={item.id}  className="list-unstyled">
                                <div className="form-check" >
                                    <input className="custom-checkbox productTitle"
                                           type="checkbox"
                                           id={item.title}
                                           name={chBxIsSelected}
                                           defaultChecked={this.state.chBxIsSelected}

                                    />
                                     <label className="productTitleLabel" htmlFor={item.title}>&nbsp;{item.title}
                                     <span className="priceXProduct">
                                     { this.state.chBxIsSelected !== false ?  0 + " X " + util.formatCurrency(item.price) :
                                       item.count + " X " + util.formatCurrency(item.price)
                                     }
                                    </span></label>
                                </div>
                            </li>
                        ))}
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
export default connect(mapStateToProps, { addToCart , removeFromCart})(Basket);