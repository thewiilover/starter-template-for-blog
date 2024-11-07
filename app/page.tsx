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
import { useRouter } from "next/navigation";

export default function Home() {
  const { isMobileMenuVisible } = useMenu();
  const [articlesList, setArticlesList] = useState<PostsProps[] | null>(null);
  const { currentCategory } = useCategory();
  const router = useRouter();

  const fetchList = async (category: string) => {
    try {
      const data = await getListItem(category);
      setArticlesList(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchList(currentCategory);
    router.push(`?category=${currentCategory}`);
  }, [currentCategory]);

  useEffect(() => {
    const handlePopState = async (e: any) => {
      const target = e.currentTarget.location.search.split("=") || "All";
      fetchList(target[target.length - 1]);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      {isMobileMenuVisible && (
        <div className="inline-block lg:hidden">
          <MobileMenu />
        </div>
      )}
      <div
        className={`w-full ${
          articlesList && articlesList.length > 3 ? "" : "h-[100vh]"
        } lg:w-[1024px] flex justify-between`}
      >
        {articlesList ? (
          <div className="w-full lg:w-[680px] pb-[100px]">
            <ArticleList articles={articlesList} />
          </div>
        ) : (
          <div className="w-full h-[100vh] flex justify-center items-center">
            Write your first post!
          </div>
        )}
        <div className="z-[10] hidden lg:inline-block lg:w-[320px] h-[600px] sticky top-[80px] px-5 py-8">
          <Profile />
          <Category />
        </div>
      </div>
    </div>
  );
}
