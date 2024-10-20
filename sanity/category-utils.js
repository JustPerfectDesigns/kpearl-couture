// category-utils.js
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export const revalidate = 0; // Add this to your page component

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"]{
        _id,
        name,
        slug,
        "bigImage": bigImage.asset->url,
        catText,
        catDesc
      }`
  );
}

export async function getCategoryBySlug(slug) {
  return client.fetch(
    groq`*[_type == "category" && slug.current == $slug][0]{
        _id,
        name,
        slug,
        "bigImage": bigImage.asset->url,
        catText,
        catDesc,
        "products": *[_type == "product" && references(^._id)]{
          _id,
          name,
          slug,
          price,
          "extraImages": extraImages[].asset->url
        }
      }`,
    { slug }
  );
}
