import Testimonials from "@/components/Testimonials";
import Image from "next/image";

import About1 from "../../public/images/about1.png";
import About2 from "../../public/images/about2.png";
import About3 from "../../public/images/about3.png";
import About4 from "../../public/images/about4.png";

const AboutPage = () => {
  return (
    <section className="section flex justify-center items-center flex-col">
      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">About Us</h2>
      <p className="text-center text-gray-500 max-w-[680px] mt-2 mx-auto">
        KpearlCouture is a premier fashion house that epitomizes elegance,
        sophistication, and timeless style. Founded on the principles of
        creativity and craftsmanship, we blend tradition with innovation to
        create exquisite couture pieces that transcend trends and make a lasting
        statement.
      </p>

      <div className="w-full h-[209px] md:h-[438px] lg:h-[729px] mt-8 overflow-hidden object-cover">
        <Image
          src={About1}
          alt="about image"
          width={100}
          height={100}
          unoptimized
          priority
          className="w-full object-cover"
        />
      </div>

      <div className="section">
        <h2 className="text-center text-2xl md:text-4xl lg:text-6xl">
          Our Vision
        </h2>
        <p className="text-center text-gray-500 max-w-[680px] mt-2 mx-auto">
          At KpearlCouture, our vision is to redefine luxury fashion by
          celebrating individuality and empowering self-expression. We aim to be
          the epitome of sartorial excellence, setting new standards of
          creativity and craftsmanship in the fashion industry <br />
          <br />
          KpearlCouture offers a wide range of couture and ready-to-wear
          collections for discerning men and women who appreciate the finest in
          fashion. From stunning evening gowns and tailored suits to luxurious
          accessories and bridal wear, each KpearlCouture piece is designed to
          elevate the wearer's style and make a lasting impressions
        </p>
      </div>

      <div className="section lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-8 overflow-hidden object-cover">
        <div className="mt-5 md:mt-6 lg:mt-0 w-full lg:row-span-2 overflow-hidden object-cover">
          <Image
            src={About2}
            alt="about image"
            width={100}
            height={100}
            unoptimized
            priority
            className="w-full object-cover"
          />
        </div>

        <div className="mt-5 md:mt-6 lg:mt-0 w-full lg:col-span-1 overflow-hidden object-cover">
          <Image
            src={About3}
            alt="about image"
            width={100}
            height={100}
            unoptimized
            priority
            className="w-full object-cover"
          />
        </div>

        <div className="mt-5 md:mt-6 lg:mt-0 w-full lg:col-span-1 overflow-hidden object-cover">
          <Image
            src={About4}
            alt="about image"
            width={100}
            height={100}
            unoptimized
            priority
            className="w-full object-cover"
          />
        </div>
      </div>

      <Testimonials />
    </section>
  );
};
export default AboutPage;
