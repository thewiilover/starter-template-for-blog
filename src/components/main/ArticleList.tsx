"use client";

import { ArticlesProps } from "@/app/types";
import { getListItem } from "@/src/utils/useRequest";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ArticleList() {
  const [articles, setArticles] = useState<ArticlesProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchList = async (category: string) => {
      try {
        const data = await getListItem(category);
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchList(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      {articles.length === 0 ? (
        <div>loading</div>
      ) : (
        articles.map((data: any, index: number) => (
          <Link key={index} href={`/article/${data.id}`}>
            <div className="w-[100%] h-[220px] flex flex-col justify-between pl-5 pr-12 py-7 border-b">
              <div>
                <div className="text-blue-500 text-sm">{data.category}</div>
                <div className="text-xl md:text-2xl my-2 font-bold">
                  {data.title}
                </div>
                <div className="text-sm md:text-base">{data.preview}</div>
              </div>
              <div className="text-xs text-zinc-400">{data.date}</div>
            </div>{" "}
          </Link>
        ))
      )}
    </>
  );
}

const dummydata: any = [
  {
    id: 1,
    title: "First Post",
    preview:
      "This is the first post preview. It gives an overview of the topic at hand.",
    date: "2024-08-01",
    category: "Introduction",
  },
  {
    id: 2,
    title: "Second Post",
    preview:
      "The second post delves deeper into the specifics. It provides more detailed information.",
    date: "2024-08-02",
    category: "Analysis",
  },
  {
    id: 3,
    title: "Third Post",
    preview:
      "In this third post, we explore different aspects. The preview expands on earlier discussions.",
    date: "2024-08-03",
    category: "Exploration",
  },
  {
    id: 4,
    title: "Fourth Post",
    preview:
      "This post presents new findings. It's a continuation of our ongoing research.",
    date: "2024-08-04",
    category: "Research",
  },
  {
    id: 5,
    title: "Fifth Post",
    preview:
      "Here, we summarize key points. This post is a recap of what's been discussed so far.",
    date: "2024-08-05",
    category: "Summary",
  },
  {
    id: 6,
    title: "Sixth Post",
    preview:
      "The sixth post brings a new perspective. It introduces fresh ideas and viewpoints.",
    date: "2024-08-06",
    category: "Insight",
  },
  {
    id: 7,
    title: "Seventh Post",
    preview:
      "In this post, we review related literature. It provides a comprehensive look at existing studies.",
    date: "2024-08-07",
    category: "Review",
  },
  {
    id: 8,
    title: "Eighth Post",
    preview:
      "The final post concludes our series. It wraps up the discussions with final thoughts.",
    date: "2024-08-08",
    category: "Conclusion",
  },
];
