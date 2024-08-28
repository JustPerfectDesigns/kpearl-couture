"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, MenuSquare, ShoppingBag, X } from "lucide-react";
// import { useShoppingCart } from "use-shopping-cart";
import Logo from "../../public/images/kpearl-logo.PNG";
import Image from "next/image";
import toggleIcon from "../../public/images/toggleIcon.png";
import Menu from "./Menu";
import { NavMenu } from "./NavMenu";
import { UserButton } from "@clerk/nextjs";

const links = [
  // { name: "Home", href: "/" },
  { name: "Men Collections", href: "/category/men" },
  { name: "Women Collections", href: "/category/women" },
  { name: "Boys Collections", href: "/category/boys" },
  { name: "Girls Collections", href: "/category/girls" },
  { name: "My Orders", href: "/order" },
  { name: "Our Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function MobileNavbar() {
  const pathname = usePathname();
  //   const { handleCartClick, cartCount } = useShoppingCart(); // Get cartCount

  return (
    <header className="py-4 md:py-5 fixed left-0 border-b top-0 mx-auto z-50 w-full bg-white">
      <div className="flex items-center justify-between ui__container">
        <div className="leading-none list-none">
          <Menu />
        </div>

        {/* <div className="font-gilda text-lg leading-none">
          <Link href="/">
            KPearl
            <br />
            Couture
          </Link>
        </div> */}

        <Link href="/">
          <Image
            src={Logo}
            alt="Kpearl Couture Logo"
            width={100}
            height={100}
          />
        </Link>

        <div className="">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-0 rounded-none">
                <Image
                  src={toggleIcon}
                  width={100}
                  height={100}
                  alt="Toggle Icon"
                  unoptimized
                  objectFit="cover"
                  priority
                  className="w-[1.35rem] h-[1.35rem] md:h-6 md:w-6 object-cover"
                />
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-lg w-[70vw]">
              <SheetHeader>
                <SheetTitle className="text-left text-xl">
                  <div className="font-gilda text-lg leading-none">
                    <UserButton />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <SheetClose
                asChild
                className="absolute top-5 right-5 border rounded-none"
              >
                <Button variant="ghost" type="submit" size="sm">
                  <X size={18} />
                </Button>
              </SheetClose>

              <nav className="flex flex-col gap-8 mt-24">
                {links.map((link, idx) => (
                  <div key={idx}>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className={`font-medium text-[1.15rem] ${
                          pathname === link.href
                            ? "text-yellow-600"
                            : "text-gray-800 hover:text-yellow-600"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
