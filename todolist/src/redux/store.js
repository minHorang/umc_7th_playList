import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer, // 모달 리듀서 추가
  },
});

export default store;
