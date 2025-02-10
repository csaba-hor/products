/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateProductSlug, getProduct } from "@/app/utils/products";
import { ProductDetail } from "@/components/product-detail";
import { notFound, redirect } from "next/navigation";
import type React from "react"; // Added import for React

export default async function ProductLayout({
  params,
}: any) {
  const { productId, slug: _slug } = await params
  const product = await getProduct(productId);

  if (!product) {
    notFound();
  }

  const slug = generateProductSlug(product.title);

  if (_slug !== slug) {
    redirect(`/${productId}/${slug}`);
  }

  return (
    <main className="container grid-cols-1 px-4 mx-auto h-full grid place-content-center">
      <ProductDetail product={product} />
    </main>
  );
}
