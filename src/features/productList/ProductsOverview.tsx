import ProductList from "./ProductList.tsx";

function ProductsOverview() {
  return (
    <article className="flex-2 space-y-300">
      <h1 className="preset-1 font-bold text-rose-900">Desserts</h1>
      <ProductList />
    </article>
  );
}

export default ProductsOverview;
