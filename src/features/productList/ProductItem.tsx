import ProductButton from "./ProductButton.tsx";
import type { ProductItemInterface } from "../../interfaces";

interface ProductItemProps {
  item: ProductItemInterface;
}

function ProductItem({ item }: ProductItemProps) {
  const { category, name, price, image } = item;

  return (
    <li className="group w-full">
      <picture className="w-full">
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <source media="(min-width: 1024px)" srcSet={image.desktop} />
        <img
          className="outline-custom-red w-full rounded-[8px] transition duration-200 group-hover:outline-2"
          src={image.mobile}
          alt={`A picture display a ${item.name}`}
        />
      </picture>
      <ProductButton product={item} />
      <div className="space-y-50">
        <p className="preset-4 text-rose-500">{category}</p>
        <p className="preset-3 font-bold text-rose-900">{name}</p>
        <p className="preset-3 text-custom-red font-bold" translate="no">
          ${price.toFixed(2)}
        </p>
      </div>
    </li>
  );
}

export default ProductItem;
