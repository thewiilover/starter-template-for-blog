import Link from "next/link";

export default function ArticleList() {
  return (
    <>
      {dummydata.map((data: any, index: number) => (
        <Link href={`/article/${data.id}`}>
          <div
            key={index}
            className="h-[240px] flex flex-col justify-between px-6 py-8 border-b"
          >
            <div>
              <div className="text-blue-500 text-sm mb-3">{data.category}</div>
              <div className="text-3xl mb-2">{data.title}</div>
              <div>{data.preview}</div>
            </div>
            <div className="text-sm text-zinc-400">{data.date}</div>
          </div>{" "}
        </Link>
      ))}
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
