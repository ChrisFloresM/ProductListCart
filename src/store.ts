import {
  type Action,
  configureStore,
  type ThunkAction,
} from "@reduxjs/toolkit";
import cartReducer from "../src/features/cart/cartSlice.ts";
import productsSliceReducer from "../src/features/productList/productsSlice.ts";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsSliceReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Export a reusable type for handwritten thunks
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
