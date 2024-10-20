const color = {
  name: "color",
  type: "document",
  title: "Colors (Don't Touch)",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of color",
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

export default color;
