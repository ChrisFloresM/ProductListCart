import CartList from "./CartList.tsx";
import CartCarbonDelivery from "./CartCarbonDelivery.tsx";
import CartTotal from "./CartTotal.tsx";
import Button from "./Button.tsx";

function CartOverview() {
  return (
    <section className="flex flex-col gap-300">
      <CartList />
      <CartTotal />
      <CartCarbonDelivery />
      <Button />
    </section>
  );
}

export default CartOverview;
