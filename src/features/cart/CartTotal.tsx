import { useAppSelector } from "../../hooks/typedHooks.ts";
import { getCart } from "./cartSlice.ts";

function CartTotal() {
  const cart = useAppSelector(getCart);

  const total = cart.reduce(
    (count, element) => count + element.amount * element.unitPrice,
    0,
  );

  return (
    <p className="flex items-center justify-between text-rose-900">
      <span className="preset-4">Order Total</span>
      <span className="preset-2 font-bold" translate="no">
        ${total.toFixed(2)}
      </span>
    </p>
  );
}

export default CartTotal;
