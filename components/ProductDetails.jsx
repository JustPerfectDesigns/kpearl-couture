// // ProductDetails.jsx
"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "react-hot-toast";
import { formatCurrency } from "@/utils/formatCurrency";
import Comments from "./Comments";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import SimilarProducts from "./SimilarProducts";
import MeasurementDiagram from "../public/images/measurement-diagram.webp";
import { getSimilarProductsByCategory } from "@/sanity/product-utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ScrollArea } from "./ui/scroll-area";
import useCartStore from "@/cartStore";

function ProductDetails({ product }) {
  const [selectedImage, setSelectedImage] = useState(product?.extraImages[0]);
  const [sizeValues, setSizeValues] = useState({});
  const [extraDescription, setExtraDescription] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (product?.category) {
      getSimilarProductsByCategory(product.category, product._id)
        .then((products) => setRelatedProducts(products))
        .catch((error) =>
          console.error("Error fetching related products:", error)
        );
    }
  }, [product]);

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
    });
    toast.success("Added to cart");
  };

  if (!product) return <div>Product not found</div>;

  const catLink = product.category ? product.category.toLowerCase() : "";

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className="mt-20">
      <div className="gap-14 lg:flex lg:flex-row-reverse">
        <div className="gap-2 md:flex md:w-full md:flex-1">
          <div className="w-full h-[428px] md:h-[765px] lg:h-[617.141px] lg:w-[464px] object-cover">
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
            {product.extraImages.map((image) => (
              <div
                key={image}
                className={`h-[70px] w-[62px] md:h-[125px] object-cover md:w-[100px] ${selectedImage === image ? "border-4 border-black" : ""}`}
                onClick={() => setSelectedImage(image)}
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
            ))}
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl">{product.name}</h2>
          <span className="mt-4 block text-2xl font-medium">
            {formatCurrency(product.price)}
          </span>

          <form action="">
            <AlertDialog>
              <AlertDialogTrigger className="mt-6">
                <div className="border h-10 flex justify-center items-center p-5">
                  Provide your measurements
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent className="!h-[85%] md:!h-auto !max-w-[85%] lg:!max-w-[65%]">
                <ScrollArea className="h-[100%] md:h-auto">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="mb-2">
                      Please, fill in your measurements
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="mt-6 flex flex-wrap gap-6 text-gray-500">
                        {product?.sizes?.map((size) => (
                          <div
                            key={size.type}
                            className="flex items-center gap-3 border-b-[1.5px] border-[#B0B0B0]"
                          >
                            <span>{size.type}</span>
                            <div className="h-[35px] w-[1px] bg-[#B0B0B0]"></div>
                            <select
                              value={sizeValues[size.type] || size.value}
                              onChange={(e) =>
                                handleSizeChange(size.type, e.target.value)
                              }
                              className="size-select-input w-[60px] border-none outline-none text-slate-900"
                            >
                              {Array.from({ length: 100 }, (_, i) => (
                                <option key={i + 1} value={i + 1}>
                                  {i + 1}
                                </option>
                              ))}
                            </select>
                          </div>
                        ))}
                      </div>
                      <AlertDialogFooter className="mt-6">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </ScrollArea>
              </AlertDialogContent>
            </AlertDialog>

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
              <PortableText value={product.description} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mb-2 md:mb-0">
            <AccordionTrigger>Measurement diagram</AccordionTrigger>
            <AccordionContent>
              <Image
                src={MeasurementDiagram}
                alt="Measurement diagram"
                className="!my-0"
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="mb-2 md:mb-0">
            <AccordionTrigger>Leave a review</AccordionTrigger>
            <AccordionContent>
              <Comments productId={product._id} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="mb-2 md:mb-0">
            <AccordionTrigger>Return policy</AccordionTrigger>
            <AccordionContent>
              <p className="text-[#575757]">
                <strong>Shipping Policy:</strong> Shipping times and costs will
                vary depending on your location and the shipping method chosen.{" "}
                <br />
                <br /> <strong>Delivery:</strong> We are not responsible for
                delays caused by the carrier. <br />
                <br /> <strong>Return Policy:</strong> Returns and exchanges are
                accepted within 15 days of purchase.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-16 md:mt-16 lg:mt-28">
        <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">
          You may also like
        </h2>
        <div className="mt-8 md:mt-10 lg:mt-14">
          <SimilarProducts products={relatedProducts} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
