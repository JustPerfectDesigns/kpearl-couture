import BlogList from "@/components/BlogList";

import { getBlog } from "@/sanity/blog-utils";

const Blog = async () => {
  const blog = await getBlog();

  return (
    <section>
      <div className="flex h-[40vh] flex-col items-center justify-center bg-black px-6 md:px-0">
        <h2 className="flex items-center justify-center text-center text-3xl text-white md:w-[750px] md:text-4xl lg:text-7xl">
          Welcome to Our Blog
        </h2>
        <p className="mt-4 text-center font-light text-white md:w-[600px]">
          Hi there! Get ready for the best tips, tricks, and ideas about
          fashion. We provide updates on everything fashion, from the latest
          styles to tips on how to dress for various occasions, and so much
          more.
        </p>
      </div>
      <div>
        <div className="mb-10 mt-16">
          <BlogList
            blogs={blog}
            className={"sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}
          />
        </div>
      </div>
    </section>
  );
};
export default Blog;
