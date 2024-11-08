"use client";

import usePageNumber from "@/src/store/pageNumberStore";

export default function PageNumbers() {
  const { currentPage, totalPageNumbers, changeCurrentPage } = usePageNumber();

  return (
    <div className="w-full flex justify-center items-center py-[100px]">
      {totalPageNumbers.map((item, index) => (
        <button
          key={index}
          onClick={() => changeCurrentPage(Number(item))}
          className={`${
            currentPage === item ? "bg-primary-500 text-primary-100" : ""
          } mx-1 w-[30px] h-[30px] flex items-center justify-center text-sm text-center rounded-full duration-100`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
