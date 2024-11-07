import { PostsProps } from "@/app/types";
import Link from "next/link";

export default function PostsList({ posts }: { posts: PostsProps[] }) {
  return (
    <>
      {posts.length === 0 ? (
        <div className="h-[100vh] flex justify-center items-center">
          No Result
        </div>
      ) : (
        posts.map((data: any, index: number) => (
          <Link key={index} href={`/post/${data.id}`}>
            <div className="w-[100%] h-[220px] flex flex-col justify-between pl-5 pr-12 py-7 border-b">
              <div>
                <div className="text-blue-500 text-sm">{data.category}</div>
                <div className="text-xl md:text-2xl my-2 font-bold">
                  {data.title}
                </div>
                <div className="text-sm md:text-base">{data.preview}</div>
              </div>
              <div className="text-xs text-zinc-400">{data.date}</div>
            </div>
          </Link>
        ))
      )}
    </>
  );
}
