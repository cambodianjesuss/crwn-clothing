import CartActionTypes from "./cart.types";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN: {
      return {
        ...state,
        hidden: !state.hidden, // Opposite of what the state is -- toggles boolean value
      };
    }
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
