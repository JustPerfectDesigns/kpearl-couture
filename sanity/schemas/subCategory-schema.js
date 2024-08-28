const subCategory = {
  name: "subCategory",
  type: "document",
  title: "Sub Categories (Don't Touch)",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of sub category",
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
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};

export default subCategory;
