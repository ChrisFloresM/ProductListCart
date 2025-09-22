export interface ProductItem {
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
