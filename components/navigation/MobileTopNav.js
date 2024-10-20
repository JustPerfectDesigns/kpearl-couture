import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ChevronRight,
  User,
  User2,
  Phone,
  Notebook,
  Info,
  Baby,
} from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";

export const SIDENAV_ITEMS = [
  {
    title: "Home",
    path: "/",
    icon: <Home className="w-5 h-5" />,
  },
  {
    title: "Men",
    path: "/category/men",
    icon: <User className="w-5 h-5" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/category/men" },
      { title: "Agbada", path: "/category/men?subcategory=men-agbada" },
      { title: "Kaftan", path: "/category/men?subcategory=kaftan" },
      { title: "Suit", path: "/category/men?subcategory=suit" },
      { title: "Shirt", path: "/category/men?subcategory=men-shirt" },
      { title: "Men Trousers", path: "/category/men?subcategory=men-trousers" },
      {
        title: "Casual Wear",
        path: "/category/men?subcategory=men-casual-wear",
      },
    ],
    subMenuItemsTwo: [
      { title: "White", path: "/category/men?color=men-white" },
      { title: "Blue", path: "/category/men?color=men-blue" },
      { title: "Black", path: "/category/men?color=men-black" },
      { title: "Green", path: "/category/men?color=men-green" },
      { title: "Brown", path: "/category/men?color=men-brown" },
      { title: "Yellow", path: "/category/men?color=men-yellow" },
      { title: "Orange", path: "/category/men?color=men-orange" },
      { title: "Carton", path: "/category/men?color=men-carton" },
      { title: "Onion", path: "/category/men?color=men-onion" },
      { title: "Ash", path: "/category/men?color=men-ash" },
      { title: "Wine", path: "/category/men?color=men-wine" },
      { title: "Magenta", path: "/category/men?color=men-magenta" },
      { title: "Pink", path: "/category/men?color=men-pink" },
      { title: "Stripes", path: "/category/men?color=men-stripes" },
    ],
  },
  {
    title: "Women",
    path: "/category/women",
    icon: <User2 width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/category/women" },
      {
        title: "Two Piece",
        path: "/category/women?subcategory=women-two-piece",
      },
      { title: "Skirt Suit", path: "/category/women?subcategory=skirt-suit" },
      { title: "Boubou", path: "/category/women?subcategory=boubou" },
      { title: "Suit", path: "/category/women?subcategory=women-suit" },
      {
        title: "Jump Suit",
        path: "/category/women?subcategory=women-jump-suit",
      },
      {
        title: "Shirt Dress",
        path: "/category/women?subcategory=women-shirt-dress",
      },
      {
        title: "Suit and Skirt",
        path: "/category/women?subcategory=women-suit-and-skirt",
      },
      {
        title: "Skirt and Top",
        path: "/category/women?subcategory=women-skirt-and-top",
      },
      {
        title: "Wedding Gown",
        path: "/category/women?subcategory=women-wedding-gown",
      },
      {
        title: "Office Suit",
        path: "/category/women?subcategory=women-office-suit",
      },
      {
        title: "Shirt and Pant Trouser",
        path: "/category/women?subcategory=women-shirt-and-pant-trouser",
      },
    ],
    subMenuItemsTwo: [
      { title: "White", path: "/category/women?color=women-white" },
      { title: "Blue", path: "/category/women?color=women-blue" },
      { title: "Black", path: "/category/women?color=women-black" },
      { title: "Green", path: "/category/women?color=women-green" },
      { title: "Brown", path: "/category/women?color=women-brown" },
      { title: "Yellow", path: "/category/women?color=women-yellow" },
      { title: "Oranger", path: "/category/women?color=women-orange" },
      { title: "Carton", path: "/category/women?color=women-carton" },
      { title: "Onion", path: "/category/women?color=women-onion" },
      { title: "Ash", path: "/category/women?color=women-ash" },
      { title: "Wine", path: "/category/women?color=women-wine" },
      { title: "Magenta", path: "/category/women?color=women-magenta" },
      { title: "Pink", path: "/category/women?color=women-pink" },
      { title: "Stripes", path: "/category/women?color=women-stripes" },
    ],
  },
  {
    title: "Boys",
    path: "/category/boys",
    icon: <Baby width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/category/boys" },
      { title: "Agbada", path: "/category/boys?subcategory=boys-agbada" },
      { title: "Kaftan", path: "/category/boys?subcategory=kaftan" },
      { title: "Suit", path: "/category/boys?subcategory=suit" },
      { title: "Shirt", path: "/category/boys?subcategory=boys-shirt" },
      {
        title: "boys Trousers",
        path: "/category/boys?subcategory=boys-trousers",
      },
      {
        title: "Casual Wear",
        path: "/category/boys?subcategory=boys-casual-wear",
      },
    ],
    subMenuItemsTwo: [
      { title: "White", path: "/category/boys?color=boys-white" },
      { title: "Blue", path: "/category/boys?color=boys-blue" },
      { title: "Black", path: "/category/boys?color=boys-black" },
      { title: "Green", path: "/category/boys?color=boys-green" },
      { title: "Brown", path: "/category/boys?color=boys-brown" },
      { title: "Yellow", path: "/category/boys?color=boys-yellow" },
      { title: "Oranger", path: "/category/boys?color=boys-orange" },
      { title: "Carton", path: "/category/boys?color=boys-carton" },
      { title: "Onion", path: "/category/boys?color=boys-onion" },
      { title: "Ash", path: "/category/boys?color=boys-ash" },
      { title: "Wine", path: "/category/boys?color=boys-wine" },
      { title: "Magenta", path: "/category/boys?color=boys-magenta" },
      { title: "Pink", path: "/category/boys?color=boys-pink" },
      { title: "Stripes", path: "/category/boys?color=boys-stripes" },
    ],
  },
  {
    title: "Girls",
    path: "/category/girls",
    icon: <Baby width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "All", path: "/category/girls" },
      {
        title: "Two Piece",
        path: "/category/girls?subcategory=girls-two-piece",
      },
      { title: "Skirt Suit", path: "/category/girls?subcategory=skirt-suit" },
      { title: "Boubou", path: "/category/girls?subcategory=boubou" },
      { title: "Suit", path: "/category/girls?subcategory=girls-suit" },
      {
        title: "Jump Suit",
        path: "/category/girls?subcategory=girls-jump-suit",
      },
      {
        title: "Shirt Dress",
        path: "/category/girls?subcategory=girls-shirt-dress",
      },
      {
        title: "Suit and Skirt",
        path: "/category/girls?subcategory=girls-suit-and-skirt",
      },
      {
        title: "Skirt and Top",
        path: "/category/girls?subcategory=girls-skirt-and-top",
      },
      {
        title: "Wedding Gown",
        path: "/category/girls?subcategory=girls-wedding-gown",
      },
      {
        title: "Office Suit",
        path: "/category/girls?subcategory=girls-office-suit",
      },
      {
        title: "Shirt and Pant Trouser",
        path: "/category/girls?subcategory=girls-shirt-and-pant-trouser",
      },
    ],
    subMenuItemsTwo: [
      { title: "White", path: "/category/girls?color=girls-white" },
      { title: "Blue", path: "/category/girls?color=girls-blue" },
      { title: "Black", path: "/category/girls?color=girls-black" },
      { title: "Green", path: "/category/girls?color=girls-green" },
      { title: "Brown", path: "/category/girls?color=girls-brown" },
      { title: "Yellow", path: "/category/girls?color=girls-yellow" },
      { title: "Oranger", path: "/category/girls?color=girls-orange" },
      { title: "Carton", path: "/category/girls?color=girls-carton" },
      { title: "Onion", path: "/category/girls?color=girls-onion" },
      { title: "Ash", path: "/category/girls?color=girls-ash" },
      { title: "Wine", path: "/category/girls?color=girls-wine" },
      { title: "Magenta", path: "/category/girls?color=girls-magenta" },
      { title: "Pink", path: "/category/girls?color=girls-pink" },
      { title: "Stripes", path: "/category/girls?color=girls-stripes" },
    ],
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <Notebook width="24" height="24" />,
  },
  {
    title: "About Us",
    path: "/about",
    icon: <Info width="24" height="24" />,
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <Phone width="24" height="24" />,
  },
];

