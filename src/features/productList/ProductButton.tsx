import IncreaseButtons from "./IncreaseButtons.tsx";
import AddToCartButton from "./AddToCartButton.tsx";
import type { ProductItemInterface } from "../../interfaces";
import { useAppSelector } from "../../hooks/typedHooks.ts";
import { getCart } from "../cart/cartSlice.ts";

export interface ProductButtonProps {
  product: ProductItemInterface;
}

function ProductButton({ product }: ProductButtonProps) {
  const cart = useAppSelector(getCart);
  const productIsOnCart = cart.find((prod) => prod.id === product.id);

  if (productIsOnCart) {
    return <IncreaseButtons product={product} />;
  }

  return <AddToCartButton product={product} />;
}

export default ProductButton;
