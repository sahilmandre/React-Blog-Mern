import { getCategories } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import styles from "./category.module.css";

async function CategoryList() {
  const dataFetch = await getCategories();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {dataFetch?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt="style"
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
