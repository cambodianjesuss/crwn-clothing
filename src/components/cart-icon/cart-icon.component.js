import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-cart.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHiddenProp, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHiddenProp}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenProp: () => dispatch(toggleCartHidden()), // Attach our prop button to toggleCartHidden Action
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumilatedItems, cartItem) => accumilatedItems + cartItem.quantity,
    0,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
