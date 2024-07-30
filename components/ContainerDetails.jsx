import React from "react";
import c1 from "../public/images/SingleBlog.png";
import Image from "next/image";
import { Button } from "./ui/button";

const ContainerDetails = ({ title, description }) => {
  return (
    <div className="lg:container">
      <div className="ml-5 mr-5 -mt-[50%] md:-mt-[15%] lg:-mt-[10%] bg-slate-50 py-12 md:py-20 lg:py-32 px-5 md:px-10 md:flex md:justify-between md:items-start md:gap-12 lg:gap-20">
        <div className="h-[220px] lg:h-auto overflow-hidden lg:flex-1">
          <Image
            width={100}
            height={100}
            src={c1}
            alt="container"
            className="w-full -mt-14 md:-mt-6"
            // loading="lazy"
            priority
            unoptimized
          />
        </div>

        <div className="mt-8 md:mt-0 lg:flex-1">
          <h3 className="text-2xl lg:text-4xl lg:font-bold font-semibold text-[#14213F]">
            {title}
          </h3>
          <p className="text-[#4F4F4F] mt-2 lg:text-lg">{description}</p>
          <Button className="bg-orange-600 text-white font-semibold mt-6">
            Purchase Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContainerDetails;
