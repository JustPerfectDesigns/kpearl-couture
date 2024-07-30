import HomeBanner from "../public/images/b-image.png";
import HomeBlog from "../components/HomeBlog";
import Testimonials from "@/components/Testimonials";
import { Separator } from "@/components/ui/separator";
import CarouselSlides from "@/components/CarouselSlides";
import { getNewestProducts, getFavoriteProducts } from "@/sanity/product-utils";
import ProductItem from "@/components/ProductItem";
import HomeMiddleBanner from "@/components/HomeMiddleBanner";

export default async function Home() {
  const newestProducts = await getNewestProducts();
  const favoriteProducts = await getFavoriteProducts();

  return (
    <div className="">
      <CarouselSlides />

      <div className="pb-8">
        <div className="mb-10 md:flex md:items-center md:justify-between">
          <h2 className="text-center text-2xl md:w-full md:grow md:text-left md:text-4xl lg:text-6xl">
            Our Favorite
            <br />
            Collections
          </h2>
          <p className="mt-2 text-center font-light text-[#0E0506] md:mt-0 md:w-[650px] md:text-left">
            We have got the best categories of wears you would ever need. Let us
            show you some of our favorites. They might also be your new
            favorites 😉
          </p>
        </div>

        <div
          className={
            "product-list grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12"
          }
        >
          {favoriteProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>

      <Separator className="line-section" />

      <div className="section">
        <div className="mb-10">
          <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">
            Shop New Arrivals
          </h2>
          <p className="mx-auto mt-2 text-center font-light text-[#0E0506] md:mt-4 md:w-[500px]">
            We have got the best categories of wears you would ever need. Let us
            show you some of our favorites.
          </p>
        </div>
        <div
          className={
            "product-list grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12"
          }
        >
          {newestProducts.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>

      <HomeMiddleBanner />

      <HomeBlog />

      <Separator className="line-section" />

      <Testimonials />
    </div>
  );
}
