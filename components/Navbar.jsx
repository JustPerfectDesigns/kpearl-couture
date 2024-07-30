"use client";

import useCartStore from "@/cartStore";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <Link href="/">Home</Link>
        <Link href="/category/men">Men</Link>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Link href="/cart">
          Cart <span className="text-red-600">{totalItems}</span>
        </Link>
        <UserButton />
      </div>
    </div>
  );
};
export default Navbar;
