import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const item = action.payload;
      const isItemExist = state.find((i) => i.id === item.id);

      if (isItemExist) {
        state.forEach((i) => {
          if (i.id === item.id) {
            i.quantity += 1;
          }
        });
      } else {
        state.push(item);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
      // state.splice(action.payload, 1);
    },
    decrement: (state, action) => {
      const item = state.find((i) => i.id === action.payload);

      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { add, remove, decrement } = cartSlice.actions;
export default cartSlice.reducer;
