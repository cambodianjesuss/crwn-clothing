/**
 * Recieves our state from cartItems reducers
 * imported withRouter for onClick button to use history.push to
 * navigate without reloading page since we Route passing down one level from browserrouter
 * to also avoid prop drilling
 */

/**
 * Config files for react-persist
 * store.js
 * root-reducer.js
 * index.js (entry point)
 */
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; // Push our history to /checkout

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import "./cat-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems, // We could have just mapped state.cart without using reselect
});

// We will connect our props to component first, then pass those into withRouter history => /checkout
// Also, connect will pass Dispatch as props if it is not supplied in second argument, which is helpful for one off actions to trigger. to check what props are available, just spread ...otherProps in the component

export default withRouter(connect(mapStateToProps)(CartDropdown));
