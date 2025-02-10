"use client";

import { useCallback, useState } from "react";
import { InfiniteScroll } from "./scroller";
import { ProductCard } from "./product-card";
import { getProducts, Product } from "@/app/utils/products";

type Props = {
  products: Product[];
  hasMore: boolean;
  nextStart: number;
  limit?: number
};

export const ProductList: React.FC<Props> = ({
  products,
  hasMore: _hasMore,
  nextStart,
  limit = 10
}) => {
  const [items, setItems] = useState<Product[]>(products);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(_hasMore);
  const [start, setStart] = useState(nextStart);

  const loadMore = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
  
    try {
      const response = await getProducts({ start });
      setItems((prevItems) => [...prevItems, ...response.data]);
      setHasMore(response.metadata.hasMore);
      setStart((prevStart) => prevStart + limit);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setIsLoading(false);
    }
  }, [start, isLoading, limit]);

  return (
    <InfiniteScroll loadMore={loadMore} hasMore={hasMore} isLoading={isLoading}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>
      {!hasMore && <p className="text-center py-12 text-xl">The end.</p>}
    </InfiniteScroll>
  );
};
