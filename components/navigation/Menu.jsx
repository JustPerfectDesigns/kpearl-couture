"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import useCartStore from "@/cartStore";

const Menu = () => {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <li className="cursor-pointer text-xl">
      <Link href="/cart" className="relative">
        <i className="ri-shopping-cart-line text-[1.6rem] md:text-[2rem] lg:text-xl"></i>
        <div className="absolute -top-[0.6rem] left-4 md:-top-[0.85rem] lg:left-4 lg:-top-[0.2rem] flex h-4 w-4 items-center justify-center rounded-full bg-red-600 p-[0.6rem] lg:p-2 text-[11px] lg:text-[9px] font-medium text-white">
          {totalItems}
        </div>
      </Link>
    </li>
  );
};

export default Menu;
