"use client";

// import * as React from 'react'
import React, { forwardRef } from "react";
import Link from "next/link";

import { cn } from "../../lib/utils";
// import { Icons } from '@/components/icons'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";

export function NavMenu() {
  const { isSignedIn, user } = useAuth();
  const email = user?.primaryEmailAddress?.emailAddress;

  // console.log("isSignedIn:", isSignedIn);
  // console.log("user:", user);
  // console.log("email:", email);

  return (
    <NavigationMenu>
      <NavigationMenuList className="">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Men</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-6 lg:mr-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full relative select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md overflow-hidden"
                    href="/category/men"
                  >
                    <Image
                      src="/images/menu-men.png"
                      width={200}
                      height={340}
                      unoptimized
                      priority
                      className="absolute top-0 left-0 h-full w-full object-cover z-0"
                    />
                    <span className="block mt-auto leading-tight text-3xl text-center text-white font-gilda z-[1]">
                      Shop Men
                      <br />
                      Collection
                    </span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/category/men?subcategory=men-agbada"
                title="Agbada"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our latest agbada collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/men?subcategory=kaftan"
                title="Kaftan"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Become confident in one of our kaftans.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/men?subcategory=men-suit"
                title="Suits"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Be the best you can be in public get a suit.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/men?subcategory=men-shirt"
                title="Shirts"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  We are all about heightening your profile.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/men?subcategory=men-trousers"
                title="Trousers"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our trousers collections.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/men?subcategory=men-casual-wear"
                title="Casual Wear"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our casual wear sets for men.{" "}
                </span>
              </ListItem>
            </ul>

            <div className="mt-3 px-6 mb-4">
              <span className="text-[#222222] font-medium underline">
                Choose Colors
              </span>
              <ul className="flex flex-wrap gap-x-9 w-full">
                <ListItem
                  href="/category/men?color=men-white"
                  title="White"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-blue"
                  title="Blue"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-black"
                  title="Black"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-green"
                  title="Green"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-brown"
                  title="Brown"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-yellow"
                  title="Yellow"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-orange"
                  title="Orange"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-carton"
                  title="Carton"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-onion"
                  title="Onion"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-ash"
                  title="Ash"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-red"
                  title="Red"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-wine"
                  title="Wine"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-magenta"
                  title="Magenta"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-pink"
                  title="Pink"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/men?color=men-stripes"
                  title="Stripes"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr_1fr]">
              <li className="row-span-5 lg:mr-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full relative select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md overflow-hidden"
                    href="/category/women"
                  >
                    <Image
                      src="/images/menu-women.png"
                      width={200}
                      height={340}
                      unoptimized
                      priority
                      className="absolute top-0 left-0 h-full w-full object-cover z-0"
                    />
                    <span className="block mt-auto leading-tight text-3xl text-center text-white font-gilda z-[1]">
                      Shop Women
                      <br />
                      Collection
                    </span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/category/women?subcategory=women-two-piece"
                title="two piece"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our women two piece collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/women?subcategory=women-skirt-suit"
                title="skirt suit"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our women skirt suit collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/women?subcategory=women-boubou"
                title="boubou"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our women boubou collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/women?subcategory=women-suit"
                title="suit"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our women suit collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/women?subcategory=women-jump-suit"
                title="jump suit"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our women jump suit collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/women?subcategory=women-shirt-dress"
                title="shirt dress"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our women shirt dress collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/women?subcategory=women-suit-and-skirt"
                title="suit and skirt"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our women suit and skirt collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/women?subcategory=women-skirt-and-top"
                title="skirt and top"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our women skirt and top collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/women?subcategory=women-wedding-gown"
                title="wedding gown"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our women wedding gown collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/women?subcategory=women-office-suit"
                title="office suit"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our women office suit collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/women?subcategory=women-shirt-and-pant-trouser"
                title="shirt and pant trouser"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our women shirt and pant trouser collection.{" "}
                </span>
              </ListItem>
            </ul>

            <div className="mt-3 px-6 mb-4">
              <span className="text-[#222222] font-medium underline">
                Choose Colors
              </span>
              <ul className="flex flex-wrap gap-x-9 w-full">
                <ListItem
                  href="/category/women?color=women-white"
                  title="White"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-blue"
                  title="Blue"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-black"
                  title="Black"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-green"
                  title="Green"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-brown"
                  title="Brown"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-yellow"
                  title="Yellow"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-orange"
                  title="Orange"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-carton"
                  title="Carton"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-onion"
                  title="Onion"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-ash"
                  title="Ash"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-red"
                  title="Red"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-wine"
                  title="Wine"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-magenta"
                  title="Magenta"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-pink"
                  title="Pink"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/women?color=women-stripes"
                  title="Stripes"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Boys</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-6 lg:mr-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full relative select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md overflow-hidden"
                    href="/category/boys"
                  >
                    <Image
                      src="/images/menu-kids.png"
                      width={200}
                      height={340}
                      unoptimized
                      priority
                      className="absolute top-0 left-0 h-full w-full object-cover z-0"
                    />
                    <span className="block mt-auto leading-tight text-3xl text-center text-white font-gilda z-[1]">
                      Shop Boys
                      <br />
                      Collection
                    </span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/category/boys?subcategory=boys-agbada"
                title="Agbada"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our latest agbada collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/boys?subcategory=boys-kaftan"
                title="Kaftan"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Become confident in one of our kaftans.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/boys?subcategory=boys-suit"
                title="Suits"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Be the best you can be in public get a suit.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/boys?subcategory=boys-shirt"
                title="Shirts"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  We are all about heightening your profile.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/boys?subcategory=boys-trousers"
                title="Trousers"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our trousers collections.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/boys?subcategory=boys-casual-wear"
                title="Casual Wear"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our casual wear sets for boys.{" "}
                </span>
              </ListItem>
            </ul>

            <div className="mt-3 px-6 mb-4">
              <span className="text-[#222222] font-medium underline">
                Choose Colors
              </span>
              <ul className="flex flex-wrap gap-x-9 w-full">
                <ListItem
                  href="/category/boys?color=boy-white"
                  title="White"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-blue"
                  title="Blue"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-black"
                  title="Black"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-green"
                  title="Green"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-brown"
                  title="Brown"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-yellow"
                  title="Yellow"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-orange"
                  title="Orange"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-carton"
                  title="Carton"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-onion"
                  title="Onion"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-ash"
                  title="Ash"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-red"
                  title="Red"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-wine"
                  title="Wine"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-magenta"
                  title="Magenta"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-pink"
                  title="Pink"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/boys?color=boy-stripes"
                  title="Stripes"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Girls</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr_1fr]">
              <li className="row-span-5 lg:mr-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full relative select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md overflow-hidden"
                    href="/category/girls"
                  >
                    <Image
                      src="/images/girls.png"
                      width={200}
                      height={340}
                      unoptimized
                      priority
                      className="absolute top-0 left-0 h-full w-full object-cover z-0"
                    />
                    <span className="block mt-auto leading-tight text-3xl text-center text-white font-gilda z-[1]">
                      Shop Girls
                      <br />
                      Collection
                    </span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/category/girls?subcategory=girls-two-piece"
                title="two piece"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our girls two piece collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/girls?subcategory=girls-skirt-suit"
                title="skirt suit"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our girls skirt suit collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/girls?subcategory=girls-boubou"
                title="boubou"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our girls boubou collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/girls?subcategory=girls-suit"
                title="suit"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our girls suit collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/girls?subcategory=girls-jump-suit"
                title="jump suit"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our girls jump suit collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/girls?subcategory=girls-shirt-dress"
                title="shirt dress"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our girls shirt dress collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/girls?subcategory=girls-suit-and-skirt"
                title="suit and skirt"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our girls suit and skirt collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/girls?subcategory=girls-skirt-and-top"
                title="skirt and top"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our girls skirt and top collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/girls?subcategory=girls-office-suit"
                title="office suit"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our girls office suit collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/girls?subcategory=girls-shirt-and-pant-trouser"
                title="shirt and pant trouser"
                className="text-sm capitalize"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our girls shirt and pant trouser collection.{" "}
                </span>
              </ListItem>
            </ul>

            <div className="mt-3 px-6 mb-4">
              <span className="text-[#222222] font-medium underline">
                Choose Colors
              </span>
              <ul className="flex flex-wrap gap-x-9 w-full">
                <ListItem
                  href="/category/girls?color=girls-white"
                  title="White"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-blue"
                  title="Blue"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-black"
                  title="Black"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-green"
                  title="Green"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-brown"
                  title="Brown"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-yellow"
                  title="Yellow"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-orange"
                  title="Orange"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-carton"
                  title="Carton"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-onion"
                  title="Onion"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-ash"
                  title="Ash"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-red"
                  title="Red"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-wine"
                  title="Wine"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-magenta"
                  title="Magenta"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-pink"
                  title="Pink"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
                <ListItem
                  href="/category/girls?color=girls-stripes"
                  title="Stripes"
                  className="text-sm pl-0 list-none hover:bg-transparent text-slate-500"
                />
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {isSignedIn && email === "justperfecttest@gmail.com" && (
          <NavigationMenuItem>
            <Link href="/customer" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                C Measurements
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef(function ListItem(
  { className, title, children, ...props },
  ref
) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default ListItem;
