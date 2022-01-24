import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
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
        cartItems: addItemToCart(state.cartItems, action.payload), // Utility function that adds a cart item with quantity
      };
    }
    /**
     * We want to return a new cartItems IF the current state.cartItems (spread) doesn't contain the action.payload.id -- so we return a filtered object that doesn't contain it
     */
    case CartActionTypes.CLEAR_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
