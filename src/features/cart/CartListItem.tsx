import RoundedButton from "../../ui/RoundedButton.tsx";
import type { CartItem } from "../../interfaces";
import { useAppDispatch } from "../../hooks/typedHooks.ts";
import { deleteItem } from "./cartSlice.ts";

interface CartListItemProps {
  item: CartItem;
  type: string;
}
function CartListItem({ item, type }: CartListItemProps) {
  const { id, name, amount, unitPrice, thumbnail } = item;
  const totalPrice = unitPrice * amount;

  const dispatch = useAppDispatch();

  function handleRemoveItem() {
    dispatch(deleteItem(id));
  }

  return (
    <li className="flex items-center justify-between border-b-1 border-rose-100 py-200 first:pt-0 last:border-0 last:pb-0">
      <div className="flex gap-200">
        {type === "confirmOrder" && (
          <img
            className="w-[48px] rounded-[8px]"
            src={thumbnail}
            alt={`A thumbnail picture of ${name}`}
          />
        )}
        <div className="flex flex-col gap-100">
          <h3 className="preset-4 font-bold text-rose-900">{name}</h3>
          <p className="preset-4 flex gap-100">
            <span className="text-custom-red font-bold">
              {amount.toFixed(2)}x
            </span>
            <span className="text-rose-500" translate="no">
              @${unitPrice.toFixed(2)}
            </span>
            {type === "cart" && (
              <span className="font-bold text-rose-500" translate="no">
                ${totalPrice.toFixed(2)}
              </span>
            )}
          </p>
        </div>
      </div>
      {type === "cart" ? (
        <RoundedButton
          borderColor="border-rose-400"
          icon="/icons/icon-remove-item.svg"
          alt="A cross representing the action of removing an item"
          onClickFn={handleRemoveItem}
        />
      ) : (
        <span className="font-bold text-rose-900" translate="no">
          ${totalPrice.toFixed(2)}
        </span>
      )}
    </li>
  );
}

export default CartListItem;
