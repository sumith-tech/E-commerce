import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartitems: [], totalquantity: 0 },
  reducers: {
    addtoCart(state, actions) {
      state.totalquantity++;
      const newitem = actions.payload;
      const existingItem = state.cartitems.find(
        (item) => item.id === newitem.id
      );
      if (!existingItem) {
        state.cartitems.push({
          id: newitem.id,
          name: newitem.name,
          price: newitem.price,
          quantity: 1,
          totalprice: newitem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalprice = existingItem.totalprice + newitem.price;
      }
    },
    removefromCart(state, actions) {
      state.totalquantity--;
      const id = actions.payload;
      const existingItem = state.cartitems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartitems = state.cartitems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalprice = existingItem.totalprice - existingItem.price;
      }
    },
  },
});

export const cartSliceAction = cartSlice.actions;

export default cartSlice;
