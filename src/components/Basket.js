import React, {Component} from 'react';
import util from "../util";
import { connect } from "react-redux";
import { handleSingleRemove, handleTotalRemove, sortSelectedProducts} from "../actions/cartActions";

const welcomeBasketInfoFontStyle = {
    fontsize: '1.25em',
}

const userBasketInfoStyle = {
    paddingTop: '6px',
    marginLeft: '4%',
    fontSize: '1.25em'
}

const ulStyle = {
    paddingLeft: '0'
}

const productTitleLabelStyle = {
    position: 'relative',
    float: 'right'
}

const deleteBtnStyle = {
    borderRadius: '.50rem',
    //backgroundColor: '#46421f'
}

const checkoutBtnStyle = {
    marginRight: '.50rem',
    marginBottom: '.50rem',
    borderRadius: '.50rem',
    // color: '#212529',
    // backgroundColor: '#46421f'
}

const priceXProductStyle = {
    position: 'relative',
    fontWeight: 'bold',
    marginRight: '0.9em',
    float: 'right',
    alignItems: 'flex-end'
}

const totalPriceStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginRight: '0.6em'
}

const cartStyle = {
    backgroundColor: '#faf4d2',
    border: '1px solid #ffc107',
    boxShadow: '3px 4px 3px #666',
    paddingTop: '1em',
    borderRadius: '.75rem'
}

const changeLabelColorStyle = {
    position: 'relative',
    float: 'right',
    textDecorationLine: 'line-through',
    textDecorationColor: 'black',
    opacity: '0.6',
    backgroundColor: 'grey'
}


class Basket extends Component {

    handleCheck = (e) => {
          this.setState({[e.target.name]: e.target.checked});
        }

    render() {
        const {cartItems} = this.props;
        return (
            <div style={cartStyle}>
                {!cartItems.length ?
                    <div style={welcomeBasketInfoFontStyle}>
                        <p style={userBasketInfoStyle}>Your&nbsp;
                            <span className="glyphicon glyphicon-shopping-cart"/> is empty
                        </p>
                    </div> :
                       <div style={welcomeBasketInfoFontStyle}>
                            <p style={userBasketInfoStyle}>Lucky bird! you have&nbsp;
                              {cartItems.length}{cartItems.length === 1 ? " product" : " products"} in your&nbsp;
                              <span className="glyphicon glyphicon-shopping-cart"/>
                            </p>
                            <hr/>
                        </div>}
                {cartItems.length > 0 &&
                <div>
                  <ul style={ulStyle}>{cartItems.map((item) =>
                     <li key={item.id} className="list-unstyled">
                       <div className="form-check">
                           <button style={deleteBtnStyle} type={"button"} className={"btn btn-outline-dark"} value={"Delete"}
                                   onClick={() => {this.props.handleTotalRemove(this.props.cartItems, item)}}>
                                   Delete
                           </button>&nbsp;&nbsp;&nbsp;
                           <input className="custom-checkbox productTitle"
                                  type="checkbox"
                                  id={item.title}
                                  name={item.title}
                                  onChange={() => this.props.sortSelectedProducts(this.props.cartItems,item)}
                                />
                           <label className={"productTitleLabel"}
                                 htmlFor={item.title}>&nbsp;{item.title}&nbsp;
                                 {item.count + "x " + util.formatCurrency(item.price)}
                           </label>
                       </div>
                     </li>)}
                  </ul>
                    <div className="text-right">
                        <hr/>
                        <p style={totalPriceStyle}>{util.formatCurrency(cartItems.reduce((a, c) => a + c.count * c.price, 0))}</p>
                        <button style={checkoutBtnStyle} className="btn btn-outline-dark" onClick={() =>
                            alert("Deze knop is niet geïmplementeerd omdat deze niet binnen het scope van dit project valt, " +
                                "de aanwezigheid van deze knop hier is slechts esthetisch en figuurlijk.")}>Checkout
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
export default connect(mapStateToProps, { handleSingleRemove, handleTotalRemove, sortSelectedProducts})(Basket);