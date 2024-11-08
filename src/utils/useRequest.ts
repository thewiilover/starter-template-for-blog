// api function for getting post data

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

export async function getPost(id: number) {
  const res = await fetch(`http://localhost:3000/api/post?id=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  return result;
}
