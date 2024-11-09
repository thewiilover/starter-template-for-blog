import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { type NextRequest } from "next/server";
import { ListItemProps } from "@/src/utils/types";
import { getTotalPageNum, paginateItems } from "@/src/utils/usePagination";

const postsDirectory = "__post";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const selectedCategory = searchParams.get("category");
  const selectedPage = searchParams.get("page");

  // if you want change item cnt per a page, change this value.
  const itemsPerPage = 6;

  const fileNameList = fs.readdirSync(postsDirectory);

  const allPostsData = fileNameList.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    const blogPost: ListItemProps = {
      id: matterResult.data.id,
      title: matterResult.data.title,
      preview: matterResult.data.preview,
      date: matterResult.data.date,
      category: matterResult.data.category,
    };

    return blogPost;
  });

  if (allPostsData.length === 0) return null;

  if (selectedCategory === "All") {
    const result = allPostsData.sort((a, b) => b.id - a.id);
    const totalPage = getTotalPageNum(result, itemsPerPage);
    const paginatedData = paginateItems(
      result,
      itemsPerPage,
      Number(selectedPage)
    );
    return Response.json({
      paginatedData,
      totalPage,
    });
  } else {
    const filtedData = allPostsData.filter(
      (item) => item.category === selectedCategory
    );
    const result = filtedData.sort((a, b) => b.id - a.id);
    const totalPage = getTotalPageNum(result, itemsPerPage);
    const paginatedData = paginateItems(
      result,
      itemsPerPage,
      Number(selectedPage)
    );
    return Response.json({
      paginatedData,
      totalPage,
    });
  }
}
