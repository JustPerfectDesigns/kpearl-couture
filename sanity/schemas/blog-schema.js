// product-schema.js
const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // Use the "name" field as the source for generating the slug
        maxLength: 200, // Adjust the maximum length as needed
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true, // Allows selecting a hotspot for cropping
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
    },
    {
      name: "content",
      title: "Blog Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tag",
      title: "Tag (Just write Fashion)",
      type: "string",
    },
    {
      name: "author",
      title: "Author (Write your name or the company's name)",
      type: "string",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
      },
      readOnly: true,
    },
  ],
  initialValue: {
    createdAt: new Date().toISOString(),
  },
};

export default blog;
