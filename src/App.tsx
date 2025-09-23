import ProductsOverview from "./features/productList/ProductsOverview.tsx";
import Cart from "./features/cart/Cart.tsx";
import ConfirmationOrder from "./features/order/ConfirmationOrder.tsx";
import type { RootState } from "./store.ts";
import { useSelector } from "react-redux";

function App() {
  const isOrderConfirmed = useSelector(
    (state: RootState) => state.cart.orderConfirmed,
  );

  return (
    <div className="m-auto w-full">
      <main className="m-auto flex max-w-[120rem] flex-col gap-400 lg:flex-row">
        <ProductsOverview />
        <Cart />
        {isOrderConfirmed && <ConfirmationOrder />}
      </main>
    </div>
  );
}

export default App;
