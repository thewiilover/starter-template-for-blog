import useCategory from "@/src/store/categoryStore";
import { categoryNames } from "@/console/category";

export default function Category() {
  const { changeCurrentCategory } = useCategory();
  return (
    <div className="w-full mt-3 px-10 lg:p-3">
      <div className="font-bold text">Category</div>
      {categoryNames.map((name, index) => (
        <div
          key={index}
          onClick={() => changeCurrentCategory(name)}
          className="text-sm pl-2 my-2 hover:cursor-pointer hover:text-blue-500"
        >
          {name}
        </div>
      ))}
    </div>
  );
}
