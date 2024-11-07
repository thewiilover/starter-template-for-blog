import type { Metadata } from "next";
import Article from "./page";

export const metadata: Metadata = {
  title: "Next Blog",
};

export default function Layout() {
  return (
    <div className="flex justify-center pb-[120px]">
      <div className="px-3 w-[90%] lg:w-[1024px]">
        <Article />
      </div>
    </div>
  );
}
