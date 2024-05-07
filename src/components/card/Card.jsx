import React from "react";

import styles from "./card.module.css";

import Link from "next/link";
import Image from "next/image";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" layout="fill" className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>10.02.2024 - </span>
          <span className={styles.category}>culture</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veritatis
          molestias eaque amet. Ullam veniam iure, impedit deleniti inventore
          soluta minima exercitationem possimus cum eveniet repellendus eius
          sunt? Voluptatibus repellat quos a neque quidem asperiores amet qui
          obcaecati sapiente autem?
        </p>
        <Link className={styles.link} href="/">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
