import RoundedButton from "../../ui/RoundedButton.tsx";
import type { ProductButtonProps } from "./ProductButton.tsx";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAmount, getCart, increaseAmount } from "../cart/cartSlice.ts";

function IncreaseButtons({ product }: ProductButtonProps) {
  const { id } = product;

  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const amount = cart.reduce((acc, item) => {
    if (item.id === id) {
      acc += item.amount;
    }
    return acc;
  }, 0);
  function handleIncrease(): void {
    dispatch(increaseAmount(id));
  }

  function handleDecrease(): void {
    dispatch(decreaseAmount(id));
  }

  return (
    <div className="preset-4 border-custom-red bg-custom-red m-auto flex w-[70%] translate-y-[-50%] justify-between rounded-full border-2 px-300 py-150 font-bold text-rose-900 focus:ring">
      <RoundedButton
        color="white"
        icon="/icons/icon-decrement-quantity.svg"
        alt="An icon with a sign to decrement quantity"
        onClickFn={handleDecrease}
      />
      <span className="text-white">{amount}</span>
      <RoundedButton
        color="white"
        icon="/icons/icon-increment-quantity.svg"
        alt="An icon with a sign to increment quantity"
        onClickFn={handleIncrease}
      />
    </div>
  );
}

export default IncreaseButtons;
