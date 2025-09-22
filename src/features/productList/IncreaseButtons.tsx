import RoundedButton from "../../ui/RoundedButton.tsx";
function handleIncrease() {
  console.log("item increased");
}

function handleDecrease() {
  console.log("item decreased");
}
function IncreaseButtons() {
  return (
    <div className="preset-4 border-custom-red bg-custom-red m-auto flex w-[70%] translate-y-[-50%] justify-between rounded-full border-2 px-300 py-150 font-bold text-rose-900 focus:ring">
      <RoundedButton
        color="white"
        icon="/public/icons/icon-decrement-quantity.svg"
        alt="An icon with a sign to decrement quantity"
        onClickFn={handleDecrease}
      />
      <span className="text-white">1</span>
      <RoundedButton
        color="white"
        icon="/public/icons/icon-increment-quantity.svg"
        alt="An icon with a sign to increment quantity"
        onClickFn={handleIncrease}
      />
    </div>
  );
}

export default IncreaseButtons;
