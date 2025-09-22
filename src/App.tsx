import ProductsOverview from "./features/productList/ProductsOverview.tsx";
import Cart from "./features/cart/Cart.tsx";

function App() {
  return (
    <div className="m-auto w-full">
      <main className="m-auto flex max-w-[120rem] flex-col gap-400 lg:flex-row">
        <ProductsOverview />
        <Cart />
      </main>
    </div>
  );
}

export default App;
