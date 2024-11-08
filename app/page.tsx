"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// components
import Category from "../src/components/main/Category";
import Profile from "../src/components/global/Profile";
import MobileMenu from "@/src/components/mobile/MobileMenu";
import PostList from "@/src/components/main/PostList";

// global state management
import useMenu from "@/src/store/menuStore";
import useCategory from "@/src/store/categoryStore";
import usePageNumber from "@/src/store/pageNumberStore";

// functions and type
import { getListItem } from "@/src/utils/useRequest";
import { getTotalPageNum, paginateItems } from "@/src/utils/usePagination";
import { PostProps } from "./types";
import LoadingComponent from "@/src/components/global/Loading";

export default function Home() {
  const router = useRouter();
  const [postList, setPostList] = useState<PostProps[] | null>([]);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const { isMobileMenuVisible } = useMenu();
  const { currentCategory, changeCurrentCategory } = useCategory();
  const { currentPage, changeCurrentPage } = usePageNumber();

  // if you want change item cnt per a page, change this value.
  const itemsPerPage = 6;

  // fetch post list
  const fetchPostList = async (category: string, page: number) => {
    try {
      const data = await getListItem(category);
      if (data) {
        setPostList(paginateItems(data, itemsPerPage, page));
        setPageNumbers(getTotalPageNum(data, itemsPerPage));

        // when post list is changed, scroll moves to Top
        // if you don't want it, remove this line
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // first init when page is mounted
  useEffect(() => {
    fetchPostList(currentCategory, currentPage);
  }, []);

  // change postList when currentCategory is changed
  useEffect(() => {
    changeCurrentPage(1);
    fetchPostList(currentCategory, currentPage);
    router.push(`?category=${currentCategory}`);
  }, [currentCategory]);

  // change postList when currentPage is changed
  useEffect(() => {
    fetchPostList(currentCategory, currentPage);
  }, [currentPage]);

  // change postList when popstate is changed
  useEffect(() => {
    const handlePopState = async (e: any) => {
      const target = e.currentTarget.location.search.split("=") || ["All"];
      if (target.length === 1) {
        target.push(["All"]);
      }
      const selectedCategory = target[target.length - 1];
      changeCurrentPage(1);
      changeCurrentCategory(selectedCategory);
      fetchPostList(selectedCategory, currentPage);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Mobile menu when width < 1024px */}
      {isMobileMenuVisible && (
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
      )}
      <div className="w-full flex justify-center">
        {/* Post list */}
        <div
          className={`w-full ${
            postList && postList.length > 3 ? "" : "h-[100vh]"
          } lg:w-[1024px] flex justify-between`}
        >
          <div className="w-full lg:w-[700px]">
            {/* First, html returns 'Loading' */}
            {/* After loading, if there's no result, api returns null and html returns 'No result' */}
            {postList && postList.length === 0 && (
              <div className="pb-[100px] pr-0 lg:pr-[100px] h-[100vh] flex justify-center items-center">
                {currentCategory === "All" ? <LoadingComponent /> : "No Result"}
              </div>
            )}
            {postList && postList.length > 0 && (
              <div className="lg:w-[680px]">
                <PostList post={postList} />
              </div>
            )}
            {/* if there's nothing in the __post foler, you get this result. */}
            {!postList && (
              <div className="h-[100vh] flex justify-center items-center">
                Write your first post!
              </div>
            )}
          </div>
          {/* Side Menu on the main page, Profile and Category */}
          <div className="z-[10] hidden lg:inline-block lg:w-[320px] h-[600px] sticky top-[100px] px-5 py-8">
            <div className="shadow rounded-lg p-2">
              <Profile />
            </div>
            <Category />
          </div>
        </div>
      </div>
      {/* PageNumbers for pagination */}
      <div className="w-full flex justify-center items-center py-[100px]">
        {pageNumbers.map((item, index) => (
          <button
            key={index}
            onClick={() => changeCurrentPage(Number(item))}
            className={`${
              currentPage === item ? "bg-primary-500 text-primary-100" : ""
            } mx-1 w-[35px] h-[35px] flex items-center justify-center text-sm text-center rounded-full duration-100`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
