"use client";

import useTheme from "@/src/store/themeStore";
import DarkIcon from "../../assets/dark-mode.svg";
import LightIcon from "../../assets/light-mode.svg";

export default function Footer() {
  const { changeTheme } = useTheme();

  const toggleMode = (type: string) => {
    if (type === "dark") {
      localStorage.setItem("theme", "dark");
      changeTheme("dark");
    } else {
      changeTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    // This is Footer. Update the content as you want!
    <div className="w-full h-[200px] flex flex-col justify-center items-center text-center text-sm text-contrast-300 font-extralight bg-contrast-900 dark:border-t dark:border-t-contrast-600">
      <div className="flex justify-between bg-contrast-600 w-[65px] p-1 rounded-full mb-3">
        <button
          onClick={() => toggleMode("light")}
          className="bg-contrast-300 p-1 rounded-full"
        >
          <LightIcon />
        </button>
        <button
          onClick={() => toggleMode("dark")}
          className="bg-contrast-300 p-1 rounded-full"
        >
          <DarkIcon />
        </button>
      </div>
      NEXT-BLOG-BOILERPLATE <br /> made by jnoncode
    </div>
  );
}
