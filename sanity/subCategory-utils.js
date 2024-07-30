import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "kpearl-couture",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getSubCategoriesByCategory(categorySlug) {
  return client.fetch(
    groq`*[_type == "subCategory" && category->slug.current == $categorySlug]{
        _id,
        name,
        slug,
      }`,
    { categorySlug }
  );
}
