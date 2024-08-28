// components/CategoryProductItem.jsx
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";

const CategoryProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <figure className="h-auto w-full relative overflow-hidden transition-all duration-100">
        <Link href={`/products/${product.slug.current}`}>
          <div className="h-[416px] md:h-[280px] lg:h-[344px] object-cover relative transition-all duration-100">
            <Image
              src={urlFor(product.extraImages[0]).url()}
              alt={product.name}
              style={{ objectFit: "cover" }}
              width="100"
              height="100"
              className="product-item-img transition-all duration-100"
              priority
              unoptimized
            />
            <Image
              src={urlFor(product.extraImages[0]).url()}
              alt={product.name}
              style={{ objectFit: "cover" }}
              width="100"
              height="100"
              className="product-item-img-hover absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-100"
              priority
              unoptimized
            />
          </div>
        </Link>
      </figure>
      <Link href={`/products/${product.slug.current}`}>
        <h3 className="mt-3 px-4 text-center font-medium">{product.name}</h3>
      </Link>
      <p className="mt-2 text-center font-gilda text-lg">
        {formatCurrency(product.price)}
      </p>
    </div>
  );
};

export default CategoryProductItem;
