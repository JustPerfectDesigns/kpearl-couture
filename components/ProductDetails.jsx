// ProductDetails.jsx
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import useCartStore from "@/cartStore";
import { toast } from "react-hot-toast";
import { formatCurrency } from "@/utils/formatCurrency";
import Comments from "./Comments";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(product?.extraImages[0]);
  // const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  const [sizeValues, setSizeValues] = useState({});
  const [extraDescription, setExtraDescription] = useState("");

  const handleSizeChange = (type, value) => {
    setSizeValues((prevSizeValues) => ({ ...prevSizeValues, [type]: value }));
  };

  const addToCart = useCartStore((state) => state.addToCart);
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: qty,
      sizes: sizeValues,
      additionalInfo: extraDescription,
      // color: selectedColor,
    });
    toast.success("Added to cart");
  };

  if (!product) return <div>Product not found</div>;

  // const catLink = toLowerCase(product.category);
  const catLink = product.category ? product.category.toLowerCase() : "";

  // console.log("Product Data: ", product); // Log product data

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className="mt-20">
      <div className="gap-14 lg:flex lg:flex-row-reverse">
        <div className="gap-2 md:flex md:w-full md:flex-1">
          <div className="w-full h-[428px] md:h-[765px] lg:h-auto object-cover">
            <Image
              src={selectedImage}
              alt={product.name}
              width={100}
              height={100}
              unoptimized
              priority
              className="single__product-image"
            />
          </div>
          <div className="mt-4 flex h-auto flex-wrap items-center gap-2 md:mt-0 md:flex-col md:flex-nowrap">
            {product.extraImages.map((image) => {
              return (
                <div
                  className={`h-[70px] w-[62px] md:h-[125px] object-cover md:w-[100px] ${selectedImage == image ? "border-4 border-black" : ""}`}
                  onClick={() => {
                    setSelectedImage(image);
                  }}
                >
                  <Image
                    src={image}
                    alt="product image"
                    width={100}
                    height={100}
                    unoptimized
                    className="single__product-image"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex-1">
          <p className="text-muted-foreground/60 text-xs mb-3">
            Category /{" "}
            <Link
              href={`/category/${catLink}`}
              className="text-muted-foreground"
            >
              {product.category}
            </Link>
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl">{product.name} </h2>
          <span className="mt-4 block text-2xl font-medium">
            {formatCurrency(product.price)}
          </span>

          <form action="">
            {/* <div className="flex mt-6 space-x-3">
              {product?.colors?.map((color) => {
                switch (color) {
                  case "Grey":
                    return (
                      <div
                        onClick={() => {
                          setSelectedColor(color);
                        }}
                        key={color}
                        className={`${color == selectedColor ? "border-4 border-[#d7b925]" : ""} w-8 h-8 rounded-full bg-gray-500 cursor-pointer`}
                      ></div>
                    );
                  case "Black":
                    return (
                      <div
                        onClick={() => {
                          setSelectedColor(color);
                        }}
                        key={color}
                        className={`${color == selectedColor ? "border-4 border-[#d7b925]" : ""} w-8 h-8 rounded-full bg-gray-800 cursor-pointer`}
                      ></div>
                    );
                  case "Blue":
                    return (
                      <div
                        onClick={() => {
                          setSelectedColor(color);
                        }}
                        key={color}
                        className={`${color == selectedColor ? "border-4 border-[#d7b925]" : ""} w-8 h-8 rounded-full bg-blue-800 cursor-pointer`}
                      ></div>
                    );
                  default:
                    return (
                      <div
                        onClick={() => {
                          setSelectedColor(color);
                        }}
                        key={color}
                        className={`${color == selectedColor ? "border-4 border-[#d7b925]" : ""} w-8 h-8 rounded-full bg-gray-300 cursor-pointer`}
                      ></div>
                    );
                }
              })}
            </div> */}

            <div className="mt-6 flex flex-wrap gap-6 text-gray-500">
              {product?.sizes?.map((size) => (
                <div
                  key={size.type}
                  className="flex items-center gap-3 border-b-[1.5px] border-[#B0B0B0]"
                >
                  <span className="">{size.type}</span>
                  <div className="h-[35px] w-[1px] bg-[#B0B0B0]"></div>
                  <input
                    type="number"
                    value={sizeValues[size.type] || size.value}
                    placeholder="0"
                    onChange={(e) => {
                      e.preventDefault();
                      handleSizeChange(size.type, e.target.value);
                    }}
                    className="size-number-input w-[40px] border-none outline-none"
                    onKeyDown={handleKeyDown}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <label htmlFor="extraDescription">
                Additional information (optional)
              </label>
              <textarea
                id="extraDescription"
                value={extraDescription}
                onChange={(e) => setExtraDescription(e.target.value)}
                placeholder="write any other information you need to get to us..."
                className="mt-2 w-full border bg-[#F9F9F9] px-4 py-2 text-[#000] outline-none"
                onKeyDown={handleKeyDown}
                rows={5}
              />
            </div>
            <div className="mt-14 flex gap-4 w-full">
              <div className="w-full">
                <Button
                  onClick={handleAddToCart}
                  className="w-full rounded-none"
                  type="button"
                >
                  Add to Bag
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10 md:mt-16 lg:mt-20">
        <Accordion
          type="single"
          collapsible
          className="w-full gap-x-14 gap-y-3 md:grid md:grid-cols-2"
        >
          <AccordionItem value="item-1" className="mb-2 md:mb-0">
            <AccordionTrigger>Product overview</AccordionTrigger>
            <AccordionContent className="text-[#575757] prose prose-[#575757]">
              {/* {product.description} */}
              <PortableText value={product.description} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mb-2 md:mb-0">
            <AccordionTrigger>
              Delivery, return & exchange policy
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="mb-2 md:mb-0">
            <AccordionTrigger>Customer Reviews</AccordionTrigger>
            <AccordionContent>
              <Comments product={product} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>{/* <SimilarProducts products={similarProducts} /> */}</div>
    </div>
  );
}

export default ProductDetails;
