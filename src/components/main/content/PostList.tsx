"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// global state management
import useCategory from "@/src/store/categoryStore";

// functions and type
import { getListItem } from "@/src/utils/useRequest";
import { PostProps } from "@/src/utils/types";
import PostListItem from "./PostListItems";

export default function PostList() {
  const router = useRouter();
  const searchParam = useSearchParams();

  const { currentCategory, changeCurrentCategory } = useCategory();

  const isFirstRender = useRef(true);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [postList, setPostList] = useState<PostProps[] | null>([]);
  const [selectedPageNumber, setSelectedPageNumber] = useState<number>(1);

  // fetch post list
  const fetchPostList = async (
    selectedCategory: string,
    selectedPage: number
  ) => {
    try {
      const data = await getListItem(selectedCategory, selectedPage);
      if (data) {
        setPostList(data.paginatedData);
        setPageNumbers(data.totalPage);
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // first init when page is mounted
  useEffect(() => {
    const category = searchParam.get("category") || "All";
    const page = Number(searchParam.get("page")) || 1;
    fetchPostList(category, page);
    setSelectedPageNumber(page);
  }, []);

  // change postList when currentCategory is changed
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setSelectedPageNumber(1);
    fetchPostList(currentCategory, selectedPageNumber);
    router.push(`?category=${currentCategory}&page=${selectedPageNumber}`);
  }, [currentCategory]);

  // change postList when currentPage is changed
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    fetchPostList(currentCategory, selectedPageNumber);
    router.push(`?category=${currentCategory}&page=${selectedPageNumber}`);
  }, [selectedPageNumber]);

  // change postList when popstate is changed
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const handlePopState = () => {
      const targetUrl = window.location.search;
      const params = new URLSearchParams(targetUrl);
      const category = params.get("category") || "All";
      const page = Number(params.get("page")) || 1;
      changeCurrentCategory(category);
      fetchPostList(category, page);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div>
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
      {/* If there's nothing in the __post foler, you get this result. */}
      {!postList && (
        <div className="h-[100vh] flex justify-center items-center">
          Write your first post!
        </div>
      )}
      {/* Page Number */}
      <div className="w-full flex justify-center items-center py-[100px]">
        {pageNumbers.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedPageNumber(item)}
            className={`${
              selectedPageNumber === item
                ? "bg-primary-500 text-primary-100"
                : ""
            } mx-1 w-[30px] h-[30px] flex items-center justify-center text-sm text-center rounded-full`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
