"use client";

import { useState, useEffect } from "react";
import CategoryProductItem from "@/components/CategoryProductItem";
import Image from "next/image";
import FilterComponent from "@/components/FilterComponent";

const CategoryPageClient = ({ category }) => {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    sortBy: "latest",
  });

  useEffect(() => {
    console.log("Category Data:", category);
    console.log("Initial Filters:", filters);
  }, [category]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const filteredProducts = category.products
    .filter((product) => {
      console.log("Filtering Product:", product); // Log product details
      console.log("Price Range:", filters.priceRange); // Log current price range
      return (
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
      );
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "lowToHigh":
          return a.price - b.price;
        case "highToLow":
          return b.price - a.price;
        case "popularity":
          return b.isFavorite - a.isFavorite;
        case "latest":
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  useEffect(() => {
    console.log("Filtered Products:", filteredProducts);
  }, [filteredProducts]);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <section>
      <div className="flex flex-col h-[40vh] items-center justify-center bg-black relative w-full overflow-hidden object-cover">
        <h1 className="flex w-52 items-center justify-center text-center text-2xl text-white md:text-4xl lg:text-7xl z-[1]">
          {category.catText}
        </h1>
        <div className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <Image
            src={category.bigImage}
            alt={category.name}
            width={600}
            height={400}
            unoptimized
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <p className="z-[1]">{category.catDesc}</p>
      </div>

      <div>
        <div className="mb-10 mt-36 flex flex-col-reverse gap-10 md:flex-row">
          <div className="bg-black md:w-[700px] p-4">
            <h2 className="text-white">Filter</h2>
            <FilterComponent onChange={handleFilterChange} />
          </div>

          <div className="products-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <CategoryProductItem key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPageClient;
