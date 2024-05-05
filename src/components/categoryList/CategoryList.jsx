import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";

function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.png"
            alt="style"
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link href={`/blog`} className={`${styles.travel} ${styles.category}`}>
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>

        <Link href={`/blog`} className={`${styles.culture} ${styles.category}`}>
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>

        <Link href={`/blog`} className={`${styles.coding} ${styles.category}`}>
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>

        <Link href={`/blog`} className={`${styles.food} ${styles.category}`}>
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
