// import bcrypt from 'bcryptjs'

const data = {
  // users: [
  //   {
  //     name: "John",
  //     email: "admin@example.com",
  //     password: bcrypt.hashSync("123456"),
  //     isAdmin: true,
  //   },
  //   {
  //     name: "Jane",
  //     email: "user@example.com",
  //     password: bcrypt.hashSync("123456"),
  //     isAdmin: false,
  //   },
  // ],
  products: [
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-all-men-of-class-and-calibars",
      price: "240000",
      brand: "Kafltan",
      category: "Men",
      isFeatured: true,
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p5.png",
      clothSizes: [1, 3, 4],
      type: "newest",
    },
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-all-men-of-class-and",
      price: "240000",
      brand: "KPearl",
      category: "Men",
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p6.png",
      clothSizes: [2, 5, 6],
      type: "newest",
    },
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-all-men-of-class",
      price: "240000",
      brand: "Couture",
      category: "Women",
      isFeatured: true,
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p7.png",
      clothSizes: [1, 4, 6],
      type: "newest",
    },
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-all-men-of",
      price: "240000",
      brand: "Oliver",
      category: "Men",
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p8.png",
      clothSizes: [2, 3, 5],
      type: "newest",
    },
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-all-men",
      price: "240000",
      brand: "Suits",
      category: "Women",
      isFeatured: true,
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p9.png",
      clothSizes: [1, 2, 6],
      type: "newest",
    },
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-all",
      price: "240000",
      brand: "Jacket",
      category: "Women",
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p10.png",
      clothSizes: [3, 4, 5],
      type: "newest",
    },
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-al",
      price: "240000",
      brand: "Oliver",
      category: "Men",
      isFeatured: true,
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p11.png",
      clothSizes: [1, 5, 6],
      type: "newest",
    },
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-a",
      price: "240000",
      brand: "KPearl",
      category: "Men",
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p12.png",
      clothSizes: [2, 4, 6],
      type: "newest",
    },
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-all-men-of-class-and-cali",
      price: "240000",
      brand: "Kaftan",
      category: "Women",
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p1.png",
      clothSizes: [2, 4, 5],
      type: "favorite",
    },
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-all-men-of-class-and-c",
      price: "240000",
      brand: "Suit",
      category: "Men",
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p2.png",
      clothSizes: [1, 3, 6],
      type: "favorite",
    },
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-all-men-of-class-and-cal",
      price: "240000",
      brand: "Jacket",
      category: "Men",
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p3.png",
      clothSizes: [2, 5, 6],
      type: "favorite",
    },
    {
      name: "General Events Classic Agbada For All Men Of Class And Calibars",
      slug: "general-events-classic-agbada-for-all-men-of-class-an",
      price: "240000",
      brand: "Oliver",
      category: "Women",
      description:
        "This is just a description ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapient et dolor in elit sed diam nonumy eirmod tempor invid tempor invid",
      image: "/images/p4.png",
      clothSizes: [1, 4, 5],
      type: "favorite",
    },
  ],
  clothSizes: [
    { id: 1, title: "Agbada length" },
    { id: 2, title: "Cap" },
    { id: 3, title: "Agbada sleeve" },
    { id: 4, title: "Danshiki length" },
    { id: 5, title: "Kembe length" },
    { id: 6, title: "Danshiki sleeve" },
  ],
};

export const getFavoriteProducts = (products, count = 4) => {
  return products
    .filter((product) => product.type === "favorite")
    .slice(0, count);
};

export const getNewestProducts = (products, count = 8) => {
  return products
    .filter((product) => product.type === "newest")
    .slice(0, count);
};

export const getSimilarProducts = (products, category, count = 4) => {
  return products
    .filter((product) => product.category === category)
    .slice(0, count);
};

export default data;
