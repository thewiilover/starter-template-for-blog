export async function getListItem(allPostsData: string) {
  const res = await fetch(
    `http://localhost:3000/api/listItem?category=${allPostsData}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await res.json();
  return result;
}

export async function getArticle(id: number) {
  const res = await fetch(`http://localhost:3000/api/article?id=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  return result;
}
