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
    removeToCart(state, action) {
      const newItems = state.cartItems.filter(item => action.payload._id!== item._id)
      state.cartItems = newItems;
      state.cartTotalAmount-=action.payload.price
      state.cartTotalQuantity -= 1
    }
  },
});

export const { addToCart , removeToCart} = cartSlice.actions;

export default cartSlice.reducer;
