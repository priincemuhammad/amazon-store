import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addTobasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFrombasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        // the item exist in the basket then remove it
        newBasket.splice(index, 1);
      } else {
        console.log(action.payload.id);
      }
      state.items = newBasket;
    },
  },
});

export const { addTobasket, removeFrombasket } = basketSlice.actions;

export const selectItem = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
