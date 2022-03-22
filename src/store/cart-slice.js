import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  carts: [],
  totalQuantity: 0,
  changed: false,
};

const cart = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.carts = action.payload.carts;
    },
    addToCart(state, action) {
      state.totalQuantity += 1;
      state.changed = true;
      const existingCartIndex = state.carts.findIndex((cart) => {
        return cart.productId === action.payload.productId;
      });
      const existingCart = state.carts[existingCartIndex];

      if (existingCart) {
        existingCart.quantity++;
        existingCart.total = existingCart.quantity * existingCart.price;
      } else {
        state.carts.push({
          id: Math.random(),
          productId: action.payload.productId,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price,
        });
      }
    },
    removeFromCart(state, action) {
      state.totalQuantity -= 1;
      state.changed = true;
      const existingCartIndex = state.carts.findIndex(
        (cart) => cart.productId === action.payload.productId
      );
      const existingCart = state.carts[existingCartIndex];

      if (existingCart.quantity === 1) {
        state.carts.splice(existingCartIndex, 1);
      } else {
        existingCart.quantity -= 1;
        existingCart.total = existingCart.quantity * existingCart.price;
      }
    },
  },
});

export const cartActions = cart.actions;

export default cart.reducer;
