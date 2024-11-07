import ArticleList from "@/components/main/ArticleList";
import Category from "../components/main/Category";
import Profile from "../components/main/Profile";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px] flex justify-between">
        <div className="w-[900px] pb-[100px]">
          <ArticleList />
        </div>
        <div className="z-[10] w-[300px] h-[600px] sticky top-[80px] px-5 py-8">
          <Profile />
          <Category />
        </div>
      </div>
    </div>
  );
}
