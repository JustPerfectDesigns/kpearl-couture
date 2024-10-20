//this page imports all schemas so they can be exported as once file
// import user from "./user-schema";
import product from "./product-schema";
import order from "./order-schema";
import comment from "./comment-schema";
import contact from "./contact-schema";
import category from "./category-schema";
import blog from "./blog-schema";
import customerData from "./customerData-schema";
import testimonial from "./testimonial-schema";
import homeHeader from "./homeHeader-schema";
import homeBanner from "./homeBanner-schema";
import subCategory from "./subCategory-schema";
import color from "./color-schema";

const schemas = [
  // user,
  product,
  order,
  comment,
  category,
  subCategory,
  color,
  blog,
  customerData,
  homeHeader,
  homeBanner,
  contact,
  testimonial,
];

export default schemas;
