// app/category/page.jsx
import { getCategories } from "@/sanity/category-utils";
import Link from "next/link";
import Image from "next/image";

const CategoryPage = async () => {
  const categories = await getCategories();

  return (
    <div>
      <h1>Categories</h1>
      <div className="categories-list">
        {categories.map((category) => (
          <div key={category._id}>
            {category.slug?.current ? (
              <Link href={`/category/${category.slug.current}`}>
                {category.bigImage && (
                  <Image
                    src={category.bigImage}
                    alt={category.name}
                    width={300}
                    height={200}
                  />
                )}
                <h2>{category.name}</h2>
                <p>{category.catText}</p>
              </Link>
            ) : (
              <div>
                <h2>{category.name}</h2>
                <p>{category.catText}</p>
                <p>Slug not available</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
