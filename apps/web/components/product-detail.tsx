import { Product } from "@/app/utils/products";
import { DiscountBadge } from "./discount-badge";
import { ProductGallery } from "./product-gallery";
import { Rating } from "./rating";

interface Props {
  product: Product;
}

export const ProductDetail: React.FC<Props> = ({ product }) => {
  return (
    <div className="rounded-md grid grid-cols-1 lg:grid-cols-2 gap-y-12 md:gap-4 w-full items-start">
      <div>
        <ProductGallery images={product.images} />
      </div>
      <div className="px-4 my-auto space-y-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
          <h2 className="text-3xl md:text-5xl font-semibold">{product.title}</h2>
          <Rating rating={product.rating} />
        </div>
        <p className="my-2 text-xl md:text-2xl text-black">{product.description}</p>
        <ul className="text-[#626262] text-xl md:text-2xl list-none space-y-2">
          <li>Stock: {product.stock ? 'Yes' : 'No'}</li>
          <li>Brand: {product.brand}</li>
          <li>Category: {product.category}</li>
        </ul>
        <DiscountBadge className="text-xl py-2" discount={0.4} />
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between md:items-center">
          <span className="text-5xl md:text-[64px] font-semibold">{product.price}</span>
          <button className="bg-black text-white py-4 px-12 text-xl md:text-2xl font-semibold rounded-[30px]">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
