// category-schema.js
const homeHeader = {
  name: "homeHeader",
  type: "document",
  title: "Home Slider Images",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Slide Name (example: Slide 1)",
    },
    {
      name: "bigImage",
      type: "image",
      title: "Home Banner Image",
    },
    {
      name: "heading",
      type: "string",
      title: "Main Heading",
    },
    {
      name: "description",
      type: "text",
      title: "Main Description",
    },
    {
      name: "button",
      type: "string",
      title: "Button and Link to Categories",
    },
  ],
};

export default homeHeader;
