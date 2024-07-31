// category-utils.js
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getHomeHeader() {
  return client.fetch(
    groq`*[_type == "homeHeader"]{
        _id,
        name,
        "bigImage": bigImage.asset->url,
        heading,
        description,
        button
      }`
  );
}