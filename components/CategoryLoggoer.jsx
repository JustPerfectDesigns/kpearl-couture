// components/CategoryLogger.jsx
"use client"; // Ensure this is a client component

// I only used this to log the data of the category when I wasn't getting the image

import { useEffect } from "react";

const CategoryLogger = ({ category }) => {
  useEffect(() => {
    console.log("Category Data:", category);
  }, [category]);

  return null; // This component does not render anything
};

export default CategoryLogger;
