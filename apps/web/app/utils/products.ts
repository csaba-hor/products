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
  price: number;
  discountPercentage: number;
  rating: number;
  stock: boolean;
  brand: string;
  category: string;
  images: Array<Image>;
}

export interface PaginateMetadata {
  total: number;
  remaining: number;
  start: number;
  limit: number;
  hasMore: boolean;
  nextStart: number;
}

type Products = {
  data: Product[],
  metadata: PaginateMetadata
}

export const getProducts = async ({ start }: { start: number }): Promise<Products> => {
  const resp = await fetch(`${process.env.API_URL}/products?start=${start}`)
  const result = await resp.json();
  return result;
}

const productCache = new Map<string, Product>();

export const getProduct = async (id: string): Promise<Product> => {
  if(productCache.has(id)) {
    console.log('cache hit')
    return productCache.get(id) as Product;
  }

  const resp = await fetch(`${process.env.API_URL}/products/${id}`)
  const result = await resp.json();

  productCache.set(id, result)

  return result;
}

export const generateProductSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "-")
}