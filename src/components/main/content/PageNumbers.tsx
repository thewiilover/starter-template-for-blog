"use client";

import usePageNumber from "@/src/store/pageNumberStore";
import { useEffect, useState } from "react";

export default function PageNumbers() {
  const { totalPageNumbers, changeCurrentPage } = usePageNumber();
  const [selectedPage, setSelectedPage] = useState<number | null>(null);

  // useEffect(() => {
  //   const savedPage = Number(localStorage.getItem("page")) || 1;
  //   changeCurrentPage(savedPage);
  //   setSelectedPage(savedPage);
  // }, []);

  // const handlePageNumbers = (pageNumber: number) => {
  //   changeCurrentPage(pageNumber);
  //   setSelectedPage(pageNumber);
  //   localStorage.setItem("page", String(pageNumber));
  // };

  return (
    <div className="w-full flex justify-center items-center py-[100px]">
      {totalPageNumbers.map((item, index) => (
        <button
          key={index}
          // onClick={() => handlePageNumbers(item)}
          className={`${
            selectedPage === item ? "bg-primary-500 text-primary-100" : ""
          } mx-1 w-[30px] h-[30px] flex items-center justify-center text-sm text-center rounded-full duration-100`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
