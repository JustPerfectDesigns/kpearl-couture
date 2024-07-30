// category-schema.js
const category = {
  name: "category",
  type: "document",
  title: "Categories",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of category",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "bigImage",
      type: "image",
      title: "Category Banner",
    },
    {
      name: "catText",
      type: "string",
      title: "Category Title",
    },
    {
      name: "catDesc",
      type: "text",
      title: "Category Description",
    },
    {
      name: "subCategories",
      type: "array",
      of: [{ type: "reference", to: { type: "subCategory" } }],
      title: "Sub Categories",
    },
  ],
};

export default category;
