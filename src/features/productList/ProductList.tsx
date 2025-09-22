import ProductItem from "./ProductItem.tsx";
// ✅ Importa todas las imágenes
import waffleThumb from "../../assets/images/image-waffle-thumbnail.jpg";
import waffleMobile from "../../assets/images/image-waffle-mobile.jpg";
import waffleTablet from "../../assets/images/image-waffle-tablet.jpg";
import waffleDesktop from "../../assets/images/image-waffle-desktop.jpg";

import cremeBruleeThumb from "../../assets/images/image-creme-brulee-thumbnail.jpg";
import cremeBruleeMobile from "../../assets/images/image-creme-brulee-mobile.jpg";
import cremeBruleeTablet from "../../assets/images/image-creme-brulee-tablet.jpg";
import cremeBruleeDesktop from "../../assets/images/image-creme-brulee-desktop.jpg";

import macaronThumb from "../../assets/images/image-macaron-thumbnail.jpg";
import macaronMobile from "../../assets/images/image-macaron-mobile.jpg";
import macaronTablet from "../../assets/images/image-macaron-tablet.jpg";
import macaronDesktop from "../../assets/images/image-macaron-desktop.jpg";

import tiramisuThumb from "../../assets/images/image-tiramisu-thumbnail.jpg";
import tiramisuMobile from "../../assets/images/image-tiramisu-mobile.jpg";
import tiramisuTablet from "../../assets/images/image-tiramisu-tablet.jpg";
import tiramisuDesktop from "../../assets/images/image-tiramisu-desktop.jpg";

import baklavaThumb from "../../assets/images/image-baklava-thumbnail.jpg";
import baklavaMobile from "../../assets/images/image-baklava-mobile.jpg";
import baklavaTablet from "../../assets/images/image-baklava-tablet.jpg";
import baklavaDesktop from "../../assets/images/image-baklava-desktop.jpg";

import meringueThumb from "../../assets/images/image-meringue-thumbnail.jpg";
import meringueMobile from "../../assets/images/image-meringue-mobile.jpg";
import meringueTablet from "../../assets/images/image-meringue-tablet.jpg";
import meringueDesktop from "../../assets/images/image-meringue-desktop.jpg";

import cakeThumb from "../../assets/images/image-cake-thumbnail.jpg";
import cakeMobile from "../../assets/images/image-cake-mobile.jpg";
import cakeTablet from "../../assets/images/image-cake-tablet.jpg";
import cakeDesktop from "../../assets/images/image-cake-desktop.jpg";

import brownieThumb from "../../assets/images/image-brownie-thumbnail.jpg";
import brownieMobile from "../../assets/images/image-brownie-mobile.jpg";
import brownieTablet from "../../assets/images/image-brownie-tablet.jpg";
import brownieDesktop from "../../assets/images/image-brownie-desktop.jpg";

import pannaCottaThumb from "../../assets/images/image-panna-cotta-thumbnail.jpg";
import pannaCottaMobile from "../../assets/images/image-panna-cotta-mobile.jpg";
import pannaCottaTablet from "../../assets/images/image-panna-cotta-tablet.jpg";
import pannaCottaDesktop from "../../assets/images/image-panna-cotta-desktop.jpg";

// ✅ Objeto ProductImages
const ProductImages = {
  waffle: {
    thumbnail: waffleThumb,
    mobile: waffleMobile,
    tablet: waffleTablet,
    desktop: waffleDesktop,
  },
  cremeBrulee: {
    thumbnail: cremeBruleeThumb,
    mobile: cremeBruleeMobile,
    tablet: cremeBruleeTablet,
    desktop: cremeBruleeDesktop,
  },
  macaron: {
    thumbnail: macaronThumb,
    mobile: macaronMobile,
    tablet: macaronTablet,
    desktop: macaronDesktop,
  },
  tiramisu: {
    thumbnail: tiramisuThumb,
    mobile: tiramisuMobile,
    tablet: tiramisuTablet,
    desktop: tiramisuDesktop,
  },
  baklava: {
    thumbnail: baklavaThumb,
    mobile: baklavaMobile,
    tablet: baklavaTablet,
    desktop: baklavaDesktop,
  },
  meringue: {
    thumbnail: meringueThumb,
    mobile: meringueMobile,
    tablet: meringueTablet,
    desktop: meringueDesktop,
  },
  cake: {
    thumbnail: cakeThumb,
    mobile: cakeMobile,
    tablet: cakeTablet,
    desktop: cakeDesktop,
  },
  brownie: {
    thumbnail: brownieThumb,
    mobile: brownieMobile,
    tablet: brownieTablet,
    desktop: brownieDesktop,
  },
  pannaCotta: {
    thumbnail: pannaCottaThumb,
    mobile: pannaCottaMobile,
    tablet: pannaCottaTablet,
    desktop: pannaCottaDesktop,
  },
};

// ✅ Datos de productos
const products = [
  {
    id: "waffle",
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
    image: ProductImages.waffle,
  },
  {
    id: "cremeBrulee",
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7,
    image: ProductImages.cremeBrulee,
  },
  {
    id: "macaron",
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8,
    image: ProductImages.macaron,
  },
  {
    id: "tiramisu",
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
    image: ProductImages.tiramisu,
  },
  {
    id: "baklava",
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4,
    image: ProductImages.baklava,
  },
  {
    id: "meringue",
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5,
    image: ProductImages.meringue,
  },
  {
    id: "cake",
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    image: ProductImages.cake,
  },
  {
    id: "brownie",
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    image: ProductImages.brownie,
  },
  {
    id: "pannaCotta",
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    image: ProductImages.pannaCotta,
  },
];

function ProductList() {
  return (
    <ul className="grid grid-cols-1 gap-y-300 md:grid-cols-3 md:gap-x-300 md:gap-y-400">
      {products.map((item) => (
        <ProductItem key={item.name} item={item} />
      ))}
    </ul>
  );
}

export default ProductList;
