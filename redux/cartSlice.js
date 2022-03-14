import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  id: 0,
  quantity: 0, //Cart notifications
  total: 0, //Total price
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => { 
      const order = action.payload;
      state.id += 1;
      state.products.push({...order, id: state.id});
      console.log({...order, id: state.id});
      state.quantity += 1; //Cart notifications
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      console.log(action.payload);
      state.products= state.products.filter((product) => product.id!== action.payload.id);
      state.quantity -= 1; //Cart notifications
      state.total -= action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0; // Cart notifications
      state.total = 0;
    },
  },
});

export const { addProduct, reset,removeProduct } = cartSlice.actions;
export default cartSlice.reducer;