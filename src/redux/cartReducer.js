import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
  products: [],
  
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      } 
      // toast.success('Successfully Added!')
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      item && item.quantity++;
      toast.success('increase quantity')
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item?.quantity === 1) {
        // item.quantity === 1;
      } else {
        item && item.quantity--;
      } toast.success('decrease quantity')
    },
    removeItem: (state,action) => {
      state.products=state.products.filter(item=>item.id !== action.payload)
      toast.success('removed Item')

    },
    resetCart: (state) => {
      state.products = []
      toast.success('removed All Item')
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart,increaseQuantity,decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
