import CartActionTypes from "./cart.types";

// All this action does is run the function to switch it's boolean value

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  // payload is optional
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
