/**
 * Used in Cart Reducer -- cart.reducer.js
 * CartActionTypes.ADD_ITEM
 * Where we check if already exists to add the QUANTITY PROPERTY
 *
 * @param {*} cartItems | First Argument that recieves previous state.cartItems
 * @param {*} cartItemToAdd | Second Argument that recieves action.payload of item to add
 * @returns | Returns cartItems Array
 */

export const addItemToCart = (cartItems, cartItemToAdd) => {
  // We set a true or false value if the item we want to add already exists
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id,
  );

  // If the cart item (item in array) aleady exist in the cart, we want to add the value of quantity by 1, then return object
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  // If we don't have that item in the cart, we push to it end of array, with a prop QUANTITY to default
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

/**
 *
 * @param {*} cartItems Array of cart items | from reducer as current state.cartItems
 * @param {*} cartItemToRemove the current cart item | cart item action.payload - item ID
 *
 */
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // Store if cart item exists as we iterate each item's ID to match with the action.payload item ID
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  );

  // If the quantity is already 1, we will completely filter out that item and return new cartItems array without it
  if (existingCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

  // By default we will return a new map cartItems to match if the cartItem.ID matches
  // cartItemToRemove.ID, then we spread cartItem properties, then decrement the quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
