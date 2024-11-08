"use client";

// global state management
import useCategory from "@/src/store/categoryStore";

// your category list
import { categoryNames } from "@/custom/category";

export default function Category() {
  const { currentCategory, changeCurrentCategory } = useCategory();
  return (
    <div className="w-full mt-3 px-10 lg:p-3">
      <div className="font-bold text">Category</div>
      {categoryNames.map((name, index) => (
        <div
          key={index}
          onClick={() => changeCurrentCategory(name)}
          className={`${
            currentCategory === name ? "text-primary-500 underline" : ""
          } text-sm pl-2 my-2 hover:cursor-pointer hover:text-primary-500`}
        >
          {name}
        </div>
      ))}
    </div>
  );
}
