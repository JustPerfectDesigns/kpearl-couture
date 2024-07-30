"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { getHomeHeader } from "@/sanity/homeHeader-utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const CarouselSlides = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 4000 }),
  ]);

  const [homeHeaders, setHomeHeaders] = useState([]);

  useEffect(() => {
    getHomeHeader().then((data) => setHomeHeaders(data));
  }, []);

  return (
    <div className="h-screen">
      <div className="h-4/6 sm:h-4/5">
        <div className="embla h-full border" ref={emblaRef}>
          <div className="embla__container h-full">
            {homeHeaders.map((header) => (
              <div
                key={header?._id}
                className="embla__slide h-full bg-teal-600 text-white"
              >
                <Image
                  src={header?.bigImage}
                  alt="Hero Image"
                  width={100}
                  height={100}
                  unoptimized
                  priority
                  className="z-0 absolute top-0 left-0 w-full object-cover"
                />
                <div className="z-20 absolute mt-24 md:mt-36 mx-5 md:max-w-[30rem] lg:max-w-[35rem] md:ml-14">
                  <h1 className="text-white font-medium text-[2.6rem] md:text-[4.7rem] lg:text-[5rem] leading-9 md:leading-[4.2rem] lg:leading-[4.7rem]">
                    {header?.heading}
                  </h1>
                  <p className="text-slate-50 font-extralight mt-2">
                    {header?.description}
                  </p>
                  <Link href={header?.button} className="mt-4 md:mt-6 block">
                    <Button className="bg-white text-black rounded-none hover:text-black hover:bg-white">
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
            {/* <div className="embla__slide h-full bg-black text-white">
              Slide 3
            </div>{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselSlides;
