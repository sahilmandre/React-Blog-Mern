import React from "react";

import styles from "./card.module.css";

import Link from "next/link";
import Image from "next/image";

function Card({ key, item }) {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imgContainer}>
          <Image src={item.img} alt="" layout="fill" className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 80)}</p>
        <Link className={styles.link} href={`/posts/${item.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
