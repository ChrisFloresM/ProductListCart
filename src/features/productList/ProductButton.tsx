import IncreaseButtons from "./IncreaseButtons.tsx";
import AddToCartButton from "./AddToCartButton.tsx";

function ProductButton() {
  const productIsOnCart = false;

  if (productIsOnCart) {
    return <IncreaseButtons />;
  }

  return <AddToCartButton />;
}

export default ProductButton;
