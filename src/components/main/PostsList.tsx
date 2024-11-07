import Link from "next/link";
import { PostsProps } from "@/app/types";

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
            <div className="hover:bg-blue-50 duration-150 w-[100%] h-[220px] flex flex-col justify-between pl-5 pr-12 py-5 border-b">
              <div>
                <div className="text-blue-500 text-sm font-bold">
                  {data.category}
                </div>
                <div className="text-xl mt-1 mb-3 font-bold leading-6">
                  {data.title}
                </div>
                <div className="text-xs md:text-sm text-zinc-600">
                  {data.preview}
                </div>
              </div>
              <div className="text-xs text-zinc-400">{data.date}</div>
            </div>
          </Link>
        ))
      )}
    </>
  );
}
