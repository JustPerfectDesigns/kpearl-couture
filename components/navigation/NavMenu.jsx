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
            <ul className="grid gap-1 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-5 lg:mr-2">
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
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
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
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Kids</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-1 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-5 lg:mr-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full relative select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md overflow-hidden"
                    href="/category/kids"
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
                      Shop Kids
                      <br />
                      Collection
                    </span>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/category/kids?subcategory=kids-agbada"
                title="Agbada"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our latest agbada collection.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/kids?subcategory=kids-kaftan"
                title="Kaftan"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Become confident in one of our kaftans.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/kids?subcategory=kids-suit"
                title="Suits"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Be the best you can be in public get a suit.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/kids?subcategory=kids-shirt"
                title="Shirts"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  We are all about heightening your profile.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/kids?subcategory=kids-trousers"
                title="Trousers"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Explore our trousers collections.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/kids?subcategory=kids-casual-wear"
                title="Casual Wear"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our casual wear sets for kids.{" "}
                </span>
              </ListItem>
              <ListItem
                href="/category/kids?subcategory=kids-casual-wear"
                title="Casual Wear"
                className="text-sm"
              >
                <span className="line-clamp-1 text-sm">
                  Check out our casual wear sets for kids.{" "}
                </span>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
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
