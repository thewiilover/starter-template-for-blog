import ArticleList from "@/src/components/main/ArticleList";
import Category from "../src/components/main/Category";
import Profile from "../src/components/main/Profile";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1024px] flex justify-between">
        <div className="w-full lg:w-[680px] pb-[100px]">
          <ArticleList />
        </div>
        <div className="z-[10] hidden lg:inline-block lg:w-[320px] h-[600px] sticky top-[80px] px-5 py-8">
          <Profile />
          <Category />
        </div>
      </div>
    </div>
  );
}
