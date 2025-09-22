import EmptyCart from "./EmptyCart.tsx";
import CartOverview from "./CartOverview.tsx";

function Cart() {
  const cartElements = 0;
  const displayEmptyCart = false;

  return (
    <article className="flex-1 p-300">
      <h2 className="preset-2 text-custom-red mb-300 font-bold">
        Your Cart ({`${cartElements}`})
      </h2>
      {displayEmptyCart ? <EmptyCart /> : <CartOverview />}
    </article>
  );
}

export default Cart;
