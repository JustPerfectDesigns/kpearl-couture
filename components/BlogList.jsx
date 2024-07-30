import BlogItem from "./BlogItem";

const BlogList = ({ blogs, className }) => {
  return (
    <div
      className={`product-list w-full grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-9, ${className}`}
    >
      {blogs.map((blog) => (
        <BlogItem key={blog._id} blog={blog} />
      ))}
    </div>
  );
};
export default BlogList;
