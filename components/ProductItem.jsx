// import { formatCurrency } from "@/utils/formatCurrency";
// import Image from "next/image";
// import Link from "next/link";

// const ProductItem = ({ product }) => {
//   return (
//     <div className="product-item">
//       <figure className="h-auto w-full relative overflow-hidden transition-all duration-100">
//         <Link href={`/products/${product?.slug}`}>
//           <div className="h-[216px] md:h-[280px] lg:h-[344px] object-cover relative transition-all duration-100">
//             <Image
//               src={product?.extraImages[0]}
//               alt={product?.name}
//               style={{ objectFit: "cover" }}
//               width="100"
//               height="100"
//               className="product-item-img transition-all duration-100"
//               priority
//               unoptimized
//             />
//             <Image
//               src={product?.extraImages[1]}
//               alt={product?.name}
//               style={{ objectFit: "cover" }}
//               width="100"
//               height="100"
//               className="product-item-img-hover absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-100"
//               priority
//               unoptimized
//             />
//           </div>
//         </Link>
//       </figure>
//       <Link href={`/products/${product?.slug}`}>
//         <h3 className="mt-3 text-center font-medium">{product?.name}</h3>
//       </Link>
//       <p className="mt-2 text-center font-gilda text-lg">
//         {formatCurrency(product?.price)}
//       </p>
//     </div>
//   );
// };

// export default ProductItem;

import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item relative">
      <figure className="h-auto w-full relative overflow-hidden transition-all duration-100">
        <Link href={`/products/${product?.slug}`}>
          <div className="h-[216px] md:h-[280px] lg:h-[344px] object-cover relative transition-all duration-100">
            <Image
              src={product?.extraImages[0]}
              alt={product?.name}
              style={{ objectFit: "cover" }}
              width="100"
              height="100"
              className="product-item-img transition-all duration-100"
              priority
              unoptimized
            />
            <Image
              src={product?.extraImages[1]}
              alt={product?.name}
              style={{ objectFit: "cover" }}
              width="100"
              height="100"
              className="product-item-img-hover absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-100"
              priority
              unoptimized
            />
          </div>
        </Link>
        {product?.isFavorite && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            Featured
          </span>
        )}
      </figure>
      <Link href={`/products/${product?.slug}`}>
        <h3 className="mt-3 text-center font-medium">{product?.name}</h3>
      </Link>
      <p className="mt-2 text-center font-gilda text-lg">
        {formatCurrency(product?.price)}
      </p>
      {/* <div className="flex gap-2 justify-center mt-2">
        {product?.isWeddingInspiration && (
          <span className="text-xs text-gray-600">Wedding</span>
        )}
        {product?.isAgbadaWeddingInspiration && (
          <span className="text-xs text-gray-600">Agbada</span>
        )}
        {product?.isJacketWeddingInspiration && (
          <span className="text-xs text-gray-600">Jacket</span>
        )}
      </div> */}
    </div>
  );
};

export default ProductItem;
