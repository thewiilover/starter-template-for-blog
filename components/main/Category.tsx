import { categoryList } from "@/custom/category";

export default function Category() {
  return (
    <div className="w-full mt-3 p-5">
      <div className="font-bold text-xl">Category</div>
      {categoryList.map((categoryName, index) => (
        <div key={index} className="text-sm pl-2 my-2">
          {categoryName}
        </div>
      ))}
    </div>
  );
}
