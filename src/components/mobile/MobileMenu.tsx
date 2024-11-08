"use client";

import { useEffect } from "react";

// components
import Profile from "../global/Profile";
import CategoryBox from "../main/content/CategoryBox";
import CloseIcon from "../../assets/close.svg";

// global value
import useMenu from "@/src/store/menuStore";

export default function MobileMenu() {
  const { updateIsMobileMenuVisible } = useMenu();

  // When the mobile menu opens, background does not allowed to scroll.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="z-[20] fixed flex top-0 right-0 w-full h-[100vh] bg-[#00000080]">
      {/* For closing menu when you click background */}
      <div
        onClick={() => updateIsMobileMenuVisible(false)}
        className="w-[20%] h-full"
      ></div>
      {/* Side menu for profile and category. The classname 'menu-open' is an animation from global.css */}
      <div className="menu-open w-[80%] h-full bg-white">
        <div
          onClick={() => updateIsMobileMenuVisible(false)}
          className="h-[65px] lg:hidden flex justify-end p-1 mr-3 items-center"
        >
          <CloseIcon />
        </div>
        <Profile />
        <CategoryBox />
      </div>
    </div>
  );
}
