function EmptyCart() {
  return (
    <section className="flex flex-col gap-200 pt-200 pb-200">
      <img
        className="m-auto"
        src="/icons/illustration-empty-cart.svg"
        alt="An illustration of a cake to represent and empty cart"
      />
      <p className="preset-4 text-center font-bold text-rose-500">
        Your added items will appear here
      </p>
    </section>
  );
}

export default EmptyCart;
