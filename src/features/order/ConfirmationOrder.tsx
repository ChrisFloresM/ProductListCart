import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../cart/cartSlice.ts";
import CartTotal from "../cart/CartTotal.tsx";
import CartList from "../cart/CartList.tsx";
import Button from "../cart/Button.tsx";

function ConfirmationOrder() {
  const dispatch = useDispatch();
  function handleNewOrder() {
    dispatch(updateOrderStatus(false));
  }

  return (
    <div className="fixed inset-0 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center sm:px-500">
      <article className="h-[90dvh] w-full rounded-[8px] bg-white p-300 pt-500 sm:h-auto sm:max-w-[60rem]">
        <div className="flex flex-col gap-400">
          <div className="space-y-300">
            <img
              src="/icons/icon-order-confirmed.svg"
              alt="A green check to illustrate order confirmation"
            />
            <div className="space-y-100">
              <h2 className="preset-1 font-bold text-rose-900">
                Order Confirmed
              </h2>
              <p className="text-[1.6rem] text-rose-500">
                We hope you enjoy your food
              </p>
            </div>
          </div>
          <div className="space-y-300 rounded-[8px] bg-rose-50 p-300">
            <CartList type="confirmOrder" />
            <CartTotal />
          </div>
          <div className="">
            <Button clickFn={handleNewOrder}>Start a new order</Button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ConfirmationOrder;
