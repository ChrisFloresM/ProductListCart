import CartListItem from "./CartListItem.tsx";
import { useAppSelector } from "../../hooks/typedHooks.ts";
import { getCart } from "./cartSlice.ts";

export interface CartListProps {
  type: string;
}
function CartList({ type }: CartListProps) {
  const currentCart = useAppSelector(getCart);

  return (
    <ul className="flex max-h-[200px] flex-1 flex-col overflow-y-scroll border-b-1 border-rose-200 pb-300 md:max-h-[300px]">
      {currentCart.map((item) => (
        <CartListItem item={item} key={item.name} type={type} />
      ))}
    </ul>
  );
}

export default CartList;
