"use client";

import useMenuStore from "@/src/store/menuStore";
import { useEffect } from "react";

export default function MobileMenu() {
  const { updateIsMobileMenuVisible } = useMenuStore();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="z-[20] fixed flex top-0 right-0 w-full h-[100vh] pt-[65px] bg-[#00000070]">
      <div
        onClick={() => updateIsMobileMenuVisible(false)}
        className="w-[30%] h-full"
      ></div>
      <div className="menu-open w-[70%] h-full bg-blue-500">text</div>
    </div>
  );
}
