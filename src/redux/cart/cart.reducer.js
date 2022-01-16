import CartActionTypes from "./cart.types";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**
     * TOGGLE_CART_HIDDEN
     * Boolean which reverses it's current state to add a hidden class to shopping cart
     */
    case CartActionTypes.TOGGLE_CART_HIDDEN: {
      return {
        ...state,
        hidden: !state.hidden, // Opposite of what the state is -- toggles boolean value
      };
    }
    /**
     * ADD_ITEM
     * Spread previous state cart items with new cart items payload
     */
    case CartActionTypes.ADD_ITEM: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload], // Spreading all current items with new
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
