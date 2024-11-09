// api function for getting post data

export async function getListItem(
  selectedCategory: string,
  selectedPage: number
) {
  const res = await fetch(
    `http://localhost:3000/api/listItem?category=${selectedCategory}&page=${String(
      selectedPage
    )}`,
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
