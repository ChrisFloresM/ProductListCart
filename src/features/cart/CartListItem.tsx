import RoundedButton from "../../ui/RoundedButton.tsx";
import type { CartItem } from "../../interfaces";

interface CartListItemProps {
  item: CartItem;
}
function CartListItem({ item }: CartListItemProps) {
  const { name, amount, unitPrice } = item;
  const totalPrice = unitPrice * amount;

  function handleRemoveItem() {
    console.log("Item removed");
  }

  return (
    <li className="flex items-center justify-between border-b-1 border-rose-100 py-200 first:pt-0 last:border-0 last:pb-0">
      <div className="flex flex-col gap-100">
        <h3 className="preset-4 font-bold text-rose-900">{name}</h3>
        <p className="preset-4 flex gap-100">
          <span className="text-custom-red font-bold">
            {amount.toFixed(2)}x
          </span>
          <span className="text-rose-500">@${unitPrice.toFixed(2)}</span>
          <span className="font-bold text-rose-500">
            ${totalPrice.toFixed(2)}
          </span>
        </p>
      </div>
      <RoundedButton
        color="rose-400"
        icon="/public/icons/icon-remove-item.svg"
        alt="A cross representing the action of removing an item"
        onClickFn={handleRemoveItem}
      />
    </li>
  );
}

export default CartListItem;
