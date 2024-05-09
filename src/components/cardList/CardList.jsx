import { getPosts } from "@/data/data";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import styles from "./cardList.module.css";

async function CardList({ page, cat }) {
  const { posts, count } = await getPosts(page, cat);
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
