import Link from "next/link";
import { PostProps } from "@/src/utils/types";

export default function PostListItem({ post }: { post: PostProps[] }) {
  // text slice function for post preview text
  const sliceText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;

    const words = text.split(" ");
    let currentText = "";

    for (let word of words) {
      if ((currentText + word).length <= maxLength) {
        currentText += word + " ";
      } else {
        break;
      }
    }

    return currentText.trim() + "...";
  };

  return (
    <div className="mt-5">
      {post.map((data: PostProps, index: number) => (
        <Link key={index} href={`/post/${data.id}`}>
          <div className="hover:bg-primary-50 duration-150 w-full lg:w-full lg:h-[220px] flex flex-col justify-between pl-5 pr-12 py-5 border-b">
            <div>
              <div className="text-primary-500 text-sm font-bold">
                {data.category}
              </div>
              <div className="text-xl mt-1 mb-3 font-bold leading-6">
                {data.title}
              </div>
              <div className="text-xs md:text-sm text-zinc-500">
                {data.preview.length < 250
                  ? data.preview
                  : sliceText(data.preview, 250)}
              </div>
            </div>
            <div className="text-xs text-zinc-400 mt-3 lg:mt-0">
              {data.date}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
