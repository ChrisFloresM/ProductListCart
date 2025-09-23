import type { CartItem } from "../../interfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store.ts";

interface CartState {
  products: CartItem[];
  orderConfirmed: boolean;
}

const initialState: CartState = {
  products: [],
  orderConfirmed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.products.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload,
      );
    },
    increaseAmount(state, action: PayloadAction<string>) {
      const item = state.products.find((prod) => prod.id === action.payload);

      if (item === undefined) {
        return;
      }

      item.amount++;
    },
    decreaseAmount(state, action: PayloadAction<string>) {
      const item = state.products.find((prod) => prod.id === action.payload);

      if (item === undefined) {
        return;
      }

      item.amount--;
      if (item.amount == 0) {
        cartSlice.caseReducers.deleteItem(state, action);
      }
    },
    updateOrderStatus(state, action: PayloadAction<boolean>) {
      state.orderConfirmed = action.payload;

      if (!action.payload) {
        state.products = [];
      }
    },
  },
});

/* Define selectors */
export function getCart(state: RootState) {
  return state.cart.products;
}

export const {
  addItem,
  deleteItem,
  increaseAmount,
  decreaseAmount,
  updateOrderStatus,
} = cartSlice.actions;
export default cartSlice.reducer;