const MenuItem = ({ item }) => {
  if (!item) return null;

  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg w-full justify-between hover:bg-zinc-100 ${
              pathname.includes(item.path) ? "bg-zinc-100" : ""
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-medium text-lg flex">{item.title}</span>
            </div>

            <div
              className={`${
                subMenuOpen ? "rotate-90" : ""
              } flex transition-transform duration-200`}
            >
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>

          {subMenuOpen && (
            <div>
              <div className="my-2 ml-12 flex flex-col space-y-4">
                <span className="font-medium text-slate-500">STYLE</span>
                {item.subMenuItems?.map((subItem, idx) => (
                  <SheetClose asChild key={idx}>
                    <Link
                      href={subItem.path}
                      className={`${
                        subItem.path === pathname
                          ? "font-semibold text-orange-700"
                          : ""
                      } text-slate-500 hover:text-orange-700 transition-all ml-6 font-medium`}
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="my-2 ml-12 flex flex-col space-y-4">
                <span className="font-medium mt-4 text-slate-500">COLORS</span>
                {item.subMenuItemsTwo?.map((subItem, idx) => (
                  <SheetClose asChild key={idx}>
                    <Link
                      href={subItem.path}
                      className={`${
                        subItem.path === pathname
                          ? "font-semibold text-orange-700"
                          : ""
                      } text-slate-500 hover:text-orange-700 transition-all ml-6 font-medium`}
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <SheetClose asChild>
          <Link
            href={item.path}
            className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${
              item.path === pathname ? "bg-slate-900 text-white" : ""
            }`}
          >
            {item.icon}
            <span className="font-medium text-lg flex">{item.title}</span>
          </Link>
        </SheetClose>
      )}
    </div>
  );
};

const MobileNav = () => {
  return (
    <nav className="flex flex-col gap-2">
      {SIDENAV_ITEMS.map((item, idx) => (
        <MenuItem key={idx} item={item} />
      ))}
    </nav>
  );
};

export default MobileNav;
