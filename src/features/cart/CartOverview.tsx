import CartList from "./CartList.tsx";
import CartCarbonDelivery from "./CartCarbonDelivery.tsx";
import CartTotal from "./CartTotal.tsx";
import Button from "./Button.tsx";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "./cartSlice.ts";

function CartOverview() {
  const dispatch = useDispatch();
  function handleConfirmation() {
    dispatch(updateOrderStatus(true));
  }

  return (
    <section className="flex flex-col gap-300">
      <CartList type="cart" />
      <CartTotal />
      <CartCarbonDelivery />
      <Button clickFn={handleConfirmation}>Confirm Order</Button>
    </section>
  );
}

export default CartOverview;
