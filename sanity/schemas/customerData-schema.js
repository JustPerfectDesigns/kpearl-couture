const customerData = {
  name: "customer",
  title: "Customers Data",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Customer's Name",
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
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "chest",
      title: "Chest Measurement",
      type: "string",
    },
    {
      name: "back",
      title: "Back Measurement",
      type: "string",
    },
    {
      name: "body",
      title: "Body Measurement",
      type: "string",
    },
    {
      name: "tummy",
      title: "Tummy Measurement",
      type: "string",
    },
    {
      name: "sleeve",
      title: "Sleeve Measurement",
      type: "string",
    },
    {
      name: "roundSleeve",
      title: "Round Sleeve Measurement",
      type: "string",
    },
    {
      name: "topLength",
      title: "Top Length Measurement",
      type: "string",
    },
    {
      name: "neck",
      title: "Neck Measurement",
      type: "string",
    },
    {
      name: "cap",
      title: "Cap Measurement",
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

export default customerData;
