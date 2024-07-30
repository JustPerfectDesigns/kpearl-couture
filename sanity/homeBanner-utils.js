import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getHomeBanner() {
  const banners = await client.fetch(
    groq`*[_type == "homeBanner"]{
        _id,
        name,
        "bigImage": bigImage.asset->url,
        heading,
        description,
        button
      }`
  );

  // Assuming there should be only one banner, return the first one
  return banners[0];
}
