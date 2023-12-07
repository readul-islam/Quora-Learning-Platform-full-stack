import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  error: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const exist = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );

      if (exist) {
        state.error = 'Course already exist in cart';
      } else {
        state.cartItems.push(action.payload);
        state.cartTotalQuantity += 1;
        state.cartTotalAmount += action.payload.price;
        state.error = '';
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
