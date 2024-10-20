// app/products/[slug]/page.jsx
import { getProductBySlug, getRelatedProducts } from "@/sanity/product-utils";
import ProductDetails from "@/components/ProductDetails";

export const revalidate = 0; // Add this to your page component

export default async function SingleProductDetails({ params }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      notFound: true,
    };
  }
  return (
    <div>
      <ProductDetails product={product[0]} />
      {/* <SimilarProducts products={suggestions} /> */}
    </div>
  );
}
