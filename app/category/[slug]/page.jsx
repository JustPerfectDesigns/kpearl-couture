"use client";

import React, { useState, useEffect } from "react";
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
import { getColorByCategory } from "@/sanity/color-utils";
import { getProductsByCategorySlug } from "@/sanity/product-utils";
import { urlFor } from "@/app/lib/sanity";
import { useSearchParams } from "next/navigation";

const CategoryDetailsPage = ({ params }) => {
  const searchParams = useSearchParams();
  const initialSubCategory = searchParams.get("subcategory") || null;
  const initialColor = searchParams.get("color") || null;

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
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(initialColor);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const { slug } = params;
        const subCategoriesData = await getSubCategoriesByCategory(slug);
        setSubCategories(subCategoriesData);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
        setSubCategories([]);
      }
    };
    fetchSubCategories();
  }, [params]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const { slug } = params;
        const colorData = await getColorByCategory(slug);
        const formattedColors = colorData
          .map((color) => ({
            ...color,
            slug: color.slug?.current || color.slug,
          }))
          .filter((color) => color.slug && color.name);
        setColors(formattedColors);
      } catch (error) {
        console.error("Error fetching colors:", error);
        setColors([]);
      }
    };
    fetchColors();
  }, [params]);

  const applyFilters = () => {
    const filteredProducts = data.filter((product) => {
      const price = parseFloat(product.price);
      const isPriceInRange = price >= priceRange[0] && price <= priceRange[1];
      const matchesSearchQuery =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase());

      const subCategorySlug =
        product.subCategory?.slug?.current || product.subCategory?.slug;
      const isSubCategoryMatch =
        !selectedSubCategory ||
        (subCategorySlug &&
          subCategorySlug.trim().toLowerCase() ===
            selectedSubCategory.trim().toLowerCase());

      const productColorSlug =
        product.color?.slug?.current || product.color?.slug;
      const isColorMatch =
        !selectedColor ||
        (productColorSlug &&
          productColorSlug.trim().toLowerCase() ===
            selectedColor.trim().toLowerCase());

      return (
        isPriceInRange &&
        matchesSearchQuery &&
        isSubCategoryMatch &&
        isColorMatch
      );
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
      try {
        const { slug } = params;
        const categoryData = await getProductsByCategorySlug(slug);
        setCategory(categoryData);
        setData(categoryData.products);
        setFilteredData(categoryData.products);
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params]);

  useEffect(() => {
    applyFilters();
  }, [
    priceRange,
    sortBy,
    searchQuery,
    selectedSubCategory,
    selectedColor,
    data,
  ]);

  const resetFilters = () => {
    setPriceRange([0, 2000000]);
    setSortBy("latest");
    setSearchQuery("");
    setSelectedSubCategory(null);
    setSelectedColor(null);
    setFilteredData(data);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
            src={urlFor(category.bigImage).url()}
            alt={category.name}
            width={600}
            height={400}
            unoptimized
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <p className="z-[1] text-white">{category.catDesc}</p>
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
                <div className="space-y-2 pb-8">
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

                <div className="space-y-2 pb-8">
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
                        <SelectItem value={null}>All Sub Categories</SelectItem>
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

                <Separator />

                <div className="space-y-2 pb-8">
                  <p className="font-medium">Color</p>
                  <Select
                    value={selectedColor}
                    onValueChange={(value) => setSelectedColor(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={null}>All Colors</SelectItem>
                        {colors.map((color) => (
                          <SelectItem key={color._id} value={color.slug}>
                            <div className="flex items-center gap-2">
                              {color.colorCode && (
                                <div
                                  className="w-4 h-4 rounded-full"
                                  style={{ backgroundColor: color.colorCode }}
                                />
                              )}
                              {color.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="pt-8">
                  <div className="relative">
                    <Select
                      value={sortBy}
                      onValueChange={(value) => setSortBy(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sort by" />
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
              <Button onClick={resetFilters} className="mt-4 w-full">
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
