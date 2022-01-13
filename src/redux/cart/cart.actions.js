import CartActionTypes from "./cart.types";

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  // payload is optional
});

export default toggleCartHidden;
