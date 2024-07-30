"use client";
import { getTestimonials } from "@/sanity/testimonial-utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials().then((data) => setTestimonials(data));
  }, []);

  return (
    <section className="section mx-auto max-w-[280px] md:max-w-[650px] lg:max-w-[900px]">
      <div className="mb-10">
        <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">
          Our Testimonials
        </h2>
        <p className="mx-auto mt-2 text-center font-light text-[#0E0506] md:mt-4 md:w-[500px]">
          Hear what our clients and customers have to say about our beautiful
          products
        </p>
      </div>

      <Carousel
        opts={{
          align: "center",
          loop: true,
          //   dragFree: true
        }}
      >
        <CarouselContent className="cursor-grab">
          {testimonials.map((testimony) => (
            <CarouselItem
              key={testimony?._id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex flex-col justify-between gap-6 bg-[#0E0506] p-4">
                <p className="font-medium italic text-white">
                  {testimony?.testimony}
                </p>
                <span className="font-regular text-sm text-white">
                  {testimony?.name}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
export default Testimonials;
