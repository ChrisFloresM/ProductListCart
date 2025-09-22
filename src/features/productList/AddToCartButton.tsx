function AddToCartButton() {
  return (
    <button className="preset-4 m-auto flex w-[70%] translate-y-[-50%] justify-center space-x-100 rounded-full border-2 border-rose-400 bg-white px-300 py-150 font-bold text-rose-900 hover:cursor-pointer">
      <img
        src="/icons/icon-add-to-cart.svg"
        alt="The icon of a cart to represent add to cart function"
      />
      <span>Add to cart</span>
    </button>
  );
}

export default AddToCartButton;
