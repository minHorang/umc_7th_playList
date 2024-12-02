import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../dummy/cartItems"; // JSON 파일

const initialState = {
  cartItems: cartItems,
  totalAmount: 12,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase(state, action) {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) item.amount += 1;
      cartSlice.caseReducers.updateTotals(state);
    },
    decrease(state, action) {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item && item.amount > 1) {
        item.amount -= 1;
      } else if (item && item.amount === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
      cartSlice.caseReducers.updateTotals(state);
    },
    clearCart(state) {
      state.cartItems = [];
      cartSlice.caseReducers.updateTotals(state);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    calculateTotals: (state) => {
      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.amount,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.amount * item.price,
        0
      );
    },
    updateTotals(state) {
      // 총 음반 개수 계산
      state.totalAmount = state.cartItems.reduce(
        (sum, item) => sum + item.amount,
        0
      );
      // 총 가격 계산
      state.totalPrice = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.amount,
        0
      );
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
