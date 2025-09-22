import CartListItem from "./CartListItem.tsx";

interface CartItem {
  name: string;
  amount: number;
  unitPrice: number;
}

const fakeItems: CartItem[] = [
  {
    name: "Classic Tiramisu",
    amount: 1,
    unitPrice: 5.5,
  },
  {
    name: "Vanilla Bean Creme Brulee",
    amount: 4,
    unitPrice: 7,
  },
  {
    name: "Vanilla Panna Cotta",
    amount: 2,
    unitPrice: 6.5,
  },
];

function CartList() {
  return (
    <ul className="flex flex-col border-b-1 border-rose-200 pb-300">
      {fakeItems.map((item) => (
        <CartListItem item={item} key={item.name} />
      ))}
    </ul>
  );
}

export default CartList;
