"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// global state management
import useMenu from "@/src/store/menuStore";
import useCategory from "@/src/store/categoryStore";
import usePageNumber from "@/src/store/pageNumberStore";

// icon
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
    <div className="z-[100] fixed w-full h-[65px] flex justify-between items-center px-6 bg-white shadow-sm">
      {/* Blog title */}
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
      {/* For mobile screen */}
      {pathname === "/" && (
        <div>
          {isMobileMenuVisible ? (
            <div
              onClick={() => updateIsMobileMenuVisible(false)}
              className="inline-block lg:hidden cursor-pointer"
            >
              <CloseIcon />
            </div>
          ) : (
            <div
              onClick={() => updateIsMobileMenuVisible(true)}
              className="inline-block lg:hidden cursor-pointer"
            >
              <MenuIcon />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
