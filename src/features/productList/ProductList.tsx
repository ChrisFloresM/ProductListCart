import ProductItem from "./ProductItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks.ts";
import { fetchProducts, getProducts, getStatus } from "./productsSlice.ts";
import { useEffect } from "react";
function ProductList() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);
  const productsStatus = useAppSelector(getStatus);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  if (productsStatus === "pending") {
    return <p className="preset-1 font-bold">Loading data</p>;
  }

  if (productsStatus === "failed") {
    return <p className="preset-1 font-bold">Error loading the data</p>;
  }

  return (
    <ul className="grid grid-cols-1 gap-y-300 md:grid-cols-3 md:gap-x-300 md:gap-y-400">
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ProductList;
