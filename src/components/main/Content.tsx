import PostList from "@/src/components/main/content/PostList";
import CategoryBox from "@/src/components/main/content/CategoryBox";
import Profile from "@/src/components/global/Profile";

export default function Content() {
  return (
    <div className="relative w-full flex justify-center">
      <div className=" w-full lg:w-[1024px] flex justify-between">
        <div className="w-full lg:w-[700px]">
          <PostList />
        </div>
        <div className="hidden lg:block sticky top-[100px] lg:w-[320px] h-[600px] px-5 py-8">
          <Profile />
          <CategoryBox />
        </div>
      </div>
    </div>
  );
}
