import type { ProductButtonProps } from "./ProductButton.tsx";
import { useAppDispatch } from "../../hooks/typedHooks.ts";
import { addItem } from "../cart/cartSlice.ts";

function AddToCartButton({ product }: ProductButtonProps) {
  const { id, name, price, image } = product;
  const dispatch = useAppDispatch();

  function handleAddToCart(): void {
    dispatch(
      addItem({
        id,
        name,
        amount: 1,
        unitPrice: price,
        thumbnail: image.thumbnail,
      }),
    );
  }

  return (
    <button
      className="preset-4 hover:border-custom-red m-auto flex w-[70%] translate-y-[-50%] justify-center space-x-100 rounded-full border-2 border-rose-400 bg-white px-300 py-150 font-bold text-rose-900 hover:cursor-pointer"
      onClick={handleAddToCart}
    >
      <img
        src="/icons/icon-add-to-cart.svg"
        alt="The icon of a cart to represent add to cart function"
      />
      <span>Add to cart</span>
    </button>
  );
}

export default AddToCartButton;
