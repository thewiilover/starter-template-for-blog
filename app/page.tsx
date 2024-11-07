"use client";

import ArticleList from "@/src/components/main/ArticleList";
import Category from "../src/components/main/Category";
import Profile from "../src/components/main/Profile";
import MobileMenu from "@/src/components/mobile/MobileMenu";
import useMenu from "@/src/store/menuStore";
import { useEffect, useState } from "react";
import { getListItem } from "@/src/utils/useRequest";
import { PostsProps } from "./types";
import useCategory from "@/src/store/categoryStore";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const { isMobileMenuVisible } = useMenu();
  const [articlesList, setArticlesList] = useState<PostsProps[]>([]);
  const { currentCategory } = useCategory();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
    const fetchList = async () => {
      try {
        const data = await getListItem(currentCategory);
        router.push(`?category=${currentCategory}`);
        setArticlesList(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchList();
  }, [currentCategory, router]);

  return (
    <div className="w-full flex justify-center">
      {isMobileMenuVisible && (
        <div className="inline-block lg:hidden">
          <MobileMenu />
        </div>
      )}
      <div
        className={`w-full ${
          articlesList.length > 3 ? "" : "h-[100vh]"
        } lg:w-[1024px] flex justify-between`}
      >
        <div className="w-full lg:w-[680px] pb-[100px]">
          <ArticleList articles={articlesList} />
        </div>
        <div className="z-[10] hidden lg:inline-block lg:w-[320px] h-[600px] sticky top-[80px] px-5 py-8">
          <Profile />
          <Category />
        </div>
      </div>
    </div>
  );
}
