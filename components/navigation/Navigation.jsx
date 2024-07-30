"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { NavMenu } from "./NavMenu";
import Menu from "./Menu";

import { Button } from "../../components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Navigation = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  // if (!isLoaded || !isSignedIn) {
  //   return null;
  // }

  return (
    <section className="fixed left-0 border-b top-0 mx-auto z-50 hidden h-20 w-full items-center justify-center bg-white lg:flex">
      <div className="ui__container w-full flex items-center justify-between">
        <div className="font-gilda text-lg leading-none">
          <a href="/">
            KPearl
            <br />
            Couture
          </a>
        </div>
        <nav>
          <NavMenu />
        </nav>
        <div>
          <ul className="flex items-center justify-center gap-6">
            {/* <li className="cursor-pointer text-xl">
              <i className="ri-search-line"></i>
            </li> */}

            <Menu />

            {isSignedIn ? (
              <div className="flex items-center justify-center gap-6">
                <li className="cursor-pointer text-xl">
                  <Link href="/order">
                    <i className="ri-truck-line"></i>
                  </Link>
                </li>
                <li className="cursor-pointer text-xl">
                  <UserButton />
                </li>
              </div>
            ) : (
              <li className="cursor-pointer text-xl">
                <Link href="/sign-in">
                  <i className="ri-user-6-line"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Navigation;
