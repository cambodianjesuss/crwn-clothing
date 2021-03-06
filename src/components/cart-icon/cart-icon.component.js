import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

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

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
