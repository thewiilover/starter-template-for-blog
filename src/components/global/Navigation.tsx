"use client";

import Link from "next/link";
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";
import useMenu from "@/src/store/menuStore";
import { usePathname } from "next/navigation";
import useCategory from "@/src/store/categoryStore";

export default function Navigation() {
  const { isMobileMenuVisible, updateIsMobileMenuVisible } = useMenu();
  const { changeCurrentCategory } = useCategory();
  const pathname = usePathname();

  return (
    <div className="z-[100] fixed w-full h-[65px] flex justify-between items-center px-6 bg-white shadow-sm">
      <Link
        href="/"
        className="text-xl"
        onClick={() => changeCurrentCategory("All")}
      >
        blogTitle
      </Link>
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
