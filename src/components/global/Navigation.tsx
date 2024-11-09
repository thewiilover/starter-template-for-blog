"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// global state management
import useMenu from "@/src/store/menuStore";
import useCategory from "@/src/store/categoryStore";
import usePageNumber from "@/src/store/pageNumberStore";

// components and icon
import MobileMenu from "../mobile/MobileMenu";
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";

// your blog title
import { blogTitle } from "@/custom/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const { isMobileMenuVisible, updateIsMobileMenuVisible } = useMenu();
  const { changeCurrentCategory } = useCategory();
  const { changeCurrentPage } = usePageNumber();

  return (
    <div className="z-[100] fixed w-full lg:w-full h-[65px] flex justify-between items-center pl-6 px-6 bg-white shadow-sm">
      {/* Blog title */}
      <div className="flex items-center">
        <Link
          href="/"
          className="text-xl"
          onClick={() => {
            changeCurrentCategory("All");
            changeCurrentPage(1);
          }}
        >
          {blogTitle}
        </Link>
      </div>
      {/* For mobile screen */}
      {pathname === "/" && (
        <>
          {isMobileMenuVisible && (
            <div className="flex lg:hidden">
              <MobileMenu />
            </div>
          )}
          <div
            onClick={() => updateIsMobileMenuVisible(true)}
            className="flex lg:hidden cursor-pointer p-1"
          >
            <MenuIcon />
          </div>
        </>
      )}
    </div>
  );
}
