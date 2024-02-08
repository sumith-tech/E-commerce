import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
  name: "ui",
  initialState: { showCart: false },
  reducers: {
    triggercart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uisliceAction = uislice.actions;
export default uislice;
