import { cn } from "@/lib/utils";
import ProductItem from "./ProductItem";

const ProductList = ({ products, className }) => {
  return (
    <div
      className={cn(
        "product-list grid gap-x-4 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12",
        className
      )}
    >
      {products.map((product) => (
        <ProductItem key={product.slug} product={product} />
      ))}
    </div>
  );
};
export default ProductList;
