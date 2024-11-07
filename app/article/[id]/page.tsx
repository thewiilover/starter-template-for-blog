"use client";

import { PostsProps } from "@/app/types";
import Profile from "@/src/components/main/Profile";
import MarkDownPost from "@/src/post/MarkDownPost";
import { getPost } from "@/src/utils/useRequest";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Post() {
  const { id } = useParams();
  const [data, setData] = useState<PostsProps | null>(null);

  const fetchList = async (id: number) => {
    try {
      const data = await getPost(id);
      setData(data[0]);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchList(Number(id));
    ``;
  }, []);

  return (
    <div>
      {data ? (
        <div className="pt-7 pb-12">
          <MarkDownPost content={data.content} />
        </div>
      ) : (
        <div className="w-full h-[100vh] pb-[85px] flex justify-center items-center text-xl">
          LOADING
        </div>
      )}
      <div className="border-t py-[70px]">
        <Profile />
      </div>
    </div>
  );
}
