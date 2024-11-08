import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextRequest } from "next/server";
import { PostsProps } from "../../../src/utils/types";

const postsDirectory = "__post";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const selectedId = Number(searchParams.get("id"));

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const blogPost: PostsProps = {
      id: matterResult.data.id,
      title: matterResult.data.title,
      preview: matterResult.data.preview,
      date: matterResult.data.date,
      category: matterResult.data.category,
      content: matterResult.content,
    };

    return blogPost;
  });

  const result = allPostsData.filter((item) => item.id === selectedId);
  return Response.json(result);
}
