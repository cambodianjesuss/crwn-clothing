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
