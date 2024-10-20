"use client";

import React from "react";
import Image from "next/image";
import ProductItem from "@/components/ProductItem";

const AgbadaWeddingInspiration = ({ weddingProducts }) => {
  return (
    <section>
      <div className="flex flex-col h-[40vh] items-center justify-center bg-black relative w-full overflow-hidden object-cover">
        <div className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <Image
            src="/images/agbada-wedding.png"
            alt="Wedding"
            width={600}
            height={400}
            unoptimized
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-28">
        <div className="product-list grid gap-x-4 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
          {weddingProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgbadaWeddingInspiration;
