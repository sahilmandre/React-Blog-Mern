import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

function MenuPosts({ withImage }) {
  return (
    <>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imgContainer}>
              <Image
                src="/p1.jpeg"
                alt="post1"
                layout="fill"
                className={styles.img}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, modi?
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Johm Smith</span>
              <span className={styles.date}> - 10.02.2024 </span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imgContainer}>
              <Image
                src="/p1.jpeg"
                alt="post1"
                layout="fill"
                className={styles.img}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Travel</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, modi?
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Johm Smith</span>
              <span className={styles.date}> - 10.02.2024 </span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          {withImage && (
            <div className={styles.imgContainer}>
              <Image
                src="/p1.jpeg"
                alt="post1"
                layout="fill"
                className={styles.img}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, modi?
            </h3>
            <div className={styles.details}>
              <span className={styles.username}>Johm Smith</span>
              <span className={styles.date}> - 10.02.2024 </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MenuPosts;
