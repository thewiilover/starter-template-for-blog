"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Category from "../src/components/main/Category";
import Profile from "../src/components/global/Profile";
import MobileMenu from "@/src/components/mobile/MobileMenu";
import PostsList from "@/src/components/main/PostsList";

import useMenu from "@/src/store/menuStore";
import useCategory from "@/src/store/categoryStore";
import usePageNumber from "@/src/store/pageNumberStore";

import { getListItem } from "@/src/utils/useRequest";
import { PostsProps } from "./types";
import { getTotalPageNum, paginateItems } from "@/src/utils/usePagination";

export default function Home() {
  const router = useRouter();
  const [postsList, setPostsList] = useState<PostsProps[] | null>([]);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const { isMobileMenuVisible } = useMenu();
  const { currentCategory } = useCategory();
  const { currentPage, changeCurrentPage } = usePageNumber();

  const fetchList = async (category: string) => {
    const itemsPerPage = 6;

    try {
      const data = await getListItem(category);
      if (data) {
        setPostsList(paginateItems(data, itemsPerPage, currentPage));
        setPageNumbers(getTotalPageNum(data, itemsPerPage));
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchList(currentCategory);
    router.push(`?category=${currentCategory}`);
  }, [currentCategory, currentPage]);

  useEffect(() => {
    const handlePopState = async (e: any) => {
      const target = e.currentTarget.location.search.split("=") || ["All"];
      if (target.length === 1) {
        target.push(["All"]);
      }
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
            postsList && postsList.length > 3 ? "" : "h-[100vh]"
          } lg:w-[1024px] flex justify-between`}
        >
          {postsList ? (
            <div className="w-full lg:w-[680px]">
              <PostsList posts={postsList} />
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
            onClick={() => changeCurrentPage(Number(item))}
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
