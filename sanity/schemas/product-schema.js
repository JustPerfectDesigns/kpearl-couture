// product-schema.js
const product = {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name", // Use the "name" field as the source for generating the slug
        maxLength: 200, // Adjust the maximum length as needed
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "extraImages",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "type",
              title: "Type",
              type: "string",
              options: {
                list: [
                  "Sleeve",
                  "Round Sleeve",
                  "Agbada Length",
                  "Agbada Cap",
                  "Danshiki Length",
                  "Danshiki Sleeve",
                  "Kembe Length",
                  "Agbada Sleeve",
                  "Trouser Length",
                  "Trouser Waist",
                  "Trouser Calf",
                  "Trouser Knee",
                  "Trouser Hip",
                  "Trouser Bottom",
                  "Trouser Ankle",
                  "Trouser Crotch",
                  "Back",
                  "Body",
                  "Chest",
                  "Top Length",
                  "Neck",
                  "Hip",
                  "Armhole",
                ],
              },
            },
            {
              name: "value",
              title: "Value",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "additionalInfo",
      title: "Additional Information",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "isFavorite",
      title: "Favorite Product",
      type: "boolean",
    },
    {
      name: "category",
      title: "Product Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subCategory",
      title: "Sub Category",
      type: "reference",
      to: [{ type: "subCategory" }],
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

export default product;
