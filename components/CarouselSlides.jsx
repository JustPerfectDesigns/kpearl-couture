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
    <div className="h-[70vh] lg:h-[85vh] mb-20 md:mb-28 lg:mb-36">
      <div className="h-full">
        <div className="embla h-full border" ref={emblaRef}>
          <div className="embla__container h-full">
            {homeHeaders.map((header) => (
              <div
                key={header?._id}
                className="embla__slide h-full bg-black text-white"
              >
                <Image
                  src={header?.bigImage}
                  alt="Hero Image"
                  width={100}
                  height={100}
                  unoptimized
                  priority
                  className="z-0 absolute top-0 left-0 w-full object-cover hidden md:block"
                />
                {/* <Image
                  src={header?.bigImage}
                  alt="Hero Image"
                  width={100}
                  height={100}
                  unoptimized
                  priority
                  className="z-0 absolute top-0 left-0 w-full object-cover md:hidden"
                /> */}
                <div
                  style={{
                    backgroundImage: `url(${header?.bigImage})`,
                    backgroundPosition: "right",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="z-10 absolute top-0 left-0 w-full h-full md:hidden"
                />
                <div className="z-[11] absolute top-0 left-0 w-full h-full bg-gray-950/30 md:hidden"></div>
                <div className="z-20 absolute h-full mx-5 md:max-w-[35rem] lg:max-w-[62%] md:ml-14">
                  <div className="flex flex-col justify-center w-full h-full">
                    <h1 className="text-white font-medium text-[2.4rem] md:text-[4rem] lg:text-[4.5rem] leading-9 md:leading-[4.2rem] lg:leading-[4.7rem]">
                      {header?.heading}
                    </h1>
                    <p className="text-slate-50 font-extralight mt-2 lg:w-[70%]">
                      {header?.description}
                    </p>
                    <Link href={header?.button} className="mt-4 md:mt-6 block">
                      <Button className="bg-white text-black rounded-none hover:text-black hover:bg-white">
                        Shop Now
                      </Button>
                    </Link>
                  </div>
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
