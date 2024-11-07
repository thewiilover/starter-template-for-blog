import useCategory from "@/src/store/categoryStore";

export default function Category() {
  const { changeCurrentCategory } = useCategory();
  return (
    <div className="w-full mt-3 px-10 lg:p-3">
      <div className="font-bold text">Category</div>
      {categoryList.map((categoryName, index) => (
        <div
          key={index}
          onClick={() => changeCurrentCategory(categoryName)}
          className="text-sm pl-2 my-2 hover:cursor-pointer hover:text-blue-500"
        >
          {categoryName}
        </div>
      ))}
    </div>
  );
}

const categoryList = ["All", "JavaScript", "TypeScript", "Example"];
