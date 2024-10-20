// product-utils.js

import { createClient, groq } from "next-sanity";
import { getCategoryBySlug } from "./category-utils";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "kpearl-couture",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: false,
});

export const revalidate = 0; // Add this to your page component

export async function getProductBySlug(slug) {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug]{
        _id,
        createdAt,
        name,
        slug,
        description,
        additionalInfo,
        price,
        sizes,
        "extraImages": extraImages[].asset->url,
        "category": category[0]->name,
        "slug": slug.current,
      }`,
    { slug }
  );
}

export async function getProducts() {
  return client.fetch(
    groq`*[_type == "product"]{
        _id,
        createdAt,
        name,
        slug,
        description,
        additionalInfo,
        price,
        sizes,
        "slug": slug.current,
        "extraImages": extraImages[].asset->url,
        "category": category[0]->name,
      }`
  );
}

export async function getNewestProducts() {
  const products = await client.fetch(
    groq`*[_type == "product"] | order(createdAt desc){
      _id,
      createdAt,
      name,
      slug,
      description,
      additionalInfo,
      price,
      sizes,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      "category": category[0]->name,
    }[0...8]`
  );

  return products;
}

export async function getFavoriteProducts() {
  const products = await client.fetch(
    groq`*[_type == "product" && isFavorite == true] | order(_createdAt desc){
      _id,
      createdAt,
      name,
      slug,
      description,
      additionalInfo,
      price,
      sizes,
      isFavorite,
      isWeddingInspiration,
      isAgbadaWeddingInspiration,
      isJacketWeddingInspiration,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      "category": category[0]->name,
    }`
  );

  // Remove duplicates by `_id`
  const uniqueProducts = Array.from(
    new Set(products.map((product) => product._id))
  ).map((id) => products.find((product) => product._id === id));

  // Limit the results to the first 4 unique products
  return uniqueProducts.slice(0, 4);
}

export async function getWeddingInspirationProducts() {
  const products = await client.fetch(
    groq`*[_type == "product" && isWeddingInspiration == true] | order(_createdAt desc){
      _id,
      createdAt,
      name,
      slug,
      description,
      additionalInfo,
      price,
      sizes,
      isFavorite,
      isWeddingInspiration,
      isAgbadaWeddingInspiration,
      isJacketWeddingInspiration,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      "category": category[0]->name,
    }`
  );

  const uniqueProducts = Array.from(
    new Set(products.map((product) => product._id))
  ).map((id) => products.find((product) => product._id === id));

  return uniqueProducts;
}

export async function getAgbadaWeddingInspirationProducts() {
  const products = await client.fetch(
    groq`*[_type == "product" && isAgbadaWeddingInspiration == true] | order(_createdAt desc){
      _id,
      createdAt,
      name,
      slug,
      description,
      additionalInfo,
      price,
      sizes,
      isFavorite,
      isWeddingInspiration,
      isAgbadaWeddingInspiration,
      isJacketWeddingInspiration,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      "category": category[0]->name,
    }`
  );

  const uniqueProducts = Array.from(
    new Set(products.map((product) => product._id))
  ).map((id) => products.find((product) => product._id === id));

  return uniqueProducts;
}

export async function getJacketWeddingInspirationProducts() {
  const products = await client.fetch(
    groq`*[_type == "product" && isJacketWeddingInspiration == true] | order(_createdAt desc){
      _id,
      createdAt,
      name,
      slug,
      description,
      additionalInfo,
      price,
      sizes,
      isFavorite,
      isWeddingInspiration,
      isAgbadaWeddingInspiration,
      isJacketWeddingInspiration,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      "category": category[0]->name,
    }`
  );

  const uniqueProducts = Array.from(
    new Set(products.map((product) => product._id))
  ).map((id) => products.find((product) => product._id === id));

  return uniqueProducts;
}

export async function getProductsBySubCategory(subCategorySlug) {
  return client.fetch(
    groq`*[_type == "product" && subCategory->slug.current == $subCategorySlug]{
      _id,
      createdAt,
      name,
      slug,
      description,
      additionalInfo,
      price,
      sizes,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      "category": category[0]->name,
      "subCategory": subCategory->name,
    }`,
    { subCategorySlug }
  );
}

export async function getProductsByColor(colorSlug) {
  return client.fetch(
    groq`*[_type == "product" && color->slug.current == $colorSlug]{
      _id,
      createdAt,
      name,
      slug,
      description,
      additionalInfo,
      price,
      sizes,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      "category": category[0]->name,
      "color": color->name,
    }`,
    { colorSlug }
  );
}

export async function getProductsByCategorySlug(slug) {
  const query = `
    *[_type == "category" && slug.current == $slug]{
      ...,
      "products": *[_type == "product" && references(^._id)]{
        ...,
        "subCategory": subCategory->{
          _id,
          name,
          "slug": slug.current
        },
        "color": color->{
          _id,
          name,
          "slug": slug.current
        }
      }
    }[0]
  `;
  const params = { slug };
  const data = await client.fetch(query, params);
  return data;
}

export async function getSimilarProductsByCategory(
  categoryName,
  currentProductId
) {
  return client.fetch(
    groq`*[_type == "product" && category[0]->name == $categoryName && _id != $currentProductId] | order(_createdAt desc)[0...4]{
      _id,
      createdAt,
      name,
      slug,
      description,
      additionalInfo,
      price,
      sizes,
      "slug": slug.current,
      "extraImages": extraImages[].asset->url,
      "category": category[0]->name,
    }`,
    { categoryName, currentProductId }
  );
}
