export default function Category() {
  return (
    <div className="w-full mt-3 p-10 lg:p-5">
      <div className="font-bold text">Category</div>
      {categoryList.map((categoryName, index) => (
        <div
          key={index}
          className="text-sm pl-2 my-2 hover:cursor-pointer hover:text-blue-500"
        >
          {categoryName}
        </div>
      ))}
    </div>
  );
}

const categoryList = ["All", "JavaScript", "TypeScript"];
