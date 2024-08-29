// import ProductList from "@/components/ProductList";

// const SimilarProducts = ({ products }) => {
//   return (
//     <section className="mt-36">
//       <div className="mb-10">
//         <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">
//           Similar Products
//         </h2>
//         <p className="mx-auto mt-2 text-center font-light text-[#0E0506] md:mt-4 md:w-[500px]">
//           Shop similar products like the one you’re looking at right now. Feel
//           free to add them to cart as well.
//         </p>
//       </div>
//       <ProductList products={products} />
//     </section>
//   );
// };

// export default SimilarProducts;

import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import ProductList from "./ProductList";

const SimilarProducts = ({ products }) => {
  if (!products.length) return <p>No similar products found.</p>;

  return (
    <div className="">
      <ProductList products={products} />
    </div>
  );
};

export default SimilarProducts;
