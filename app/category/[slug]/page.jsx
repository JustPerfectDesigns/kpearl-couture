// app/category/[slug]/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { getCategoryBySlug } from "@/sanity/category-utils";
import CategoryProductItem from "@/components/CategoryProductItem";
import Image from "next/image";
import ReactSlider from "react-slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { getSubCategoriesByCategory } from "@/sanity/subCategory-utils";
import { getProductsByCategorySlug } from "@/sanity/product-utils";
import { urlFor } from "@/app/lib/sanity";
import { useSearchParams } from "next/navigation";

const CategoryDetailsPage = ({ params }) => {
  const searchParams = useSearchParams();
  const initialSubCategory = searchParams.get("subcategory") || null;

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [sortBy, setSortBy] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] =
    useState(initialSubCategory);

  useEffect(() => {
    const fetchSubCategories = async () => {
      const { slug } = params;
      const subCategoriesData = await getSubCategoriesByCategory(slug);
      setSubCategories(subCategoriesData);
    };
    fetchSubCategories();
  }, [params]);

  const applyFilters = () => {
    const filteredProducts = data.filter((product) => {
      const price = parseFloat(product.price);
      const isPriceInRange = price >= priceRange[0] && price <= priceRange[1];
      const matchesSearchQuery =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase());

      const subCategorySlug = product.subCategory?.slug;
      const isSubCategoryMatch =
        !selectedSubCategory ||
        (subCategorySlug &&
          subCategorySlug.trim().toLowerCase() ===
            selectedSubCategory.trim().toLowerCase());

      return isPriceInRange && matchesSearchQuery && isSubCategoryMatch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (sortBy === "oldest") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else if (sortBy === "highest") {
        return parseFloat(b.price) - parseFloat(a.price);
      } else if (sortBy === "lowest") {
        return parseFloat(a.price) - parseFloat(b.price);
      }
      return 0;
    });

    setFilteredData(sortedProducts);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { slug } = params;
      const categoryData = await getProductsByCategorySlug(slug);
      setCategory(categoryData);
      setData(categoryData.products);
      setFilteredData(categoryData.products);
      setLoading(false);
    };
    fetchData();
  }, [params]);

  useEffect(() => {
    applyFilters();
  }, [priceRange, sortBy, searchQuery, selectedSubCategory, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  const resetFilters = () => {
    setPriceRange([0, 2000000]);
    setSortBy("latest");
    setSearchQuery("");
    setFilteredData(data);
    setSelectedSubCategory(null);
  };

  return (
    <section>
      <div className="flex flex-col h-[40vh] items-center justify-center bg-black relative w-full overflow-hidden object-cover">
        <h1 className="flex w-52 items-center justify-center text-center text-2xl text-white md:text-4xl lg:text-7xl z-[1]">
          {category.catText}
        </h1>
        <div className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <Image
            src={urlFor(category.bigImage).url()}
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
        <div className="mb-10 w-full mt-28 flex flex-col-reverse gap-10 lg:gap-16 md:flex-row">
          <div className="bg-white md:w-[25vw]">
            <div className="w-full">
              <h1 className="text-2xl font-semibold font-gilda mb-4">
                Filters
              </h1>
              <Separator className="mb-8 mt-4" />
              <div className="space-y-4">
                <div className="space-y-2  pb-8">
                  <p className="font-medium">Search a product</p>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="mt-2 w-full border bg-[#F9F9F9] px-4 py-2 text-[#000] outline-none"
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4 py-8">
                  <p className="font-medium">Price Range</p>
                  <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    min={0}
                    max={2000000}
                    value={priceRange}
                    pearling
                    minDistance={10000}
                    onChange={(value) => setPriceRange(value)}
                  />
                  <div className="flex justify-between text-[#0E0506]">
                    <span className="text-sm font-medium">
                      Min: ₦{priceRange[0].toLocaleString()}
                    </span>
                    <span className="text-sm font-medium">
                      Max: ₦{priceRange[1].toLocaleString()}
                    </span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2  pb-8">
                  <p className="font-medium">Sub Category</p>
                  <Select
                    value={selectedSubCategory}
                    onValueChange={(value) => setSelectedSubCategory(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a sub category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {subCategories.map((subCategory) => (
                          <SelectItem
                            key={subCategory._id}
                            value={subCategory.slug.current}
                          >
                            {subCategory.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-8">
                  <div className="relative">
                    <Select
                      value={sortBy}
                      onValueChange={(value) => setSortBy(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a sort option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Recent & Oldest</SelectLabel>
                          <SelectItem value="latest">Sort by Latest</SelectItem>
                          <SelectItem value="oldest">Sort by Oldest</SelectItem>
                          <SelectLabel>Price Range</SelectLabel>
                          <SelectItem value="highest">
                            Sort by Most Expensive
                          </SelectItem>
                          <SelectItem value="lowest">
                            Sort by Lowest Price
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <Button onClick={resetFilters} className="mt-4">
                Reset Filters
              </Button>
            </div>
          </div>
          <div className="w-full md:w-[75vw]">
            <div className="grid gap-x-4 gap-y-8 grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
              {filteredData.map((product) => (
                <CategoryProductItem key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetailsPage;
