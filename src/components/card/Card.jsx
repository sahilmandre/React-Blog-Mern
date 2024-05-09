import React from "react";

import styles from "./card.module.css";

import Link from "next/link";
import Image from "next/image";

function Card({ key, item }) {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" layout="fill" className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>10.02.2024 - </span>
          <span className={styles.category}>culture</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc}</p>
        <Link className={styles.link} href="/">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
