import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-item w-full">
      <Link href={`/blog/${blog?.slug}`}>
        <div className="h-[214px] w-full object-cover overflow-hidden">
          <Image
            src={blog?.image}
            alt={blog?.name}
            width={100}
            height={100}
            priority
            unoptimized
            className="blog-item-img object-cover w-full h-full"
          />
        </div>
        <h3 className="mt-3 font-gilda text-xl font-medium underline hover:no-underline cursor-pointer">
          {blog?.title}
        </h3>
      </Link>
      <p className="mt-4 text-sm text-[#746C6D]">{blog?.description}</p>
      <div className="mt-6 flex items-center gap-3">
        <span className="bg-[#F8F6F7] px-4 py-1 text-sm uppercase tracking-widest text-[#0E0506]">
          {blog?.tag}
        </span>
        <span className="text-sm text-[#B2B2B2]">/</span>
        <span className="text-sm text-[#B2B2B2]">By {blog?.author}</span>
      </div>
    </div>
  );
};
export default BlogItem;
