// blog-utils.js

import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "kpearl-couture",
  apiVersion: "2023-11-21",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true,
});

export async function getBlogBySlug(slug) {
  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
        _id,
        createdAt,
        title,
        author,
        "image": image.asset->url,
        slug,
        description,
        content,
        tag,
        "slug": slug.current,
      }`,
    { slug }
  );
}

export async function getBlog() {
  return client.fetch(
    groq`*[_type == "blog"]{
        _id,
        createdAt,
        title,
        author,
        "image": image.asset->url,
        slug,
        description,
        content,
        tag,
        "slug": slug.current,
      }`
  );
}

export async function getNewestBlog() {
  return client.fetch(
    groq`*[_type == "blog"] | order(createdAt desc)[0...3]{
        _id,
        createdAt,
        title,
        author,
        "image": image.asset->url,
        slug,
        description,
        content,
        tag,
        "slug": slug.current,
      }`
  );
}

export async function getRandomBlogs(excludeSlug) {
  const blogs = await getBlog();
  const filteredBlogs = blogs.filter((blog) => blog.slug !== excludeSlug);

  const randomBlogs = filteredBlogs.sort(() => 0.5 - Math.random()).slice(0, 3);

  return randomBlogs;
}
