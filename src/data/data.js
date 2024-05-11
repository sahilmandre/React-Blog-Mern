export async function getCategories() {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  // console.log(data);
  return data;
}

export async function getPosts(page, cat) {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  // console.log(data);
  return data;
}

export async function getSinglePost(slug) {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export async function commentFetcher(url) {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function handlePostSubmit({ title, value, media }) {
  const res = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      desc: value,
      img: media,
      slug: title,
      catSlug: "test",
    }),
  });

  console.log(res);
}
