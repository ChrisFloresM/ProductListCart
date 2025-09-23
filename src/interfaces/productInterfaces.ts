export interface ProductItemInterface {
  id: string;
  category: string;
  name: string;
  price: number;
  image: ImageItem;
}

export interface ImageItem {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}
