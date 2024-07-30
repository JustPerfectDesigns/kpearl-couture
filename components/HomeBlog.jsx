import BlogList from "./BlogList";

import { getNewestBlog } from "@/sanity/blog-utils";

export default async function HomeBlog() {
  const newestBlog = await getNewestBlog();
  // console.log(newestBlog);
  return (
    <section className="section">
      <div className="mb-10">
        <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">
          Our Journals
        </h2>
        <p className="mx-auto mt-2 text-center font-light text-[#0E0506] md:mt-4 md:w-[500px]">
          Catch up on the latest information about fashion, lifestyles, and new
          designs
        </p>
      </div>
      <BlogList blogs={newestBlog} className={"md:grid-cols-2"} />

      {/* <div className="product-list grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-6 lg:gap-y-9">
        {newestBlog.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </div> */}
    </section>
  );
}
