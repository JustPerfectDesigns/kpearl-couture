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

import Link from "next/link";
import { X } from "lucide-react";
import Logo from "../../public/images/kpearl-logo.PNG";
import Image from "next/image";
import toggleIcon from "../../public/images/toggleIcon.png";
import Menu from "./Menu";
import { UserButton } from "@clerk/nextjs";

import MobileNav from "./MobileTopNav";
import { ScrollArea } from "../ui/scroll-area";

export default function MobileNavbar() {
  return (
    <header className="py-4 md:py-5 fixed left-0 border-b top-0 mx-auto z-50 w-full bg-white">
      <div className="flex items-center justify-between ui__container">
        <div className="leading-none list-none">
          <Menu />
        </div>

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
              {/* ... sheet trigger content ... */}
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

            <SheetContent className="sm:max-w-lg w-[75vw]">
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

              <ScrollArea className="h-full pointer-events-none">
                <div className="mt-24 pointer-events-auto">
                  <MobileNav />
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
