import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="bg-[#F9F9F9] mt-28 pb-10 lg:mt-52 lg:pb-16">
      <footer className="footer section ui__container">
        <div className="footer__container grid lg:flex lg:justify-between lg:items-start">
          <div>
            <Link
              href=""
              className="font-gilda text-2xl md:text-3xl mb-10 block"
            >
              KPearl Couture
            </Link>
            <p className="footer__description text-[0.9rem] text-[#757575]">
              17B, Kunsela Road, Chisco, Ikate <br />
              Elegushi, Lekki, Lagos.
            </p>
            <div className="flex flex-col">
              <Link
                href="tel:+234(0)708-207-5018"
                className="footer__description text-[0.9rem] mt-6 text-[#757575]"
              >
                +234(0)708-207-5018
              </Link>
              <Link
                href="mailto:info@kpearlcouture.ng"
                className="footer__description text-[0.9rem] mt-6 text-[#757575]"
              >
                info@kpearlcouture.ng
              </Link>
            </div>
            <div className="mt-7 flex items-center gap-6 md:gap-5">
              <Link href="#" target="_blank">
                <i class="ri-instagram-line text-xl text-[#565656] hover:text-[#0e0506]"></i>
              </Link>
              <Link href="#" target="_blank">
                <i class="ri-facebook-line text-xl text-[#565656] hover:text-[#0e0506]"></i>
              </Link>
              <Link href="#" target="_blank">
                <i class="ri-twitter-x-line text-xl text-[#565656] hover:text-[#0e0506]"></i>
              </Link>
              <Link href="#" target="_blank">
                <i class="ri-tiktok-line text-xl text-[#565656] hover:text-[#0e0506]"></i>
              </Link>
              <Link href="#" target="_blank">
                <i class="ri-youtube-line text-xl text-[#565656] hover:text-[#0e0506]"></i>
              </Link>
            </div>
          </div>

          <div className="footer__content lg:grid lg:grid-cols-2">
            <div>
              <h3 className="footer__title font-gilda text-xl md:text-2xl">
                Quick Links
              </h3>

              <ul className="footer__links">
                <li>
                  <Link href="#" className="footer__link">
                    Men wears
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer__link">
                    Women wears
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer__link">
                    Kids wears
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer__link">
                    Agbada
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer__link">
                    Kaftan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer__link">
                    Suits
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title font-gilda text-xl md:text-2xl">
                Company
              </h3>

              <ul className="footer__links">
                <li>
                  <Link href="#" className="footer__link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer__link">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer__link">
                    Our Journals
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="footer__title font-gilda text-xl md:text-2xl">
              Newsletter
            </h3>

            <form>
              <input
                type="email"
                placeholder="Enter your email address"
                className="mt-2 text-[0.9rem] w-full border bg-[#F9F9F9] px-4 py-2 text-[#000] outline-none"
              />
              <p className="text-[0.9rem] mt-4 text-[#757575]">
                By subscribing, you accept the{" "}
                <Link
                  href="/privacy-policy"
                  className="underline text-[#0e0506]"
                >
                  Privacy Policy
                </Link>
              </p>

              <Button type="button" className="rounded-none mt-4">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* <div className="footer__info container">
          <span className="footer__copy">
            &#169; JustPerfect Designs. All rights reserved
          </span>

          <div className="footer__privacy">
            <Link href="#">Terms & Agreement</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div> */}
      </footer>
    </div>
  );
};
export default Footer;
