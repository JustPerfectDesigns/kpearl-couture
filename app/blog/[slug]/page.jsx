import Image from "next/image";
import { getBlogBySlug, getRandomBlogs } from "@/sanity/blog-utils";
import ClientPortableText from "@/components/ClientPortableText";
import BlogList from "@/components/BlogList";

const SingleBlogPage = async ({ params }) => {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);
  const suggestions = await getRandomBlogs(slug);
  // console.log("Blog Content", blog);

  if (!blog) {
    return <div>Category not found</div>;
  }

  // Format the date to show only the date part
  const formattedDate = blog.createdAt.split("T")[0];

  return (
    <section className="mt-28">
      <h1 className="mx-auto text-center font-giliran text-3xl md:w-[650px] md:text-4xl lg:w-[1000px] lg:text-7xl">
        {blog.title}
      </h1>
      <div className="mt-8 h-auto w-full object-cover">
        <Image
          src={blog.image}
          alt={blog.title}
          width={100}
          height={100}
          objectFit="cover"
          className="h-[400px] w-full object-cover md:h-[650px]"
          unoptimized
          priority
        />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-[#1d1d1d]">By {blog.author}</span>
          <span className="text-sm text-[#B2B2B2]">At KPearl Couture</span>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span className="flex bg-[#F8F6F7] px-4 text-sm uppercase tracking-widest text-[#0E0506]">
            Fashion
          </span>
          <span className="text-sm text-[#B2B2B2]">
            Published: {formattedDate}
          </span>
        </div>
      </div>

      <div className="mt-10 text-[#575656] md:mt-20 prose prose-[#575757] mx-auto w-full">
        <ClientPortableText value={blog.content} />
      </div>

      <div className="mt-36">
        <div className="mb-10">
          <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">
            Explore Similar Posts
          </h2>
        </div>
        <div className="mb-10 mt-16">
          <BlogList
            blogs={suggestions}
            className={"sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}
          />
        </div>
      </div>
    </section>
  );
};
export default SingleBlogPage;
