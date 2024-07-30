// product-utils.js

import { createClient, groq } from "next-sanity";
import { getCategoryBySlug } from "./category-utils";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "kpearl-couture",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

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
  return client.fetch(
    groq`*[_type == "product"] | order(createdAt desc)[0...8]{
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

export async function getFavoriteProducts() {
  return client.fetch(
    groq`*[_type == "product" && isFavorite == true] | order(createdAt desc)[0...4]{
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

export async function getRelatedProducts(category, currentSlug) {
  return client.fetch(
    groq`*[_type == "product" && category[0]->name == $category && subCategory[0]->name!= null && slug.current!= $currentSlug] | order(__rand) [0...4]{
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
      "subCategory": subCategory[0]->name,
    }`,
    { category, currentSlug }
  );
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
        }
      }
    }[0]
  `;
  const params = { slug };
  const data = await client.fetch(query, params);
  return data;
}
