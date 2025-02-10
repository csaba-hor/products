import { ProductList } from "@/components/product-list";
import { getProducts } from "./utils/products";

export default async function ProductsPages() {
  const products = await getProducts({ start: 0 })

  return (
    <div className="container mx-auto px-4 pb-24">
      <h1 className="text-center font-semibold text-5xl my-16">See Products</h1>
      <ProductList products={products.data} nextStart={products.metadata.nextStart} hasMore={products.metadata.hasMore} />
    </div>
  );
}
