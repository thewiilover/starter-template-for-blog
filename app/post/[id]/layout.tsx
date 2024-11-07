import type { Metadata } from "next";
import { blogTitle } from "@/console/navigation";
import Post from "./page";

export const metadata: Metadata = {
  title: blogTitle,
};

export default function Layout() {
  return (
    <div className="flex justify-center pb-[120px]">
      <div className="px-3 w-[90%] lg:w-[1024px]">
        <Post />
      </div>
    </div>
  );
}
