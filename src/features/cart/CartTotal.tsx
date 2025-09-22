function CartTotal() {
  const total = 46.5;
  return (
    <p className="flex justify-between text-rose-900">
      <span className="preset-4">Order Total</span>
      <span className="preset-2 font-bold">${total.toFixed(2)}</span>
    </p>
  );
}

export default CartTotal;
