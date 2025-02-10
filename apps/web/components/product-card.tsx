/* eslint-disable @next/next/no-img-element */

import { generateProductSlug, Product } from "@/app/utils/products";
import { DiscountBadge } from "./discount-badge";

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const image = product.images.find((image) => !!image.isThumbnail) ?? { url: 'next.svg', width: 10, height: 10, isThumbnail: true };

  return (
    <div className="bg-white rounded-md border border-[#dbdbdb] p-3 flex flex-col">
      <figure className="relative">
        <img
          loading="lazy"
          src={image.url}
          alt={product.title}
          width={image.width}
          height={image.height}
          className="rounded-md w-full h-36 object-contain"
        />
        <div className="absolute top-1 right-1">
          <DiscountBadge className="text-sm" discount={product.discountPercentage} />
        </div>
      </figure>
      <div className="text-darkGray my-2">
        <div className="flex justify-between items-baseline">
          <h2 className="text-xl font-semibold mb-2 truncate pr-4">
            {product.title}
          </h2>
          <span className="text-2xl whitespace-nowrap font-semibold">{product.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
      </div>
      <a href={`/${product.id}/${generateProductSlug(product.title)}`} className="bg-black text-center block w-full mb-3 mt-auto text-white rounded-full py-2 font-semibold text-base">
        See details
      </a>
    </div>
  );
};
