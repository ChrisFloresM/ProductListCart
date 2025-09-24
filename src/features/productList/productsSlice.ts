import type { ProductItemInterface } from "../../interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store.ts";

interface ProductListState {
  products: ProductItemInterface[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductListState = {
  products: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknwon error";
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("/data.json");
    return await res.json();
  },
);

/* Selectors */
export function getProducts(state: RootState) {
  return state.products.products;
}

export function getStatus(state: RootState) {
  return state.products.status;
}
export default productsSlice.reducer;
