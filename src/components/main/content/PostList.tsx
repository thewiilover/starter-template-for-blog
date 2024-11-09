"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// global state management
import useCategory from "@/src/store/categoryStore";
import usePageNumber from "@/src/store/pageNumberStore";

// functions and type
import { getListItem } from "@/src/utils/useRequest";
import { getTotalPageNum, paginateItems } from "@/src/utils/usePagination";
import { PostProps } from "@/src/utils/types";
import PostListItem from "./PostListItems";

export default function PostList() {
  const router = useRouter();
  const [postList, setPostList] = useState<PostProps[] | null>([]);

  const { currentCategory, changeCurrentCategory } = useCategory();
  const { currentPage, changeCurrentPage, changeTotalPageNumbers } =
    usePageNumber();

  // if you want change item cnt per a page, change this value.
  const itemsPerPage = 6;

  // fetch post list
  const fetchPostList = async (category: string, page: number) => {
    try {
      const data = await getListItem(category);
      if (data) {
        setPostList(paginateItems(data, itemsPerPage, page));
        changeTotalPageNumbers(getTotalPageNum(data, itemsPerPage));

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
    <div className="">
      {/* First, html returns 'Loading' */}
      {/* After loading, if there's no result, api returns null and html returns 'No result' */}
      {postList && postList.length === 0 && (
        <div className="pb-[100px] pr-0 lg:pr-[100px] h-[100vh] flex justify-center items-center">
          {currentCategory === "All" ? "LOADING" : "No Result"}
        </div>
      )}
      {postList && postList.length > 0 && (
        <div className="lg:w-[680px]">
          <PostListItem post={postList} />
        </div>
      )}
      {/* if there's nothing in the __post foler, you get this result. */}
      {!postList && (
        <div className="h-[100vh] flex justify-center items-center">
          Write your first post!
        </div>
      )}
    </div>
  );
}
