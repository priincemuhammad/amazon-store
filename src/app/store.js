import basketReducer from "@/slices/basketSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default store;
