import { getHomeBanner } from "@/sanity/homeBanner-utils";
import Image from "next/image";
import Link from "next/link";

const HomeMiddleBanner = async () => {
  const bannerDetails = await getHomeBanner();

  return (
    <div>
      <div className="line-section bg-[#F8F6F7]">
        <div className="items-center justify-center md:flex md:gap-8 lg:gap-16">
          <div className="flex-1 px-7 py-12 md:pl-12">
            <h2 className="text-3xl md:text-4xl lg:text-7xl">
              {bannerDetails.heading}
            </h2>
            <p className="mt-2 max-w-[500px] font-light text-[#0E0506] lg:mt-6">
              {bannerDetails.description}
            </p>
            <div className="mt-6 lg:mt-8">
              <Link
                href={bannerDetails.button}
                className="rounded-none px-10 py-3 bg-gray-900 text-white"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={bannerDetails.bigImage}
              width={100}
              height={100}
              priority
              unoptimized
              alt="image"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeMiddleBanner;
