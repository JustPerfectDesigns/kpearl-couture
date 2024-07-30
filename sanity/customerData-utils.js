// customerData-utils.js

import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "kpearl-couture",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getCustomerDataBySlug(slug) {
  return client.fetch(
    groq`*[_type == "customer" && slug.current == $slug][0]{
        _id,
        createdAt,
        name,
        slug,
        email,
        phone,
        chest,
        back,
        body,
        tummy,
        sleeve,
        roundSleeve,
        topLength,
        neck,
        cap,
        "slug": slug.current,
      }`,
    { slug }
  );
}

export async function getCustomerData() {
  return client.fetch(
    groq`*[_type == "customer"]{
         _id,
        createdAt,
        name,
        slug,
        email,
        phone,
        chest,
        back,
        body,
        tummy,
        sleeve,
        roundSleeve,
        topLength,
        neck,
        cap,
        "slug": slug.current,
      }`
  );
}
