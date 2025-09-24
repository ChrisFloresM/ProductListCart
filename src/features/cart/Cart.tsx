import EmptyCart from "./EmptyCart.tsx";
import CartOverview from "./CartOverview.tsx";
import { useAppSelector } from "../../hooks/typedHooks.ts";
import { getCart } from "./cartSlice.ts";

function Cart() {
  /* Consume the cart state */
  const currentCart = useAppSelector(getCart);

  const cartElements = currentCart.reduce(
    (count, element) => count + element.amount,
    0,
  );
  const displayEmptyCart = cartElements === 0;

  return (
    <article className="flex-1 p-300">
      <div className="flex items-center justify-start gap-100">
        <h2 className="preset-2 text-custom-red mb-300 font-bold">Your Cart</h2>
        <span
          className="preset-2 text-custom-red mb-300 font-bold"
          translate="no"
        >
          ({cartElements})
        </span>
      </div>
      {displayEmptyCart ? <EmptyCart /> : <CartOverview />}
    </article>
  );
}

export default Cart;
