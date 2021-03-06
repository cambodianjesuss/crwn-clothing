/**
 * Reselect & Create Selectors for state to transforms in memoizatio
 * Receive state from cart-icon.component's mapStateToProps
 * Actually, it won't save up re-renders, because mapStateToProps does a shallow equality check
 * with primitive types (intengers) from itemCount, but still good to implement to reduce logic
 */

import { createSelector } from "reselect";

// Store the slice of state in cache that we want to transform -- passed from createStructedComponent from mapStateToProps

const selectCart = (state) => state.cart; // cart is state from combineReducers

// selectCartItems | used to get gather all items in cart
// createSelector first args takes in an array of selectors [selector/state]
// second args will take a callback function of the PROPERTY we want out of state (selectorState/ which is cart)
// and return the piece of the object we passed in from state. => selectorState.someProp
// returns and object with an array of cartItems
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

// selectCartItemsCount | used to add the quantity of selectCartItems
// uses Array.reduce() to sum up the quantity and returns a single value for:
// cart-icon.component's mapStateToProps' prop
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumilatedItems, cartItem) => accumilatedItems + cartItem.quantity,
      0,
    ),
);

// accumilated is the total + (quantity * price)
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumilatedItems, cartItem) =>
      accumilatedItems + cartItem.quantity * cartItem.price,
    0,
  ),
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);
