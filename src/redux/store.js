import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
