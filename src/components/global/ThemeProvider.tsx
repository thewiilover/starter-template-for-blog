"use client";

import useTheme from "@/src/store/themeStore";
import { ReactNode, useLayoutEffect } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme, changeTheme } = useTheme();

  useLayoutEffect(() => {
    if (
      !localStorage.getItem("theme") ||
      localStorage.getItem("theme") === "light"
    ) {
      changeTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      changeTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useLayoutEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return <div>{children}</div>;
}
