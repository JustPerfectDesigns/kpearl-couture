// app/products/[slug]/page.jsx
import { getProductBySlug, getRelatedProducts } from "@/sanity/product-utils";
import ProductDetails from "@/components/ProductDetails";
// import SimilarProducts from "@/components/SimilarProducts";

export default async function SingleProductDetails({ params }) {
  const { slug } = params;
  const product = await getProductBySlug(slug);
  const suggestions = await getRelatedProducts(product[0].category, slug);

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