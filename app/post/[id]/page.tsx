"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// components
import Profile from "@/src/components/global/Profile";
import MarkDownPost from "@/src/post/MarkDownPost";

// function and type
import { getPost } from "@/src/utils/useRequest";
import { PostsProps } from "@/app/types";

export default function Post() {
  const { id } = useParams();
  const [data, setData] = useState<PostsProps | null>(null);

  // fetch post content by post id
  useEffect(() => {
    const fetchList = async (id: number) => {
      try {
        const data = await getPost(id);
        setData(data[0]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchList(Number(id));
  }, []);

  return (
    <>
      {/* Post  */}
      {data ? (
        <div className="pt-7 pb-12">
          <MarkDownPost content={data.content} />
        </div>
      ) : (
        <div className="w-full h-[100vh] pb-[85px] flex justify-center items-center text-xl">
          LOADING
        </div>
      )}
      {/* Profile under your post */}
      <div className="border-t w-full py-[70px] flex justify-center">
        <div className="w-full lg:w-[300px]">
          <Profile />
        </div>
      </div>
    </>
  );
}
