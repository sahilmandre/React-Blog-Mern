import { getPosts } from "@/data/data";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

// export async function getPostss(page) {
//   const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const data = await res.json();
//   console.log(data);
//   return data;
// }

async function CardList({ page }) {
  const { posts, count } = await getPosts(page);
  // const dataFetch = await getPostss(page);

  const POST_PER_PAGE = 2;

  const hasPrevious = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.map((item) => {
          return <Card item={item} key={item._id} />;
        })}
      </div>
      <Pagination page={page} hasPrevious={hasPrevious} hasNext={hasNext} />
    </div>
  );
}

export default CardList;
