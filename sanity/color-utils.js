import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export const revalidate = 0; // Add this to your page component

export async function getColorByCategory(categorySlug) {
  return client.fetch(
    groq`*[_type == "color" && references(*[_type=="category" && slug.current == $categorySlug]._id)]{
      _id,
      name,
      "slug": slug.current,
    }`,
    { categorySlug }
  );
}
