"use client";

import { useEffect } from "react";

// components
import Profile from "../global/Profile";
import Category from "../main/Category";

// global state management
import useMenu from "@/src/store/menuStore";

export default function MobileMenu() {
  const { updateIsMobileMenuVisible } = useMenu();

  // When the mobile menu opens, background does not allowed to scroll.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="z-[20] fixed flex top-0 right-0 w-full h-[100vh] pt-[65px] bg-[#00000070]">
      {/* For closing menu when you click background */}
      <div
        onClick={() => updateIsMobileMenuVisible(false)}
        className="w-[20%] h-full"
      ></div>
      {/* Side menu for profile and category. The classname 'menu-open' is an animation from global.css */}
      <div className="menu-open w-[80%] h-full bg-white">
        <Profile />
        <Category />
      </div>
    </div>
  );
}
