"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import ArticleList from "@/src/components/main/ArticleList";
import Category from "../src/components/main/Category";
import Profile from "../src/components/main/Profile";
import MobileMenu from "@/src/components/mobile/MobileMenu";

import useMenu from "@/src/store/menuStore";
import useCategory from "@/src/store/categoryStore";

import { getListItem } from "@/src/utils/useRequest";
import { PostsProps } from "./types";
import { getTotalPageNum, paginateItems } from "@/src/utils/usePagination";

export default function Home() {
  const router = useRouter();
  const [articlesList, setArticlesList] = useState<PostsProps[] | null>(null);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { currentCategory } = useCategory();
  const { isMobileMenuVisible } = useMenu();

  const itemsPerPage = 6;

  const fetchList = async (category: string) => {
    try {
      const data = await getListItem(category);
      if (data) {
        setArticlesList(paginateItems(data, itemsPerPage, 1));
        setPageNumbers(getTotalPageNum(data, itemsPerPage));
      }
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
    <div className="">
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
            <div className="w-full lg:w-[680px]">
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
      <div className="w-full flex justify-center items-center py-[100px]">
        {pageNumbers.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(Number(item))}
            className={`${
              currentPage === item ? "bg-blue-500 text-blue-100" : ""
            } mx-1 w-[35px] h-[35px] text-center flex items-center justify-center rounded-full duration-100`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
