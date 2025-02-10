interface Image {
  isThumbnail: boolean;
  url: string;
  width: number;
  height: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  discountPercentage: number;
  rating: number;
  stock: boolean;
  brand: string;
  category: string;
  images: Array<Image>;
}
