import { Product } from '../interfaces/product.interface';

export class ProductDto implements Product {
  id: string;
  title: string;
  description: string;
  price: string;
  discountPercentage: number;
  rating: number;
  stock: boolean;
  brand: string;
  category: string;
  images: Product['images'][0][];

  constructor(product: Product) {
    Object.assign(this, product);
  }
}
